import React from 'react'

function Morebtn(prop) {
  return (
    <div className='my-8'>
        <button className='p-2 tracking-widest text-white bg-green-500 rounded-2xl'>
            {prop.action}
        </button>
    </div>
  )
}

export default Morebtn