import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import ErrorText from '../components/ErrorText';
import { useAppContext } from '../context/AppContext';
import Logo from '../images/wipdata-logo.png';
import { apiUrl } from '../Variables';

function ResetPassword() {

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const {register, handleSubmit, formState: {errors}} = useForm();
  const {userInfo} = useAppContext();

  const {id, token} = useParams();
  const navigate = useNavigate();

  console.log("id", `${apiUrl}/user/reset-password/${id}/${token}`)

  useEffect(() => {
    const fetchRestPass = async () => {
      const {data} = await axios.get(`${apiUrl}/user/reset-password/${id}/${token}`)
      console.log(data)
      setUser(data)
    }
    fetchRestPass()
  },[])

  const onSubmit = async (data) => {
    const {password, confirmPassword} = data;
    if(password !== confirmPassword) {
     return Swal.fire({
        title: "Error",
        html: "Password doesn't match!",
        icon: 'error'
      })
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        }
      }
      setLoading(true)
      const res = await axios.post(`${apiUrl}/user/reset-password/${id}/${token}`, {password})
      setLoading(false)
      if(res.data) {
        Swal.fire({
          title: "Success",
          html: "Your password successfully changed!",
          icon: 'success'
        })
        navigate('/login')
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  return (
    <>
      <div className="register-container">
          <div className="single-logo-wrapper">
            <Link to="/">
              <div className="single-logo">
                <img src={Logo} alt="logo" />
                <div className="logo-text">
                  <h2>WipData</h2>
                </div>
              </div>
            </Link>
          </div>

        {/* wrapper */}
        <div className="register-wrapper">
        
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-title">
              <h2>Reset password for <span className='email-span'>{user.email}</span></h2>
              <p>Set your new password, Keep in mind password and confirm must be same.</p>
            </div>

            {/* password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input className={errors.password?.message && "error-input"} {...register('password', {required: "password is required!"})} type="password" placeholder='password' id='password' />
              <ErrorText error={errors.password?.message} />
            </div>

            {/* confirm password */}
            <div className="form-group">
              <label htmlFor="email">Confirm Password</label>
              <input className={errors.confirmPassword?.message && "error-input"} {...register('confirmPassword', {required: "Confirm password is required!"})} type="password" placeholder='Confirm password' id='confirmPassword' />
              <ErrorText error={errors.confirmPassword?.message} />
            </div>

            <button type='submit' className='form-button'>
              Create Password
            </button>
          </form>
          
        </div>
      </div>
    </>
  )
}

export default ResetPassword