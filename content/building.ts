export interface BuildingEntry {
  status: 'PAPER' | 'ACTIVE' | 'RESEARCH' | 'NEXT';
  title: string;
  description: string;
  tags: string[];
}

/**
 * Currently Building entries.
 *
 * To add a new entry, copy one of the objects below and fill in the fields:
 *
 * {
 *   status: 'ACTIVE',       // One of: 'PAPER', 'ACTIVE', 'RESEARCH', 'NEXT'
 *   title: 'Project name',
 *   description: 'One to two sentences about the project.',
 *   tags: ['Tag1', 'Tag2'],
 * }
 *
 * Then add it to the `buildingEntries` array below.
 */
export const buildingEntries: BuildingEntry[] = [
  {
    status: 'PAPER',
    title: 'CORE',
    description:
      'Hardening the retrieval pipeline and evaluation for the Campus Oriented Retrieval Engine. Currently being developed toward publication as a technical project.',
    tags: ['FastAPI', 'RAG', 'PostgreSQL', 'Embeddings'],
  },
  {
    status: 'ACTIVE',
    title: 'REVENANT',
    description:
      'An engineering project in the AI and backend systems space. Details when it\u2019s ready to be talked about properly.',
    tags: ['AI systems', 'Backend'],
  },
];

/** Optional placeholder entry shown when showPlaceholderEntry is true */
export const placeholderEntry: BuildingEntry = {
  status: 'NEXT',
  title: 'More soon',
  description:
    'New technical and business work gets added here as it becomes real, not before.',
  tags: [],
};

/** Set to false to hide the "More soon" placeholder entry */
export const showPlaceholderEntry = true;

// TODO: Update this to the current month/year when you update this section
export const buildingLastUpdated = 'September 2026';
