export interface SocialLink {
  label: string;
  url: string;
  external: boolean;
}

export interface SiteConfig {
  name: string;
  role: string;
  location: string;
  email: string;
  hasPortrait: boolean;
  socials: SocialLink[];
  nav: { label: string; href: string }[];
  flags: {
    showClientNames: boolean;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Roshan',
  role: 'Builder · Digital strategist · Engineering student, DSCE',
  location: 'Bengaluru, India',
  // TODO: Replace with your actual email address
  email: 'hello@roshan.example',
  // Set to true and add /public/roshan.jpg when you have a portrait photo
  hasPortrait: false,
  socials: [
    // TODO: Replace with your actual LinkedIn URL
    { label: 'LinkedIn', url: 'https://linkedin.com/in/roshan', external: true },
    // TODO: Replace with your actual GitHub URL
    { label: 'GitHub', url: 'https://github.com/roshan', external: true },
    // TODO: Replace with your actual Instagram URL
    { label: 'Instagram', url: 'https://instagram.com/roshan', external: true },
  ],
  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Campus', href: '#campus' },
    { label: 'Building', href: '#building' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  flags: {
    // Set to false to hide specific client names (e.g. "Adify") across the site.
    // When false, generic descriptions like "US-based clients" are used instead.
    showClientNames: true,
  },
};
