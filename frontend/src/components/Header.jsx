import {useContext} from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'
import {useNavigate} from 'react-router-dom'

const Header = () => {
  const{isLoggedIn,setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const handlelogout = () =>{
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    navigate('/login')
  }
  return (
    <>
      <nav className='navbar container pt-3 pb-3 align-items-lg-start'>
        <Link className='navbar-brand text-light' to={"/"}>Stock Price prediction </Link>

        <div>
          {isLoggedIn ? (
            <button className='btn btn-danger' onClick={handlelogout}>Logout</button>
          ) : (
            <>
            <Button text="Login" url="/login" class="btn-outline-info" />
            <Button text="Register" url="/register" class="btn-info" />
            </>
          )}
        </div>
      </nav>

    </>
  )
}

export default Header