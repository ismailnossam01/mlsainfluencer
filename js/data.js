const techData = [
  {
    id: 1,
    title: "Microsoft Learn",
    image: "images/learn.png",
    description: "Free official learning platform by Microsoft.",
    fullDescription: "Microsoft Learn provides step-by-step tutorials, modules, and certifications to build skills in Microsoft technologies like Azure, Microsoft 365, Dynamics, and more.",
    url: "https://learn.microsoft.com?wt.mc_id=studentamb_469401"
  },
  {
    id: 2,
    title: "Azure Portal",
    image: "images/azure.png",
    description: "Manage your Azure services from one place.",
    fullDescription: "The Azure Portal lets you build, manage, and monitor cloud applications. Create VMs, deploy apps, monitor resources, and configure services with ease.",
    url: "https://portal.azure.com?wt.mc_id=studentamb_469401"
  },
  {
    id: 3,
    title: "Visual Studio Code",
    image: "images/vscode.png",
    description: "Lightweight, powerful code editor from Microsoft.",
    fullDescription: "VS Code is a free source-code editor made by Microsoft. It supports debugging, syntax highlighting, intelligent code completion, snippets, and version control.",
    url: "https://code.visualstudio.com?wt.mc_id=studentamb_469401"
  },
  {
    id: 4,
    title: "GitHub Student Pack",
    image: "images/github.png",
    description: "Free tools for students including GitHub Pro.",
    fullDescription: "The GitHub Student Developer Pack gives students free access to the best developer tools in one place so they can learn by doing. Includes GitHub Pro, CI/CD tools, IDEs, and more.",
    url: "https://education.github.com/pack?wt.mc_id=studentamb_469401"
  },
  {
    id: 5,
    title: "LinkedIn Learning",
    image: "images/linkedin.png",
    description: "Grow your skills with professional video courses.",
    fullDescription: "LinkedIn Learning is an online learning platform offering video courses taught by industry experts in software, creative, and business skills. Often free through university accounts.",
    url: "https://linkedin.com/learning?wt.mc_id=studentamb_469401"
  },
  {
    id: 6,
    title: "Microsoft 365",
    image: "images/m365.png",
    description: "Cloud-based productivity tools for work and life.",
    fullDescription: "Microsoft 365 offers apps like Word, Excel, PowerPoint, Outlook, and Teams all in one subscription. Collaborate in real-time and access documents across devices.",
    url: "https://www.microsoft.com/microsoft-365?wt.mc_id=studentamb_469401"
  },
  {
    id: 7,
    title: "Power Platform",
    image: "images/powerplatform.png",
    description: "Build low-code apps, automate tasks, and analyze data.",
    fullDescription: "Power Platform includes Power BI, Power Apps, Power Automate, and Power Virtual Agents, enabling you to create powerful business solutions without writing a lot of code.",
    url: "https://powerplatform.microsoft.com?wt.mc_id=studentamb_469401"
  },
  {
    id: 8,
    title: "Azure AI Services",
    image: "images/azureai.png",
    description: "Build AI into your apps with Azure Cognitive Services.",
    fullDescription: "Azure AI provides a suite of services for vision, speech, language, decision, and more. Easily add AI-powered features using REST APIs or SDKs.",
    url: "https://azure.microsoft.com/en-us/services/cognitive-services?wt.mc_id=studentamb_469401"
  },
  {
    id: 9,
    title: "Microsoft for Startups Founders Hub",
    image: "images/startups.png",
    description: "Free Azure credits and tools for startups.",
    fullDescription: "Founders Hub supports students and startups with free Azure credits, GitHub access, OpenAI credits, mentorship, and tools to help bring their ideas to life.",
    url: "https://startups.microsoft.com/en-us?wt.mc_id=studentamb_469401"
  },
  {
    id: 10,
    title: "Microsoft Edge",
    image: "images/edge.png",
    description: "Fast, secure, and modern browser from Microsoft.",
    fullDescription: "Microsoft Edge is built on Chromium and optimized for performance and security. It integrates with Microsoft services like Collections, Bing AI, and Edge Extensions.",
    url: "https://www.microsoft.com/edge?wt.mc_id=studentamb_469401"
  },
  {
    id: 11,
    title: "Azure Static Web Apps",
    image: "images/staticweb.png",
    description: "Deploy modern web apps quickly with Azure.",
    fullDescription: "Azure Static Web Apps is a service that automatically builds and deploys full-stack web apps to Azure from a GitHub repository. Great for JAMstack and SPAs.",
    url: "https://azure.microsoft.com/en-us/services/app-service/static/?wt.mc_id=studentamb_469401"
  },
  {
    id: 12,
    title: "Microsoft Reactor",
    image: "images/reactor.png",
    description: "Attend free events and workshops by Microsoft experts.",
    fullDescription: "Microsoft Reactor offers live and recorded sessions where you can connect with experts, explore new technologies, and grow your skills in areas like Azure, AI, and DevOps.",
    url: "https://developer.microsoft.com/en-us/reactor?wt.mc_id=studentamb_469401"
  },
  {
    id: 13,
    title: "Student Ambassador Program",
    image: "images/ambassador.png",
    description: "Join Microsoft's global student community.",
    fullDescription: "Microsoft Learn Student Ambassadors are a community of students who lead tech on campus, run events, and receive mentorship, exclusive access, and swag from Microsoft.",
    url: "https://studentambassadors.microsoft.com?wt.mc_id=studentamb_469401"
  },
  {
    id: 14,
    title: "Azure DevOps",
    image: "images/devops.png",
    description: "Tools to build, test, and deploy with CI/CD pipelines.",
    fullDescription: "Azure DevOps provides developer services like Boards, Repos, Pipelines, Test Plans, and Artifacts to support teams in planning work, collaborating, and delivering software.",
    url: "https://azure.microsoft.com/en-us/services/devops?wt.mc_id=studentamb_469401"
  },
  {
    id: 15,
    title: "Visual Studio",
    image: "images/visualstudio.png",
    description: "The ultimate IDE for .NET and C++ developers.",
    fullDescription: "Visual Studio is a powerful IDE from Microsoft supporting .NET, C++, Python, and more. Ideal for enterprise software development, debugging, and integrated tools.",
    url: "https://visualstudio.microsoft.com?wt.mc_id=studentamb_469401"
  },
  {
    id: 16,
    title: "Azure for Students",
    image: "images/azurestudent.png",
    description: "Free $100 Azure credit and tools for students.",
    fullDescription: "Azure for Students gives verified students free Azure credits, access to popular cloud services, and developer tools — no credit card required.",
    url: "https://azure.microsoft.com/en-us/free/students?wt.mc_id=studentamb_469401"
  },
  {
    id: 17,
    title: "Microsoft Certifications",
    image: "images/certifications.png",
    description: "Validate your skills with industry-recognized certs.",
    fullDescription: "Microsoft offers role-based certifications in areas like Azure, Security, AI, and Microsoft 365. These validate your skills and improve your employability.",
    url: "https://learn.microsoft.com/en-us/certifications/?wt.mc_id=studentamb_469401"
  },
  {
    id: 18,
    title: "Microsoft Developer Hub",
    image: "images/devhub.png",
    description: "One-stop hub for Microsoft developer resources.",
    fullDescription: "The Microsoft Developer Hub aggregates tools, docs, and SDKs for Windows, Azure, Edge, and more. Great place to start building with Microsoft tech.",
    url: "https://developer.microsoft.com/en-us/?wt.mc_id=studentamb_469401"
  }
];
