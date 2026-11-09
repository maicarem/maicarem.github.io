---
layout: about
title: about
permalink: /
subtitle: <a href='https://www.ise.ufl.edu/'>University of Florida</a>. PhD Candidate in Operations Research

profile:
  align: right
  image: profile_picture.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>PhD Candidate in Operations Research</p>
    University of Florida</p>
    <p>Gainesville, FL, 32611</p>
selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: false # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: false # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

**Email:** truong.anh [at] ufl [dot] edu

Hello, hello!

I’m Anh Truong, a Ph.D. Candidate in Operations Research in the <a href='https://www.ise.ufl.edu/'>Industrial and Systems Engineering Department</a> at the University of Florida, expecting to graduate in April 2027, under the guidance of <a href='https://www.ise.ufl.edu/sefair/'>Dr. Jorge A. Sefair</a>.

**Research Interests** My research interests include Interdiction Games, Bilevel Optimization, and Integer Programming. I am working on Generalized Network Interdiction Min-Cost Flow Problem, focusing on algorithmic approaches for finding optimal solutions in a sparse graph. See my [research projects](#research-projects) below.

**Past Study** Before starting my Ph.D., I earned Master of Computer Science from <a href='https://psl.eu/en'>Paris Sciences et Lettres University</a>. I worked with <a href='https://www.lamsade.dauphine.fr/~arossi/'>Dr. André Rossi</a> and <a href='https://scholar.google.com/citations?user=cIKP9SMAAAAJ&hl=en'>Dr. Sonia Toubaline</a>. My thesis focused on the <a href='https://hal.science/hal-04493437/'>"Ring Star Problem under the failure of two hubs"</a> and I received the <a href='https://pginfo.ens.psl.eu/last/scholarship_grants_en.html'>"PSL Fellowship"</a> from PSL University and <a href='https://usth.edu.vn/en/call-for-application-for-france-excellence-scholarship-819/#:~:text=Along%20with%20the%20Eiffel%20Scholarship,and%2036%20months%20for%20PhD.'>"Excellence Scholarship"</a> from the French Embassy for funded study.

Prior to that, I completed my Bachelor of Industrial and Systems Engineering at Vietnam National University HCMC where I worked with <a href='https://scholar.google.com/citations?hl=en&user=WHGCW3MAAAAJ'>Dr. Van-Hop Nguyen</a>, graduating as Valedictorian. During my undergraduate studies, I received a fully-funded scholarship and was honored as a Vietnam Outstanding Female Student in Science and Technology.

**Industry Experience** Beyond research, I gained industry experience as a Demand Planner at <a href='https://yes4all.com/en/'>Yes4All</a>, optimizing SQL queries and analyzing sales data, and as an Engineering Intern at <a href='https://www.intel.com/content/www/us/en/homepage.html'>Intel</a>, automating inventory management.

**Skills** Programming in Julia and Python, using tools like SQL, Gurobi, and CPLEX.

**[April 2026] News 🥳** I will be doing Data Scientist, Algorithms and Optimization Internship at Lyft, Inc. during Summer 2026. I am excited to apply my research skills in a real-world setting and contribute to Lyft's mission of improving ride-sharing efficiency.

**Links:**

- <a href='https://scholar.google.com/citations?user=GR-3OwkAAAAJ&hl=en'>Google Scholar Profile</a>
- <a href='https://www.linkedin.com/in/maianhtruong1509/'>My LinkedIn</a>
- <a href='https://drive.google.com/file/d/1lpHOArk2S74iQpXpadGsjDzdA1z2lYuQ/view?usp=drive_link'>Curriculum Vitae (Last Updated August 2025)</a>

<div style="clear: both;"></div>

<hr style="margin: 2.5rem 0 1.5rem">

<h2 id="research-projects">Research Projects</h2>

<div class="card" style="padding: 1.25rem; margin: 1rem 0 1.5rem; border: 1px solid var(--global-divider-color)">
  <h3 style="margin-top: 0; font-size: 1.25rem">General Integer Network Interdiction</h3>
  <div class="project-body">
    <div class="project-media">
      <iframe src="{{ '/assets/html/gni_animation.html' | relative_url }}?theme=light&embed" title="Animation: general integer network interdiction" loading="lazy" style="width: 100%; aspect-ratio: 16/9; border: 0; border-radius: 8px"></iframe>
    </div>
    <p><em>Interdiction games · Bilevel optimization · Integer programming</em></p>
    <p>An interdictor with a limited budget attacks the arcs of a network to make the operator's minimum-cost flow as expensive as possible, and the operator then reroutes flow around the damage. I study the Generalized Network Interdiction Min-Cost Flow Problem, in which interdiction decisions are general integers rather than simple on/off choices, and develop algorithms that find optimal solutions on sparse graphs. My approach uses presolve techniques and valid inequalities to speed up the solver, and k-shortest paths to anticipate how the interdictor will act.</p>
    <p style="margin-bottom: 0">Presented at the INFORMS Annual Meeting 2025, Atlanta, GA.</p>
  </div>
</div>

<div class="card" style="padding: 1.25rem; margin: 1rem 0 1.5rem; border: 1px solid var(--global-divider-color)">
  <h3 style="margin-top: 0; font-size: 1.25rem">Dynamic Network Flow with Expiring Interdiction</h3>
  <div class="project-body">
    <div class="project-media">
      <iframe src="{{ '/assets/html/dei_animation.html' | relative_url }}?theme=light&embed" title="Animation: dynamic network flow with expiring interdiction" loading="lazy" style="width: 100%; aspect-ratio: 16/9; border: 0; border-radius: 8px"></iframe>
    </div>
    <p><em>Interdiction games · Dynamic network flows · Time-expanded networks</em></p>
    <p>Network interdiction usually assumes that an attack destroys capacity for good. In practice, many disruptions are temporary: electronic jamming, temporary checkpoints, or cyber-defense patches. We introduce the Dynamic Minimum Cost Flow Problem with Expiring Interdiction (DMCF-EI). A scheduler sends goods through a network over time, paying for travel, waiting, and arriving after a soft deadline. An interdictor with a limited budget blocks roads, but each block lasts only a fixed number of periods before the road reopens, so the interdictor must choose both <em>which</em> roads to block and <em>when</em>.</p>
    <p style="margin-bottom: 0">I develop exact algorithms for this max-min game, including a dual-based single-level reformulation, dynamic discretization discovery on a coarse time network that is refined only where needed, constraint generation, and branch-and-cut. Each method reports lower and upper bounds on the optimal value, so a solution is proven optimal when the two bounds meet.</p>
  </div>
</div>

<div class="card" style="padding: 1.25rem; margin: 1rem 0 1.5rem; border: 1px solid var(--global-divider-color)">
  <h3 style="margin-top: 0; font-size: 1.25rem">Coordinating Trucks and Service Operators</h3>
  <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 1.5rem">
    <div style="flex: 2 1 380px; min-width: 0">
      <iframe src="{{ '/assets/html/satp_animation.html' | relative_url }}?theme=light&embed" title="Animation: coordinating trucks and service operators" loading="lazy" style="width: 100%; aspect-ratio: 16/9; border: 0; border-radius: 8px"></iframe>
    </div>
    <div style="flex: 1 1 220px">
      <p style="margin-bottom: 0">Trucks carry service operators to work areas, drop them off, and pick them up when the job is done. I build integer programs that route trucks and operators together to finish all work as early as possible, then a second model re-times the plan so that vehicles never come closer than a safety distance.</p>
    </div>
  </div>
</div>
