import Image from 'next/image';

interface PostCardProps {
  category: string;
  title: string;
  date: string;
  imageUrl: string;
}

export default function PostCard({ category, title, date, imageUrl }: PostCardProps) {
  return (
    <div className="bg-[#eedbc8] rounded-xl overflow-hidden flex h-48 md:h-56 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      {/* Text Content */}
      <div className="flex flex-col justify-between p-5 md:p-6 flex-1 text-[#4a3f35] z-10">
        <div>
          <span className="text-sm font-semibold tracking-wide text-[#7d6854]">{category}</span>
          <h3 className="mt-2 text-xl md:text-2xl font-bold leading-tight line-clamp-3">{title}</h3>
        </div>
        <span className="text-sm text-[#7d6854] font-medium">{date}</span>
      </div>
      
      {/* Image */}
      <div className="w-[45%] h-full relative shrink-0">
        {/* Soft gradient overlay to blend image into the card slightly */}
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#eedbc8] to-transparent z-10"></div>
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
