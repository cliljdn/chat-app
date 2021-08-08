import { FunctionComponent } from 'react'
interface LoginContent {
     LoginForm: FunctionComponent
     RegisterForm: FunctionComponent
}

const LoginForm = () => {
     return (
          <div className='card-body'>
               <div className='mb-3'>
                    <label className='form-label fw-bold'>Email address</label>
                    <input
                         type='email'
                         className='form-control'
                         placeholder='name@example.com'
                    />
               </div>

               <div className='mb-3'>
                    <label className='form-label fw-bold'>Password</label>
                    <input
                         type='password'
                         className='form-control'
                         placeholder='Password must have 1 Capital letter and number'
                    />
               </div>
               <span>
                    don't have an account? <a href='/'>Sign Up</a>
               </span>
          </div>
     )
}

const RegisterForm = () => {
     return (
          <div className='card-body'>
               <div className='mb-3'>
                    <label className='form-label fw-bold'>Email address</label>
                    <input
                         type='email'
                         className='form-control'
                         placeholder='name@example.com'
                    />
               </div>

               <div className='mb-3'>
                    <label className='form-label fw-bold'>Password</label>
                    <input
                         type='password'
                         className='form-control'
                         placeholder='Password must have 1 Capital letter and number'
                    />
               </div>

               <div className='mb-3'>
                    <label className='form-label fw-bold'>
                         Re-type Password
                    </label>
                    <input
                         type='password'
                         className='form-control'
                         placeholder='name@example.com'
                    />
               </div>
          </div>
     )
}

const content: LoginContent = {
     LoginForm,
     RegisterForm,
}

export default content
