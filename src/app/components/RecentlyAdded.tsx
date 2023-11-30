import Image from 'next/image';
import prisma from '@/app/utils/db';
import MovieCard from './MovieCard';

async function getRecentlyAdded() {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      overview: true,
      title: true,
      WatchLists: true,
      imageString: true,
      youtubeString: true,
      age: true,
      release: true,
      duration: true,
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
            <div className='h-60 relative z-10 w-full transform transition duration-500 hover:scale-105 opacity-0 hover:opacity-100'>
              <div className='bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center border'>
                <Image
                  src={movie.imageString}
                  alt={movie.title}
                  width={800}
                  height={800}
                  className='absolute w-full h-full -z-10 rounded-lg object-cover'
                />
                <MovieCard
                  key={movie.id}
                  age={movie.age}
                  movieId={movie.id}
                  overview={movie.overview}
                  title={movie.title}
                  time={movie.duration}
                  watchList={movie.WatchLists.length > 0 ? true : false}
                  wachtListId={movie.WatchLists[0]?.id}
                  year={movie.release}
                  youtubeUrl={movie.youtubeString}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
