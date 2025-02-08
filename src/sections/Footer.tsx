export default function Footer() {
    return (
      <footer className="bg-neutral-950 text-white py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Branding */}
            <div>
              <h2 className="text-2xl font-semibold text-lime-400">CVExpress</h2>
              <p className="mt-2 text-sm text-gray-400">
                Buat CV ATS-friendly yang profesional secara gratis dan mudah. Tingkatkan peluang kariermu sekarang!
              </p>
            </div>
  
            {/* Navigasi */}
            <div>
              <h3 className="text-lg font-medium text-white">Navigasi</h3>
              <ul className="mt-2 space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-lime-400">Beranda</a></li>
                <li><a href="#" className="hover:text-lime-400">Fitur</a></li>
                <li><a href="#" className="hover:text-lime-400">FAQ</a></li>
              </ul>
            </div>
  
            {/* Sosial Media */}
            <div>
              <h3 className="text-lg font-medium text-white">Ikuti Kami</h3>
              <div className="mt-3 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-lime-400">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-lime-400">LinkedIn</a>
               
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} CVExpress. Semua Hak Dilindungi.
          </div>
        </div>
      </footer>
    );
  }
  