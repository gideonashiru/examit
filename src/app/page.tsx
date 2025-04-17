import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! We&apos;re BlackJacK</Heading>
      <Paragraph className="max-w-xl mt-4">
      COMP 3350 -<Highlight> Software Engineering (University of Manitoba) </Highlight> A02-Group16
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Here is a list of our members:
        <ul>
          <li>Gideon Ashiru</li>
          <li>Dixon Hung Yiu Mui</li>
          <li>Rayan Kashif</li>
          <li>Aydin Ngong</li>
          <li>Kunhao Zhang</li>
        </ul>
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What we&apos;ve been working on
      </Heading>
      <Products />
    </Container>
  );
}
