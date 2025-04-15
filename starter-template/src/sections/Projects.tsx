import WanderVaultImage from "@/assets/images/Wander.png";
import Estate from "@/assets/images/Estate.png";
import aiStartupLandingPage from "@/assets/images/intelli.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    title: "WanderVault",
    results: [
      {
        title:
          "Developed WanderVault, a platform for users to add images with stories and locations to preserve memories",
      },
      {
        title:
          "Implemented intuitive UI/UX for seamless image and story uploads",
      },
      {
        title: "Enabled location-based tagging for better memory organization",
      },
      {
        title:
          "Integrated database storage for efficient data retrieval and management",
      },
    ],
    link: "https://github.com/Vaibhavr699/WanderVault",
    image: WanderVaultImage,
  },
  {
    company: "",
    title: "IntelliLearnX AI",
    results: [
      {
        title:
          "Developed IntelliLearnX AI, a smart learning platform powered by AI for personalized education",
      },
      {
        title:
          "Built dynamic content delivery based on user behavior and performance analytics",
      },
      {
        title:
          "Integrated responsive UI with interactive learning modules for enhanced engagement",
      },
      {
        title:
          "Optimized application performance, improving load times and mobile usability",
      },
    ],
    link: "#",
    image: aiStartupLandingPage,
  },
  {
    title: "Estate",
    results: [
      {
        title:
          "Developed Estate, a fully responsive real estate platform using React.js and Tailwind CSS",
      },
      {
        title:
          "Designed an intuitive UI for seamless property browsing and filtering",
      },
      {
        title:
          "Implemented advanced search and filtering for better property discovery",
      },
      {
        title:
          "Optimized performance for a smooth and fast user experience on all devices",
      },
    ],
    link: "https://my-eststae-app.netlify.app/",
    image: Estate,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="project">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Projects!"
          title="Featured Projects!"
          description="A showcase of innovative, user-friendly digital solutions built with passion and creativity."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className=" px-6 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white mt-8 text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105 hover:bg-gray-200">
                      <span>View Live Site</span>
                      <ArrowUp className="size-4" />
                    </button>
                  </a>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
