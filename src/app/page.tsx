"use client"

import {  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle  } from "@/components/ui/card"

  import { Button } from "@/components/ui/button"
  import Slider from "@/components/ui/Slider"





export default function Home() {
  return (
    <main className="">
      <h1 className="text-lg">Sachis Kitchen</h1>
      {/*Showcase mouth-watering images of izakaya-inspired dishes with a welcome message. */}
      <Slider/>
      {/*Highlight the unique experience of Japanese street food at the pop-up restaurant.*/}
      <section>Feature Section</section>
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
