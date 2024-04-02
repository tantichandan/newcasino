"use client"


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
import {Resend} from 'resend'
import KoalaWelcomeEmailProps from '../components/email-template'
import { sendEmail } from '@/lib/sendEmail'


export default async function email() {


    
    return (
        <section className='mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8'>

            <div className='mb-8 flex flex-col justify-between md:mb-16'>




                <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
                   

                </div>

                <div>

                    <form action={async formData =>{

                        await sendEmail(formData)

                    }}>
                    <Tabs defaultValue="account" className=" md:w-[400px] py-2">
                    
                    <TabsContent value="account">
                        <Card className='bg bg-emerald-400'>
                            <CardHeader>
                                <CardTitle className='text-primary'>Contact</CardTitle>
                                <CardDescription className='text-black'>
                                    We will get back to you as soon as possible
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">

                            <div className="space-y-1">
                                    <Label className='text-primary' htmlFor="Email">Name</Label>
                                    <Input  required name='name' id="name" defaultValue="@peduarte" />
                                </div>
                               
                                <div className="space-y-1">
                                    <Label className='text-primary' htmlFor="Email">Email</Label>
                                    <Input  required name='senderEmail' id="username" defaultValue="@peduarte" />
                                </div>

                                <div className="space-y-3">
                                    <Label className='text-primary' htmlFor="Message">Message</Label>
                                    <Textarea autoComplete='message' name='message' id='textarea' placeholder='Type your message here'/>
                                    
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Submit</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    
                </Tabs>
                    </form>

               

            </div>


            </div>

            


        </section>
    )
}
