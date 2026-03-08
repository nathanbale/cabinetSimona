import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const WA_NUMBER = '40744319111'
const WA_MSG = encodeURIComponent('Bună ziua! Aș dori să mă programez pentru o consultație.')

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-xl shadow-lg whitespace-nowrap"
          >
            Scrie-ne pe WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Scrie-ne pe WhatsApp"
        animate={{
          boxShadow: [
            '0 0 0 0px rgba(34,197,94,0.4)',
            '0 0 0 10px rgba(34,197,94,0)',
          ],
        }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
        style={{ willChange: 'box-shadow, transform' }}
      >
        <FaWhatsapp size={28} />
      </motion.a>
    </div>
  )
}
