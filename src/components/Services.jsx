import { motion } from 'framer-motion'
import {
  MdOutlineContentCut,
  MdOutlineLocalHospital,
  MdOutlineMedicalServices,
  MdOutlineHealthAndSafety,
  MdOutlineWaterDrop,
  MdOutlineAutorenew,
  MdOutlineBiotech,
  MdOutlineVaccines,
} from 'react-icons/md'
import { fadeInUp, stagger } from '../utils/motion'

const services = [
  {
    icon: <MdOutlineContentCut size={26} />,
    name: 'Scoatere fire simple',
    desc: 'Îndepărtarea firelor de sutură în condiții sterile, fără durere.',
    price: '60–80 lei',
  },
  {
    icon: <MdOutlineLocalHospital size={26} />,
    name: 'Scoatere fire complexe',
    desc: 'Plăgi cu suturi multiple sau în zone sensibile, protocol extins.',
    price: '100–150 lei',
  },
  {
    icon: <MdOutlineBiotech size={26} />,
    name: 'Scoatere capse postoperator',
    desc: 'Îndepărtarea capselor chirurgicale postoperatorii.',
    price: '80–120 lei',
  },
  {
    icon: <MdOutlineMedicalServices size={26} />,
    name: 'Pansament simplu',
    desc: 'Curățare, dezinfecție și pansament pentru plăgi minore.',
    price: '50–70 lei',
  },
  {
    icon: <MdOutlineHealthAndSafety size={26} />,
    name: 'Pansament complex',
    desc: 'Îngrijire avansată pentru plăgi profunde sau cu risc de infecție.',
    price: '100–150 lei',
  },
  {
    icon: <MdOutlineAutorenew size={26} />,
    name: 'Schimb pansament',
    desc: 'Schimbarea pansamentului existent cu verificarea evoluției plăgii.',
    price: '40–60 lei',
  },
  {
    icon: <MdOutlineWaterDrop size={26} />,
    name: 'Îngrijire plagă cronică / ulcer',
    desc: 'Tratament specializat pentru ulcere și plăgi cronice dificile.',
    price: '120–180 lei',
  },
  {
    icon: <MdOutlineVaccines size={26} />,
    name: 'Injecție intramusculară',
    desc: 'Administrare injecție i.m. cu materiale sterile de unică folosință.',
    price: '30–50 lei',
  },
]

export default function Services() {
  return (
    <section id="servicii" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-14"
        >
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            Servicii
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Ce oferim
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Toate procedurile sunt efectuate cu materiale sterile de unică folosință, în condiții de maximă siguranță.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger()}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="border border-gray-200 rounded-2xl p-5 group cursor-default
                         transition-[border-color,box-shadow] duration-200
                         hover:border-blue-200 hover:shadow-[0_4px_20px_rgba(37,99,235,0.08)]"
            >
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="text-blue-600 mb-3"
              >
                {s.icon}
              </motion.div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1.5 leading-snug">{s.name}</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">{s.desc}</p>
              <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full">
                {s.price}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
