const techData = [
  {
    id: 1,
    title: "Microsoft Azure",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    shortDescription: "Cloud computing service for building, testing, deploying, and managing applications and services.",
    fullDescription: "Microsoft Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers. It provides software as a service (SaaS), platform as a service (PaaS) and infrastructure as a service (IaaS) and supports many different programming languages, tools, and frameworks, including both Microsoft-specific and third-party software and systems.",
    url: "https://azure.microsoft.com/?wt.mc_id=studentamb_469401"
  },
  {
    id: 2,
    title: "Imagine Cup",
    image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg",
    shortDescription: "Global student technology competition to bring innovative ideas to life.",
    fullDescription: "Microsoft Imagine Cup is an annual competition sponsored and hosted by Microsoft Corp. which brings together student developers worldwide to help resolve some of the world's toughest challenges. It is considered as 'Olympics of Technology' by computer science and engineering students across the globe. All Imagine Cup competitors create projects that address the Imagine Cup theme: \"Imagine a world where technology helps solve the toughest problems\".",
    url: "https://imaginecup.microsoft.com/?wt.mc_id=studentamb_469401"
  },
  {
    id: 3,
    title: "Microsoft Fabric Blog",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
    shortDescription: "Latest updates and insights on Microsoft's analytics platform.",
    fullDescription: "The Microsoft Fabric blog provides the latest updates, features, and insights about Microsoft's integrated analytics platform. Microsoft Fabric brings together data, analytics, and AI to help organizations make better decisions through powerful data visualizations and comprehensive analytics tools. The blog is an essential resource for data professionals looking to stay updated on the platform's evolution and best practices.",
    url: "https://blog.fabric.microsoft.com/?wt.mc_id=studentamb_469401"
  },
  {
    id: 4,
    title: "Microsoft Learn",
    image: "https://images.pexels.com/photos/7108/notebook-computer-chill-relax.jpg",
    shortDescription: "Free online training and learning resources for Microsoft products and services.",
    fullDescription: "Microsoft Learn is a free, online training platform that provides interactive learning for Microsoft products and more. Microsoft Learn provides interactive, hands-on learning for Microsoft products and more. It's designed to help you achieve your goals through free, interactive, online training that's specific to your role and goals. Whether you're just starting or an experienced professional, Microsoft Learn's hands-on approach helps you arrive at your goals faster, with more confidence and at your own pace.",
    url: "https://learn.microsoft.com/?wt.mc_id=studentamb_469401"
  },
  {
    id: 5,
    title: "Visual Studio Code",
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg",
    shortDescription: "Free, open-source code editor with powerful developer tools.",
    fullDescription: "Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity). VS Code combines the simplicity of a source code editor with powerful developer tooling, like IntelliSense code completion and debugging.",
    url: "https://code.visualstudio.com/?wt.mc_id=studentamb_469401"
  },
  {
    id: 6,
    title: "Microsoft Copilot",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    shortDescription: "AI companion that combines the power of LLMs with your data in Microsoft 365.",
    fullDescription: "Microsoft Copilot is an AI companion that combines the power of large language models with your data in Microsoft 365. Copilot is integrated into Microsoft 365 apps to help you with writing, coding, designing, and more. It's designed to help you be more creative, productive, and collaborate more effectively. Whether you're drafting a document, analyzing data, creating a presentation, or managing your inbox, Copilot can help you accomplish your goals with unprecedented ease and efficiency.",
    url: "https://learn.microsoft.com/copilot/?wt.mc_id=studentamb_469401"
  },
  {
    id: 7,
    title: "Fabric Community",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    shortDescription: "Community platform for Microsoft Fabric users to connect and share knowledge.",
    fullDescription: "The Microsoft Fabric Community is a vibrant platform where users of Microsoft's analytics platform can connect, share knowledge, and collaborate. The community provides forums, events, and resources to help users get the most out of Microsoft Fabric. Whether you're a beginner or an expert, the community offers valuable insights, troubleshooting help, and best practices from fellow users and Microsoft experts. It's the perfect place to enhance your skills and stay updated on the latest developments in data analytics.",
    url: "https://community.fabric.microsoft.com/?wt.mc_id=studentamb_469401"
  },
  {
    id: 8,
    title: "Microsoft Cloud Blog",
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg",
    shortDescription: "Latest news and updates on Microsoft's cloud services and technologies.",
    fullDescription: "The Microsoft Cloud Blog provides the latest news, updates, and insights on Microsoft's cloud services and technologies. It covers a wide range of topics including Azure, Microsoft 365, Dynamics 365, and more. The blog is a valuable resource for IT professionals, developers, and business decision-makers looking to stay informed about cloud computing trends, best practices, and innovations. It features articles, case studies, and announcements that showcase how organizations are leveraging Microsoft's cloud solutions to transform their businesses.",
    url: "https://microsoft.com/microsoft-cloud/blog/?wt.mc_id=studentamb_469401"
  },
  {
    id: 9,
    title: "Microsoft Dev Blogs",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    shortDescription: "Technical insights and updates for developers building on Microsoft platforms.",
    fullDescription: "Microsoft Dev Blogs provide technical insights, updates, and guidance for developers building on Microsoft platforms. These blogs cover a wide range of topics including .NET, Azure, Visual Studio, Windows, and more. Written by Microsoft engineers and experts, they offer deep dives into new features, best practices, and practical code examples. Whether you're a beginner or an experienced developer, Microsoft Dev Blogs are an essential resource for staying up-to-date with the latest developments in Microsoft's developer tools and technologies.",
    url: "https://devblogs.microsoft.com/?wt.mc_id=studentamb_469401"
  },
  {
    id: 10,
    title: "Microsoft Fabric",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
    shortDescription: "All-in-one analytics solution for enterprises at a limitless scale.",
    fullDescription: "Microsoft Fabric is an all-in-one analytics solution for enterprises at a limitless scale. It brings together data, analytics, and AI capabilities into a single platform, simplifying the complexity of data management and analysis. With Microsoft Fabric, organizations can seamlessly integrate, analyze, and visualize their data to drive better business outcomes. It combines the best of Microsoft's data and AI technologies to provide a comprehensive solution for modern data needs, from data engineering to business intelligence and machine learning.",
    url: "https://microsoft.com/microsoft-fabric/?wt.mc_id=studentamb_469401"
  },
  {
    id: 11,
    title: "Microsoft Developer",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
    shortDescription: "Resources and tools for developers building on Microsoft platforms.",
    fullDescription: "Microsoft Developer provides resources and tools for developers building on Microsoft platforms. It offers documentation, code samples, tutorials, and community support for a wide range of Microsoft technologies including Windows, Azure, .NET, Visual Studio, and more. Whether you're developing web applications, mobile apps, desktop software, or cloud solutions, Microsoft Developer has the resources you need to succeed. It's a one-stop destination for developers looking to learn new skills, stay updated on the latest developer news, and connect with the broader Microsoft developer community.",
    url: "https://developer.microsoft.com/?wt.mc_id=studentamb_469401"
  },
  {
    id: 12,
    title: "Microsoft for Startups",
    image: "https://images.pexels.com/photos/7102/notes-macbook-study-conference.jpg",
    shortDescription: "Programs and resources to help startups innovate and grow.",
    fullDescription: "Microsoft for Startups offers programs and resources to help startups innovate and grow. It provides access to Microsoft's technology, mentorship, go-to-market support, and a global network of customers and partners. The program is designed to accelerate startup growth by providing technical and business resources that help startups build their products, grow their customer base, and scale their business. From cloud credits to technical support and sales opportunities, Microsoft for Startups is committed to helping founders at every stage of their journey.",
    url: "https://microsoft.com/startups/?wt.mc_id=studentamb_469401"
  },
  {
    id: 13,
    title: ".NET Framework",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg",
    shortDescription: "Free, cross-platform, open-source developer platform for building many different types of applications.",
    fullDescription: ".NET is a free, cross-platform, open-source developer platform for building many different types of applications. With .NET, you can use multiple languages, editors, and libraries to build for web, mobile, desktop, games, IoT, and more. The .NET platform provides a consistent programming model for building applications that run on Windows, Linux, and macOS. It includes a large class library, common APIs, multi-language support, and tools that make it easy to develop powerful, high-performance applications.",
    url: "https://dotnet.microsoft.com/?wt.mc_id=studentamb_469401"
  },
  {
    id: 14,
    title: "Microsoft MVP",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    shortDescription: "Recognition program for passionate technology experts who share their knowledge.",
    fullDescription: "The Microsoft Most Valuable Professional (MVP) Award is a recognition program for passionate technology experts who share their knowledge with the community. MVPs are technology experts who passionately share their knowledge with the community. They are always on the cutting edge of technology and have an unstoppable urge to get their hands on new, exciting technologies. MVPs make exceptional contributions to technical communities, sharing their passion, knowledge, and know-how. Microsoft MVPs are awarded in various technology categories and recognized for their contributions over the past year.",
    url: "https://mvp.microsoft.com/?wt.mc_id=studentamb_469401"
  },
  {
    id: 15,
    title: "Microsoft Events",
    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
    shortDescription: "Conferences, webinars, and workshops for technology professionals and enthusiasts.",
    fullDescription: "Microsoft Events include conferences, webinars, and workshops for technology professionals and enthusiasts. These events provide opportunities to learn about the latest Microsoft technologies, network with industry experts, and gain hands-on experience with new products and services. From global conferences like Microsoft Build and Microsoft Ignite to local workshops and online webinars, Microsoft offers a wide range of events to suit different interests and learning preferences. Attending Microsoft Events is a great way to stay updated on the latest trends, expand your skills, and connect with the Microsoft community.",
    url: "https://events.microsoft.com/?wt.mc_id=studentamb_469401"
  },
  {
    id: 16,
    title: "Microsoft Reactor",
    image: "https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg",
    shortDescription: "Physical and digital community spaces to learn, connect, and explore technology.",
    fullDescription: "Microsoft Reactor is a network of physical and digital community spaces designed to foster learning, connection, and exploration of technology. Reactors are inclusive spaces where developers, startups, and community organizations can come together to share ideas, learn new skills, and collaborate on projects. They offer a variety of programs including workshops, hackathons, meetups, and office hours with Microsoft experts. Whether you're a beginner or an experienced developer, Microsoft Reactor provides resources and support to help you grow your skills and connect with like-minded individuals in the tech community.",
    url: "https://reactor.microsoft.com/?wt.mc_id=studentamb_469401"
  },
  {
    id: 17,
    title: "Founders Hub",
    image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
    shortDescription: "Resources and support for startup founders at every stage of their journey.",
    fullDescription: "Microsoft Founders Hub provides resources and support for startup founders at every stage of their journey. It offers access to technology, mentorship, and networking opportunities to help startups build and scale their businesses. The platform includes benefits like free Azure credits, developer tools, business guidance, and introductions to potential customers and investors. Microsoft Founders Hub is designed to help founders overcome common challenges and accelerate their growth, whether they're just starting out or looking to expand their existing business.",
    url: "https://foundershub.startups.microsoft.com/?wt.mc_id=studentamb_469401"
  },
  {
    id: 18,
    title: "Tech Community",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    shortDescription: "Online community for IT professionals to connect, learn, and share knowledge.",
    fullDescription: "Microsoft Tech Community is an online platform for IT professionals to connect, learn, and share knowledge about Microsoft products and services. It provides forums, blogs, events, and resources for a wide range of Microsoft technologies including Azure, Microsoft 365, Windows, and more. The community is a place where users can ask questions, share experiences, and get help from Microsoft experts and fellow community members. Whether you're troubleshooting an issue, exploring new features, or looking for best practices, Microsoft Tech Community is a valuable resource for staying informed and connected.",
    url: "https://techcommunity.microsoft.com/?wt.mc_id=studentamb_469401"
  }
];
