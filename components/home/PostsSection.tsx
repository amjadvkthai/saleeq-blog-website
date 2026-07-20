import PostCard from './PostCard';

const SINGLE_IMAGE = 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000&auto=format&fit=crop';

const DUMMY_POSTS = [
  {
    id: 1,
    category: 'കഥ',
    title: 'മഴുവില്‍ വീണ ഓര്‍മകള്‍',
    date: 'May 14, 2025',
    imageUrl: SINGLE_IMAGE
  },
  {
    id: 2,
    category: 'കവിത',
    title: 'നിശബ്ദതയുടെ ഭാഷ',
    date: 'May 10, 2025',
    imageUrl: SINGLE_IMAGE
  },
  {
    id: 3,
    category: 'കഥ',
    title: 'ഒരു യാത്രയുടെ അന്ത്യം',
    date: 'May 5, 2025',
    imageUrl: SINGLE_IMAGE
  },
  {
    id: 4,
    category: 'കവിത',
    title: 'ചില വാക്കുകള്‍ മാത്രം',
    date: 'Apr 28, 2025',
    imageUrl: SINGLE_IMAGE
  },
  {
    id: 5,
    category: 'കഥ',
    title: 'അറിയാതെ മറന്നവര്‍',
    date: 'Apr 22, 2025',
    imageUrl: SINGLE_IMAGE
  },
  {
    id: 6,
    category: 'കവിത',
    title: 'മനസ്സിന്റെ പേജുകള്‍',
    date: 'Apr 15, 2025',
    imageUrl: SINGLE_IMAGE
  }
];

export default function PostsSection() {
  return (
    <section id="latest-posts" className="w-full flex flex-col py-24 md:py-32">
      
      {/* Header */}
      <div className="mb-16 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#362a22] font-bold mb-4">
          ലേഖനങ്ങൾ
        </h2>
        <div className="w-16 h-1 bg-[#362a22]/30 rounded-full mb-6"></div>
        <div className="flex flex-col gap-2 items-center">
          <p className="text-xl font-bold text-[#5a483a] tracking-wide">കഥ • കവിത • ചിന്തകൾ</p>
          <p className="text-md text-[#7a6552] font-medium max-w-sm leading-relaxed italic">
            Stories, poems, and musings from life.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {DUMMY_POSTS.map(post => (
          <PostCard
            key={post.id}
            id={post.id}
            category={post.category}
            title={post.title}
            date={post.date}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>

      {/* Footer / View All */}
      <div className="mt-20 flex justify-center">
        <button className="px-8 py-3.5 bg-transparent border-2 border-[#362a22] text-[#362a22] font-bold rounded-full hover:bg-[#362a22] hover:text-[#e2d1bf] transition-colors duration-300 shadow-sm uppercase tracking-widest text-sm">
          എല്ലാ ലേഖനങ്ങളും കാണുക
        </button>
      </div>

    </section>
  );
}
