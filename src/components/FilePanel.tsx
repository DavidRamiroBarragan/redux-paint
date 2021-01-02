import { useCanvas } from "../CanvasContext";
import { saveAs } from "file-saver";
import { getCanvasImage } from "../utils/canvasUtils";
import { useDispatch } from "react-redux";
import { show } from "../sourceOfTrue/modals/slice";
import { PROJECTS_MODAL, PROJECTS_SAVE_MODAL } from "../constants/shared";

function FilePanel() {
  const canvasRef = useCanvas();
  const dispatch = useDispatch();

  const exportToFile = async () => {
    const file = await getCanvasImage(canvasRef.current);
    if (!file) return;

    saveAs(file, "drawing.png");
  };
  return (
    <div className="window file">
      <div className="title-bar">
        <div className="title-bar-text">File</div>
      </div>
      <div className="window-body">
        <div className="field-row">
          <button className="save-button" onClick={exportToFile}>
            Export
          </button>
          <button
            className="save-button"
            onClick={() => {
              dispatch(show(PROJECTS_SAVE_MODAL));
            }}
          >
            Save
          </button>
          <button
            className="save-button"
            onClick={() => {
              dispatch(show(PROJECTS_MODAL));
            }}
          >
            Load
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilePanel;
