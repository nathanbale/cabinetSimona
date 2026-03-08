import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineHealthAndSafety, MdOutlineLocalHospital, MdOutlineMedicalServices } from 'react-icons/md'
import { fadeInUp, stagger } from '../utils/motion'

const WA_NUMBER = '40744319111'
const WA_MSG = encodeURIComponent('Bună ziua! Aș dori să mă programez pentru o consultație.')

const previewCards = [
  {
    icon: <MdOutlineLocalHospital size={22} className="text-blue-600" />,
    title: 'Scoatere fire & capse',
    desc: 'Proceduri sterile, fără durere',
    price: 'de la 60 lei',
  },
  {
    icon: <MdOutlineMedicalServices size={22} className="text-blue-600" />,
    title: 'Pansamente',
    desc: 'Simple și complexe, materiale sterile',
    price: 'de la 50 lei',
  },
  {
    icon: <MdOutlineHealthAndSafety size={22} className="text-blue-600" />,
    title: 'Îngrijire plăgi cronice',
    desc: 'Ulcere, plăgi dificile, monitorizare',
    price: 'de la 120 lei',
  },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-8 pb-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(37,99,235,0.06) 0%, transparent 70%)',
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left — 60% */}
          <motion.div
            className="md:col-span-3"
            initial="hidden"
            animate="visible"
            variants={stagger(0.12)}
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
                Cabinet Medical · Satu Mare
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] hyphens-auto mb-6"
            >
              Pansamente și îngrijire
              <br />
              <span className="text-blue-600">postoperatorie în Satu Mare.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg"
            >
              Cabinet de asistență medicală specializat în îngrijirea plăgilor, pansamente și proceduri
              postoperatorii. Programări rapide, materiale sterile, protocoale stricte de siguranță.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:0744319111"
                className="flex items-center justify-center gap-2 bg-gray-900 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-gray-800 transition-colors text-sm"
              >
                <FaPhone size={15} />
                Sună acum — +40 744 319 111
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-green-600 transition-colors text-sm"
              >
                <FaWhatsapp size={17} />
                Programare WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* Right — 40% */}
          <motion.div
            className="md:col-span-2 flex flex-col gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            {previewCards.map((card, i) => (
              <motion.div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm"
                style={{
                  transform: `translateY(${i * -6}px)`,
                  willChange: 'transform',
                }}
                whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start gap-3">
                  <div className="bg-blue-50 rounded-lg p-2 flex-shrink-0">{card.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-semibold text-gray-900 text-sm">{card.title}</p>
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full whitespace-nowrap">
                        {card.price}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
