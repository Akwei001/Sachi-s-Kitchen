"use client"

import {  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle  } from "@/components/ui/card"

  import { Button } from "@/components/ui/button"
  import Slider from "@/components/ui/Slider"
  import Image from "next/image"





export default function Home() {
  return (
    <main className="">
      <h1 className="text-lg">Sachis Kitchen</h1>
      {/*Showcase mouth-watering images of izakaya-inspired dishes with a welcome message. */}
      <Slider/>
      {/*Highlight the unique experience of Japanese street food at the pop-up restaurant.*/}
      <section className="grid grid-cols-2 m-auto ">
        
        <div className="border border-red-500">
          <h2 className="border border-red-500 ">Delicious</h2>
          <h1 className="border border-red-500 ">Experience the Authentic Flavours of Japanese Street Food</h1>
        <p className="border border-red-500 ">At our pop-up reatauranr, we offer a unique dining experience where you can indluge in the vibrant flavour of the world a Japanese Street food. Our menu is inspired by izakaya-style cuisine, featuring a variety of small plates and snacks that are perfevt for sharing. Whether you are a fan of Tempura or yakitori, our talented chefs prepare each dish with care and precision, ensuring bite is a burst of authentic Japanese flavours. Join us and embark on a culinary journey through the bustling streets of Japan. </p>
        <div className="border border-red-500 ">
          <h3 className="border border-red-500 ">Taste Japan</h3>
          <p className="border border-red-500 ">Savour the bold and unique flavours of Japanese Street food.</p>
        </div>
        <div className="border border-red-500 ">
          <h3 className="border border-red-500 ">Discover More</h3>
          <p>Explore our menu and experience the vibrant culinary cuture of Japan.</p>
        </div>
        <Button className="border border-red-500 ">
          <button>Menu</button>
          </Button>
        <Button className="border border-red-500 ">Reserve  + </Button>
        
      </div>
      <div className="border border-red-500 ">
        <Image src='/a_photo_of_gyoza.png'
        alt='a photo of gyoza'
        width={500}
        height={500}/>
      </div>
       
      </section>
      {/*Invite visitors to explore the menu and place an order for delivery or book a table.*/}
      <section>CTA Section</section>
      {/*Display logos of food delivery partners and event collaborators.*/}
      <section>Logo List Section</section>
      {/*Display logos of food delivery partners and event collaborators.*/}
      <section>Testimonial Section</section>
      {/*Share customer testimonials about the delicious food and vibrant atmosphere.*/}
      <section>Contact Section</section>
      {/*Provide contact information and encourage visitors to get in touch for events and inquiries.*/}
     
      
    </main>
  )
}
