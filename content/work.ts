export interface CaseStudySection {
  label: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface CaseStudy {
  index: number;
  slug: string;
  title: string;
  subtitle?: string;
  thesis: string;
  role: string;
  type: string;
  skills: string[];
  status: string;
  plate: 'blueprint' | 'schematic' | 'channel-map';
  /** Optional real screenshot paths under /public/work/{slug}/ */
  images: string[];
  sections: CaseStudySection[];
}

export const caseStudies: CaseStudy[] = [
  {
    index: 1,
    slug: 'roshan-constructions',
    title: 'Roshan Constructions',
    thesis:
      'Giving a family construction business in Bengaluru a digital presence that turns visitors into enquiries.',
    role: 'Business Development & Strategy Lead',
    type: 'Business case study \u00b7 Web strategy',
    skills: [
      'Positioning',
      'Website strategy',
      'Customer journey',
      'Conversion design',
      'Lead generation',
      'Content',
    ],
    status: 'Live business, ongoing work',
    plate: 'blueprint',
    images: [],
    sections: [
      {
        label: 'What it is',
        heading: 'A real construction business, not a demo client.',
        paragraphs: [
          'Roshan Constructions is a family construction company in Bengaluru offering residential construction, renovation and remodeling, interior design, and commercial construction. Yes, it\u2019s my family\u2019s business. That\u2019s also exactly why I care whether the website produces actual enquiries and not just compliments.',
        ],
      },
      {
        label: 'The problem',
        heading: 'Good work, invisible online.',
        paragraphs: [
          'Construction in Bengaluru runs on trust and referrals. That\u2019s a strength, but it means a business can do excellent work for years and still be invisible to anyone who wasn\u2019t personally introduced. When a prospective client did search, there was nothing that clearly explained the services, showed the range of work, or made it easy to start a conversation.',
        ],
      },
      {
        label: 'My role',
        heading: 'Positioning first, pixels second.',
        paragraphs: [
          'I lead business development and strategy, which in practice means I own how the business presents itself and how new clients find it. For the website, that meant deciding what the business stands for, which services to lead with, how to order them, and what a first-time visitor needs to see before they\u2019re willing to call.',
        ],
      },
      {
        label: 'What I did',
        heading: 'The work, specifically.',
        bullets: [
          'Defined the positioning: a dependable, quality-first builder for homeowners and businesses in Bengaluru, communicated in plain language.',
          'Structured the four service lines (residential, renovation and remodeling, interiors, commercial) so each one answers what it is, who it\u2019s for, and what happens next.',
          'Mapped the customer journey from first search to enquiry to site visit, and designed the website around that path.',
          'Made every page conversion-oriented: clear calls to action, easy contact paths, and no dead ends.',
          'Set up the digital presence so it can grow: consistent identity, content structure that can take future project photos, and room for reviews as they come in.',
        ],
      },
      {
        label: 'Skills involved',
        heading: 'Half business, half craft.',
        paragraphs: [
          'Business positioning, service architecture, customer-journey mapping, conversion-focused web design, copywriting, and the unglamorous work of getting a real business to agree on how it describes itself.',
        ],
      },
      {
        label: 'Outcome',
        heading: 'A business that can be found, understood and contacted.',
        paragraphs: [
          'The company now has a digital presence that explains what it does clearly and gives a prospective client an obvious next step. I\u2019m deliberately not quoting lead numbers here; the honest measure is that the business is presentable online, easier to refer, and set up to capture enquiries it used to miss. This is ongoing work, and it continues to evolve as projects are completed.',
        ],
      },
    ],
  },
  {
    index: 2,
    slug: 'core',
    title: 'CORE',
    subtitle: 'Campus Oriented Retrieval Engine',
    thesis:
      'An AI-powered assistant that lets students ask a campus questions in plain language, and get answers grounded in real college information.',
    role: 'Backend architecture & development',
    type: 'Technical project \u00b7 Being prepared for publication',
    skills: [
      'Python',
      'FastAPI',
      'PostgreSQL / Supabase',
      'Retrieval-Augmented Generation',
      'Embeddings',
      'API design',
      'Conversational AI',
    ],
    status: 'Currently being developed toward publication',
    plate: 'schematic',
    images: [],
    sections: [
      {
        label: 'What it is',
        heading: 'Ask the campus a question. Get a grounded answer.',
        paragraphs: [
          'CORE (Campus Oriented Retrieval Engine) is an AI-powered campus assistant. It centralises scattered college information and lets students interact with it conversationally: ask about a process, a department, a deadline or a facility, and get an answer grounded in actual campus documents rather than a confident guess.',
        ],
      },
      {
        label: 'The problem',
        heading: 'Information exists. Finding it doesn\u2019t.',
        paragraphs: [
          'College information lives in PDFs, notice boards, WhatsApp forwards, departmental pages and people\u2019s heads. Students spend a surprising amount of time asking the same questions and getting inconsistent answers. A general-purpose chatbot doesn\u2019t help, because it doesn\u2019t know your campus.',
        ],
      },
      {
        label: 'My role',
        heading: 'The part underneath the chat box.',
        paragraphs: [
          'I work on the backend architecture and development: how documents are ingested and chunked, how embeddings are generated and stored, how retrieval is performed, how the retrieved context is assembled for the model, and how all of it is exposed through clean APIs to the conversational interface.',
        ],
      },
      {
        label: 'What I built',
        heading: 'Retrieval-Augmented Generation, done carefully.',
        bullets: [
          'A FastAPI service layer exposing ingestion, query and admin endpoints.',
          'A document pipeline that chunks campus content and generates embeddings for semantic search.',
          'PostgreSQL / Supabase as the system of record for documents, chunks, embeddings and conversation state.',
          'A retrieval step that pulls the most relevant chunks for a query and builds grounded context for generation.',
          'Conversational handling so follow-up questions keep their context.',
        ],
      },
      {
        label: 'Stack',
        heading: 'Boring where it should be, interesting where it matters.',
        paragraphs: [
          'Python and FastAPI for the service, PostgreSQL / Supabase for storage, embedding models for semantic retrieval, and a RAG architecture so answers stay tied to real sources. The interesting problems are in chunking strategy, retrieval quality and evaluation, not in the framework choices.',
        ],
      },
      {
        label: 'Status',
        heading: 'Being prepared for publication.',
        paragraphs: [
          'CORE is currently being developed toward publication as an academic and technical project. That means the current focus is on evaluation, retrieval quality and documenting the architecture properly, not just on shipping features. I\u2019ll update this page when there\u2019s something citable.',
        ],
      },
    ],
  },
  {
    index: 3,
    slug: 'pyray',
    title: 'Pyray',
    thesis:
      'Hands-on digital growth work for businesses: paid ads, SEO, content, community and email.',
    role: 'Digital marketing & growth',
    type: 'Commercial work \u00b7 Ongoing',
    skills: [
      'Social media strategy',
      'Content',
      'UGC',
      'Community management',
      'Meta Ads',
      'Google Ads',
      'SEO',
      'Email marketing',
      'Lead generation',
    ],
    status: 'Ongoing',
    plate: 'channel-map',
    images: [],
    sections: [
      {
        label: 'What it is',
        heading: 'The name I do growth work under.',
        paragraphs: [
          'Pyray is the umbrella for my digital marketing and growth work. It\u2019s not an agency with a floor of desks. It\u2019s a small, hands-on operation where I\u2019m personally in the ad accounts, the content calendar and the inbox.',
        ],
      },
      {
        label: 'The problem',
        heading:
          'Most small businesses don\u2019t need more marketing. They need it to be coherent.',
        paragraphs: [
          'Businesses often have a bit of everything: a few posts, a boosted ad once, an email list nobody writes to. The problem isn\u2019t effort, it\u2019s that nothing connects. Pyray work is mostly about making the channels agree on who the customer is and what they should do next.',
        ],
      },
      {
        label: 'My role',
        heading: 'Strategy and execution, same person.',
        paragraphs: [
          'I define the strategy and then do the work: writing, setting up campaigns, managing communities, building email sequences and reading the results. Doing both means the strategy stays realistic and the execution stays on-message.',
        ],
      },
      {
        label: 'What I do',
        heading: 'The channels, specifically.',
        bullets: [
          'Social media strategy and content planning, including UGC-style content that doesn\u2019t look like an ad.',
          'Community management: replying, moderating, and turning comments into conversations.',
          'Paid acquisition on Meta (Facebook and Instagram) and Google Ads: targeting, creative, landing pages, iteration.',
          'SEO fundamentals: on-page structure, content that answers real searches, technical hygiene.',
          'Email marketing: sequences, campaigns, list management.',
          'Lead generation systems that connect the above into a pipeline a business can actually follow up on.',
        ],
      },
      {
        label: 'Clients',
        heading: 'India and the US.',
        paragraphs: [
          'Work has included Indian businesses and US-based clients, focused on outreach, email campaigns and lead generation. Where I can\u2019t share numbers, I describe scope instead of inventing results. Ask me about specifics in a call.',
        ],
      },
      {
        label: 'Outcome',
        heading: 'Coherent, measurable, maintainable.',
        paragraphs: [
          'The consistent result across Pyray work is a channel setup that\u2019s coherent, measurable and maintainable by the business afterwards. I don\u2019t quote aggregate metrics on a public page; every business is different and I\u2019d rather walk you through the actual accounts.',
        ],
      },
    ],
  },
];
