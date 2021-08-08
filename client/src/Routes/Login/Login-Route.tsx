import './login-style.css'

import Form from './Login-Form'

const LoginRoute = () => {
     return (
          <div
               id='login-route'
               className=' d-flex justify-content-center align-items-center'>
               <div className='card w-50'>
                    <div className='card-header fw-bold fs-3'>Login</div>

                    <Form.LoginForm />

                    <div className='button-container text-center m-3'>
                         <button
                              type='button'
                              className='btn btn-outline-secondary btn-lg fs-3'>
                              Login
                         </button>
                    </div>
               </div>
          </div>
     )
}

export default LoginRoute
