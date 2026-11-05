import { Code2, BrainCircuit, Cloud } from "lucide-react";

import softwareImage from "../assets/services/it-solutions.jpg";
import itImage from "../assets/services/ai-data-solutions.jpg";
import cloudImage from "../assets/services/hr-staffing.png";

const services = [
  {
    icon: Code2,
    image: softwareImage,
    number: "01",
    title: "Software Development",
    highlights: [
      "Custom software development",
      "Website development",
      "Mobile application development",
      "Web application development",
    ],
    description:
      "We develop customized software solutions and applications designed to address business challenges, improve operational efficiency, and support business growth.",
    link: "/services/software-development",
  },
  {
    icon: BrainCircuit,
    image: itImage,
    number: "02",
    title: "IT Solutions",
    highlights: [
      "IT consulting",
      "Digital transformation",
      "Technology integration",
      "Business process automation",
    ],
    description:
      "Technology solutions designed to help businesses improve processes, productivity and digital capabilities.",
    link: "/services/it-solutions",
  },
  {
    icon: Cloud,
    image: cloudImage,
    number: "03",
    title: "Cloud, DevOps & HRMS Solutions",
    highlights: [
      "HRMS solutions",
      "Employee and workforce management",
      "Cloud infrastructure solutions",
      "DevOps and deployment automation",
    ],
    description:
      "Modern cloud, DevOps and workforce management solutions that help businesses simplify operations and support growth.",
    link: "/services/cloud-devops-hrms",
  },
];

export default services;
