import { useDispatch, useSelector } from "react-redux";
import { redo, undo } from "../sourceOfTrue/historyIndex/slice";
import { strokesLengthSelector } from "../sourceOfTrue/strokes/selectors";

const EditPanel = () => {
  const dispatch = useDispatch();
  const undoLimit = useSelector(strokesLengthSelector);

  return (
    <div className="window edit">
      <div className="title-bar">
        <div className="title-bar-text">Edit</div>
      </div>
      <div className="window-body">
        <div className="field-row">
          <button
            className="button redo"
            onClick={() => dispatch(undo(undoLimit))}
          >
            Undo
          </button>
          <button className="undo button" onClick={() => dispatch(redo())}>
            Redo
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPanel;
