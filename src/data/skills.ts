export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Systems and infrastructure",
    items: [
      "Linux",
      "Windows Server",
      "Virtualization",
      "Containerization",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "Azure",
      "AWS",
      "ArcGIS",
    ],
  },
  {
    title: "Security and networking",
    items: [
      "Network security",
      "Microsoft Sentinel",
      "SIEM",
      "Firewalls",
      "Wireless systems",
      "Cisco",
      "IP",
      "DNS",
      "DHCP",
      "VPNS",
    ],
  },
  {
    title: "Automation and development",
    items: [
      "Python",
      "PowerShell",
      "JavaScript",
      "C++",
      "FastAPI",
      "Django",
      "Next.js",
      "SQL",
    ],
  },
  // {
  //   title: "Hardware and embedded systems",
  //   items: ["Raspberry Pi", "ESP32", "Sensors", "Firmware", "IoT", "RF systems"]
  // }
];
