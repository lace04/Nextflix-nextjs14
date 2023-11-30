'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import GoogleIcon from '../../../public/google.svg';
import { signIn } from 'next-auth/react';

export default function GoogleSignInButton() {
  return (
    <Button onClick={() => signIn('google')} variant='outline' size='icon'>
      <Image src={GoogleIcon} alt='Google Icon' className='w-7 h-7' />
    </Button>
  );
}
