import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>

      <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
            <h1 className='text-light'>Stock prediction portal</h1>
            <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sit, tempore dolorem officia aliquam non ea fugiat. Sapiente iste iusto quasi suscipit corrupti, dignissimos repellendus minus et, explicabo maxime repudiandae!</p>
            <Button text="Explore Now" url="/login" class="btn-outline-info" url="/dashboard" />
        </div>
      </div>

    </>
  )
}

export default Main