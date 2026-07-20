import Header from "@/components/layout/Header";
import PostCard from "@/components/home/PostCard";

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
  },
  {
    id: 7,
    category: 'ചിന്തകൾ',
    title: 'കാലം മായ്ക്കാത്ത മുറിവുകൾ',
    date: 'Apr 10, 2025',
    imageUrl: SINGLE_IMAGE
  },
  {
    id: 8,
    category: 'കഥ',
    title: 'പഴയൊരു മഴക്കാലം',
    date: 'Apr 2, 2025',
    imageUrl: SINGLE_IMAGE
  },
  {
    id: 9,
    category: 'കവിത',
    title: 'അവൾ പറഞ്ഞ കഥകൾ',
    date: 'Mar 28, 2025',
    imageUrl: SINGLE_IMAGE
  }
];

export default function PostsPage() {
  return (
    <main className="relative w-full flex flex-col min-h-screen bg-[#e2d1bf]">
      <Header />
      
      <section className="w-full px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto py-24 md:py-32">
        <div className="mb-16 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-[#362a22] font-bold mb-4">
            എല്ലാ ലേഖനങ്ങളും
          </h1>
          <div className="w-16 h-1 bg-[#362a22]/30 rounded-full mb-6"></div>
          <p className="text-lg text-[#7a6552] font-medium max-w-md leading-relaxed italic">
            ഇതുവരെ എഴുതിയ എല്ലാ കഥകളും കവിതകളും ഇവിടെ വായിക്കാം.
          </p>
        </div>

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
      </section>
    </main>
  );
}
