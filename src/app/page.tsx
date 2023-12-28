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
      <h1 className="text-lg ">Sachis Kitchen</h1>
      {/*Showcase mouth-watering images of izakaya-inspired dishes with a welcome message. */}
      <Slider/>
      {/*Highlight the unique experience of Japanese street food at the pop-up restaurant.*/}
      <section className="grid grid-cols-2 m-4 ">
        
        <div className="border border-red-500">
          <h2 className="mb-2 border border-red-500">Delicious</h2>
          <h1 className="mb-4 text-lg font-bold border border-red-500">Experience the Authentic Flavours of Japanese Street Food</h1>
        <p className="mb-10 border border-red-500 ">At our pop-up restaurant, we offer a unique dining experience where you can indluge in the vibrant flavour of the world a Japanese Street food. Our menu is inspired by izakaya-style cuisine, featuring a variety of small plates and snacks that are perfevt for sharing. Whether you are a fan of Tempura or yakitori, our talented chefs prepare each dish with care and precision, ensuring bite is a burst of authentic Japanese flavours. Join us and embark on a culinary journey through the bustling streets of Japan. </p>
        <div className="flex mb-6 border border-green-500">
          <div className="border border-red-500 ">
          <h3 className="font-semibold border border-red-500">Taste Japan</h3>
          <p className="border border-red-500 ">Savour the bold and unique flavours of Japanese Street food.</p>
        </div>
        <div className="border border-red-500 ">
          <h3 className="font-semibold border border-red-500 ">Discover More</h3>
          <p>Explore our menu and experience the vibrant culinary cuture of Japan.</p>
        </div>
        </div>
        
        <Button className="mr-2 border border-red-500 ">
          Menu
          </Button>
        <Button className="border border-red-500 ">
          Reserve  + 
          </Button>
        
      </div>
      <div className="flex justify-center border border-red-500 ">
        <Image src='/a_photo_of_gyoza.png'
        alt='a photo of gyoza'
        width={500}
        height={500}/>
      </div>
       
      </section>
      {/*Invite visitors to explore the menu and place an order for delivery or book a table.*/}
      <section>
        
        <div className="grid grid-cols-2 gap-4 pt-4 pb-4 m-4 border border-red-500" >
          <h1 className="text-lg font-bold border border-red-500 ">Delicious Japanese Street Food Experience</h1>
          <div className="border border-red-500 ">
            <p className="border border-red-500 ">Indulge in the flavours of authentic izakaya inspired Japanese street food. Order now for delivery or book for an forgettable dining experience</p>
            <div className="mt-4">            
            <Button className="mr-2">Explore</Button>
            <Button>Order</Button>
            </div>

          </div>
          
        </div>
      
      </section>
      {/*Display logos of food delivery partners and event collaborators.*/}
      <section className="grid justify-center grid-cols-3 m-4 font-extrabold border border-red-500">
        <div>Uber Eats</div>
        <div>Just Eat</div>
        <div>Deliveroo</div>
      </section>
     
      <section>
        <div className="flex justify-center border border-red-500">
        <p>The food at this pop-up restaurant is absoulutely amazing! Every dish is bursting with flavour and the atmosphere is lively and fun.</p>
        <p>John Doe</p>
        <p>Food Critic Foodie magazine</p>
        </div>
        
      </section>
      {/*Share customer testimonials about the delicious food and vibrant atmosphere.*/}

      <section className="flex justify-evenly ">
        <div className="border border-red-500 " >
          <div>Icon</div>
          <p>Email</p>
          <p>For any enquiries or event booking, please fill out the form below</p>
          <p>email@email.com</p>
        </div>
        <div className="border border-red-500 ">
          <div>Icon</div>
          <p>Email</p>
          <p>For any enquiries or event booking, please fill out the form below</p>
          <p>email@email.com</p>
        </div>
        <div className="border border-red-500 ">
          <div>Icon</div>
          <p>Email</p>
          <p>For any enquiries or event booking, please fill out the form below</p>
          <p>email@email.com</p>
        </div>
      </section>
      {/*Provide contact information and encourage visitors to get in touch for events and inquiries.*/}
     
      
    </main>
  )
}
