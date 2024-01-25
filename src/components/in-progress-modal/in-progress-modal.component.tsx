import "./in-progress-modal.style.css";

import { createPortal } from "react-dom";

interface IInProgressModal {
  isOpen: boolean;
  onClose: () => void;
}

export const InProgressModal = (props: IInProgressModal) => {
  const { isOpen, onClose } = props;
  return isOpen
    ? createPortal(
        <div
          className={`in-progress-modal-bg ${
            isOpen ? "in-progress-modal-bg--open" : ""
          }`}
          onClick={onClose}
        >
          <div className="in-progress-modal-content" onClick={(ev) => {ev.stopPropagation()}}>
            <h2>Hi! I'm so glad you are here! 😁</h2>
            <p>
              This project is still being developed, but anyway here you can see
              the progress.
            </p>
            <p>
              If you want to check the tasks I´m working on, you can follow this{" "}
              <a>link</a>.
            </p>
            <p>Happy Quiz!</p>
            <button onClick={onClose}>Continue!</button>
          </div>
        </div>,
        document.getElementById("portal") as HTMLElement
      )
    : null;
};
