import { createSlice } from '@reduxjs/toolkit'
import { Tree } from '../../modules/tree/tree'

const initialState = {
  tree: new Tree(),
  seletedElement: null
}

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    addElement: (state, action) => {
      const { containerId, element } = action.payload
      state.tree.addNode(containerId, element)
    },
    selectElement: (state, action) => {
      const { elementId } = action.payload
      state.tree.selectNode(elementId)
    }
  }
})

export const { addElement, selectElement } = editorSlice.actions
export default editorSlice.reducer
