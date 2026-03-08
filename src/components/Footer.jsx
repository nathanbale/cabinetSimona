export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <span className="font-semibold text-white">Simona Bale · Asistent Medical</span>
            <span className="hidden md:inline text-gray-600">·</span>
            <span>Str. Cloșca nr. 62, Satu Mare</span>
            <span className="hidden md:inline text-gray-600">·</span>
            <a href="tel:0744319111" className="hover:text-white transition-colors">
              +40 744 319 111
            </a>
          </div>
          <span>© 2025 Cabinet Medical Simona Bale</span>
        </div>
      </div>
    </footer>
  )
}
