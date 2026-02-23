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
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-8 flex flex-col">
        {/* Chat Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">هوشا</h1>
          <p className="text-muted-foreground">اگه یه مشاور برای انتخاب محصولت نیاز داری از هوشا بپرس</p>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto mb-6 space-y-4 rounded-xl glass-lg p-6">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="text-5xl mb-4">👋</div>
              <h2 className="text-2xl font-bold mb-2">به متخصص استایل خوش اومدی!</h2>
              <p className="text-muted-foreground max-w-sm">
                من مشاور محصول هستم و میتونم بهت برای انتخاب استایل کمک کنم
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
                      ? 'glass-lg text-foreground'
                      : 'bg-primary/20 text-foreground border border-primary/30'
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
                        <div key={index} className="text-xs text-muted my-2">
                          <p className="font-semibold">جستجوی محصول...</p>
                        </div>
                      )
                    }
                    if (part.type === 'tool-result') {
                      return (
                        <div key={index} className="text-xs text-muted mt-2 pt-2 border-t border-glass-border">
                          <p className="font-semibold">محصول پیدا شد</p>
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
                <Loader className="w-4 h-4 animate-spin text-primary" />
                <span className="text-sm text-muted">درحال فکر کردن...</span>
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
            placeholder="هرسوالی داری از اینجا بپرس..."
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            className="flex-1 glass rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="glass-lg rounded-lg px-6 py-3 text-foreground hover:bg-glass-border transition-all disabled:opacity-50 flex items-center gap-2 font-semibold"
          >
            {/* <span className="hidden sm:inline">ارسال</span> */}
            <Send className="w-4 h-4 -rotate-135" />
          </button>
        </form>
      </main>

      <Footer />
    </div>
  )
}
