const updatedAt = "2026-10-09T00:00:00.000Z";

const pages = [
  {
    slug: "home",
    title: "iSTUDIO",
    heading: "We Make Your Home Better",
    summary: "An award-winning interior design studio since 1990.",
    sections: [
      { heading: "Crafted Furniture", body: "Furniture made for the home." },
      { heading: "Sustainable Material", body: "Materials chosen to last." },
      { heading: "Innovative Architects", body: "Architects who shape each room." },
      { heading: "Budget Friendly", body: "Design that stays within budget." },
    ],
    updatedAt,
  },
  {
    slug: "about",
    title: "About",
    heading: "History of Our Creation",
    summary: "The story of iSTUDIO, its designers, and why clients choose the studio.",
    sections: [
      {
        heading: "History of Our Creation",
        body: "Award winning, professional staff, 24/7 support, and fair prices.",
      },
      {
        heading: "Our Professional Designers",
        body: "Architects Boris Johnson, Donald Pakura, Bradley Gordon, and Alexander Bell.",
      },
      {
        heading: "Why People Choose Us",
        body: "More than 25 years of interior design experience.",
      },
    ],
    updatedAt,
  },
  {
    slug: "services",
    title: "Services",
    heading: "Our Creative Services",
    summary: "Interior design, implementation, renovation, and commercial work.",
    sections: [
      { heading: "Interior Design", body: "Room planning and interior styling." },
      { heading: "Implement", body: "Turning the design into the finished space." },
      { heading: "Renovation", body: "Updating existing rooms and finishes." },
      { heading: "Commercial", body: "Interiors for commercial spaces." },
    ],
    updatedAt,
  },
  {
    slug: "projects",
    title: "Projects",
    heading: "Our Latest Projects",
    summary: "Six recent project categories from the studio.",
    sections: [
      { heading: "Kitchen", body: "72 projects." },
      { heading: "Bathroom", body: "67 projects." },
      { heading: "Bedroom", body: "53 projects." },
      { heading: "Living Room", body: "33 projects." },
      { heading: "Furniture", body: "87 projects." },
      { heading: "Rennovation", body: "69 projects." },
    ],
    updatedAt,
  },
  {
    slug: "features",
    title: "Features",
    heading: "Why People Choose Us",
    summary: "Experience, design quality, and practical project delivery.",
    sections: [
      { heading: "25+ Years Experience", body: "A studio working since 1990." },
      { heading: "Best Interior Design", body: "Design focused on how a home is used." },
      { heading: "Innovative Architects", body: "Architects on every project." },
      { heading: "Customer Satisfaction", body: "Work shaped around the client." },
      { heading: "Budget Friendly", body: "Clear pricing and fair costs." },
      { heading: "Sustainable Material", body: "Materials selected to last." },
    ],
    updatedAt,
  },
  {
    slug: "team",
    title: "Our Team",
    heading: "Our Professional Designers",
    summary: "The architects behind iSTUDIO.",
    sections: [
      { heading: "Boris Johnson", body: "Architect." },
      { heading: "Donald Pakura", body: "Architect." },
      { heading: "Bradley Gordon", body: "Architect." },
      { heading: "Alexander Bell", body: "Architect." },
    ],
    updatedAt,
  },
  {
    slug: "testimonials",
    title: "Testimonial",
    heading: "Testimonial",
    summary: "Notes from clients on materials, service, and cost.",
    sections: [
      { heading: "Sustainable Material", body: "Boris Johnson." },
      { heading: "Customer Satisfaction", body: "Alexander Bell." },
      { heading: "Budget Friendly", body: "Bradley Gordon." },
    ],
    updatedAt,
  },
  {
    slug: "contact",
    title: "Contact",
    heading: "Have Any Query? Contact Us",
    summary: "Send a message to Malaika Rizwan.",
    name: "Malaika Rizwan",
    phone: "+92********",
    email: "malaikarizwan121@gmail.com",
    portfolio: "https://portfoilio-jet.vercel.app",
    sections: [
      {
        heading: "Get In Touch",
        body: "Malaika Rizwan, +92********, malaikarizwan121@gmail.com.",
      },
      {
        heading: "Portfolio",
        body: "https://portfoilio-jet.vercel.app",
      },
    ],
    updatedAt,
  },
];

function findPage(slug) {
  return pages.find((page) => page.slug === slug) || null;
}

module.exports = { pages, findPage };
