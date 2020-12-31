import { MouseEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { drawStroke, setCanvasSize, clearCanvas } from "./utils/canvasUtils";
import { RootState } from "./types/types";
import ColorPanel from "./components/ColorPanel";
import EditPanel from "./components/EditPanel";

import "./App.css";
import { currentStrokeSelector } from "./sourceOfTrue/currentStroke/selectors";
import {
  beginStroke,
  endStroke,
  updateStroke,
} from "./sourceOfTrue/currentStroke/actions";
import { historyIndexSelector } from "./sourceOfTrue/historyIndex/selectors";
import { strokesSelector } from "./sourceOfTrue/strokes/selectors";
import { useCanvas } from "./CanvasContext";
import FilePanel from "./components/FilePanel";
const WIDTH = 1024;
const HEIGHT = 768;

function App() {
  const canvasRef = useCanvas();
  const currentStroke = useSelector<RootState, RootState["currentStroke"]>(
    currentStrokeSelector
  );

  const historyIndex = useSelector<RootState, RootState["historyIndex"]>(
    historyIndexSelector
  );

  const strokes = useSelector<RootState, RootState["strokes"]>(strokesSelector);

  const dispatch = useDispatch();
  const isDrawing = !!currentStroke.points.length;

  const getCanvasWithContext = (canvas = canvasRef.current) => {
    return { canvas, context: canvas?.getContext("2d") };
  };

  const startDrawing = ({ nativeEvent }: MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = nativeEvent;
    dispatch(beginStroke(offsetX, offsetY));
  };

  const endDrawing = () => {
    if (isDrawing) {
      dispatch(endStroke(historyIndex, currentStroke));
    }
  };
  const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;

    dispatch(updateStroke(offsetX, offsetY));
  };

  useEffect(() => {
    const { context } = getCanvasWithContext();
    if (!context) {
      return;
    }

    requestAnimationFrame(() =>
      drawStroke(context, currentStroke.points, currentStroke.color)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStroke]);

  useEffect(() => {
    const { canvas, context } = getCanvasWithContext();

    if (!context || !canvas) {
      return;
    }

    requestAnimationFrame(() => {
      clearCanvas(canvas);
      strokes.slice(0, strokes.length - historyIndex).forEach((stroke) => {
        drawStroke(context, stroke.points, stroke.color);
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [historyIndex]);

  useEffect(() => {
    const { canvas, context } = getCanvasWithContext();
    if (!canvas || !context) {
      return;
    }

    setCanvasSize(canvas, WIDTH, HEIGHT);

    context.lineJoin = "round";
    context.lineCap = "round";
    context.lineWidth = 5;
    context.strokeStyle = "black";

    clearCanvas(canvas);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">Redux Paint</div>
        <div className="title-bar-controls">
          <button aria-label="Close" />
        </div>
      </div>
      <EditPanel />
      <ColorPanel />
      <FilePanel />
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseOut={endDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </div>
  );
}

export default App;
