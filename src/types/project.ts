export type Project = {
  id: string
  title: string
  type: string
  role: string
  tasks: string
  interesting: string
  stack: readonly string[]
  labels?: readonly string[]
  private?: boolean
}

export type ProjectCardProps = {
  project: Project
  index: number
}
