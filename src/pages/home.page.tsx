import { HomeModule } from "../modules/home/home.module";
import { InProgressModal } from "../components/in-progress-modal/in-progress-modal.component";
import { useProgressModal } from "../hooks/useProgressModal";

export const HomePage = () => {
  const {showProgressModal, closeModal} = useProgressModal();
  return (
    <>
      <HomeModule />
      <InProgressModal
        isOpen={showProgressModal}
        onClose={closeModal}
      />
    </>
  );
};
