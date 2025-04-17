import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";

import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | BlackJack",
  description:
    "About the students behing BlackJack, what we learnt at the end of this project",
};

export default function AboutPage() {

  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">About Us</Heading>
      <About />
    </Container>
  );
}
