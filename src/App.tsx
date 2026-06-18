/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ChangeEvent } from 'react';
import { 
  CloudRain, 
  Soup, 
  Sprout, 
  Camera, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink,
  Menu,
  X,
  FileCode,
  Compass,
  Clock,
  Heart,
  ChevronRight,
  Info
} from 'lucide-react';

// Reference the pre-generated real asset path
const heroImage = '/images/regenerated_image_1781783801129.jpg';

const initialGalleryItems = [
  {
    id: 1,
    title: "Charming Cottage & Country Fence",
    category: "Farm Layout",
    url: "/images/natures_nest_hero_1781777625822.jpg",
    desc: "Our cozy white cottage, rustic gates, and peaceful winding roads at Akole."
  },
  {
    id: 2,
    title: "Crisp Chrysanthemum Blossom",
    category: "Flora & Greenery",
    url: "/images/gallery_chrysanthemum_1781778691631.jpg",
    desc: "A beautiful close-up of native white chrysanthemum flowers thriving in our gardens."
  },
  {
    id: 3,
    title: "Pristine Double-Pink Lotus",
    category: "Flora & Greenery",
    url: "/images/double_pink_lotus_1781782519577.jpg",
    desc: "A beautiful double-pink lotus flower blooming gracefully in our calm garden pond."
  },
  {
    id: 4,
    title: "Wild Forest Berries",
    category: "Orchards",
    url: "/images/gallery_red_berries_1781778724549.jpg",
    desc: "Clusters of wild organic berries growing on our farm trees."
  },
  {
    id: 5,
    title: "Golden Sahyadri Sky Sunset",
    category: "Scenic Vistas",
    url: "/images/gallery_sunset_sahydari_1781778743721.jpg",
    desc: "A magnificent sunset with dramatic sun rays spreading over the main holiday house and distant hills."
  },
  {
    id: 6,
    title: "Sparkling Blue Swimming Pool",
    category: "Aesthetic Spots",
    url: "/images/gallery_swimming_pool_1781778757013.jpg",
    desc: "Take a refreshing dip or sit poolside next to quiet evergreens."
  },
  {
    id: 7,
    title: "Pristine Main White Bungalow",
    category: "Villa Estate",
    url: "/images/gallery_white_villa_1781778770737.jpg",
    desc: "Our modern two-story home, manicured lawn terrace, and dense thuja conifers."
  },
  {
    id: 8,
    title: "Signature Paved Nature's Nest Terrace",
    category: "Architecture",
    url: "/images/gallery_paved_terrace_1781778785953.jpg",
    desc: "Beautiful entry courtyard with custom paved block lettering welcoming you to Nature's Nest."
  },
  {
    id: 9,
    title: "Authentic Maharashtrian Puranpoli",
    category: "Farm Kitchen",
    url: "/images/maharashtrian_puranpoli_1781783918984.jpg",
    desc: "Savor our freshly made sweet puranpoli glistening with warm ghee, hand-rolled in our farm kitchen."
  },
  {
    id: 10,
    title: "Lush Green Country Garden Path",
    category: "Serenity Spots",
    url: "/images/gallery_cottage_garden_1781778675680.jpg",
    desc: "A picturesque path winding by our white cozy cottage, full of lush, peaceful green beds."
  }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<number | null>(null);

  const [gallery, setGallery] = useState(initialGalleryItems);
  const [activeHero, setActiveHero] = useState(heroImage);

  const handleHeroUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setActiveHero(url);
    }
  };

  const handleGalleryUpload = (idx: number, e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setGallery(prev => {
        const updated = [...prev];
        updated[idx] = { ...updated[idx], url };
        return updated;
      });
    }
  };

  useEffect(() => {
    document.title = "Nature's Nest - Experience Village Life in Akole";
  }, []);

  // The perfect single-file HTML code requested by user, utilizing CDN Tailwind, 
  // exact Google Fonts matching the app, gorgeous SVG layout and direct maps integration.


 
  return (
    <div className="min-h-screen selection:bg-amber-100 selection:text-forest-900 border-t-8 border-forest-500 flex flex-col justify-between">
      
      {/* Dynamic Announcement Banner */}
      <div className="bg-forest-500 text-white py-2 px-4 text-center text-xs sm:text-sm font-semibold tracking-wide flex justify-center items-center gap-2">
        <Compass className="w-4 h-4 text-amber-500 animate-spin" style={{ animationDuration: '6s' }} />
        <span>Premium Day-Visits & Rustic Farm Tours — Plan a serene getaway with family!</span>
      </div>

      {/* Floating WhatsApp Action Button */}
      <div className="fixed bottom-24 right-6 z-50 group">
        <div className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 blur-sm group-hover:opacity-100 transition-opacity animate-pulse"></div>
        <a 
          href="https://wa.me/918999370690?text=Hello!%20I%20am%20inquiring%20about%20day-visit%20availability%20at%20Nature's%20Nest%2C%20Chaitanyapur%2C%20Akole.%20Please%20let%20me%20know%20how%20we%20can%20plan%20a%20visit." 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold shadow-2xl transition-all hover:translate-y-[-2px] hover:scale-105"
          id="whatsapp-floating-btn"
        >
          {/* Pulsing notification badge */}
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border border-white"></span>
          </span>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.636-1.023-5.115-2.885-6.978-1.861-1.863-4.343-2.888-6.98-2.89-5.441 0-9.865 4.419-9.87 9.86-.001 1.77.464 3.498 1.348 5.021l-.99 3.61c.39-.101 3.512-1.216 3.512-1.216zM17.202 14.3c-.284-.142-1.683-.831-1.944-.926-.26-.096-.45-.142-.64.142-.19.285-.736.926-.902 1.114-.166.19-.332.214-.616.071-.284-.141-1.201-.442-2.287-1.41-.845-.753-1.415-1.682-1.581-1.966-.167-.284-.018-.438.124-.579.128-.126.284-.332.426-.497.142-.166.19-.284.284-.474.095-.19.048-.356-.024-.498-.071-.142-.64-1.542-.876-2.11-.23-.553-.463-.478-.64-.487-.166-.008-.356-.01-.546-.01s-.5.071-.76.356c-.26.284-1 .974-1 2.375s1.02 2.75 1.163 2.94c.143.19 2.01 3.07 4.87 4.31.68.295 1.21.472 1.623.603.684.218 1.307.187 1.8.114.549-.08 1.684-.688 1.921-1.353.237-.665.237-1.235.166-1.353-.07-.118-.26-.19-.545-.33z"/>
          </svg>
          <span className="hidden sm:inline">WhatsApp Baban</span>
          <span className="inline sm:hidden">WhatsApp</span>
        </a>
      </div>

    

      

      {/* Interactive Web Header */}
      <header className="sticky top-0 z-40 bg-earth-50 bg-opacity-95 backdrop-blur-md border-b border-earth-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between" id="header-container">
          
          <a href="#" className="flex items-center gap-2 group" id="logo-brand">
            <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center text-forest-500 group-hover:bg-forest-500 group-hover:text-white transition-all">
              <Sprout className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-forest-900 group-hover:text-forest-500 transition-colors">
                Nature's <span className="font-serif italic font-medium text-forest-500">Nest</span>
              </span>
              <span className="block text-[10px] tracking-widest uppercase text-amber-600 font-bold leading-none mt-0.5">Farmhouse</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-forest-700" id="desktop-nav">
            <a href="#home" className="hover:text-forest-500 transition-colors">Home</a>
            <a href="#experience" className="hover:text-forest-500 transition-colors">The Experience</a>
            <a href="#gallery" className="hover:text-forest-500 transition-colors">Photo Gallery</a>
            <a href="#contact" className="hover:text-forest-500 transition-colors">Location & Contact</a>
          </nav>

          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="bg-forest-500 hover:bg-forest-700 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-sm hover:shadow transition-all duration-200 inline-flex items-center gap-2"
              id="header-cta"
            >
              <Phone className="w-4 h-4" />
              Plan Your Visit
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-forest-900 hover:text-forest-500 focus:outline-none"
            aria-label="Toggle mobile menu"
            id="mobile-hamburger"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-earth-100 border-b border-earth-200 px-4 py-6 space-y-4 animate-fadeIn" id="mobile-drawer">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-semibold text-forest-900 hover:text-forest-500">Home</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-semibold text-forest-900 hover:text-forest-500">The Experience</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-semibold text-forest-900 hover:text-forest-500">Photo Gallery</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-semibold text-forest-900 hover:text-forest-500">Location & Contact</a>
            <div className="pt-4 border-t border-earth-200">
              <a 
                href="tel:8999370690" 
                className="w-full text-center bg-forest-500 text-white block py-3 rounded-xl font-bold shadow-sm"
              >
                <Phone className="w-4 h-4 inline mr-2 text-white" />
                Call Owner
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Hero Section */}
      <section id="home" className="py-12 lg:py-20 bg-gradient-to-b from-earth-100 to-earth-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-100 text-forest-500 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                Welcome to Chaitanyapur, Akole
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-forest-900 leading-[1.1] tracking-tight">
                Experience the <span className="italic text-forest-500 font-medium block mt-1">Soul of Village Life</span> at Chaitanyapur
              </h1>
              
              <p className="text-forest-700 text-base sm:text-lg max-w-xl leading-relaxed">
                Immerse yourself in lush greenery, vibrant flower fields, and authentic local flavors. Reconnect with raw nature and experience warm village hospitality.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="#contact" 
                  className="bg-forest-500 hover:bg-forest-700 text-white text-center px-8 py-4 rounded-full font-extrabold text-base transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center gap-2 group"
                  id="primary-cta-btn"
                >
                  Plan Your Visit
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </a>
                
                <a 
                  href="tel:8999370690" 
                  className="border-2 border-earth-300 hover:bg-earth-200 text-forest-900 text-center px-8 py-4 rounded-full font-bold text-base transition-all duration-300 inline-flex items-center justify-center gap-2"
                  id="secondary-call-btn"
                >
                  <Phone className="w-5 h-5 text-forest-500" />
                  Call Owner
                </a>
              </div>

              {/* Stat bar */}
              <div className="pt-6 sm:pt-8 grid grid-cols-3 gap-4 border-t border-earth-300" id="hero-mini-stats">
                <div>
                  <span className="block text-2xl font-bold text-forest-500 font-serif">100%</span>
                  <span className="text-xs text-forest-700 font-medium">Organic Farming</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-forest-500 font-serif">Rustic</span>
                  <span className="text-xs text-forest-700 font-medium">Home-Cooked Food</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-forest-500 font-serif">Akole</span>
                  <span className="text-xs text-forest-700 font-medium">Stunning Nature</span>
                </div>
              </div>
            </div>

            {/* Hero Image Presentation */}
            <div className="lg:col-span-6 relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-forest-100 rounded-full filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-10 -right-6 w-36 h-36 bg-amber-500 rounded-full filter blur-xl opacity-20"></div>
              
              <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-earth-200 transform rotate-1 hover:rotate-0 transition-transform duration-500 overflow-hidden group/hero" id="hero-image-wrapper">
                <img 
                  src={activeHero} 
                  alt="Nature's Nest Beautiful Farm Landscape" 
                  className="w-full h-[350px] sm:h-[420px] object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dynamic Photo Replacement Overlay */}
                <label className="absolute inset-0 bg-forest-950/45 backdrop-blur-[2px] opacity-0 group-hover/hero:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white cursor-pointer select-none">
                  <div className="bg-forest-500 hover:bg-forest-600 active:scale-95 shadow-lg p-3 rounded-full text-white transition-all transform translate-y-2 group-hover/hero:translate-y-0 duration-300 flex items-center gap-2 text-sm font-bold">
                    <Camera className="w-5 h-5 text-amber-400" />
                    <span>Upload/Replace Hero Photo</span>
                  </div>
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={handleHeroUpload} 
                  />
                </label>
                
                <div className="absolute bottom-6 left-6 right-6 bg-forest-900 bg-opacity-95 backdrop-blur-sm p-4 rounded-xl text-white flex justify-between items-center shadow-lg border border-white/10 z-10">
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase tracking-wider text-amber-500 font-black">Live Preview Asset</span>
                    <h3 className="text-sm font-bold">Nature's Nest Chaitanyapur</h3>
                  </div>
                  <span className="px-2.5 py-1 text-xs bg-forest-500 text-white rounded-md font-semibold inline-flex items-center gap-1">
                    📍 Akole
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Experience Section (4-Card Grid) */}
      <section id="experience" className="py-16 lg:py-24 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="experience-header">
            <span className="text-amber-600 font-extrabold uppercase tracking-widest text-xs">Authentic Getaway</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-900">
              The Elements of Our Farm Life
            </h2>
            <div className="w-20 h-1 bg-forest-500 mx-auto rounded-full mt-4"></div>
            <p className="text-forest-700 text-base leading-relaxed">
              Step away from sirens and screens. At Nature’s Nest, we offer an earthy, vibrant setting where simple country living greets your senses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="experience-grid">
            
            {/* Card 1: Monsoon Magic */}
            <div className="group bg-white p-8 rounded-2xl border border-earth-200 hover:border-forest-500 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col justify-between" id="experience-card-1">
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-forest-50 rounded-full group-hover:bg-forest-500 opacity-70 group-hover:opacity-10 transition-colors"></div>
              
              <div className="space-y-4 z-10">
                <div className="w-12 h-12 rounded-xl bg-forest-100 text-forest-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CloudRain className="w-6 h-6" />
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-forest-900">
                  Monsoon Magic & Weather
                </h3>
                
                <p className="text-forest-700 text-sm leading-relaxed">
                  Experience the peaceful weather and breathtaking scenery of Akole. The entire area transforms into a misty evergreen wonderland during the rainy season with crisp clean mountain air.
                </p>
              </div>
              
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-forest-500 group-hover:text-amber-600 transition-colors pt-2">
                <span>Beautiful seasonal rains</span>
                <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              </div>
            </div>

            {/* Card 2: Village Food */}
            <div className="group bg-white p-8 rounded-2xl border border-earth-200 hover:border-forest-500 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col justify-between" id="experience-card-2">
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-amber-50 rounded-full group-hover:bg-forest-500 opacity-70 group-hover:opacity-10 transition-colors"></div>
              
              <div className="space-y-4 z-10">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#8c6b3e] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Soup className="w-6 h-6 animate-bounce" style={{ animationDuration: '3s' }} />
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-forest-900">
                  Authentic Village Life & Food
                </h3>
                
                <p className="text-forest-700 text-sm leading-relaxed">
                  Step back into rustic tranquility. Savor authentic, home-cooked regional meals made on a traditional firewood chulha, using locally sourced spices and fresh farm-produce.
                </p>
              </div>
              
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-forest-500 group-hover:text-amber-600 transition-colors pt-2">
                <span>Real firewood chulha flavours</span>
                <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              </div>
            </div>

            {/* Card 3: Orchard strolls */}
            <div className="group bg-white p-8 rounded-2xl border border-earth-200 hover:border-forest-500 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col justify-between" id="experience-card-3">
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-forest-50 rounded-full group-hover:bg-forest-500 opacity-70 group-hover:opacity-10 transition-colors"></div>
              
              <div className="space-y-4 z-10">
                <div className="w-12 h-12 rounded-xl bg-forest-100 text-forest-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sprout className="w-6 h-6" />
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-forest-900">
                  Organic Fruit Orchards
                </h3>
                
                <p className="text-forest-700 text-sm leading-relaxed">
                  Walk through beautiful, sweeping orchards and see organic fruits like pomegranates, mangoes, custard apples, and guavas growing. Taste the difference of truly raw, chemical-free agriculture.
                </p>
              </div>
              
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-forest-500 group-hover:text-amber-600 transition-colors pt-2">
                <span>Fresh, organic farm strolls</span>
                <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              </div>
            </div>

            {/* Card 4: Flower fields */}
            <div className="group bg-white p-8 rounded-2xl border border-earth-200 hover:border-forest-500 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col justify-between" id="experience-card-4">
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-amber-50 rounded-full group-hover:bg-forest-500 opacity-70 group-hover:opacity-10 transition-colors"></div>
              
              <div className="space-y-4 z-10">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Camera className="w-6 h-6" />
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-forest-900">
                  Flower Fields & Photography
                </h3>
                
                <p className="text-forest-700 text-sm leading-relaxed">
                  Capture magnificent photos in our blooming flower fields. Featuring vibrant, golden sunflower tracks and bright marigolds, it is a haven for content creators, photographers, and scenery lovers.
                </p>
              </div>
              
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-forest-500 group-hover:text-amber-600 transition-colors pt-2">
                <span>Vibrant sunflower & marigold rows</span>
                <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="py-16 lg:py-24 bg-earth-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="gallery-header">
            <span className="text-amber-600 font-extrabold uppercase tracking-widest text-xs">Aesthetic Vistas</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-900">
              Snapshots of Serenity
            </h2>
            <div className="w-16 h-1 bg-forest-500 mx-auto rounded-full mt-4"></div>
            <p className="text-forest-700 text-sm max-w-lg mx-auto">
              Take a look around Nature's Nest. Below is a beautifully structured gallery featuring our farmscapes. You can also view live, authentic photos directly from our Google Maps listing.
            </p>
            <div className="pt-2 animate-fadeIn">
              <a 
                href="https://maps.google.com/?cid=12880313531122557661" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-300 bg-amber-50 text-amber-800 text-xs font-bold hover:bg-amber-100 hover:text-amber-900 transition-all shadow-sm hover:shadow-md"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span>See Original Maps Gallery (50+ Real Photos)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Clean 8-Image Grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="gallery-grid">
            {gallery.map((item, idx) => (
              <div 
                key={item.id}
                onClick={() => setSelectedGalleryImg(idx)}
                className="group relative bg-white p-2.5 rounded-2xl border-2 border-earth-300 hover:border-forest-500 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden cursor-pointer"
                id={`gallery-item-${idx + 1}`}
              >
                <div className="relative h-64 rounded-xl overflow-hidden group/card">
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Hover Caption Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                    <span className="text-[10px] tracking-widest text-amber-500 font-extrabold uppercase">{item.category}</span>
                    <h4 className="font-bold text-sm mt-0.5">{item.title}</h4>
                    <p className="text-[11px] text-gray-200 mt-1">{item.desc}</p>
                  </div>

                  {/* Sleek Camera Upload Trigger over Lightbox Click */}
                  <label 
                    onClick={(e) => e.stopPropagation()} 
                    className="absolute top-3 right-3 z-10 bg-forest-900 hover:bg-forest-600 text-white p-2 rounded-full cursor-pointer shadow-lg active:scale-90 transition-all opacity-0 group-hover/card:opacity-100 duration-200 inline-flex items-center gap-1 text-[10px] font-bold"
                    title="Replace this picture"
                  >
                    <Camera className="w-3.5 h-3.5 text-amber-400" />
                    <span>Replace Photo</span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={(e) => handleGalleryUpload(idx, e)} 
                    />
                  </label>
                </div>
                <div className="p-2 flex items-center justify-between text-xs font-semibold text-forest-700">
                  <span>{idx + 1}. {item.category}</span>
                  <Camera className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity text-forest-500" />
                </div>
              </div>
            ))}

            {/* Special Google Maps Link Card */}
            <a 
              href="https://maps.google.com/?cid=12880313531122557661" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative bg-amber-50/60 p-2.5 rounded-2xl border-2 border-dashed border-amber-300 hover:border-forest-500 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden flex flex-col justify-between h-full min-h-[290px]"
              id="gallery-google-maps-card"
            >
              <div className="relative flex-1 flex flex-col justify-center items-center text-center p-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-7 h-7 text-amber-600" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] tracking-widest text-forest-600 font-extrabold uppercase animate-pulse">Google Maps Live</span>
                  <h4 className="font-serif font-bold text-base text-forest-900">Original Farmhouse Photos</h4>
                  <p className="text-[11px] text-forest-700 leading-relaxed">
                    Click here to view actual, real-time farm photos uploaded directly by us (Rutuja & Family) and our resort visitors on Google Maps!
                  </p>
                </div>
              </div>
              <div className="p-4 bg-earth-50 rounded-xl flex items-center justify-between text-xs font-extrabold text-[#386641] group-hover:text-amber-600 transition-colors">
                <span>Explore 50+ Real Photos</span>
                <ExternalLink className="w-4 h-4 text-[#386641]" />
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Gallery Lightbox modal */}
      {selectedGalleryImg !== null && (
        <div className="fixed inset-0 bg-forest-900/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedGalleryImg(null)}>
          <div className="relative max-w-4xl max-h-[85vh] bg-white p-2 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <img 
              src={gallery[selectedGalleryImg].url} 
              alt={gallery[selectedGalleryImg].title} 
              className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain mx-auto"
              referrerPolicy="no-referrer"
            />
            <div className="p-4 text-forest-900 bg-[#FAF9F6] border-t border-earth-200 rounded-b-lg">
              <span className="text-xs uppercase text-amber-600 font-bold tracking-widest">{gallery[selectedGalleryImg].category}</span>
              <h3 className="font-serif text-lg font-bold mt-1 text-forest-900">{gallery[selectedGalleryImg].title}</h3>
              <p className="text-sm text-forest-700 mt-1">{gallery[selectedGalleryImg].desc}</p>
            </div>
            <button 
              onClick={() => setSelectedGalleryImg(null)}
              className="absolute top-4 right-4 bg-forest-900 text-white rounded-full p-2 hover:bg-forest-700 shadow-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Location & Contact Section */}
      <section id="contact" className="py-16 lg:py-24 bg-earth-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column: Owner detail and note */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-white p-8 rounded-2xl border border-earth-200 shadow-sm" id="contact-info-panel">
              
              <div className="space-y-6">
                <span className="text-amber-600 font-extrabold uppercase tracking-widest text-xs">Reach Out to Us</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-forest-900">
                  Plan a Day with Family
                </h2>
                <p className="text-forest-700 text-sm leading-relaxed">
                  We look forward to hosting your next day-visit, farm-walk, or photography session. Send us an inquiry about traditional breakfast slots, authentic lunch schedules, or seasonal directions.
                </p>

                {/* Friendly Owner card details */}
                <div className="p-6 rounded-xl bg-earth-100 border border-earth-200 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-forest-500 text-white flex items-center justify-center font-bold text-xl leading-none">
                      BG
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-amber-600 tracking-wider">Farm Owner / Host</span>
                      <h3 className="text-lg font-bold text-forest-900">Baban Gawande</h3>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 pt-2 text-sm font-semibold">
                    <a 
                      href="tel:8999370690" 
                      className="flex items-center gap-3 bg-white p-3 rounded-lg border border-earth-300 hover:border-forest-500 transition-all text-forest-900"
                    >
                      <Phone className="w-5 h-5 text-forest-500" />
                      <span>8999370690</span>
                      <span className="ml-auto text-xs text-forest-500 bg-forest-50 px-2 py-0.5 rounded font-black uppercase">Call Owner</span>
                    </a>
                    
                    <div className="flex items-start gap-3 p-3 text-xs bg-white rounded-lg border border-earth-200 text-forest-700 font-medium leading-relaxed">
                      <Compass className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <span>Inquire about custom groups, traditional Maharashtrian breakfast rates, or exact photography slot details with Baban.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day visits hours notes */}
              <div className="pt-6 border-t border-earth-200 space-y-3" id="visiting-hours">
                <h4 className="text-xs font-extrabold uppercase text-forest-900 tracking-widest flex items-center gap-1.5 text-amber-600">
                  <Clock className="w-4 h-4" /> Day Visits Guidelines
                </h4>
                <ul className="text-xs text-forest-700 space-y-2 leading-relaxed">
                  <li className="flex items-start gap-1.5">
                    <span className="text-forest-500 mt-1">•</span> 
                    <span>Open for visits from <strong>9:00 AM to 6:30 PM</strong> daily.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-forest-500 mt-1">•</span> 
                    <span>Advance phone calls are highly recommended to prepare fresh traditional food for your group.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-forest-500 mt-1">•</span> 
                    <span>No accommodation or overnight services. Focused strictly on experiencing authentic farm nature tours.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Column: Maps Embed with exact iframe as specified */}
            <div className="lg:col-span-7 flex flex-col pt-4 lg:pt-0" id="contact-map-panel">
              <div className="relative bg-white p-3 rounded-2xl border border-earth-200 shadow-sm flex flex-col justify-between h-full bg-gradient-to-b from-white to-earth-50">
                
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="text-red-500 w-5 h-5 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-forest-900">Chaitanyapur, Akole</h4>
                      <span className="text-xs text-forest-700">Taluka Akole, Ahmednagar, Maharashtra</span>
                    </div>
                  </div>
                  <a 
                    href="https://www.google.com/maps/place/Nature's+Nest/@19.3004654,74.0326043,15z/data=!4m6!3m5!1s0x3bdd196aa774d60b:0xb2c0336b896aa2dd!8m2!3d19.3004654!4d74.0326043!16s%2Fg%2F11vswmny36?entry=ttu" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs font-bold text-forest-500 hover:underline flex items-center gap-1"
                  >
                    Open in Google Maps <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Embedded Maps Iframe (with raw width height customized perfectly style border:0) */}
                <div className="w-full h-[360px] lg:h-full rounded-xl overflow-hidden border border-earth-200 shadow-inner">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21612.880961852305!2d74.03260430241298!3d19.300465398997712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd196aa774d60b%3A0xb2c0336b896aa2dd!2sNature&#39;s%20Nest!5e1!3m2!1sen!2sin!4v1781777361678!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, minHeight: '380px' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Content */}
      <footer className="bg-forest-900 text-white py-12 border-t-4 border-forest-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6" id="footer-inner">
          <div className="flex items-center justify-center gap-2">
            <div className="w-10 h-10 rounded-full bg-forest-500 flex items-center justify-center text-white">
              <Sprout className="w-5 h-5 animate-pulse" />
            </div>
            <span className="text-xl font-bold font-serif italic text-white">Nature's Nest</span>
          </div>

          <p className="text-xs text-gray-300 max-w-md mx-auto">
            Celebrating rustic farm trails, blooming flower beds, organic fruit orchards, and wholesome woodfire cuisines in Akole, Maharashtra.
          </p>

          <div className="text-[10px] text-gray-400 tracking-wider">
            © {new Date().getFullYear()} Nature's Nest Farmhouse. All rights reserved. <br/>
            Designed with meticulous attention to village legacy.
          </div>
        </div>
      </footer>

    </div>
  );
}
