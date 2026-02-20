'use client'

import { useState } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import Header from '@/components/store/Header'
import Footer from '@/components/store/Footer'
import { Send, Loader } from 'lucide-react'

export default function Chat() {
  const [input, setInput] = useState('')
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  })

  const isLoading = status === 'streaming' || status === 'submitted'

  return (
    <div className="min-h-screen flex flex-col bg-color-background">
      <Header />
      
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-8 flex flex-col">
        {/* Chat Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">LuxeAccess AI Assistant</h1>
          <p className="text-color-muted-foreground">Get personalized product recommendations and customer support</p>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto mb-6 space-y-4 rounded-xl glass-lg p-6">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="text-5xl mb-4">👋</div>
              <h2 className="text-2xl font-bold mb-2">Welcome to LuxeAccess!</h2>
              <p className="text-color-muted-foreground max-w-sm">
                I'm your AI shopping assistant. Ask me about our accessories, get recommendations, or ask questions about our products!
              </p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
              >
                <div
                  className={`max-w-sm lg:max-w-md px-4 py-3 rounded-lg ${
                    message.role === 'user'
                      ? 'glass-lg text-color-foreground'
                      : 'bg-color-primary/20 text-color-foreground border border-color-primary/30'
                  }`}
                >
                  {message.parts.map((part, index) => {
                    if (part.type === 'text') {
                      return (
                        <p key={index} className="text-sm leading-relaxed">
                          {part.text}
                        </p>
                      )
                    }
                    if (part.type === 'tool-call') {
                      return (
                        <div key={index} className="text-xs text-color-muted my-2">
                          <p className="font-semibold">Searching for products...</p>
                        </div>
                      )
                    }
                    if (part.type === 'tool-result') {
                      return (
                        <div key={index} className="text-xs text-color-muted mt-2 pt-2 border-t border-color-glass-border">
                          <p className="font-semibold">Products found</p>
                        </div>
                      )
                    }
                    return null
                  })}
                </div>
              </div>
            ))
          )}

          {isLoading && (
            <div className="flex justify-start">
              <div className="glass-lg px-4 py-3 rounded-lg flex items-center gap-2">
                <Loader className="w-4 h-4 animate-spin text-color-primary" />
                <span className="text-sm text-color-muted">Assistant is thinking...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            if (!input.trim() || isLoading) return
            sendMessage({ text: input })
            setInput('')
          }}
          className="flex gap-3"
        >
          <input
            value={input}
            placeholder="Ask about accessories, get recommendations..."
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            className="flex-1 glass rounded-lg px-4 py-3 text-color-foreground placeholder-color-muted focus:outline-none focus:ring-2 focus:ring-color-primary transition-all disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="glass-lg rounded-lg px-6 py-3 text-color-foreground hover:bg-color-glass-border transition-all disabled:opacity-50 flex items-center gap-2 font-semibold"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Send</span>
          </button>
        </form>
      </main>

      <Footer />
    </div>
  )
}
