import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hide } from "../../sourceOfTrue/modals/slice";
import { projectsListSelector } from "../../sourceOfTrue/projectsList/selectors";
import { getProjectsList } from "../../sourceOfTrue/projectsList/thunks";
import { loadProject } from "../../sourceOfTrue/strokes/thunk";

function ProjectsModal() {
  const projectList = useSelector(projectsListSelector);
  const dispatch = useDispatch();

  const onLoadProject = (projectId: string) => {
    dispatch(loadProject(projectId));
    dispatch(hide());
  };
  useEffect(() => {
    dispatch(getProjectsList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="window modal-panel">
      <div className="title-bar">
        <div className="title-bar-text">Counter</div>
        <div className="title-bar-controls">
          <button aria-label="Close" onClick={() => dispatch(hide())}></button>
        </div>
      </div>
      <div className="projects-container">
        {(projectList.projects || []).map((project) => {
          return (
            <div
              className="project-card"
              key={project.id}
              onClick={() => onLoadProject(project.id)}
            >
              <img src={project.image} alt="thumbnail" />
              <div>{project.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsModal;
