import {  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle  } from "@/components/ui/card"

  import { Button } from "@/components/ui/button"





export default function Home() {
  return (
    <main className="">
      <nav>
                                                                                                                    
        </nav>
      <h1 className="text-lg">Sachis Kitchen</h1>
      <div>Slider</div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>Card Content</CardContent>
          <CardFooter>Card Footer</CardFooter>
          <Button>Button</Button>
        </Card>
       
      </div>
    </main>
  )
}
