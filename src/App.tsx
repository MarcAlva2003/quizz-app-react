import "./app.css";

import { HeaderComponent } from "./components/header/header.component";
import { InProgressModal } from "./components/in-progress-modal/in-progress-modal.component";
import { useAppRouter } from "./hooks/useAppRouter";
import { useState } from "react";

function App() {
  const { publicRouter } = useAppRouter();
  const [showProgressModal, setProgressModal] = useState<boolean>(true);
  return (
    <div className="bg-grey w-full h-screen dark:bg-navy-dark app-content-container">
      <HeaderComponent />
      <section className="w-full app-routes-container">{publicRouter}</section>
      <InProgressModal
        isOpen={showProgressModal}
        onClose={() => {
          setProgressModal(false);
        }}
      />
    </div>
  );
}

export default App;
