import React from 'react';

export default function FeaturesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="video-section enhanced-demo">
        <h2 className="text-2xl font-bold mb-4">Feature Demonstration</h2>
        
        <p className="demo-intro mb-4">
          Explore the core features of <strong>ExamIt</strong> through this quick walkthrough. 
        </p>

        <ul className="demo-feature-list mb-6 list-disc ml-6">
          <li>Creating and using flashcards</li>
          <li>Making custom study guides</li>
          <li>Taking mock tests</li>
          <li>Earning XP through the rewards system</li>
          <li>Viewing progress tracking visuals</li>
        </ul>
        
        <div className="relative w-full max-w-3xl mx-auto" style={{ paddingBottom: '56.25%' }}>
          <video 
            controls 
            preload="metadata"
            className="absolute inset-0 w-full h-full rounded-lg shadow-lg object-contain bg-black">
            <source src="/videos/demo.mp4#t=0,60" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="demo-button-wrapper mt-8 text-center">
        <a
        href={"/projects/examit"}
        target="__blank"
        className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-auto origin-left"
      >
        Back to Examit
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
        >
          <path d="M5 12l14 0"></path>
          <path d="M13 18l6 -6"></path>
          <path d="M13 6l6 6"></path>
        </svg>
      </a>
        </div>
      </section>
    </main>
  );
} 