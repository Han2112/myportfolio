import ccImg from '../assets/cc.png';
import iotImg from '../assets/secureiot.png';
import sdnImg from '../assets/sdn.png';

const projectsData = [
  {
    id: 1,
    title: "Simple Door Security",
    description: "Designed an IoT-based door security system using Arduino Uno and ultrasonic sensors to detect unauthorized access. Integrated MQTT protocol for real-time data transmission and utilized the Blynk platform for remote monitoring and instant alerts.",
    tech: ["ArduinoUno", "MQTT", "Blynk"],
    img: iotImg,
    demo: "#",
    repo: "#"
  },
  {
    id: 2,
    title: "Prototype School Database Web",
    description: "Developed a scalable school database prototype using Python and PostgreSQL. Containerized the application with Docker for consistent environments and deployed the full-stack solution to Microsoft Azure cloud infrastructure.",
    tech: ["HTML", "Tailwind", "Posgres", "Python", "Docker", "Azure"],
    img: ccImg,
    demo: "http://sekolahandrejaya.eastasia.cloudapp.azure.com/",
    repo: "https://github.com/Han2112/Tubes-CC"
  },
  {
    id: 3,
    title: "Software Define Network",
    description: "rchitected a hybrid network topology simulation using Mininet and the ONOS controller. Implemented advanced network features including Quality of Service (QoS) management for traffic prioritization and redundancy protocols to ensure high availability and fault tolerance.",
    tech: ["Linux", "Mininet", "Onos"],
    img: sdnImg,
    repo: "#"
  }
];

export default projectsData;