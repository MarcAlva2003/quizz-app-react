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
            <h2>Hi! Nice to see you here! 😁</h2>
            <p>
              This project is still being developed, but anyway here you can see
              the progress.
            </p>  
            <p>Here are some tasks I´m working on right now:</p>
            <ul>
              <li>Quiz logic</li>
              <li>Project information modal</li>
              <li>Button component</li>
              <li>Quiz progress bar component</li>
            </ul>
            <p>Happy Quiz!</p>
            <p className="in-progress-last-update-date">Last update: 25/01/2024</p>
            <button onClick={onClose}>Continue!</button>
          </div>
        </div>,
        document.getElementById("portal") as HTMLElement
      )
    : null;
};
