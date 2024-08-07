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

export default function ContactPage() {
    // Form submission handler
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(event.currentTarget);

        try {
            await sendEmail(formData);
            alert('Thanks for the message!');
            window.location.reload(); // Refresh the page
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <section className='mx-auto max-w-3xl px-4 py-16 sm:py-20 lg:max-w-4xl lg:px-8'>
            <div className='flex flex-col items-center justify-between gap-8 md:gap-12'>
                <div className='text-center mb-12'>
                    <h1 className='text-5xl font-extrabold text-primary mb-4'>
                        Get in Touch
                    </h1>
                    <p className='text-lg text-gray-700 leading-relaxed'>
                        We’re here to help! Fill out the form below to contact us. We will get back to you as soon as possible.
                    </p>
                </div>

                <div className='w-full'>
                    <form onSubmit={handleSubmit}>
                        <Tabs defaultValue="contact" className="py-2">
                            <TabsContent value="contact">
                                <Card className='bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 border border-transparent shadow-lg rounded-xl'>
                                    <CardHeader>
                                        <CardTitle className='text-primary text-3xl font-bold'>
                                            Contact Us
                                        </CardTitle>
                                        <CardDescription className='text-gray-800 text-sm'>
                                            Please leave your details and we’ll get back to you promptly.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4 p-6">
                                        <div className="space-y-2">
                                            <Label className='text-primary text-lg font-medium' htmlFor="name">Name</Label>
                                            <Input required name='name' id="name" placeholder='Your Name' className='border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary' />
                                        </div>

                                        <div className="space-y-2">
                                            <Label className='text-primary text-lg font-medium' htmlFor="email">Email</Label>
                                            <Input required name='senderEmail' id="email" placeholder='Your Email' className='border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary' />
                                        </div>

                                        <div className="space-y-2">
                                            <Label className='text-primary text-lg font-medium' htmlFor="message">Message</Label>
                                            <Textarea required name='message' id='message' placeholder='Type your message here' className='border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary' />
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button type='submit' className='w-full bg-primary text-white font-semibold shadow-md hover:bg-primary-dark transition-colors duration-300'>
                                            Send Message
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </form>
                </div>
            </div>
        </section>
    );
}
