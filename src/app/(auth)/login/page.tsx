import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import GoogleIcon from '../../../../public/google.svg';

export default function Login() {
  return (
    <div className='mt-24 rounded min-w-[450px] bg-black/70 py-20 px-6 md:mt-0 md:max-w-sm md:px-[70px]'>
      <div className='flex flex-col'>
        <form>
          <h1 className='text-3xl font-semibold text-white'>Inicia sesión</h1>
          <div className='space-y-5 mt-5'>
            <Input
              type='email'
              name='email'
              autoComplete='off'
              placeholder='Email o número de teléfono'
              className='bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block'
            />
            <Input
              type='password'
              name='password'
              placeholder='Contraseña'
              className='bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block'
            />
            <Button
              className='w-full h-12 text-base'
              variant='red'
              size='xl'
              type='submit'
            >
              Iniciar sesión
            </Button>
          </div>
        </form>
        <div className='text-sm flex justify-between mt-3 text-gray-400'>
          ¿Primera vez en Netflix?
          <Link href='/sign-up' className='hover:text-gray-300 hover:underline'>
            Suscríbete ahora.
          </Link>
        </div>
        <div className='flex w-full justify-center items-center gap-x-3 mt-6'>
          <Button variant='outline' size='icon'>
            <GithubIcon className='w-5 h-5' />
          </Button>
          <Button variant='outline' size='icon'>
            <Image src={GoogleIcon} alt='Google Icon' className='w-7 h-7' />
          </Button>
        </div>
      </div>
    </div>
  );
}
