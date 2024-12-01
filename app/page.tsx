import Image from "next/image";
import HeaderButton from "./components/HeaderButton"; 
import Section from "./components/Section"; 
import Team from "./components/Team";
import sectionsDataRaw from "./data/sections.json"; 
import peopleDataRaw from "./data/people.json";
import type { Person } from "./components/Team";

// Import people json data
const people: Person[] = peopleDataRaw.map((person) => ({
  name: person.name,
  role: person.role,
  imageUrl: person.imageURL,
}));

// Interfaces for sections.json
export interface Block {
  title: string;
  items: string[];
}
export interface ContentBlock {
  type: "text" | "blocks";
  textContent?: string;
  blocks?: Block[];
}
export interface SectionData {
  id: string;
  title: string;
  content: ContentBlock[];
}

// Type the imported JSON data
const sectionsData: SectionData[] = sectionsDataRaw as SectionData[];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Sticky Navigation Buttons */}
      <div className="sticky top-0 z-50 bg-white shadow-md flex items-center justify-center px-6 py-4">
        {/* Logo */}
        <div className="absolute left-6 flex items-center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Charles_Schwab_Corporation_logo.svg"
            alt="Home"
            width={40}
            height={40}
            priority
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 items-center flex-wrap justify-center">
          <HeaderButton text="Home" href="" />
          {sectionsData.map((section) => (
            <HeaderButton
              key={section.id}
              text={section.title}
              href={section.id}
            />
          ))}
        </div>
      </div>

      {/* Title Page Section */}
      <section className="flex flex-col justify-center items-center h-screen bg-white px-6 sm:px-16">
        <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-8 mb-8">
          {/* Logo */}
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Charles_Schwab_Corporation_logo.svg"
            alt="Schwab logo"
            width={200}
            height={200}
            priority
          />
          {/* Company Name and Ticker */}
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Charles Schwab Corporation
            </h1>
            <p className="mt-2 text-2xl sm:text-3xl">NYSE: SCHW</p>
          </div>
        </div>

        {/* Horizontal Rule Line */}
        <hr className="my-8 w-full border-t border-gray-200" />

        {/* Team Section */}
        <div className="w-full">
          <Team people={people} />
        </div>
      </section>

      {/* Render Sections */}
      {sectionsData.map((section) => (
        <Section
          key={section.id}
          id={section.id}
          title={section.title}
          content={section.content}
        />
      ))}
    </div>
  );
}
