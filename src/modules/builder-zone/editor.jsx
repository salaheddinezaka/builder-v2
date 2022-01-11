import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'
import { renderElement } from '../../utils/render-elements'

const elements = [
  {
    id: 1,
    type: 'section',
    children: 'AZERTY',
    options: {}
  },
  {
    id: 2,
    type: 'section',
    children: [
      {
        id: 3,
        type: 'section',
        children: 'Test Child',
        options: {
          textAlign: 'center',
          color: 'red'
        }
      },
      {
        id: 4,
        type: 'section',
        children: 'Test Child 2',
        options: {}
      }
    ],
    options: {}
  }
]

export default function Editor() {
  
  return (
    <EditorContainer>
      <TemplateEditor>
        <DragDropContext>
          {elements.map((element) => renderElement(element))}
        </DragDropContext>
      </TemplateEditor>
    </EditorContainer>
  )
}

const EditorContainer = styled.div`
  background: #f1f3f4;
  font-family: Roboto, sans-serif;
  height: 100%;
  flex-grow: 1;
`

const TemplateEditor = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 2px 2px 0px rgb(0 0 0 / 14%),
    0px 3px 1px -2px rgb(0 0 0 / 12%), 0px 1px 5px 0px rgb(0 0 0 / 20%);
`
