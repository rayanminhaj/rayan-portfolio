import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Montserrat } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "900"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600"] });

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;

  const projects = {
    vizzard: {
      title: "THE VIZZARD",
      tagline: "A data-driven election analyzer built to visualize democracy through data",
      desc: `The Vizzard is my deep dive into the intersection of politics and programming. I wanted to see if raw data could narrate election stories on its own - and this project was my answer.

It parses over 50 state spreadsheets and 3,000 county-level rows using Apache POI, computing both popular and electoral votes automatically. Through this, it identifies margins, anomalies, and missing data entries in real time.

Once processed, data flows into a Java Swing dashboard where users can visualize voter turnout, color-coded state maps, and projected trends. I also implemented a partial-report simulation, which forecasts outcomes from incomplete data, improving projection stability by about 20%.

This project taught me a lot about optimizing I/O pipelines, designing visual interfaces, and most importantly, turning raw numbers into something people can actually understand.`,
      image: "/projects/the_vizzard_summary-cover.webp.png",
      preview: "/projects/the_vizzard_preview.png",
      github: ["https://github.com/rayanminhaj/the-vizzard"],
      timeline: "Jun–Aug 2025",
      technologies: ["Java", "Apache POI", "Swing"],
      next: "studybuddy",
      prev: "mathly",
    },
    studybuddy: {
      title: "STUDY BUDDY",
      tagline: "An AI-assisted scheduler that learns your study patterns",
      desc: `Study Buddy was a class project I proposed and led with a group of four students. The idea was entirely mine - to create an AI-powered scheduling tool that learns a student’s habits and helps plan study sessions more efficiently.

We built it using Python OOP and Matplotlib, developing a task prioritization algorithm that adapts to upcoming deadlines and workload. The dashboard visualizes progress, workload intensity, and overall productivity.

Despite our efforts, we faced several technical challenges, especially around optimization and data persistence. Still, we managed to deliver a fully functional prototype that impressed our professor, who even encouraged us to continue the project beyond the course.

This experience taught me about leadership, teamwork, and balancing ambitious ideas with realistic implementation limits.`,
      image: "/projects/StudyBuddy-cover.webp.png",
      preview: "/projects/study_buddy_preview.png",
      github: ["https://github.com/rayanminhaj/StudyBuddy"],
      timeline: "Mar–May 2025",
      technologies: ["Python", "OOP", "Matplotlib"],
      next: "21arena",
      prev: "vizzard",
    },
    "21arena": {
      title: "21ARENA",
      tagline: "A Blackjack simulator blending coding with casino logic",
      desc: `21Arena is where mathematics meets gameplay. I built it as a Python-based Blackjack simulator to explore how probability and decision-making can coexist in code.

The simulator uses custom-built stack and queue structures to manage the deck and discard piles. It models realistic casino mechanics such as card shuffling, dealer advantage, and hand odds across over 10,000 automated rounds.

To ensure fairness and reproducibility, I integrated seeded randomization, allowing predictable outcomes during testing. A statistics engine then computes dealer bust probabilities and win/loss ratios for every run.

Beyond the numbers, this project helped me appreciate object-oriented design and logic modeling - simulating real-world randomness while keeping everything reproducible was both challenging and satisfying.`,
      image: "/projects/21Arena-cover.webp.png",
      preview: "/projects/21_preview.png",
      github: ["https://github.com/rayanminhaj/21Arena"],
      timeline: "Jan–Feb 2025",
      technologies: ["Python", "OOP", "Data Structures"],
      next: "mathly",
      prev: "studybuddy",
    },
    mathly: {
      title: "MATHLY",
      tagline: "A visual math engine that turns equations into insight",
      desc: `Mathly is my take on making math interactive, intuitive, and visually appealing. It’s built with Streamlit, NumPy, and SymPy, allowing users to explore math concepts through real-time visuals.

The app solves algebraic equations, performs matrix operations, and computes statistics like mean, median, and standard deviation - all while showing intermediate steps.

Its backend dynamically detects problem types and routes them to the right solver, ensuring precise outputs whether you’re calculating determinants or solving symbolic derivatives.

I also optimized parsing and caching to reduce user error rates by around 40%, making it much smoother for live classroom demos. Mathly taught me to merge precision with design - math no longer has to be intimidating.`,
      image: "/projects/mathly-cover.webp.png",
      preview: "/projects/mathly_preview.png",
      github: ["https://github.com/rayanminhaj/Mathly"],
      timeline: "Oct–Dec 2024",
      technologies: ["Python", "Streamlit", "NumPy", "SymPy"],
      next: "vizzard",
      prev: "21arena",
    },
  };

  const project = projects[resolvedParams.slug as keyof typeof projects];
  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#e8ffe7]">
        <h1 className="text-3xl font-bold text-gray-800">Project not found</h1>
      </div>
    );
  }

  const nextProject = projects[project.next as keyof typeof projects];
  const prevProject = projects[project.prev as keyof typeof projects];

  return (
    <main
      className={`min-h-screen bg-[#e8ffe7] text-neutral-900 px-8 py-16 flex flex-col items-center ${montserrat.className}`}
    >
      {/* Title */}
      <h1
        className={`${playfair.className} text-6xl font-extrabold tracking-widest mb-3`}
      >
        {project.title}
      </h1>
      <p className="text-lg italic text-gray-700 max-w-2xl mb-10 text-center">
        {project.tagline}
      </p>

      {/* Preview Image */}
      <div className="flex justify-center mb-12">
        <Image
          src={project.preview}
          alt={`${project.title} preview`}
          width={900}
          height={500}
          className="rounded-xl shadow-md border border-green-200"
        />
      </div>

      {/* Info Section */}
      <div className="max-w-3xl text-left mb-12">
        <div className="grid grid-cols-2 gap-y-6">
          <div>
            <p className="font-semibold uppercase text-sm tracking-wide mb-1">
              Timeline
            </p>
            <p className="text-gray-800">{project.timeline}</p>
          </div>

          <div>
            <p className="font-semibold uppercase text-sm tracking-wide mb-1">
              URL
            </p>
            {project.github.map((link) => (
              <a
                key={link}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 underline block"
              >
                {link}
              </a>
            ))}
          </div>

          <div>
            <p className="font-semibold uppercase text-sm tracking-wide mb-1">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2 mt-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-green-100 text-green-800 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="max-w-2xl text-lg leading-relaxed mb-10 whitespace-pre-line text-left text-gray-800">
        {project.desc}
      </p>

      {/* Bottom Image */}
      <div className="flex justify-center mt-8 mb-16">
        <Image
          src={project.image}
          alt={`${project.title} summary`}
          width={900}
          height={500}
          className="rounded-xl shadow-md border border-green-200"
        />
      </div>

      {/* Page Scroller with Previous + Next */}
      <div className="w-full max-w-5xl border-t border-gray-300 pt-6 flex justify-between text-gray-900">
        {/* Previous Project */}
        <div>
          <p className="text-xs uppercase text-gray-500 tracking-widest mb-1">
            Previous Project
          </p>
          <Link
            href={`/work/${project.prev}`}
            className="text-lg font-medium hover:underline"
          >
            {prevProject.title.toLowerCase()}
          </Link>
        </div>

        {/* Next Project */}
        <div className="text-right">
          <p className="text-xs uppercase text-gray-500 tracking-widest mb-1">
            Next Project
          </p>
          <Link
            href={`/work/${project.next}`}
            className="text-lg font-medium hover:underline"
          >
            {nextProject.title.toLowerCase()}
          </Link>
        </div>
      </div>
    </main>
  );
}