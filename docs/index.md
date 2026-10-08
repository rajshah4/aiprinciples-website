---
layout: page
titleTemplate: aiframer.dev
title: "AI Problem Framing"
description: "Frame AI projects, diagnose what breaks, and decide when to persist, pivot, or stop. Explore Rajiv Shah's method, worksheets, and free book."
---

<div class="af-home">

<section class="af-hero">
  <div>
    <div class="af-eyebrow">AI Problem Framing · Rajiv Shah</div>
    <h1>Your agent can build anything. <em>Is it building the right thing?</em></h1>
    <p class="af-hero__lede">With a coding agent, the first version takes an afternoon. The agent won't tell you whether you picked the right problem, whether your evals measure anything the business cares about, or when to stop tuning and change the plan. Those questions decide whether a project reaches production. I learned them across more than a hundred AI use cases, and this book is the method.</p>
    <div class="af-btn-row">
      <a class="af-btn af-btn--primary" href="/resources#the-ai-framing-worksheet">Start with the worksheet</a>
      <a class="af-btn af-btn--ghost" href="/book">About the book</a>
    </div>
    <div class="af-fineprint"><a href="https://github.com/rajshah4/ai-framing-skills/releases/download/book-2026-10/ai-problem-framing-book.pdf">Download the book</a> · Free under CC BY-NC 4.0</div>
  </div>
  <figure class="sketch">
    <img src="/images/sketches/signal-dashboard.jpg" alt="A hand-drawn instrument panel. The model accuracy gauge reads high with a green check, while the adoption gauge sits at zero with the word crickets underneath." width="1400" height="788">
  </figure>
</section>

<section class="af-section">
  <div class="af-book">
    <div class="af-book__cover">
      <a class="af-cover" href="/book" aria-label="About the book">
        <span class="af-cover__kicker">October 2026 edition</span>
        <span class="af-cover__title">AI Problem Framing</span>
        <span class="af-cover__sub">for AI Practitioners</span>
        <span class="af-cover__rule"></span>
        <span class="af-cover__goats">Goal<br>Operating assumptions<br>Alternatives<br>Trade-offs<br>Signals</span>
        <span class="af-cover__author">Rajiv Shah</span>
      </a>
    </div>
    <div class="af-book__body">
      <div class="af-eyebrow">The book</div>
      <h2>The framing layer above evals, frameworks, and architecture</h2>
      <p>Evals are the inner loop: did the model produce a good output. The outer loop, the harder one, is whether you framed the right problem at all. Most teams have a great inner loop and no outer loop. This book is the outer loop, drawn from more than a hundred AI use cases across traditional ML, generative AI, and agents.</p>
      <ol class="af-toc">
        <li><span class="af-toc__num">Chapter 1</span><span><strong>First Principles.</strong> <span class="af-toc__desc">Why projects fail, and the thinking habits that catch it early.</span></span></li>
        <li><span class="af-toc__num">Chapter 2</span><span><strong>Framing the Agent Task.</strong> <span class="af-toc__desc">The GOATS Loop end to end, on one project.</span></span></li>
        <li><span class="af-toc__num">Chapter 3</span><span><strong>Knowing If It's Working.</strong> <span class="af-toc__desc">Diagnostic tests for a system that's already running.</span></span></li>
        <li><span class="af-toc__num">Chapter 4</span><span><strong>The Decision Point.</strong> <span class="af-toc__desc">When to persist, pivot, or stop.</span></span></li>
        <li><span class="af-toc__num">Part 2</span><span><strong>Diagnostics in Depth.</strong> <span class="af-toc__desc">Separate sections for ML, GenAI, and agents.</span></span></li>
        <li><span class="af-toc__num">Appendix</span><span><strong>The four artifacts.</strong> <span class="af-toc__desc">The one-page documents the method produces, filled in.</span></span></li>
      </ol>
      <div class="af-btn-row">
        <a class="af-btn af-btn--primary" href="https://github.com/rajshah4/ai-framing-skills/releases/download/book-2026-10/ai-problem-framing-book.pdf">Download the free PDF</a>
        <a class="af-btn af-btn--ghost" href="/book">More about the book</a>
      </div>
    </div>
  </div>
</section>

<section class="af-section">
  <div class="af-section__head">
    <div class="af-eyebrow">The method</div>
    <h2>Frame it, diagnose it, then decide</h2>
    <p>The same questions work for a churn model, a RAG bot, and an autonomous agent. What changes from one to the next is the tactics inside each stage.</p>
  </div>
  <div class="af-stages">
    <div class="af-stage">
      <figure class="sketch"><img src="/images/sketches/goats-loop.jpg" alt="The GOATS Loop drawn as five stacked boxes: Goal, Operating assumptions, Alternatives, Trade-offs, Signals." loading="lazy" width="1400" height="788"></figure>
      <div class="af-stage__num">01 · Frame</div>
      <h3>The GOATS Loop</h3>
      <p>Five questions to answer in order before you build: the goal, what has to be true, what else could work, how you'll choose, and how you'll know you're wrong.</p>
    </div>
    <div class="af-stage">
      <figure class="sketch"><img src="/images/sketches/diagnostic-map.jpg" alt="The diagnostic map: tools and tests grouped under three questions, is there signal, is there cheating, and is the metric real." loading="lazy" width="1400" height="788"></figure>
      <div class="af-stage__num">02 · Diagnose</div>
      <h3>Three questions, in order</h3>
      <p>Is there signal? Is the system cheating? Is the metric real? Each answer traces back to the assumption that broke, which tells you whether to tune the model or change the frame.</p>
    </div>
    <div class="af-stage">
      <figure class="sketch"><img src="/images/sketches/decision-map.jpg" alt="The decision map: signals flow into tune, pivot, or stop, then into five reframing moves, a shipping check, and how to tell the organization." loading="lazy" width="1400" height="788"></figure>
      <div class="af-stage__num">03 · Decide</div>
      <h3>Persist, pivot, or stop</h3>
      <p>Make the call against a stop criterion you wrote down before launch. When the answer is pivot, five reframing moves cover most of what teams actually change.</p>
    </div>
  </div>
  <p style="margin-top:2.5rem"><a class="af-more" href="/framework">Read the method in full →</a></p>
</section>

<section class="af-section">
  <div class="af-section__head">
    <div class="af-eyebrow">Tools</div>
    <h2>Print these for your next kickoff</h2>
    <p>Short, printable versions of the method. No email wall.</p>
  </div>
  <div class="af-shelf">
    <a class="af-shelf-item" href="/downloads/ai-framing-worksheet.pdf">
      <div class="af-shelf-item__thumb"><img src="/images/shelf/ai-framing-worksheet.jpg" alt="First page of the AI Framing Worksheet" loading="lazy"></div>
      <div class="af-shelf-item__title">AI Framing Worksheet</div>
      <div class="af-shelf-item__desc">The eight questions to answer before you scope an AI project.</div>
      <div class="af-shelf-item__tag">PDF · 1 page</div>
    </a>
    <a class="af-shelf-item" href="/downloads/goats-loop-cheat-sheet.pdf">
      <div class="af-shelf-item__thumb"><img src="/images/shelf/goats-loop-cheat-sheet.jpg" alt="First page of the GOATS Loop quick reference" loading="lazy"></div>
      <div class="af-shelf-item__title">GOATS Loop cheat sheet</div>
      <div class="af-shelf-item__desc">Each step's questions, outputs, and the red flags that mean you skipped it.</div>
      <div class="af-shelf-item__tag">PDF · 4 pages</div>
    </a>
    <a class="af-shelf-item" href="/downloads/signals-canvas.pdf">
      <div class="af-shelf-item__thumb"><img src="/images/shelf/signals-canvas.jpg" alt="First page of the Signals Canvas" loading="lazy"></div>
      <div class="af-shelf-item__title">Signals Canvas</div>
      <div class="af-shelf-item__desc">Agree on success, stop, and early-warning signals with stakeholders before launch.</div>
      <div class="af-shelf-item__tag">PDF · 1 page</div>
    </a>
    <a class="af-shelf-item" href="/downloads/in-the-moment-reframing.pdf">
      <div class="af-shelf-item__thumb"><img src="/images/shelf/in-the-moment-reframing.jpg" alt="First page of In-the-Moment Reframing" loading="lazy"></div>
      <div class="af-shelf-item__title">In-the-Moment Reframing</div>
      <div class="af-shelf-item__desc">What to say when someone hands you a vague AI request and a deadline.</div>
      <div class="af-shelf-item__tag">PDF · 2 pages</div>
    </a>
  </div>
  <div class="af-skills-strip">
    <div>
      <h3>Run the method on your own project</h3>
      <p>I turned the book into two free skills for Claude Code and other coding agents. <code>frame-use-case</code> interviews you before you build. <code>diagnose-use-case</code> works on a system that's struggling, and it is allowed to tell you to stop.</p>
    </div>
    <a class="af-btn af-btn--ghost" href="/skills">Get the skills</a>
  </div>
</section>

<section class="af-section">
  <div class="af-section__head">
    <div class="af-eyebrow">Talks</div>
    <h2>Watch it before you read it</h2>
    <p>Three short talks that cover the whole arc, from the framing questions to what your evals are missing.</p>
  </div>
  <div class="video-grid">
    <a class="video-card" href="https://www.youtube.com/watch?v=21K0wmY1Kmk">
      <img src="/images/videos/before-you-build.jpg" alt="Don't build yet. Rajiv Shah raises his hand in a stop gesture." loading="lazy">
      <strong>Before You Build an AI Project, Answer These 3 Questions</strong>
      <span>Test the decision, the approach, and the evidence before you commit to the build.</span>
    </a>
    <a class="video-card" href="https://www.youtube.com/watch?v=6fu_vJrGmyc">
      <img src="/images/videos/wrong-signal.jpg" alt="Wrong signal. Strong evaluation results conflict with a declining real-world signal." loading="lazy">
      <strong>Your AI Evals Passed. Your Project Can Still Fail.</strong>
      <span>Good model metrics don't tell you whether the project is helping users.</span>
    </a>
    <a class="video-card" href="https://www.youtube.com/watch?v=hVaXOHgKTHA">
      <img src="/images/videos/never-says-no.jpg" alt="Never says no. Rajiv Shah questions a stream of approval messages." loading="lazy">
      <strong>ChatGPT Loves Your AI Idea. That's the Problem.</strong>
      <span>The same project run through ChatGPT and through a framing skill built to ask what the chatbot skips.</span>
    </a>
  </div>
  <p><a class="af-more" href="/talks">All talks →</a></p>
</section>

<section class="af-section">
  <div class="af-section__head">
    <div class="af-eyebrow">Work with me</div>
    <h2>Bring a real project</h2>
    <p>The book teaches the questions. Getting good at answering them takes practice on a project with real stakes, with someone pushing back.</p>
  </div>
  <div class="af-work">
    <div class="af-work__card">
      <div class="af-eyebrow">Maven cohort · 4 weeks</div>
      <h3>AI Problem Framing</h3>
      <p>You bring a project and run it through each stage in live sessions, with recorded lessons, worksheets, and a database of 200+ AI case studies. Students rate it 4.9 on Maven.</p>
      <div class="af-btn-row"><a class="af-btn af-btn--primary" href="/course">About the cohort</a></div>
    </div>
    <div class="af-work__card">
      <div class="af-eyebrow">Private · half day, remote</div>
      <h3>Team workshops</h3>
      <p>One team, its own projects, run privately so people can put confidential details on the table. The team leaves with a shared process it reuses on every project after.</p>
      <div class="af-btn-row"><a class="af-btn af-btn--ghost" href="/workshops">About workshops</a></div>
    </div>
  </div>
  <blockquote class="af-quote">
    <p>“We are all becoming AI managers, which means our decision-making skills are our most valuable (and marketable) skills. This course hones those within the context of applied AI.”</p>
    <cite>Chad Harness, Head of Technical Enablement, Snorkel AI</cite>
  </blockquote>
</section>

</div>
