export const client = {
  // Business Details
  name: "Oakridge Landscaping",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Southampton.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07763 018644",
  email: "",
  website: "",

  // Location
  address: "Southampton",
  city: "Southampton",
  county: "",
  postcode: "",
  basedIn: "Southampton",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5.0",
  reviewCount: "7",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Hannah K.", rating: 5, text: "From start to finish, working with Oakridge Landscaping was a pleasure. They arrived when they said they would, worked efficiently, and the end result is stunning. Several friends have commented on how good the garden looks now.", date: "5 months ago" },
    { name: "Michael Thomas", rating: 5, text: "We've used several landscapers over the years and Oakridge Landscaping are by far the best. Quality materials, expert installation, and they genuinely care about getting it right. Our patio and borders look fantastic.", date: "4 months ago" },
    { name: "Wendy Simpson", rating: 5, text: "Really impressed with Oakridge Landscaping. They came out, assessed what we needed, gave us honest advice about what would work best, and then delivered a fantastic result. No hard sell, just good honest work.", date: "a month ago" },
    { name: "Natalie C.", rating: 5, text: "Brilliant job by Oakridge Landscaping. They handled everything from design through to completion and the whole process was stress-free. The lawn, planting, and fencing all look superb. Worth every penny.", date: "a year ago" },
    { name: "Debbie B.", rating: 5, text: "Cannot recommend Oakridge Landscaping highly enough. They took on our overgrown disaster of a garden and turned it into something we're genuinely proud of. Fair pricing, honest advice, and brilliant craftsmanship throughout.", date: "8 months ago" },
    { name: "Georgia Jackson", rating: 5, text: "Top quality work from Oakridge Landscaping. They redesigned our outdoor space and it's now our favourite part of the house. The whole family spends so much more time outside now. Couldn't be happier.", date: "6 months ago" },
    { name: "Neil Moore", rating: 5, text: "Contacted Oakridge Landscaping after a recommendation from a friend and I can see why they were so highly rated. Excellent communication, fair price, and the garden looks incredible. Thank you!", date: "4 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Oakridge Landscaping | Landscaper in Southampton",
    description: "Professional landscaper in Southampton. 5.0-star rated on Google. Call for a free quote.",
  },
};
