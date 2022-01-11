import { useDispatch, useSelector } from 'react-redux'
import { addElement, selectElement } from '../state/slices/editorSlice'

export default function useEditorHelpers() {
  const dispatch = useDispatch()
  const editor = useSelector((state) => state.editor)

  const addElementToEditor = (containerId, element) =>
    dispatch(addElement({ containerId, element }))

  const getLengthOfTree = () => {
    const list = editor.tree.traverseBFS()
    console.log({ list })
    return list ? list.length + 1 : 1
  }

  const selectElementOfEditor = (elementId) => {
    dispatch(selectElement(elementId))
  }

  return { addElementToEditor, getLengthOfTree, selectElementOfEditor }
}
