'use client'

import { useState } from 'react'

export default function Counter() {
  const [counter, setCounter] = useState<number>(0)

  const incrementCounter = () => {
    setCounter(prev => prev + 1)
  }

  const resetCounter = () => {
    setCounter(0)
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-8 w-full max-w-4xl">
      <p className="text-xl font-semibold text-pink-600 bg-pink-100 px-4 py-2 rounded">
        Counter: {counter}
      </p>
      <button
        onClick={incrementCounter}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Increment
      </button>
      <button
        onClick={resetCounter}
        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
      >
        Reset
      </button>
    </div>
  )
}
