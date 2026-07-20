import Header from "@/components/layout/Header";
import HeroBackground from "@/components/home/HeroBackground";
import PostsSection from "@/components/home/PostsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-full flex flex-col bg-[#e2d1bf]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <HeroBackground />
        
        {/* Hero Image positioned over the circle */}
        <div className="absolute right-[-20%] md:right-[-10%] top-1/2 -translate-y-1/2 w-[70vh] h-[70vh] md:w-[85vh] md:h-[85vh] pointer-events-none z-10">
          <Image
            src="/hero.png"
            alt="Hero"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto flex flex-col items-start justify-center h-full pt-20">
          <div className="max-w-xl md:max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#362a22] font-bold leading-tight mb-6">
              എൻ്റെ അക്ഷരലോകത്തേക്ക് <br className="hidden sm:block" />
              <span className="italic font-light opacity-90">സ്വാഗതം</span>
            </h1>
            <p className="text-lg md:text-xl text-[#5a483a] mb-10 leading-relaxed max-w-lg">
              ജീവിതം, സംസ്കാരം, ഒപ്പം എൻ്റെ ചിന്തകളും അനുഭവങ്ങളും നിങ്ങളുമായി പങ്കുവെക്കുന്നു.
            </p>
            <a href="#latest-posts" className="inline-block px-8 py-3.5 bg-[#362a22] text-[#e2d1bf] rounded-full hover:bg-[#4a3b32] transition-colors duration-300 shadow-md text-lg font-medium tracking-wide">
              പുതിയ ലേഖനങ്ങൾ വായിക്കുക
            </a>
          </div>
        </div>
        {/* Malayalam Quote Banner */}
        <div className="absolute bottom-0 left-0 w-full bg-[#362a22] text-[#e2d1bf] py-5 md:py-6 z-20 shadow-lg flex items-center justify-center">
          <p className="text-lg md:text-xl font-serif italic tracking-wider">
            "ചിന്തകൾക്ക് ചിറകുമുളക്കുമ്പോൾ..."
          </p>
        </div>
      </section>

      {/* Main content container */}
      <section className="relative z-10 w-full px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <PostsSection />
      </section>
    </main>
  );
}
