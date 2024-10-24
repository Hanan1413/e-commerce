import React from 'react'
import { FormInput, SubmitBtn } from '../components';
import {Form, Link} from 'react-router-dom';

const Login = () => {

  return (
    <section className='h-screen grid place-items-center'>

      <Form  method='post' className=' card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
      <h4 className='text-center text-3xl font-bold'>Login</h4>
       <div className='mb-8'>
       <FormInput type='email' label='email' name='identifier' defaultValue='test@test'   />
       <FormInput  type='password' label='password' name='password' defaultValue='test@test'   />
       </div>
       <SubmitBtn text="login" />

        <button type="button" className=' btn border-black  bg-transparent py-2 px-4 rounded font-bold'>
        Gust User
      </button>
      <p className="text-center">
        Not a member yet ? <Link to='/register' className='ml-2 link link-hover link-primary capitalize'>Register</Link>
      </p>

      </Form>

     
    </section>
  )
}

export default Login
