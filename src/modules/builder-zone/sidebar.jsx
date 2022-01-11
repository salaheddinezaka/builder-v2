import { useSelector } from 'react-redux'
import styled from 'styled-components'
import useEditorHelpers from '../../hooks/useEditorHelpers'

export default function Sidebar() {
  const { addElementToEditor, getLengthOfTree, selectElementOfEditor } =
    useEditorHelpers()
  const editor = useSelector((state) => state.editor)
  return (
    <Container>
      Side Bar
      <button
        onClick={() => {
          addElementToEditor(0, { id: getLengthOfTree(), type: 'section' })
          console.log({ editor })
        }}
      >
        Add Section
      </button>
      <button
        onClick={() => {
          selectElementOfEditor(1)
          console.log({ editor })
        }}
      >
        Add Section
      </button>
    </Container>
  )
}

const Container = styled.div`
  box-shadow: none;
  height: 100%;
  overflow: visible;
  z-index: 98;
  width: 256px;
`
