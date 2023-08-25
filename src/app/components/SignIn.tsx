"use client"
import { guestSignIn } from '@/store/features/userSlice'
import { useAppDispatch,useAppSelector } from '@/store/hook'
import Image from 'next/image' 
import React from 'react'
import  {useRouter}from 'next/navigation'

const SignIn = () => {
  const navigate=useRouter();
  const  isSign=useAppSelector(state=>state.user.isSign);
  if(isSign){
    navigate.push("/");
  }
  const dispatch=useAppDispatch();
  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <Image className="mx-auto h-10 w-auto" src="/../favicon.ico" height={50} width={50} alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">

    <div>
        <div className="flex items-center justify-between">
          <label htmlFor="full_name" className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
        </div>
        <div className="mt-2">
          <input id="full_name" name="full_name" type="text" autoComplete="full_name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    {/* <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <Link href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Sign Up</Link>
    </p> */}
    <p className="mt-10 text-center text-sm text-gray-500">
      or  
      <button  onClick={()=>{
      dispatch(guestSignIn())
      }} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> try Guest Sign In</button>
    </p>
  </div>
</div>
  )
}

export default SignIn