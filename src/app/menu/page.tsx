import React from 'react'
import { menu } from '@/data'
import Link from 'next/link'
import { Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle  } from '@/components/ui/card'
  import { Button } from '@/components/ui/button'

const MenuPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-[100vh] md:h-[100vh]flex flex-col md:flex-row items-center'>
     {menu.map(category => (
     <Card key={category.id} className='bg-emerald-400'>
      <CardTitle>
        {category.title}
      </CardTitle>
      <CardDescription>
        {category.desc}
      
      </CardDescription>
        <Button>Explore</Button>
     </Card>
      ))}
     
    </div>
  )
}

export default MenuPage

{/* <div className='p-4 lg:px-20 xl:px-40 h-[100vh] md:h-[100vh]flex flex-col md:flex-row items-center '>
{menu.map(category=>(
  <> 
  <Card>
    <Link 
href={category.slug} 
key={category.id}
className='border border-red-500'
// style={{backgroundImage: `url(${category.color})`}}
>
<div className={`text-${category.color} w-12`}>
  <h1 className='text-3xl font-bold uppercase'>{category.title}</h1>
  <p className=''>{category.desc}</p>
  <button className={`hidden 2xl:block`}>Explore</button>
</div>
</Link>
</Card>
</>
 

))}
</div> */}