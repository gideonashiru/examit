"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {

  return (
    <div>


      <div className="max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">Contributors & Skills Gained</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="team-card focus-card bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Rayan Kashif</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Learned Android Studio for mobile development</li>
              <li>Gained hands-on experience with Git version control</li>
              <li>Understood teamwork and collaboration in real projects</li>
              <li>Learned the value of retrospectives and sprint planning</li>
              <li>Saw how iterative development improves project quality</li>
            </ul>
          </div>

          <div className="team-card focus-card bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Aydin Ngo</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Learned to use Android Studio and Android Views to create XML layouts for mobile applications</li>
              <li>Worked effectively in an Agile development environment</li>
              <li>Practiced unit testing using libraries such as JUnit and Espresso</li>
              <li>Studied and applied various design patterns to write cleaner, maintainable code</li>
              <li>Developed skills in identifying and fixing SOLID principle violations</li>
            </ul>
          </div>

          <div className="team-card focus-card bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Kunhao Zhang</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Learned Android Studio and Android application development</li>
              <li>Learned about tests in Android and JUnit framework</li>
              <li>Learned about in-memory database</li>
              <li>Gained more experience working with Git version control system</li>
              <li>Learned how to better coordinate different parts of development</li>
            </ul>
          </div>

          <div className="team-card focus-card bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Dixon</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Learned to use Android Studio for mobile development</li>
              <li>Gained experience with Git version control for project collaboration</li>
              <li>Practiced writing unit tests using JUnit</li>
              <li>Developed good coding habits by following SOLID principles</li>
              <li>Encountered and understood technical debt in real-world scenarios</li>
              <li>Learned how to collaborate effectively with teammates in a team environment</li>
              <li>Implemented database functionality to support persistent storage</li>
              <li>Connected the UI with the logic layer to create fully functional features</li>
            </ul>
          </div>

          <div className="team-card focus-card bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Gideon</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Learned to write clean and efficient code by separating concerns across architecture layers (data, logic, and UI)</li>
              <li>Developed Android Studio skills, including Activity syntax and designing XML UI layouts using Views and Layouts</li>
              <li>Handled local data storage by implementing solutions using HSQLSB</li>
              <li>Gained experience in testing and debugging using Logcat to analyze runtime issues</li>
              <li>Learned to write unit tests using JUnit, Espresso, and Mockito</li>
              <li>Practiced Agile sprint planning and applied design sprint methodologies</li>
              <li>Improved collaboration, communication, and version control workflows using GitLab</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
