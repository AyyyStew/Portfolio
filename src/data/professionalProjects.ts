export type ProfessionalProject = {
  title: string;
  summary: string;
};

export const professionalProjects: ProfessionalProject[] = [
  {
    title: "Electronic Health Record System",
    summary:
      "Designed and implemented a web-based electronic health record system for therapists, including patient management, billing integration, and hosting infrastructure. Worked across the full stack from application development to deployment and healthcare data compliance.",
  },
  {
    title: "Cloud Lab Automation",
    summary:
      "Built tooling to automate the provisioning and management of Azure-based training environments, enabling self-paced learners to access cloud labs without exposing internal Azure resources. Also supported students and improved classroom deployment workflows.",
  },
  {
    title: "IoT Monitoring System",
    summary:
      "Designed embedded hardware and firmware for sensor systems used in assisted living environments, while also contributing to supporting infrastructure, compliance, and office IT. Developed custom communication protocols that significantly improved battery life and device range.",
  },
];
