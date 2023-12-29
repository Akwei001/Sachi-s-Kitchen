import React from 'react'
import { menu } from '@/data'
import Link from 'next/link'

const MenuPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-[100vh] md:h-[100vh]flex flex-col md:flex-row items-center '>
      {menu.map(category=>(
      <Link 
      href={category.slug} 
      key={category.id}
      className='border border-red-500'
      // style={{backgroundImage: `url(${category.color})`}}
      >
      <div className={`text-${category.color} w-12`}>
        <h1 className='text-3xl font-bold uppercase'>{category.title}</h1>
        <p className='my-8 text-sm'>{}</p>
        <button className={`hidden 2xl:block`}>Explore</button>
      </div>
      </Link>
      ))}
    </div>
  )
}

export default MenuPage