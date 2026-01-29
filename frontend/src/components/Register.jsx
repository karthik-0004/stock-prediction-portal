import { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, seterrors] = useState({})
  const[success, setsuccess] = useState(false)
  const[loading, setloading] = useState(false)

  const handleregistration = async (e) => {
    e.preventDefault()
    setloading(true)

    const userData = {
      username,
      email,
      password,
    }

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/v1/register/',
        userData
      )
      console.log('response.data =>', response.data)
      console.log('success')
      seterrors({})
      setsuccess(true)
    } catch (error) {
        seterrors(error.response.data)
        console.error('backend not reachable',error.response.data)
    }
    finally{
        setloading(false)
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 bg-light-dark p-5 rounded">
          <h3 className="text-light text-center mb-4">
            Create an account
          </h3>

          <form onSubmit={handleregistration}>
            <div className='mb-3'>
                <input
                type="text"
                className="form-control "
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <small>{errors.username && <div className='text-danger'>{errors.username} </div>}</small>
            </div>
            
            <div className='mb-3'>
                <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className='mb-3'>
                <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

            </div>

            {success && (
            <div className="alert alert-success">
                Registration Done
            </div>
            )}
            {loading ? (
                <button
                type="submit"
                className="btn btn-info d-block mx-auto" disabled
                >
                Please Wait
                </button>
            ) : (
                <button
                type="submit"
                className="btn btn-info d-block mx-auto"
                >
                Register
                </button>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
