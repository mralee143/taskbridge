"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Phone } from "lucide-react";

// WhatsApp Business Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
  </svg>
);

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  // Your WhatsApp number (replace with your actual number)
  const whatsappNumber = "+1234567890"; // Replace with your WhatsApp number
  
  const predefinedMessages = [
    "Hi! I'm interested in your services",
    "Can you tell me about your pricing?",
    "I need help with web development",
    "I want to know about digital marketing",
    "Can we schedule a consultation?"
  ];

  const handleSendMessage = (msg?: string) => {
    const messageToSend = msg || message;
    if (messageToSend.trim()) {
      const encodedMessage = encodeURIComponent(messageToSend);
      const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      setMessage("");
      setIsOpen(false);
    }
  };

  const handleCall = () => {
    window.open(`tel:${whatsappNumber}`, '_self');
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, type: "spring", stiffness: 200 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-16 h-16 bg-[#25D366] hover:bg-[#20b858] rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
        >
          {/* Pulse animation */}
          <motion.div
            className="absolute inset-0 bg-[#25D366] rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Icon */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <X className="w-7 h-7 text-white" />
            ) : (
              <WhatsAppIcon className="w-7 h-7 text-white" />
            )}
          </motion.div>

          {/* Notification badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center"
          >
            <span className="text-white text-xs font-bold">1</span>
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 w-80 max-w-[calc(100vw-3rem)] z-50"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Header */}
              <div className="bg-[#25D366] p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">TaskBridge Support</h3>
                    <p className="text-sm text-white/80">Typically replies instantly</p>
                  </div>
                  <div className="flex gap-2">
                    <motion.button
                      onClick={handleCall}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      onClick={() => setIsOpen(false)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="p-4 max-h-80 overflow-y-auto bg-gray-50">
                {/* Welcome message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-4"
                >
                  <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                    <p className="text-gray-800 text-sm">
                      👋 Hi there! Welcome to TaskBridge. How can we help you today?
                    </p>
                    <span className="text-xs text-gray-500 mt-1 block">Just now</span>
                  </div>
                </motion.div>

                {/* Quick replies */}
                <div className="space-y-2">
                  <p className="text-xs text-gray-600 font-medium">Quick replies:</p>
                  {predefinedMessages.map((msg, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      onClick={() => handleSendMessage(msg)}
                      className="block w-full text-left p-2 text-sm bg-white hover:bg-[#25D366]/10 rounded-lg border border-gray-200 hover:border-[#25D366]/30 transition-all duration-200"
                    >
                      {msg}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-4 bg-white border-t border-gray-200">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366]/20 focus:border-[#25D366] text-sm"
                  />
                  <motion.button
                    onClick={() => handleSendMessage()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={!message.trim()}
                    className="px-4 py-2 bg-[#25D366] hover:bg-[#20b858] disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-200 flex items-center gap-1"
                  >
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  We'll respond as soon as possible
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}