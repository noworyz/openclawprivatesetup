'use client'

import { useState } from 'react'
import { MessageCircle, Mail, X, Send, Phone } from 'lucide-react'

const CONTACT_EMAIL = 'tavleen@openclawprivatesetup.com' // Update with real email

export function ContactButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Contact Options */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-2xl shadow-lg border border-light-gray overflow-hidden animate-in slide-in-from-bottom-4 duration-200">
          <div className="p-4 bg-deep-navy text-white">
            <h3 className="font-semibold">Get in touch</h3>
            <p className="text-sm text-muted-gray">We typically respond within an hour</p>
          </div>
          <div className="p-2">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=OpenClaw Private Setup Inquiry`}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-off-white transition-colors"
            >
              <div className="w-10 h-10 bg-warm-gold/10 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-warm-gold" />
              </div>
              <div>
                <p className="font-medium text-deep-navy">Email Us</p>
                <p className="text-sm text-slate">Get a response within 24h</p>
              </div>
            </a>
            <a
              href="https://t.me/noworyz87"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-off-white transition-colors"
            >
              <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                <Send className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="font-medium text-deep-navy">Telegram</p>
                <p className="text-sm text-slate">Chat instantly</p>
              </div>
            </a>
            <a
              href="https://wa.me/17815395566?text=Hi%2C%20I%27m%20interested%20in%20OpenClaw%20Private%20Setup"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-off-white transition-colors"
            >
              <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="font-medium text-deep-navy">WhatsApp</p>
                <p className="text-sm text-slate">Message us on WhatsApp</p>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ${
          isOpen
            ? 'bg-slate text-white rotate-0'
            : 'bg-warm-gold text-deep-navy hover:bg-gold-hover hover:scale-105'
        }`}
        aria-label={isOpen ? 'Close contact options' : 'Open contact options'}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  )
}
