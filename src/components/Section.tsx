import { ReactNode } from "react"

type SectionProps = {
    title?: string,
    children: ReactNode
}

export const Section = ({children, title="My subheading"}: SectionProps) => {
  return (
    <section>
      <p className="text-xl text-red-200">{title}</p>
      <p>{children}</p>
    </section>
  )
}