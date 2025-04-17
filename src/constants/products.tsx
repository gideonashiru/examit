import examit1 from "public/images/examit-1.png";
import examit2 from "public/images/examit-2.png";

export const products = [
  {
    href: "https://code.cs.umanitoba.ca/comp3350-winter2025/a02-g16-blackjack",
    title: "Examit",
    description:
      "An Android app that helps students prepare for exams by providing a platform for them to create and share study materials.",
    thumbnail: examit1,
    images: [examit1, examit2],
    stack: ["Android", "Java", "XML", "HSQLDB", "Markwon", "Material Design 3"],
    slug: "examit",
    content: (
      <div>
        <section className="info-card">
          <h2>Project Overview</h2>
          <p><strong>ExamIt</strong> is a student-focused platform designed to help students actively learn through interactive flashcards, customizable study guides, and realistic mock tests. The platform also tracks performance and includes a gamified reward system to keep students engaged, motivated, and organized.</p>
        </section>

        <section className="info-card">
          <h2>Vision Statement</h2>
          <p>ExamIt is built to empower students through a dynamic and personalized learning experience. It supports creation of study materials, tracks performance trends, and motivates learners with achievement-based progression. The platform aims to make studying more effective and enjoyable, through simplicity, structure, and gamification.</p>

          <h4>Success Metrics</h4>
          <ul>
            <li>10,000+ registered users in year one</li>
            <li>80% user retention through one academic term</li>
            <li>Avg. 3 study activities/week per user</li>
            <li>60%+ user engagement with the rewards system</li>
            <li>85%+ user satisfaction in usability surveys</li>
          </ul>
        </section>

        <section className="info-card">
          <h2>Intended Users</h2>
          <ul>
            <li>University & college students seeking smart study tools</li>
            <li>High school students who benefit from structured revision</li>
            <li>Self-learners preparing for standardized tests or personal goals</li>
          </ul>
        </section>

        <section className="function-grid">
          <h2>Major Functionality</h2>
          <div className="function-card"><strong>Flashcards</strong><br />Create and review personalized flashcards</div>
          <div className="function-card"><strong>Study Guides</strong><br />Combine notes, flashcards, and resources</div>
          <div className="function-card"><strong>Mock Tests</strong><br />Practice with exam-like questions</div>
          <div className="function-card"><strong>Performance Tracking</strong><br />View your performance through rating</div>
          <div className="function-card"><strong>Gamified XP</strong><br />Earn experience points</div>
          <div className="function-card"><strong>Custom Material</strong><br />Author and organize study content by tags</div>
        </section>

        <div className="demo-button-wrapper text-center my-8">
          <a 
            href="/features" 
            className="inline-flex items-center gap-2 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-blue-600 text-white shadow-lg shadow-blue-500/20 sm:backdrop-blur-sm group-hover/button:bg-blue-700 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-blue-400/60 text-lg font-semibold px-6 py-3"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
            Watch Feature Demo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 group-hover/button:translate-x-0.5 transition-transform"
            >
              <path d="M5 12l14 0"></path>
              <path d="M13 18l6 -6"></path>
              <path d="M13 6l6 6"></path>
            </svg>
          </a>
        </div>

        <hr className="section-divider" />

        <section className="info-card focus-card">
          <h2>Development Process & Reflections</h2>
          <p>Here is a summary of our retrospectives and lessons learned during the development of ExamIt, including what went well, what challenges we faced, and what we would improve if starting again.</p>
        </section>

        <section className="reflection-cards">
          <div className="reflection-card">
            <h3>What Went Right</h3>
            <p>Splitting the project into separate source files and developing independently worked out great. Each person could work on different files, which prevented conflicts and made branch merging much easier.</p>
          </div>

          <div className="reflection-card">
            <h3>What Went Wrong</h3>
            <p>This strategy also had a downside — coordination between branches became very difficult. Since members didn&apos;t interact with each other&apos;s branches until merging, it was hard to know what others were working on or what would be required. This issue became more noticeable in Iteration 3 when distant branches had to be merged into <code>develop</code>.</p>
          </div>

          <div className="reflection-card">
            <h3>What Could&apos;ve Solved It</h3>
            <p>Before diving into branching, we should&apos;ve designed the structure together and agreed on interfaces for key classes. This way, everyone could expect consistent behavior without needing to see the implementation. We began trying this approach during the last week — and it worked well for aligning expectations.</p>
          </div>

          <div className="reflection-card">
            <h3>Change of Vision</h3>
            <p>Over time, some planned features were removed from the scope, such as the teacher role, achievement system, timers for mock tests, notes, and content sharing.</p>
          </div>

          <div className="reflection-card">
            <h3>What Took the Most Time?</h3>
            <p>The FlashCard feature took the most time. Our team decided to refactor after it was implemented and simultaneously tidy up parts of the logic layer — this resulted in it taking more time than expected.</p>
          </div>

          <div className="reflection-card">
            <h3>What We&apos;d Do Differently</h3>
            <p>If we had the chance to start over, we would create a mermaid diagram for each iteration. This would help teammates understand the flow and reduce repetition. We&apos;d also divide team responsibilities into layers — 1 person on the display layer, 2 on the business layer, and 2 on the data layer — allowing focused, parallel development and fewer merge issues.</p>
          </div>
        </section>

        <section className="info-card wide-reflection-card">
          <h2>Reflection on Vision, Challenges, and Lessons Learned</h2>
          <p>
            Since iteration 0, the scale of the project changed significantly as we discovered development constraints. While we implemented the core structure of the app, many initially planned features were removed due to complexity or time constraints — including user interaction and teacher accounts.
          </p>

          <p>
            Our strategy to divide the system into independent files worked well and minimized conflicts during merging. It allowed each team member to focus on their part of the project with minimal interruption or overlap.
          </p>

          <p>
            However, this separation also introduced challenges. Members often implemented similar logic independently in their own branches, leading to duplicated code in the final `develop` branch. This happened because we lacked a shared interface or upfront agreement on how components should interact.
          </p>

          <p>
            Moving forward, we learned that defining common interfaces early in development is essential. It helps ensure consistency across different parts of the system and reduces redundant work. In our final iteration, we successfully tried this by specifying expected interfaces in advance, which allowed teammates to implement their components independently — while still staying aligned.
          </p>
        </section>
      </div>
    ),
  },
];