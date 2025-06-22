import { ArrowUpRightIcon, Link, XIcon } from 'lucide-react'
import React from 'react'
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogTrigger,
} from './morphing-dialog'
import { Project } from '@/app/data'

interface ProjectImageProps {
  src: string
  alt: string
}

function ProjectImage({ src, alt }: ProjectImageProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <img
          src={src}
          alt={alt}
          className="aspect-video w-full cursor-zoom-in rounded-xl object-cover"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <img
            src={src}
            alt={alt}
            className="aspect-video h-[50vh] w-full rounded-xl object-cover md:h-[70vh]"
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

export const ProjectPreview = ({ project }: { project: Project }) => {
  return (
    <article key={project.name + project.id} className="space-y-2">
      <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
        <ProjectImage src={project.video} alt={project.name} />
      </div>
      <div className="rounded-lg px-2 pt-2 pb-4">
        <header className="my-2 flex flex-row items-center justify-between">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-zinc-900 transition-all duration-200 hover:underline dark:text-zinc-50"
            aria-label={`Read more about ${project.name}`}
          >
            {project.name}
          </a>
          <a
            className="font-base group relative inline-flex items-center gap-1 text-sm font-[500] text-zinc-500 transition-colors duration-200 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-100"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.name} project`}
          >
            Link{' '}
            <ArrowUpRightIcon className="h-4 w-4 text-zinc-500 transition-colors duration-200 group-hover:animate-bounce group-hover:text-zinc-900 dark:text-zinc-500 dark:group-hover:text-zinc-100" />
          </a>
        </header>

        <p className="text-base text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
        {project.skills && project.skills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="rounded-xl bg-zinc-100 px-4 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectPreview
