import Image from "next/image";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({ 
  weight: "400", 
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#e2d1bf] overflow-hidden flex items-center justify-center text-[#2a2a2a]">
      {/* Top Left Logo */}
      <div className="absolute top-8 left-8 md:top-12 md:left-16 flex items-center z-20">
        <h1 className={`${greatVibes.className} text-5xl md:text-6xl tracking-wide`}>Saleeq</h1>
      </div>
      {/* Background circle with brush stroke effect */}
      <div className="absolute right-[-20%] md:right-[-10%] top-1/2 -translate-y-1/2 w-[70vh] h-[70vh] md:w-[85vh] md:h-[85vh] opacity-90 mix-blend-multiply flex items-center justify-center pointer-events-none">
        
        {/* Main solid circle with slightly organic edge */}
        <div 
          className="absolute w-[85%] h-[85%] bg-[#c0ab90]"
          style={{ borderRadius: '48% 52% 51% 49% / 50% 49% 51% 50%' }}
        ></div>
        
        {/* Thick brush stroke top-left */}
        <div 
          className="absolute w-[88%] h-[88%] border-[12px] md:border-[24px] border-[#c0ab90]/30 border-r-transparent border-b-transparent"
          style={{ borderRadius: '50%', transform: 'rotate(-15deg)', filter: 'blur(2px)' }}
        ></div>

        {/* Medium overlapping strokes */}
        <div 
          className="absolute w-[92%] h-[90%] border-[2px] md:border-[4px] border-[#c0ab90]/60 border-r-transparent"
          style={{ borderRadius: '52% 48% 49% 51% / 49% 51% 48% 52%', transform: 'rotate(-25deg)' }}
        ></div>
        
        <div 
          className="absolute w-[89%] h-[93%] border-[4px] md:border-[6px] border-[#c0ab90]/40 border-b-transparent"
          style={{ borderRadius: '49% 51% 52% 48% / 51% 49% 52% 48%', transform: 'rotate(15deg)' }}
        ></div>

        {/* Thin wispy strokes */}
        <div 
          className="absolute w-[96%] h-[92%] border-[1px] md:border-[2px] border-[#c0ab90]/50 border-l-transparent"
          style={{ borderRadius: '50% 50% 48% 52% / 48% 52% 51% 49%', transform: 'rotate(45deg)' }}
        ></div>
        
        <div 
          className="absolute w-[98%] h-[95%] border-[1px] md:border-[2px] border-[#c0ab90]/40 border-r-transparent border-b-transparent"
          style={{ borderRadius: '48% 52% 50% 50% / 50% 50% 49% 51%', transform: 'rotate(-5deg)' }}
        ></div>
      </div>
      
      {/* Content container (currently empty, ready for future content) */}
      <main className="relative z-10 flex flex-col items-center justify-center h-full w-full">
        {/* You can add your blog content here */}
      </main>
    </div>
  );
}
