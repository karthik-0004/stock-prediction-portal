import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className='navbar container pt-3 pb-3 align-items-lg-start'>
        <Link className='navbar-brand text-light' to={"/"}>Stock Price prediction </Link>

        <div>
          <Button text="Login" url="/login" class="btn-outline-info" />
          <Button text="Register" url="/register" class="btn-info" />
        </div>
      </nav>

    </>
  )
}

export default Header