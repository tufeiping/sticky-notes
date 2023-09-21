import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { setShowTrashDialogFlag, setSettingDialogFlag } from "../store/global";
import { addNote, updateNoteById } from "../store/note";
import "../less/toolbar.less";

const Toolbar = () => {
  const globalState = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();

  const handleStopPropagation = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
  }, []);

  const handleNewCardButtonClick = useCallback(() => {
    const now = Date.now();

    dispatch(
      addNote({
        id: `${now}`,
        content: "",
        bounding: {
          width: 256,
          height: 128,
        },
        position: {
          x: 100,
          y: 100,
        },
        status: "NORMAL",
        createdTs: now,
        updatedTs: now,
      })
    );
  }, []);

  const handleTrashMouseUp = useCallback(() => {
    if (globalState.draggingNote) {
      dispatch(
        updateNoteById({
          id: globalState.draggingNote.id,
          note: {
            status: "TRASH",
          },
        })
      );
    }
  }, [globalState.draggingNote]);

  const handleSaveMouseUp = useCallback(() => {

  }, [globalState.draggingNote]);

  const handleSettingClick = useCallback(() => {
    dispatch(setSettingDialogFlag(!globalState.showSettingDialogFlag));
  }, [globalState.showSettingDialogFlag]);

  const handleTrashClick = useCallback(() => {
    dispatch(setShowTrashDialogFlag(!globalState.showTrashDialogFlag));
  }, [globalState.showTrashDialogFlag]);

  return (
    <div className={`toolbar-container opacity-80 ${globalState.draggingNote ? "z-10" : ""}`} title="Add new note" onDoubleClick={handleStopPropagation}>
      <span className="action-btn" onClick={handleNewCardButtonClick}>
        📝
      </span>
      <span className="action-btn" title="Save notes to remote" onClick={() => { }} onMouseUp={handleSaveMouseUp}>
        💾
      </span>
      <span className="action-btn" title="Restore notes from remote" onClick={() => { }} onMouseUp={handleTrashMouseUp}>
        ➡️
      </span>
      <span className="action-btn" title="Settings" onClick={handleSettingClick}>
        ⚙️
      </span>
      <span className="action-btn trash-bin" title="Trash of notes" onClick={handleTrashClick} onMouseUp={handleTrashMouseUp}>
        🗑
      </span>
    </div>
  );
};

export default Toolbar;
