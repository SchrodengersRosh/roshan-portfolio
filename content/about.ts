export interface AboutFact {
  label: string;
  value: string;
  /** If true, this fact is only shown when showOptionalFacts is true */
  optional?: boolean;
}

export const aboutParagraphs: string[] = [
  'I\u2019m an engineering student in Bengaluru who got impatient waiting for permission to do real work. So I started doing it: building backend and AI systems, running digital growth for businesses, helping my family\u2019s construction company show up properly online, and hosting college events with a few hundred people watching.',
  'The common thread is that I like understanding how things actually work, whether that\u2019s a retrieval pipeline, a customer\u2019s decision, or a room\u2019s attention. I\u2019m early in my career. I\u2019d rather show you what I\u2019ve built than tell you what I\u2019m passionate about.',
];

export const aboutFacts: AboutFact[] = [
  { label: 'Based in', value: 'Bengaluru, India' },
  { label: 'Studying', value: 'Engineering, DSCE' },
  { label: 'Working on', value: 'AI & backend systems, digital growth' },
  {
    label: 'Good at',
    value: 'Explaining technical things to non-technical people',
  },
  {
    label: 'Currently reading / listening',
    // TODO: Replace with what you're actually reading or listening to
    value: '(edit in content/about.ts)',
    optional: true,
  },
];

/** Set to true to show optional facts like "Currently reading / listening" */
export const showOptionalFacts = false;
