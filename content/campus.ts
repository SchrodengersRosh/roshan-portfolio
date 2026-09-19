export interface CampusRole {
  label: string;
  description: string;
}

export interface CampusEvent {
  name: string;
  role?: string;
  year?: number;
}

export const campusRoles: CampusRole[] = [
  {
    label: 'Emcee',
    description:
      'Hosting on stage means keeping a few hundred people with you when the schedule slips and the mic cuts out. Public speaking, timing, thinking on your feet, and staying confident when nothing goes to plan.',
  },
  {
    label: 'Marketing team',
    description:
      'Promoting events across campus and online: messaging, timelines, channel planning, and coordinating with the people actually building the event.',
  },
  {
    label: 'Public relations',
    description:
      'The external-facing side: sponsors, guests, partner colleges, and the small details that decide whether people show up and come back.',
  },
  {
    label: 'Fashion team',
    description:
      'Concepts, coordination and stage presence for showcase events. Taste and execution under a hard deadline.',
  },
];

export const campusEvents: CampusEvent[] = [
  { name: 'Vibrations' },
  { name: 'Science in Action' },
  { name: 'Lumos 2.0' },
  { name: 'Vertex' },
];
