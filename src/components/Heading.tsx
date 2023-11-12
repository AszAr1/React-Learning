import { ReactElement } from 'react'

type HeadingProps = {title: string}

export const Heading = ({title}: HeadingProps): ReactElement => {
  return (
    <h1 className="object-center text-3xl font-bold text-center">
      {title}
    </h1>  
  )
}