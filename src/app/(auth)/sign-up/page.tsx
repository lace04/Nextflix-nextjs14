import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import GithubSignInButton from '@/app/components/GithubSignInButton';
import GoogleSignInButton from '@/app/components/GoogleSignInButton';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/utils/auth';
import { redirect } from 'next/navigation';

export default async function SignUp() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect('/home');
  }
  return (
    <div className='mt-24 rounded min-w-[450px] min-h-[600px] bg-black/70 py-20 px-6 md:mt-0 md:max-w-sm md:px-[70px]'>
      <div className='flex flex-col'>
        <form method='post' action='/api/auth/signin'>
          <h1 className='text-3xl font-semibold text-white mt-[68px]'>
            Registrarse
          </h1>
          <div className='space-y-5 mt-5'>
            <Input
              type='email'
              name='email'
              autoComplete='off'
              placeholder='Email o número de teléfono'
              className='bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block'
            />

            <Button
              className='w-full h-12 text-base'
              variant='red'
              size='xl'
              type='submit'
            >
              Comenzar
            </Button>
          </div>
        </form>
        <div className='text-sm flex justify-between mt-3 text-gray-400'>
          ¿Ya tienes una cuenta?{' '}
          <Link href='/login' className='hover:text-gray-300 hover:underline'>
            Inicia sesión
          </Link>
        </div>
        <div className='flex w-full justify-center items-center gap-x-3 mt-6'>
          <GithubSignInButton />
          <GoogleSignInButton />
        </div>
      </div>
    </div>
  );
}
