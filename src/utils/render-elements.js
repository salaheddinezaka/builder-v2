import React from 'react'
import Section from '../components/section'

export const renderElement = (element) => {
  const { id, type, options, children } = element
  switch (element.type) {
    case 'section': {
      return (
        <Section id={id} type={type} options={options} children={children} />
      )
    }
  }
}