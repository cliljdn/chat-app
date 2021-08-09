import './register-style.css'
import { Link } from 'react-router-dom'

const LoginRoute = () => {
     return (
          <div
               id='register-route'
               className=' d-flex justify-content-center align-items-center'>
               <div className='card w-50'>
                    <div className='card-header fw-bold fs-3'>Login</div>
                    <div className='card-body'>
                         <div className='mb-3'>
                              <label className='form-label fw-bold'>
                                   Email address
                              </label>
                              <input
                                   type='email'
                                   className='form-control'
                                   placeholder='name@example.com'
                              />
                         </div>

                         <div className='mb-3'>
                              <label className='form-label fw-bold'>
                                   Password
                              </label>
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
                         <span>
                              Back to Login? <Link to='/'>Login</Link>
                         </span>
                         <div className='button-container text-center m-3'>
                              <button
                                   type='button'
                                   className='btn btn-outline-secondary btn-lg fs-3'>
                                   Register
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default LoginRoute
