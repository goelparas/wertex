
import React from 'react'

const page = ({ searchParams }: { 
    searchParams: { [key: string]: string | string[] | undefined }
  }) => {
    const service = searchParams.name
    console.log(service)
  return (
    <div>page</div>
  )
}

export default page