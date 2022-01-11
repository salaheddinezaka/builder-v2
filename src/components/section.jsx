import styled from 'styled-components'
import { renderElement } from '../utils/render-elements'

export default function Section({ type, id, options, children }) {
  return (
    <SectionContainer key={id} styles={options}>
      {typeof children === 'string'
        ? children
        : children.map((child) => renderElement(child))}
    </SectionContainer>
  )
}

const SectionContainer = styled.div`
  ${(props) => props.styles}
  &:hover {
    border: 1px dashed #000;
  }
`
