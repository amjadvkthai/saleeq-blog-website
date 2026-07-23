export default function AboutSection() {
  return (
    <section id="about" className="w-full flex flex-col py-16 md:py-24 items-center justify-center text-center">
      <div className="max-w-3xl px-6 md:px-12 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#362a22] font-bold mb-4">
          എന്നെക്കുറിച്ച്
        </h2>
        <div className="w-16 h-1 bg-[#362a22]/30 rounded-full mb-8"></div>
        <p className="text-lg sm:text-xl md:text-2xl text-[#5a483a] leading-relaxed font-serif italic mb-6">
          വാക്കുകളിലൂടെ ലോകത്തെ കാണാനും അനുഭവങ്ങളെ അക്ഷരങ്ങളിലേക്ക് പകർത്താനും ഇഷ്ടപ്പെടുന്ന ഒരാളാണ് ഞാൻ.
        </p>
        <p className="text-base sm:text-lg text-[#7a6552] leading-relaxed max-w-2xl font-medium">
          ഈ യാത്രയിൽ എന്റെ ചിന്തകളും കഥകളും കവിതകളും നിങ്ങളുമായി പങ്കുവെക്കുക എന്നതാണ് ഈ ഇടത്തിന്റെ ലക്ഷ്യം. വായനയുടെ ലോകത്തേക്ക് നിങ്ങൾക്കും സ്വാഗതം.
        </p>
      </div>
    </section>
  );
}
