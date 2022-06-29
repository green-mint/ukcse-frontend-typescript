import React from 'react'

export interface BaseTemplateProps {
  text: string
}

const BaseTemplate = ({ text }: BaseTemplateProps) => {
  return (
    <div>{text}</div>
  )
}

export default BaseTemplate