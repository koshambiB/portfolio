export interface Project {
  bgImage: string;
  title: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    bgImage: "/celeris.png", // Updated to use your celeris.png image
    title: "Celeris Project",
    description: "A comprehensive project showcasing modern web development techniques with advanced features and optimized performance.",
    link: "https://example.com/celeris-project",
  },
  {
    bgImage: "/images/project2.jpg",
    title: "Project Two",
    description: "Detailed overview of project two with unique features and innovative solutions for complex challenges.",
    link: "https://example.com/project-two",
  },
  {
    bgImage: "/images/project3.jpg",
    title: "Project Three",
    description: "Summary of project three highlighting key accomplishments and technical implementations.",
    link: "https://example.com/project-three",
  },
  // Add more project objects as needed
];