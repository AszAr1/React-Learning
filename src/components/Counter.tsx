import React, { ReactNode } from 'react'

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>,
  children: ReactNode
}

export const Counter = ({setCount, children}: CounterProps) => {
  return (
    <>
      <h1>{children}</h1>
      <button className='w-6 m-1 text-black border-2 border-gray-700 bg-slate-500' onClick={() => setCount(prev => prev + 1)}>+</button>
      <button className='w-6 m-1 text-black border-2 border-gray-700 bg-slate-500' onClick={() => setCount(prev => prev - 1)}>-</button>
    </>
  )
}