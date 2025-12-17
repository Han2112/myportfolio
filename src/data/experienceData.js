// src/data/experienceData.js
import cpsLogo from '../assets/cpslogo.jpg';
import komdigiLogo from '../assets/komdigi.png';

const experienceData = [
  {
    id: 1,
    company: "Cyber Physical System Laboratory",
    role: "Vice Assistance Coordinator (Internal)",
    date: "2024 - Now",
    description: "As the Vice Coordinator of Internal Assistants at the Cyber-Physical Systems Laboratory, I oversee the strategic operations of the Practicum and Research divisions. I specialize in managing complex workflows, ensuring the seamless execution of academic laboratory modules while simultaneously driving the progress of innovative research projects. My role demonstrates a strong capacity for leadership, operational management, and technical oversight in a dynamic laboratory environment.",
    tech: ["Leadership", "Operational Management", "Research", "Practicum"],
    docUrl: "" ,
    logo: cpsLogo
  },
  {
    id: 2,
    company: "Cyber Physical System Laboratory",
    role: "Practicum Assistance",
    date: "2023 - Now",
    description: "Designed and assembled comprehensive laboratory modules for six key topics—Network Topology, Routing Protocols, Queuing Systems, VoIP, and 5G Technology—prior to the semester, and subsequently delivered hands-on instruction to students to ensure their technical mastery of these concepts.",
    tech: ["Cisco Packet Tracer", "GNS3", "Linux", "IoT", "VoIP", "MathLab"],
    docUrl: "https://drive.google.com/file/d/1M5cFP4nwubJT1gMMVas0W3oBa-W-YHv8/view?usp=sharing",
    logo: cpsLogo
  },
  {
    id: 3,
    company: "Ministry of Communication and Information Technology of Indonesia",
    role: "CyberSecurity Internship",
    date: "2024",
    description: "Executed end-to-end security audits for the Ministry’s Digital Government Applications Division, performing penetration tests on six critical websites using Kali Linux, OWASP ZAP, and Burp Suite. The role involved analyzing vulnerabilities and implementing strategic mitigation measures to secure government infrastructure against potential cyber threats.",
    tech: ["Kali", "OWaspZAP", "Burp"],
    docUrl: "https://drive.google.com/file/d/1UDpCWKT9O7ns4503ctBJhU0MKmI6VtXq/view?usp=sharing",
    logo: komdigiLogo
  }
];

export default experienceData;