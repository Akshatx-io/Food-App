import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LockKeyhole, Mail } from 'lucide-react';
import React from 'react'

type Props = {}

const Login = (props: Props) => {
  return (
    <div className='flex items-center justify-center min-h-screen w-screen'>
        <form className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4" action="" >
            
            <div className='mb-4'>
                <h1 className='font-bold text-2xl'>ETERNAL</h1>
            </div>

            <div>
                <div className='relative mb-4'>
                    <Mail className='absolute inset-y-1 left-2 text-gray-500' pointer-events-none />
                    <Input type='email' placeholder='Email' className='pl-10 focus-visible:ring-1'/>
                </div>
            </div>

            <div>
                <div className='relative mb-8'>
                    <LockKeyhole className='absolute inset-y-1 left-2 text-gray-500' pointer-events-none />
                    <Input type='password' placeholder='Password' className='pl-10 focus-visible:ring-1'/>
                </div>
            </div>

            <div className='mb-10'>
                <button className='w-full bg-orange hover:bg-hoverOrange rounded-lg'>
                    Login
                </button>
            </div>

        </form>
    </div>
  )
}

export default Login; 