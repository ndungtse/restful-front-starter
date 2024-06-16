import { setCookie } from '@/utils/funcs/cookies'
import { Button, PasswordInput, TextInput, rem } from '@mantine/core'
import { useForm } from '@mantine/form'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Login = () => {
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

  const onSubmit = async (values: typeof form.values) => {
    console.log(values)
    try {
      setCookie('token', 'token', {
        expires: 24 * 60 * 60 * 1000
      });
      window.location.href = '/dashboard'
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full bg-secondary min-h-screen overflow-hidden flex-1 items-center justify-center flex flex-col relative">
      <div className="w-[20%] h-[20%] bottom-0 left-0 absolute bg-indigo-500 rounded-full blur-[550px]" />
      <div className="w-[20%] h-[20%] right-0 top-0 absolute bg-indigo-500 rounded-full blur-[550px]" />
      <form onSubmit={form.onSubmit((values) => onSubmit(values))} className='flex w-full gap-y-2 max-w-lg flex-col px-14 rounded-lg bg-white p-8'>
        <h1 className=' text-center text-lg font-semibold'>Log in to your account</h1>
        <TextInput size='md' withAsterisk label="Email" className='mt-3' placeholder="Email" {...form.getInputProps('email')}
          key={form.key('email')}
        />
        <PasswordInput size='md' withAsterisk visibilityToggleIcon={({ reveal }) => reveal ? <FaEye /> : <FaEyeSlash />} type='password' label="Password" className='mt-2' placeholder="Password" {...form.getInputProps('password')}
          key={form.key('password')}
        />
        <Button mt={rem(20)} className='py-2' size='md' type="submit">Login</Button>
        <p className='text-center mt-5'>Don't have an account? <Link className=' text-primary' to='/auth/register'>Register</Link></p>
      </form>
    </div>
  )
}

export default Login