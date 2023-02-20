'use client' // Error components must be Client components

import { useEffect } from 'react'
import Button from '@/components/button/button'
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center text-center my-20  w-full h-[80vh]">
      <h2 className="text-3xl mb-5">Something went wrong!</h2>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  )
}
