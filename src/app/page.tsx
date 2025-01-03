import Link from 'next/link'
import React from 'react'
import NavBar from './components/NavBar'

const Home = () => {
  return (
<>
<div className='flex items-center justify-center'>

<div>
  <h1 className='font-bold'>

<Link href={"/blog"}>
Blog
</Link>
  </h1>
</div>
</div>

</>  )
}

export default Home