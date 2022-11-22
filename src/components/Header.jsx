import React from 'react'

const Header = () => {
  return (
    <div className='bg-white border'>
        <div className='flex my-3 justify-between items-center w-11/12 mx-auto'>
            <div>
                <div className='w-10'>
                    <img src="./images/R.png" alt="not Found" className='h-full w-full'/>
                </div>
            </div>
            <div>
                <button className='border px-4 py-2 rounded-lg'>Say hello</button>
            </div>
        </div>
    </div>
  )
}

export default Header