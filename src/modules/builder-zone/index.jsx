import styled from 'styled-components'
import Editor from './editor'
import Sidebar from './sidebar'

export default function BuilderZone() {
  return (
    <Container>
      <Editor />
      <Sidebar />
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`
