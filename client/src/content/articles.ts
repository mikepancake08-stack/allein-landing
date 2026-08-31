export type ArticleSection = { heading: string; paragraphs?: string[]; bullets?: string[] };
export type Article = { slug: string; title: string; description: string; category: string; date: string; readTime: string; intro: string; sections: ArticleSection[] };

export const articles: Article[] = [{
  slug: "what-is-nervous-system-first-training",
  title: "What Is Nervous-System-First Training?",
  description: "A practical explanation of nervous-system-first training, how it differs from conventional workouts, and how it builds strength, coordination, power, balance, and confidence.",
  category: "ALLEIN Method",
  date: "August 31, 2026",
  readTime: "8 min read",
  intro: "Nervous-system-first training does not replace strength, mobility, cardio, or skill work. It organizes them around the system responsible for perceiving information, choosing a response, and coordinating movement.",
  sections: [
    { heading: "The simple explanation", paragraphs: ["Your muscles produce force, but they do not decide when, how quickly, or how precisely to produce it. Your brain and nervous system interpret what is happening, recruit the right tissues, coordinate timing, regulate effort, and update the plan from moment to moment.", "A nervous-system-first approach asks more useful questions than “Which muscle does this exercise work?” It also asks: What information is the person receiving? How confidently can they organize the movement? Can they control it, adapt it, and express it at the speed life requires?"] },
    { heading: "It is an organizing principle—not a magic exercise", paragraphs: ["Almost every form of training affects the nervous system. That does not automatically make every workout nervous-system-first. The distinction is whether perception, coordination, skill, readiness, and adaptation meaningfully shape how the program is designed.", "The goal is not to decorate ordinary exercises with neuroscience language. The goal is to select and progress training based on how the whole person responds."], bullets: ["Match complexity and intensity to current readiness.", "Build control before adding speed, load, fatigue, or unstable conditions.", "Train strength, mobility, balance, coordination, reaction, and recovery as connected qualities.", "Use variation purposefully so the person learns to adapt instead of only memorizing one solution."] },
    { heading: "What this looks like in practice", paragraphs: ["A session may still include squats, carries, rows, presses, jumps, throws, crawling, or conditioning. The difference is in how those tools are used."], bullets: ["A squat may train force and range of motion, then evolve into a faster sit-to-stand or direction-changing task.", "A balance drill may begin with a stable position, then add head movement, a reach, a decision, or a changing surface.", "A power exercise may use a light medicine ball or low-impact jump so the athlete practices producing force quickly without excessive joint stress.", "Recovery work may use walking, breathing, or a lower-intensity movement reset to help the system transition after demanding work."] },
    { heading: "Why strength alone is incomplete", paragraphs: ["Strength is foundational, but real life rarely provides a perfectly positioned, unlimited-time strength test. You may need to catch yourself, react to a child, change direction on a trail, carry an awkward object, or stabilize while attention is elsewhere.", "Those situations depend on strength plus timing, speed, sensory information, coordination, and confidence. ALLEIN calls the integration of those qualities capability."] },
    { heading: "Who benefits from this approach?", paragraphs: ["The principles can be scaled from younger athletes to older grandparents. An athlete may use them to sharpen acceleration, reaction, and force expression. A busy parent may use them to rebuild athleticism and confidence. An older adult may use them to preserve power, balance, and independence.", "The exercise changes. The principle does not: prepare the person for the demands that matter in their real life."] },
    { heading: "What nervous-system-first training does not mean", bullets: ["It is not medical diagnosis, neurological rehabilitation, or a substitute for appropriate clinical care.", "It does not mean muscles, progressive overload, or conditioning no longer matter.", "It does not require flashy reaction lights, unstable surfaces, or complicated drills.", "It does not promise to “hack” the brain or produce instant change without consistent practice."] },
    { heading: "The outcome: more physical options", paragraphs: ["The aim is not simply to finish harder workouts. It is to expand what your body can reliably do: move through more ranges, create and absorb force, react more quickly, learn new patterns, recover appropriately, and remain confident as environments change.", "That is the ALLEIN standard: train the nervous system, build the body, shape the identity, and expand what is possible."] },
  ],
}];

export const upcomingArticles = [
  "Why Strength Alone Doesn’t Make You Fully Capable",
  "How Power, Balance, and Reaction Time Support Healthy Aging",
  "How Former Athletes Can Rebuild Athleticism Without Training Like They’re 20",
  "At-Home Training for Strength, Mobility, and Real-World Capability",
];
