import { motion } from 'framer-motion'
import { FaWhatsapp, FaCheck } from 'react-icons/fa'
import { fadeInUp, stagger } from '../utils/motion'

const WA_NUMBER = '40744319111'

const packages = [
  {
    name: 'Recuperare Postoperatorie',
    price: '250 lei',
    desc: 'Ideal după intervenții chirurgicale minore.',
    items: [
      'Scoatere fire sau capse',
      '2 schimburi de pansament',
      'Verificare evoluție plagă',
      'Sfaturi post-procedură',
    ],
    recommended: false,
    waMsg: 'Bună ziua! Aș dori să mă programez pentru pachetul Recuperare Postoperatorie.',
  },
  {
    name: 'Îngrijire Plagă Acută',
    price: '320 lei',
    desc: 'Pentru plăgi proaspete care necesită îngrijire continuă.',
    items: [
      'Pansament complex inițial',
      '3 schimburi de pansament',
      'Dezinfecție și monitorizare',
      'Consultație la fiecare vizită',
      'Urgențe — răspuns rapid',
    ],
    recommended: true,
    waMsg: 'Bună ziua! Aș dori să mă programez pentru pachetul Îngrijire Plagă Acută.',
  },
  {
    name: 'Îngrijire Plagă Cronică',
    price: '480 lei',
    desc: 'Tratament de durată pentru ulcere și plăgi dificile.',
    items: [
      'Evaluare completă inițială',
      '4 vizite de îngrijire specializată',
      'Materiale premium sterile',
      'Plan de tratament personalizat',
      'Urmărire săptămânală',
    ],
    recommended: false,
    waMsg: 'Bună ziua! Aș dori să mă programez pentru pachetul Îngrijire Plagă Cronică.',
  },
]

export default function Packages() {
  return (
    <section id="pachete" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-14"
        >
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            Pachete
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Pachete de îngrijire
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Soluții complete, la prețuri transparente. Alegeți pachetul potrivit situației dumneavoastră.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger(0.12)}
        >
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`relative bg-white rounded-2xl p-7 flex flex-col transition-shadow duration-200 ${
                pkg.recommended
                  ? 'border-2 border-blue-600 shadow-2xl shadow-blue-100/60'
                  : 'border border-gray-200 shadow-sm hover:shadow-md'
              }`}
            >
              {pkg.recommended && (
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(37,99,235,0.03) 0%, transparent 60%)',
                  }}
                />
              )}

              {pkg.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-wide uppercase">
                    Recomandat
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-bold text-gray-900 text-lg mb-1">{pkg.name}</h3>
                <p className="text-gray-500 text-sm">{pkg.desc}</p>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-extrabold text-gray-900 tabular-nums">{pkg.price}</span>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {pkg.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <FaCheck
                      size={13}
                      className={`mt-0.5 flex-shrink-0 ${pkg.recommended ? 'text-blue-600' : 'text-green-500'}`}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <motion.a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(pkg.waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-[background-color] ${
                  pkg.recommended
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                <FaWhatsapp size={16} />
                Programare
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
