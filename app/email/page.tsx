"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from '@/lib/sendEmail';
import Head from 'next/head';

export default function EmailForm() {
    const handleSubmit = async (formData: FormData) => {
        await sendEmail(formData);
    };

    return (
        <>
            <Head>
                <title>TheCasinoLoot - Best Online Exclusive Gambling Platform</title>
                <meta name="description" content="Experience exclusive online gambling at Casino Loot, the best online casino and gambling platform. Enjoy thrilling games, secure play and big wins anytime." />
            </Head>
            <section className='flex flex-col md:flex-row mx-0 p-0 min-h-screen relative'>
                <div className='flex-1 flex justify-center items-center p-0'>
                    <div 
                        className="absolute inset-0 bg-cover bg-center" 
                        style={{ 
                            backgroundImage: "url('https://images.pexels.com/photos/3808904/pexels-photo-3808904.jpeg?auto=compress&cs=tinysrgb&w=600')",
                            opacity: 0.3 
                        }} 
                    />
                </div>
                <div className='flex-1 flex justify-center items-center p-4 relative z-10'>
                    <form onSubmit={async (e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        await handleSubmit(formData);
                    }}>
                        <Tabs defaultValue="account" className="w-full">
                            <TabsContent value="account">
                                <Card className='bg-white shadow-lg rounded-lg'>
                                    <CardHeader>
                                        <CardTitle className='text-primary'>Contact</CardTitle>
                                        <CardDescription className='text-black'>
                                            We will get back to you as soon as possible
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <div className="space-y-1">
                                            <Label className='text-primary' htmlFor="name">Name</Label>
                                            <Input required name='name' id="name" placeholder='Name' className="border rounded-md p-2" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className='text-primary' htmlFor="senderEmail">Email</Label>
                                            <Input required type="email" name='senderEmail' id="senderEmail" placeholder='Email' className="border rounded-md p-2" />
                                        </div>
                                        <div className="space-y-3">
                                            <Label className='text-primary' htmlFor="message">Message</Label>
                                            <Textarea autoComplete='off' name='message' id='message' placeholder='Type your message here' className="border rounded-md p-2" />
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button type="submit" className="bg-primary hover:bg-secondary transition-colors">Submit</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </form>
                </div>
            </section>
        </>
    );
}
