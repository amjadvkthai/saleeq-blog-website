import Header from "@/components/layout/Header";
import HeroBackground from "@/components/home/HeroBackground";
import PostsSection from "@/components/home/PostsSection";

export default function Home() {
  return (
    <main className="relative w-full flex flex-col bg-[#e2d1bf]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <HeroBackground />
        {/* The hero content (currently empty) would go here */}
      </section>
      
      {/* Main content container */}
      <section className="relative z-10 w-full px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <PostsSection />
      </section>
    </main>
  );
}
