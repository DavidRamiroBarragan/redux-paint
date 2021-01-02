import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useCanvas } from "../../CanvasContext";
import { hide } from "../../sourceOfTrue/modals/slice";
import { saveProject } from "../../sourceOfTrue/strokes/thunk";
import { getCanvasImage } from "../../utils/canvasUtils";
import { getBase64Thumbnail } from "../../utils/scaler";

const ProjectsSaveModal = () => {
  const [projectName, setProjectName] = useState("");

  const dispatch = useDispatch();

  const canvasRef = useCanvas();

  const onProjectNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProjectName(e.target.value);
  };

  const onProjectSave = async () => {
    const file = await getCanvasImage(canvasRef.current);

    if (!file) {
      return;
    }

    const thumbnail = await getBase64Thumbnail({ file, scale: 0.1 });
    dispatch(saveProject(projectName, thumbnail));
    setProjectName("");
    dispatch(hide());
  };

  return (
    <div className="window modal-panel">
      <div className="title-bar">
        <div className="title-bar-text">Save</div>
      </div>
      <div className="window-body">
        <div className="field-row-stacked">
          <label htmlFor="projectName">Project name</label>
          <input type="text" id="projectName" onChange={onProjectNameChange} />
        </div>
        <div className="filed-row">
          <button onClick={onProjectSave}>Save</button>
          <button onClick={() => dispatch(hide())}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSaveModal;
