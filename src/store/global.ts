import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GlobalState {
  showTrashDialogFlag: boolean;
  draggingNote?: Note;
  showSettingDialogFlag: boolean;
}

const getInitialState = (): GlobalState => {
  return {
    showTrashDialogFlag: false,
    draggingNote: undefined,
    showSettingDialogFlag: false,
  };
};

export const globalStoreSlice = createSlice({
  name: "global",
  initialState: getInitialState(),
  reducers: {
    setShowTrashDialogFlag: (state, action: PayloadAction<boolean>) => {
      state.showTrashDialogFlag = action.payload;
    },
    setDraggingNote: (state, action: PayloadAction<Note | undefined>) => {
      state.draggingNote = action.payload;
    },
    setSettingDialogFlag: (state, action: PayloadAction<boolean>) => {
      state.showSettingDialogFlag = action.payload;
    },
  },
});

export const { setShowTrashDialogFlag, setDraggingNote, setSettingDialogFlag } = globalStoreSlice.actions;

export default globalStoreSlice.reducer;
