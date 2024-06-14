import React from 'react'
import { useForm } from '@mantine/form'
import { TextInput, PasswordInput, Button, rem } from '@mantine/core'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { FlipWords } from '@/components/ui/flip-words'

const Register = () => {
  const form = useForm({
    mode: 'controlled',
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 6 ? 'Password must be at least 6 characters long' : null),
    },
  })

  const words = ['Journey', 'Dream', 'Discovery', 'Travel'];

  return (
    <div className=' w-full flex min-h-screen'>
      <div className="w-1/2 min-h-screen overflow-hidden flex-1 p-2 items-center justify-center flex flex-col relative">
        <div className="w-[379px] h-[379px] left-0 top-[765px] absolute bg-indigo-500 rounded-full blur-[550px]" />
        <div className="w-[379px] h-[379px] left-[585px] top-[-136px] absolute bg-indigo-500 rounded-full blur-[550px]" />
        <span className=' text-4xl leading-relaxed max-w-2xl'>Welcome. Start your <FlipWords className=' font-bold !text-primary' words={words} /> now with our management system!</span>
      </div>
      <div className="w-1/2 flex flex-col min-h-screen justify-center items-center">
        <form onSubmit={form.onSubmit((values) => console.log(values))} className='flex gap-y-3 w-full max-w-lg flex-col px-14 rounded-lg bg-white p-8'>
          <h1 className=' text-start text-2xl font-semibold'>Create An account</h1>
          <TextInput size='md' withAsterisk label="Email" className='mt-3' placeholder="Email" {...form.getInputProps('email')}
            key={form.key('email')}
          />
          <PasswordInput size='md' withAsterisk visibilityToggleIcon={({ reveal }) => reveal ? <FaEye /> : <FaEyeSlash />} type='password' label="Password" className='mt-2' placeholder="Password" {...form.getInputProps('password')}
            key={form.key('password')}
          />
          <Button mt={rem(28)} className='py-2' size='md' type="submit">Create Account</Button>
          <p className='text-center mt-11'>Already have an account? <Link className=' text-primary' to='/auth/login'>Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register