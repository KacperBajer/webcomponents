import ComponentOverlay from '@/components/ComponentOverlay'
import { components } from '@/lib/constants'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col p-4 gap-4 mx-auto max-w-screen-2xl'>

      <p className='text-center text-white text-3xl font-bold mb-4'>List of KB components</p>

      {components.map((item, index) => (
        <div key={index}>
          <p className='text-xl font-semibold text-white ml-1 mb-2'>{item.name}</p>
          <ComponentOverlay>
            {item.component}
          </ComponentOverlay>
        </div>
      ))}
    </div>
  )
}

export default page