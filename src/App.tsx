import React from 'react';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* 1. NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm">Y</div>
          <span className="font-bold text-lg text-blue-900 tracking-wide">SMK YADIKA SOREANG</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#jurusan" className="hover:text-blue-700 transition">Jurusan</a>
          <a href="#prestasi" className="hover:text-blue-700 transition">Prestasi</a>
          <a href="/ppdb" className="hover:text-blue-700 transition">PPDB</a>
          <a href="/blud" className="hover:text-blue-700 transition">Produk BLUD</a>
          <a href="/bkk" className="hover:text-blue-700 transition">Career Center</a>
        </div>
        <a href="/ppdb" className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md shadow-blue-700/20 transition">
          Daftar PPDB
        </a>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block bg-blue-50 border border-blue-200 text-blue-700 text-xs px-3 py-1 rounded-full font-semibold">
            🚀 Penerimaan Siswa Baru 2026 Telah Dibuka
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Wujudkan Masa Depan Digital Bersama <span className="text-blue-700">SMK Yadika</span>
          </h1>
          <p className="text-base text-slate-600 text-justify">
            Membentuk lulusan yang kompeten di bidang teknologi, siap kerja di industri global, serta berjiwa wirausaha melalui program unggulan BLUD dan kemitraan strategis.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/ppdb" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-700/30 transition">
              Amankan Kuota Ku
            </a>
            <button onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})} className="bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-semibold transition flex items-center gap-2">
              🤖 Tanya AI Assistant
            </button>
          </div>
        </div>
        <div className="relative flex justify-center">
          {/* Ilustrasi atau Foto Siswa */}
          <div className="w-full h-80 lg:h-[400px] bg-gradient-to-tr from-blue-700 to-sky-500 rounded-2xl shadow-2xl relative overflow-hidden flex items-center justify-center text-white p-6">
            <span className="text-sm italic opacity-80">[Tempat Foto Kegiatan Siswa Yadika]</span>
          </div>
        </div>
      </header>

      {/* 3. STATISTIK & MITRA */}
      <section className="bg-blue-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-sky-400">100%</h3>
            <p className="text-xs text-slate-400 mt-1">Kuota Lulus Langsung Berkas</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-sky-400">50+</h3>
            <p className="text-xs text-slate-400 mt-1">Mitra Industri Aktif</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-sky-400">3</h3>
            <p className="text-xs text-slate-400 mt-1">Kompetensi Keahlian</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-sky-400">Premium</h3>
            <p className="text-xs text-slate-400 mt-1">Fasilitas Standard Lab</p>
          </div>
        </div>
      </section>

      {/* 4. JURUSAN SECTION */}
      <section id="jurusan" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <h2 className="text-3xl font-bold text-slate-900">Kompetensi Keahlian</h2>
          <p className="text-sm text-slate-600">Pilih rumpun keahlian terbaik yang dirancang sesuai kebutuhan industri masa kini.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card PPLG */}
          <div className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-blue-500 hover:shadow-xl transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-700 font-bold mb-4">💻</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">PPLG</h3>
              <p className="text-xs text-slate-600 text-justify">Pengembangan Perangkat Lunak dan Gim. Fokus pada pemrograman web, mobile apps, game development, dan UI/UX design.</p>
            </div>
            <a href="/ppdb" className="mt-6 text-sm font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1">Daftar Jurusan →</a>
          </div>

          {/* Card TJKT */}
          <div className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-blue-500 hover:shadow-xl transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-700 font-bold mb-4">🌐</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">TJKT</h3>
              <p className="text-xs text-slate-600 text-justify">Teknik Jaringan Komputer dan Telekomunikasi. Fokus ke administrasi jaringan server, cyber security, fiber optic, dan cloud computing.</p>
            </div>
            <a href="/ppdb" className="mt-6 text-sm font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1">Daftar Jurusan →</a>
          </div>

          {/* Card DKV */}
          <div className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-blue-500 hover:shadow-xl transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-700 font-bold mb-4">🎨</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">DKV</h3>
              <p className="text-xs text-slate-600 text-justify">Desain Komunikasi Visual. Mengembangkan keahlian videografi, fotografi, ilustrator digital, branding, dan creative multimedia production.</p>
            </div>
            <a href="/ppdb" className="mt-6 text-sm font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1">Daftar Jurusan →</a>
          </div>
        </div>
      </section>

    </div>
  );
};