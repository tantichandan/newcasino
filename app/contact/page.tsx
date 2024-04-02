import Image from 'next/image'
import React from 'react'
import { client, urlFor } from '../lib/sanity'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import { Textarea } from "@/components/ui/textarea"




async function getData() {
    const query = "*[_type == 'heroimage'][0]"

    const data = await client.fetch(query)

    return data;
}

export default async function Hero() {

    const data = await getData()
    return (
        <section className='mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8'>

            <div className='mb-8 flex flex-col justify-between md:mb-16'>




                <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
                    <div className='flex justify-evenly h-12 w-64 divide-x overflow-hidden rounded-lg border'>
                        <Link href="/Aus" className='flex w-1/2 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>

                            Aus

                        </Link>
                        <Link href="/UK" className='flex w-1/2 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>

                            UK

                        </Link>
                        <Link href="/US" className='flex w-1/2 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>

                            US

                        </Link>
                        <Link href="/Deposit" className='flex w-1/2 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>

                            Dep

                        </Link>
                        <Link href="/Free" className='flex w-3/4 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>

                            ND

                        </Link>

                        <Link href="/Blog" className='flex w-3/4 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>

                            Blog

                        </Link>

                        <Link href="/allproduct" className='flex w-3/4 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>

                            All

                        </Link>

                    </div>

                </div>

                <div>

                <Tabs defaultValue="account" className=" md:w-[400px] py-2">
                    
                    <TabsContent value="account">
                        <Card className='bg bg-emerald-400'>
                            <CardHeader>
                                <CardTitle className='text-primary'>Contact</CardTitle>
                                <CardDescription>
                                    We will get back to you as soon as possible
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label className='text-primary' htmlFor="name">Name</Label>
                                    <Input id="name" defaultValue="Pedro Duarte" />
                                </div>
                                <div className="space-y-1">
                                    <Label className='text-primary' htmlFor="Email">Email</Label>
                                    <Input id="username" defaultValue="@peduarte" />
                                </div>

                                <div className="space-y-3">
                                    <Label className='text-primary' htmlFor="Message">Message</Label>
                                    <Textarea id='textarea' placeholder='Type your message here'/>
                                    
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Submit</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    
                </Tabs>

            </div>


            </div>

            


        </section>
    )
}
