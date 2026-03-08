import { motion } from 'framer-motion'
import { MdOutlineVerified, MdOutlineShield, MdOutlineTimer, MdOutlineLocationOn } from 'react-icons/md'
import { fadeInUp, stagger } from '../utils/motion'

const reasons = [
  {
    icon: <MdOutlineVerified size={32} />,
    title: 'Experiență dovedită',
    desc: 'Asistent medical cu experiență clinică bogată, format în spitale și cabinete de specialitate din România.',
  },
  {
    icon: <MdOutlineShield size={32} />,
    title: 'Sterilitate maximă',
    desc: 'Materiale sterile de unică folosință la fiecare procedură. Protocoale stricte de igienă și dezinfecție.',
  },
  {
    icon: <MdOutlineTimer size={32} />,
    title: 'Programări rapide',
    desc: 'Fără liste lungi de așteptare. Confirmăm programarea în aceeași zi, adesea în câteva ore.',
  },
  {
    icon: <MdOutlineLocationOn size={32} />,
    title: 'Locație centrală',
    desc: 'Str. Cloșca nr. 62, Satu Mare. Accesibil cu mașina, transport public și din tot orașul.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-14"
        >
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            De ce noi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Îngrijire de calitate, mereu
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Alegem să facem fiecare procedură cu responsabilitate și profesionalism.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger(0.1)}
        >
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="text-center p-6 rounded-2xl bg-gray-50 border border-transparent
                         hover:bg-white hover:border-blue-100 hover:shadow-sm
                         transition-[background-color,border-color,box-shadow] duration-200 group"
            >
              <div className="flex justify-center mb-4">
                <div className="text-blue-600 p-3 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors duration-200">
                  {r.icon}
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{r.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
