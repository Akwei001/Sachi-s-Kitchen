import React from 'react'
import { menu } from '@/data'
import Link from 'next/link'
import Image from 'next/image'
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
     
      <Card  
      key={category.id} className='bg-gray-400'>
      <CardTitle>
        {category.title}
      </CardTitle>
      <CardDescription>
        {category.desc}
      </CardDescription>
      <Image className=''
        src={category.img}
        alt='a photo of gyoza'
        width={100}
        height={100}/>
      <Link href={`/menu/category.slug`} >
        <Button className='px-4 py-2 text-red-500 rounded-md'>Explore</Button>
      </Link>
        
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