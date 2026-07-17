import PostCard from './PostCard';

const DUMMY_POSTS = [
  {
    id: 1,
    category: 'കഥ',
    title: 'മഴുവില്‍ വീണ ഓര്‍മകള്‍',
    date: 'May 14, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 2,
    category: 'കവിത',
    title: 'നിശബ്ദതയുടെ ഭാഷ',
    date: 'May 10, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1506744626753-2ba9b0305d1d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 3,
    category: 'കഥ',
    title: 'ഒരു യാത്രയുടെ അന്ത്യം',
    date: 'May 5, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 4,
    category: 'കവിത',
    title: 'ചില വാക്കുകള്‍ മാത്രം',
    date: 'Apr 28, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 5,
    category: 'കഥ',
    title: 'അറിയാതെ മറന്നവര്‍',
    date: 'Apr 22, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 6,
    category: 'കവിത',
    title: 'മനസ്സിന്റെ പേജുകള്‍',
    date: 'Apr 15, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=1000&auto=format&fit=crop'
  }
];

export default function PostsSection() {
  return (
    <section className="w-full flex flex-col py-20 md:py-32 text-[#2a2a2a]">
      
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-5xl md:text-7xl font-serif text-[#1a1a1a]">Posts</h2>
        <div className="mt-3 flex flex-col gap-3">
          <p className="text-2xl font-bold text-[#7d6854]">കഥ • കവിത</p>
          <p className="text-lg text-[#5a4d41] font-medium max-w-xs leading-snug">Stories and poems from life, for life.</p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DUMMY_POSTS.map(post => (
          <PostCard
            key={post.id}
            category={post.category}
            title={post.title}
            date={post.date}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>

      {/* Footer / View All */}
      <div className="mt-16 flex justify-center">
        <button className="text-sm font-bold tracking-[0.2em] text-[#3a3a3a] pb-1 border-b-2 border-[#3a3a3a] hover:text-black hover:border-black transition-colors uppercase">
          View All Posts
        </button>
      </div>

    </section>
  );
}
