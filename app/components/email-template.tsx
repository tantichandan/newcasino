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
  } from "@react-email/components";
  import * as React from "react";
  
  interface KoalaWelcomeEmailProps {
    name: string;
    
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://www.andromedadeal.com`
    : "";
  
  export const KoalaWelcomeEmail = ({
    name
  }: KoalaWelcomeEmailProps) => (
    <Html>
      <Head />
      <Preview>
        Welcome on board. Looking forward to serve you with some delicous meal
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/static/koala-logo.png`}
            width="170"
            height="50"
            alt="Koala"
            style={logo}
          />
          <Text style={paragraph}>Hi {name},</Text>
          <Text style={paragraph}>
            Welcome to Koala, the sales intelligence platform that helps you
            uncover qualified leads and close deals faster.
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href="https:www.andromedadeal.com">
              Get started
            </Button>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />
            The Koala team
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            Regards,
            Andromedadeal
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  KoalaWelcomeEmail.PreviewProps = {
    name: "name",
  } as KoalaWelcomeEmailProps;
  
  export default KoalaWelcomeEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const logo = {
    margin: "0 auto",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };
  
  const btnContainer = {
    textAlign: "center" as const,
  };
  
  const button = {
    backgroundColor: "#5F51E8",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "12px",
  };
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
  };
  