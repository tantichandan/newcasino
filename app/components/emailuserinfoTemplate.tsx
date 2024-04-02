import React from 'react'
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Heading
} from "@react-email/components";

import { Tailwind } from '@react-email/components';



type ContactFormEmailProps = {
  message: string
  name: string
  senderEmail: string
}

export default function emailuserinfoTemplate({
  message,
  name,
  senderEmail,
}:ContactFormEmailProps )  {
  return <html>

    <Head/>
    <Preview>
      New message from your website
    </Preview>

    <Tailwind>
      <Body>
        <Container>
          <Section>
            <Heading> You have received a message from yoru site from {name} </Heading>

            <Text> {message}</Text>
            <Hr/>
            <Text>The sender's email is: {senderEmail}</Text>
          </Section>
        </Container>

      </Body>
    </Tailwind>

  </html>
}
