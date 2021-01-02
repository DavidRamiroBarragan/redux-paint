import { useSelector } from "react-redux";
import { PROJECTS_MODAL, PROJECTS_SAVE_MODAL } from "../constants/shared";
import { modalNameSelector } from "../sourceOfTrue/modals/selectors";
import ProjectsModal from "./modals/ProjectsModal";
import ProjectsSaveModal from "./modals/ProjectsSaveModal";

const ModalLayer = () => {
  const modalName = useSelector(modalNameSelector);

  switch (modalName) {
    case PROJECTS_MODAL: {
      return <ProjectsModal />;
    }
    case PROJECTS_SAVE_MODAL: {
      return <ProjectsSaveModal />;
    }
    default:
      return null;
  }
};

export default ModalLayer;
