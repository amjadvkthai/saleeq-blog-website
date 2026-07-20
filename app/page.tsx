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

        {/* The hero content (currently empty) would go here */}

      </section>
      
      {/* Malayalam Quote Banner */}
      <div className="w-full bg-[#362a22] text-[#e2d1bf] py-6 md:py-8 relative z-20 shadow-lg flex items-center justify-center">
        <p className="text-xl md:text-2xl font-serif italic tracking-wider">
          "ചിന്തകൾക്ക് ചിറകുമുളക്കുമ്പോൾ..."
        </p>
      </div>

      {/* Main content container */}
      <section className="relative z-10 w-full px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <PostsSection />
      </section>
    </main>
  );
}
