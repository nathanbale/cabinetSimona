import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import {
  MdOutlineLocationOn,
  MdOutlinePhone,
  MdOutlineWhatsapp,
  MdOutlineSchedule,
} from 'react-icons/md'
import { fadeInUp, stagger } from '../utils/motion'

const WA_NUMBER = '40744319111'
const WA_MSG = encodeURIComponent('Bună ziua! Aș dori să mă programez pentru o consultație.')

const infoCards = [
  {
    icon: <MdOutlineLocationOn size={22} />,
    label: 'Adresă',
    value: 'Str. Cloșca nr. 62\nSatu Mare, România',
  },
  {
    icon: <MdOutlinePhone size={22} />,
    label: 'Telefon',
    value: '+40 744 319 111',
    href: 'tel:0744319111',
  },
  {
    icon: <MdOutlineWhatsapp size={22} />,
    label: 'WhatsApp',
    value: '+40 744 319 111',
    href: `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`,
    external: true,
  },
  {
    icon: <MdOutlineSchedule size={22} />,
    label: 'Program',
    value: 'L–V: 08:00–17:00\nS: 09:00–13:00 · D: Închis',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-14"
        >
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Programați-vă astăzi
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Sunați sau scrieți pe WhatsApp — confirmăm în aceeași zi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Info cards */}
          <motion.div
            className="grid sm:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger(0.1)}
          >
            {infoCards.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white border border-gray-200 rounded-2xl p-5
                           hover:border-blue-200 transition-[border-color] duration-200"
              >
                <div className="text-blue-600 mb-2">{card.icon}</div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                  {card.label}
                </p>
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.external ? '_blank' : undefined}
                    rel={card.external ? 'noopener noreferrer' : undefined}
                    className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors whitespace-pre-line"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-gray-900 whitespace-pre-line">{card.value}</p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger(0.15)}
          >
            <motion.a
              variants={fadeInUp}
              whileTap={{ scale: 0.98 }}
              href="tel:0744319111"
              className="flex items-center justify-center gap-3 bg-gray-900 text-white font-bold text-lg px-8 py-5 rounded-xl hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20"
            >
              <FaPhone size={20} />
              Sună acum — +40 744 319 111
            </motion.a>

            <motion.a
              variants={fadeInUp}
              whileTap={{ scale: 0.98 }}
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 text-white font-bold text-lg px-8 py-5 rounded-xl hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20"
            >
              <FaWhatsapp size={24} />
              Programare pe WhatsApp
            </motion.a>

            <p className="text-center text-xs text-gray-400 mt-2">
              Răspundem de luni până sâmbătă · Confirmare în aceeași zi
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
