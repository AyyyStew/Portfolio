export type ProfessionalProject = {
  title: string;
  summary: string;
};

export const professionalProjects: ProfessionalProject[] = [
  {
    title: "Electronic Health Record System",
    summary:
      "Built and shipped an MVP in 3 months as a solo contract developer for a small therapy practice, handling both application development and the billing/clinical workflow design, with the business owner and one clinical staff member as the primary feedback loop. Delivered working EDI integration with insurance carriers before rolling off, at which point roughly 20 clinicians were using the system. Targeted to replace software costing the practice $80K/year.",
  },
  {
    title: "Cloud Lab Automation",
    summary:
      "Built automation tooling as part of a 3-person team to provision and manage Azure-based training environments, serving self-paced classrooms of 15–30 users weekly and instructor-led sessions of 10–30 users roughly twice a week. Eliminated hours of manual provisioning work per session and removed a major operational bottleneck for the training team.",
  },
  {
    title: "IoT Monitoring System",
    summary:
      "Designed the embedded hardware, firmware, and end-to-end data architecture for a sensor system used in assisted living environments, from board design through custom communication protocol. Replaced standard IP/access-point networking with a custom mesh protocol, improving battery life by 50% and extending device range by 30%.",
  },
];
