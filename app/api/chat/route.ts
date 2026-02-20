import {
  consumeStream,
  convertToModelMessages,
  streamText,
  UIMessage,
  tool,
} from 'ai'
import { z } from 'zod'

export const maxDuration = 30

// Mock product database
const mockProducts = [
  {
    id: '1',
    title: 'Elegant Gold Bracelet',
    price: 899,
    category: 'jewelry',
    description: 'Premium 18K gold bracelet with diamond accents',
  },
  {
    id: '2',
    title: 'Classic Leather Watch',
    price: 1299,
    category: 'watches',
    description: 'Swiss movement leather watch with sapphire crystal',
  },
  {
    id: '3',
    title: 'Designer Sunglasses',
    price: 399,
    category: 'sunglasses',
    description: 'UV protection designer sunglasses',
  },
  {
    id: '4',
    title: 'Premium Leather Bag',
    price: 599,
    category: 'bags',
    description: 'Handcrafted Italian leather shoulder bag',
  },
]

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const result = streamText({
    model: 'openai/gpt-5',
    system: `You are LuxeAccess, a premium accessories shop AI assistant. You help customers find the perfect accessories through product recommendations, answer questions about our products, and provide excellent customer support. Be friendly, helpful, and knowledgeable about luxury accessories. When customers describe what they're looking for, recommend products from our catalog. Always suggest exploring our full shop for more options.`,
    messages: await convertToModelMessages(messages),
    tools: {
      searchProducts: tool({
        description: 'Search for products by category or keywords to recommend to the customer',
        inputSchema: z.object({
          category: z.enum(['jewelry', 'watches', 'bags', 'sunglasses']).optional(),
          keywords: z.string().optional(),
        }),
        execute: async ({ category, keywords }) => {
          let filtered = mockProducts

          if (category) {
            filtered = filtered.filter(p => p.category === category)
          }

          if (keywords) {
            const lowerKeywords = keywords.toLowerCase()
            filtered = filtered.filter(
              p =>
                p.title.toLowerCase().includes(lowerKeywords) ||
                p.description.toLowerCase().includes(lowerKeywords)
            )
          }

          return {
            products: filtered.map(p => ({
              id: p.id,
              title: p.title,
              price: p.price,
              category: p.category,
              description: p.description,
            })),
            count: filtered.length,
          }
        },
      }),

      getProductDetails: tool({
        description: 'Get detailed information about a specific product',
        inputSchema: z.object({
          productId: z.string().describe('The ID of the product'),
        }),
        execute: async ({ productId }) => {
          const product = mockProducts.find(p => p.id === productId)
          if (!product) {
            return { error: 'Product not found' }
          }
          return {
            ...product,
            inStock: true,
            rating: 4.8,
            reviews: 128,
            specifications: {
              material: 'Premium Material',
              warranty: '2 years',
              originCountry: 'Switzerland/Italy',
            },
          }
        },
      }),

      getProductRecommendations: tool({
        description: 'Get personalized product recommendations based on customer preferences',
        inputSchema: z.object({
          style: z.string().optional().describe('Customer style preference'),
          budget: z.number().optional().describe('Budget in USD'),
          occasion: z.string().optional().describe('Occasion for the accessory'),
        }),
        execute: async ({ style, budget, occasion }) => {
          let recommendations = mockProducts

          if (budget) {
            recommendations = recommendations.filter(p => p.price <= budget)
          }

          // Simulate recommendation logic
          const scored = recommendations.map(p => ({
            ...p,
            matchScore: Math.random() * 100,
          }))

          return {
            recommendations: scored
              .sort((a, b) => b.matchScore - a.matchScore)
              .slice(0, 3)
              .map(({ matchScore, ...p }) => p),
          }
        },
      }),
    },
    abortSignal: req.signal,
  })

  return result.toUIMessageStreamResponse({
    originalMessages: messages,
    onFinish: async ({ messages: allMessages, isAborted }) => {
      if (isAborted) return
      // Save chat history to database if needed
      // await saveChatHistory({ userId, messages: allMessages })
    },
    consumeSseStream: consumeStream,
  })
}
