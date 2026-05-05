import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Bot, User, Loader2, Minimize2, Maximize2 } from "lucide-react";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  role: "user" | "model";
  text: string;
}

export default function MilaAi() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", text: "Hey there! 👋 Thanks for reaching out to Mila Plastics. I'm here to help you find the perfect trigger system for your project. What are you looking to build today? 🚀" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          ...messages.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
          { role: "user", parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: `You are a friendly, helpful representative from the Mila Plastics engineering team. 
          Speak like a real person who deeply understands our industry and cares about the user's project.

          About Mila Plastics:
          - We specialize in high-performance trigger sprayers: Classic Stream (industrial), Aero-Mist (fine distribution), and Foam-Master (detergents).
          - Our facility in Quzhou City, China, runs 120 injection molding machines with a daily capacity of 550,000 units.
          - We maintain extremely high quality standards (defect rate <0.01%) using 100% optical inspection.
          - We ship globally to over 45 countries.

          Style Guidelines:
          - KEEP IT SHORT. People are busy! ⚡
          - USE EMOJIS. It adds a human touch. 😊🚀
          - BE SALES-ORIENTED. Always ask questions that nudge the user to find a solution or request a quote. 📈
          - Speak naturally. Use "we" and "I".
          - If you're unsure about a detail, point them to our sales office at +8618567413851.
          - Example sales nudges: "What volume are you looking to produce?" or "Would you like a technical spec sheet for that model?"`,
          temperature: 0.7,
        },
      });

      const aiResponse = response.text || "I'm sorry, I encountered an error processing that request. Please try again or contact our technical support.";
      setMessages((prev) => [...prev, { role: "model", text: aiResponse }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages((prev) => [...prev, { role: "model", text: "I'm having trouble connecting to my central processing unit. Please check your connection or try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleOpen = () => setIsOpen(!isOpen);
  const toggleMinimize = () => setIsMinimized(!isMinimized);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? "64px" : "min(500px, 70vh)",
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-white border border-slate-200 shadow-2xl rounded-2xl flex flex-col overflow-hidden mb-4 w-[calc(100vw-2rem)] sm:w-[380px]"
          >
            {/* Header */}
            <div className="bg-slate-900 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0066FF] flex items-center justify-center text-white">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-black uppercase tracking-widest">MilaAi</h4>
                  <div className="flex items-center gap-1.5 leading-none">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">System Active</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={toggleMinimize} className="text-slate-400 hover:text-white transition-colors">
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
                <button onClick={toggleOpen} className="text-slate-400 hover:text-white transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Content */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: msg.role === "user" ? 10 : -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`flex gap-2 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                        <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-1 ${msg.role === "user" ? "bg-slate-200" : "bg-[#0066FF] text-white"}`}>
                          {msg.role === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                        </div>
                        <div className={`p-3 rounded-2xl text-sm leading-relaxed ${msg.role === "user" ? "bg-slate-900 text-white rounded-tr-none" : "bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm"}`}>
                          {msg.text}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm">
                        <Loader2 className="w-4 h-4 animate-spin text-[#0066FF]" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-slate-100 bg-white">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSend()}
                      placeholder="Ask about our trigger systems..."
                      className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-[#0066FF] transition-colors"
                    />
                    <button
                      onClick={handleSend}
                      disabled={isLoading || !input.trim()}
                      className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-slate-800 transition-colors disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="mt-2 text-[8px] text-slate-400 font-bold uppercase tracking-[0.2em] text-center">
                    MilaAi Processing Core • Engineering Support
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleOpen}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-colors ${isOpen ? "bg-white text-slate-900 border border-slate-200" : "bg-[#0066FF] text-white"}`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}
