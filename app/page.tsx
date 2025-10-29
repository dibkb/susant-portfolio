'use client'
import { motion } from 'motion/react'
import { ArrowUpRightIcon, XIcon } from 'lucide-react'
import { useState } from 'react'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import {
  AchievementPreview,
  EducationPreview,
  JobExperienceDropdown,
} from '@/components/ui/work-exp'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  EMAIL,
  SOCIAL_LINKS,
  EDUCATION,
  ACHIEVEMENTS,
} from './data'
import { ProjectPreview } from '@/components/ui/projects'
const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const displayedProjects = showAllProjects ? PROJECTS : PROJECTS.slice(0, 4)

  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
            I’m a Python Machine Learning Engineer, graduated from IIIT Lucknow
            with an MSc in Artificial Intelligence and Machine Learning. I
            specialize in designing and deploying scalable AI systems that
            combine Generative AI, NLP, Computer Vision, and Agentic AI for
            real-world applications.
            <br />
            <br />
            My professional experience includes developing enterprise-grade AI
            analytics platforms and conversational intelligence systems that
            leverage LangChain, GPT-4, and multi-tenant architectures to
            automate workflows, enable natural language data querying, and
            enhance industrial decision-making through predictive analytics.
            <br />
            <br />
            I’ve also worked on impactful projects such as a lightning
            prediction system, defect detection using YOLOv5, and RAG-based
            semantic search engines, integrating deep learning models with cloud
            and data engineering tools for production-ready deployment.
            <br />
            <br />
            With a strong foundation in Python, SQL, PyTorch, TensorFlow,
            FastAPI, and AWS, I focus on building robust, efficient, and
            explainable AI solutions that bridge data science and business
            value.
            <br />
            <br />
            Beyond work, I actively participate in Kaggle competitions,
            hackathons, and open-source AI projects, continuously exploring how
            LLMs and autonomous agents can revolutionize automation, analytics,
            and decision intelligence.
            <br />
            <br />
            💡 Passionate about applying AI to solve data-driven challenges that
            make a tangible impact.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Selected Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {displayedProjects.map((project) => (
            <ProjectPreview key={project.name + project.id} project={project} />
          ))}
        </div>
        {PROJECTS.length > 4 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="group relative inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors duration-200 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
            >
              {showAllProjects
                ? 'Show Less'
                : `See More (${PROJECTS.length - 4} more)`}
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        )}
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <JobExperienceDropdown key={job.id} job={job} />
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Education</h3>
        <div className="flex flex-col space-y-2">
          {EDUCATION.map((education) => (
            <EducationPreview key={education.school} education={education} />
          ))}
        </div>
      </motion.section>
      {/* Certifications */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">
          Certifications & Achievements
        </h3>
        <div className="flex flex-col space-y-2">
          {ACHIEVEMENTS.map((achievement) => (
            <AchievementPreview
              key={achievement.title}
              achievement={achievement}
            />
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex flex-wrap items-center justify-start space-x-3 gap-y-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
