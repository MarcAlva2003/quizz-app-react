import { HomeModule } from "../modules/home/home.module";
import { InProgressModal } from "../components/in-progress-modal/in-progress-modal.component";
import { useState } from "react";

export const HomePage = () => {
  const [showProgressModal, setProgressModal] = useState<boolean>(true);
  return (
    <>
      <HomeModule />
      <InProgressModal
        isOpen={showProgressModal}
        onClose={() => {
          setProgressModal(false);
        }}
      />
    </>
  );
};
