export interface ExperienceEntry {
  label: string;
  title: string;
  text: string;
  tags: string[];
  /** If true, the title rendering is controlled by site.flags.showClientNames */
  conditionalTitle?: {
    shown: string;
    hidden: string;
  };
}

export const experienceEntries: ExperienceEntry[] = [
  {
    label: 'Business development',
    title: 'Roshan Constructions, Bengaluru',
    text: 'Own the business positioning and digital presence for a family construction company. Defined how services are presented, mapped the customer journey from first search to site visit, and shaped the website around enquiries rather than decoration.',
    tags: ['Strategy', 'Positioning', 'Web', 'Lead generation'],
  },
  {
    label: 'Digital marketing',
    title: 'Pyray',
    text: 'Run digital growth for businesses end to end: Meta and Google Ads, SEO, content and UGC, community management, and email campaigns. Small and hands-on by design; I\u2019m in the ad accounts and the inbox, not just the strategy deck.',
    tags: ['Meta Ads', 'Google Ads', 'SEO', 'Email', 'Content'],
  },
  {
    label: 'US client work',
    // Client name rendering controlled by site.flags.showClientNames
    // When showClientNames is true: "Adify and other US-based clients"
    // When showClientNames is false: "US-based clients"
    conditionalTitle: {
      shown: 'Adify and other US-based clients',
      hidden: 'US-based clients',
    },
    title: 'US-based clients',
    text: 'Customer outreach and email marketing campaigns for US-based clients: audience research, sequence writing, list hygiene, and lead generation workflows. Working across time zones with people who expect clear written communication.',
    tags: ['Outreach', 'Email marketing', 'Lead generation', 'Remote collaboration'],
  },
  {
    label: 'Strategy',
    title: 'How I approach a business',
    text: 'Start with what the business actually sells and who actually buys it. Then work out the shortest honest path from a stranger\u2019s attention to a conversation. Websites, ads and content are just tools for that path.',
    tags: ['Customer journey', 'Conversion', 'Communication'],
  },
];
