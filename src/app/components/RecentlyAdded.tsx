import Image from 'next/image';
import prisma from '@/app/utils/db';
import MovieCard from './MovieCard';

async function getRecentlyAdded() {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      title: true,
      overview: true,
      WatchLists: true,
      imageString: true,
      videoSource: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 4,
  });

  return data;
}

export default async function RecentlyAdded() {
  const data = await getRecentlyAdded();
  return (
    <>
      Recientes
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6'>
        {data.map((movie) => (
          <div className='relative h-48' key={movie.id}>
            <Image
              src={movie.imageString}
              alt={movie.title}
              width={500}
              height={400}
              className='rounded-sm absolute w-full h-full object-contain'
            />
            <div className='h-60 relative z-10 w-full transform transition duration-500 hover:scale-110 opacity-0 hover:opacity-100'>
              <Image
                src={movie.imageString}
                alt={movie.title}
                width={800}
                height={800}
                className='rounded-lg absolute w-full h-full object-cover'
              />
              <MovieCard />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
