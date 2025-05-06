import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Strong collaboration and honest communication—it's how great work gets done.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My skills",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Turning ideas into web experiences with Shopify & Vue",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "HellStyle – Bold Streetwear for the Unapologetic",
    des: "HellStyle is a streetwear clothing brand designed for those who embrace edge, attitude, and authenticity. I built the brand from scratch—handling design, branding, and e-commerce setup. The store features a modern, responsive UI and a seamless shopping experience powered by Shopify and custom frontend development.",
    img: "/hellstyle.png",
    iconLists: [
      "/html.png",
      "/css3.png",
      "/javascript.png",
      "/shopify.png",
      "/liquid.png",
    ],
    link: "https://hellstyle.shop/",
    pass: "",
  },
  {
    id: 2,
    title: "The Cotton Soul – Where Cotton Meets Soul",
    des: "The Cotton Soul is an ethically driven clothing brand focused on comfort, simplicity, and purpose. Built with love in India, every purchase contributes to a meal for someone in need. I developed the entire website, designed custom sections, and implemented a minimal, user-friendly interface to align with the brand's calm, conscious identity.",
    img: "/thecottonsoul.png",
    iconLists: [
      "/html.png",
      "/css3.png",
      "/javascript.png",
      "/shopify.png",
      "/liquid.png",
    ],
    link: "https://thecottonsoul.com/",
    pass: "thesoul",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Khushal was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Khushal's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Khushal is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Khushal was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Khushal's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Khushal is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Khushal was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Khushal's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Khushal is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Khushal was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Khushal's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Khushal is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Khushal was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Khushal's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Khushal is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    desc: "Completed a hands-on internship focused on building responsive UIs using HTML, CSS, JavaScript, and Vue.js. Gained experience in Git, API integration, and modern frontend practices.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Developer",
    desc: "Transitioned into a full-time developer role after the internship. Built and maintained production-ready web frontends using Shopify and Vue, with a focus on performance and user experience.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Frontend Developer",
    desc: "Working independently with clients to deliver custom websites and Shopify storefronts. Specialized in responsive design, Vue.js components, and performance optimization.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/khushal-nandaniya-21b631247",
  },
];
