export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background circle with brush stroke effect */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[12%] md:left-auto md:translate-x-0 md:right-[-10%] md:top-1/2 md:-translate-y-1/2 w-[80vw] h-[80vw] md:w-[85vh] md:h-[85vh] opacity-90 mix-blend-multiply flex items-center justify-center pointer-events-none">
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
    </div>
  );
}
