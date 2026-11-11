# Lumina — NFT Marketplace

[![Live Demo](https://img.shields.io/badge/Live_Demo-lumina--nft--market.vercel.app-8B5CF6?logo=vercel&logoColor=white)](https://lumina-nft-market.vercel.app)

Landing page konsep NFT marketplace dengan ambient animated background, statistik interaktif, dan grid koleksi — dibangun dengan React 19, Tailwind CSS 4, dan Framer Motion.

## ✨ Fitur

- **Ambient animated background** — latar bergerak halus (`BackgroundAmbient`) yang memberi kesan immersive di seluruh halaman.
- **Loading screen** — layar pembuka animasi sebelum konten tampil.
- **Hero section** — headline besar dengan visual pendukung dan animasi masuk.
- **Stats bar dengan count-up** — angka statistik (volume, koleksi, dsb.) yang berhitung naik saat terlihat, via hook `useCountUp`.
- **Projects grid** — grid koleksi NFT dengan kartu beranimasi (Framer Motion).
- **Navbar fixed** — navigasi tetap di atas dengan ikon brand (lucide-react + BrandIcons).
- **Animasi terpusat** — varian animasi dikelola di `src/utils/animations.js`.

## 🛠️ Tech Stack

| Layer | Teknologi |
| --- | --- |
| UI Library | React 19 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Animasi | Framer Motion 12 |
| Ikon | lucide-react |

## 🚀 Menjalankan Lokal

```bash
git clone https://github.com/indraaryaLabs/lumina-nft-market.git
cd lumina-nft-market
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

Perintah lain:

```bash
npm run build    # build produksi ke folder dist/
npm run preview  # pratinjau hasil build
npm run lint     # cek kualitas kode dengan ESLint
```

## 📁 Struktur Proyek

```
public/images/           # Aset visual (hero, grid koleksi, avatar)
src/
├── components/
│   ├── BackgroundAmbient.jsx  # Latar ambient beranimasi
│   ├── LoadingScreen.jsx      # Layar pembuka
│   ├── Navbar.jsx             # Navigasi fixed
│   ├── Hero.jsx               # Hero section
│   ├── StatsBar.jsx           # Statistik dengan count-up
│   ├── ProjectsGrid.jsx       # Grid koleksi NFT
│   └── icons/BrandIcons.jsx   # Ikon brand kustom
├── hooks/useCountUp.js
├── utils/animations.js        # Varian animasi Framer Motion
└── App.jsx                    # Komposisi halaman
```

## 📄 License

Proyek ini dilisensikan di bawah [MIT License](LICENSE).
