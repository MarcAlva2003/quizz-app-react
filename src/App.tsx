import "./app.css";

import { HeaderComponent } from "./components/header/header.component";
import { InProgressModal } from "./components/in-progress-modal/in-progress-modal.component";
import { QuizContextProvider } from "./context/quiz.context";
import { useAppRouter } from "./hooks/useAppRouter";
import { useState } from "react";

function App() {
  const { publicRouter } = useAppRouter();
  const [showProgressModal, setProgressModal] = useState<boolean>(false);
  return (
    <div className="bg-grey w-full min-h-screen dark:bg-navy-dark app-content-container">
      <QuizContextProvider>
        <HeaderComponent />
        <section className="w-full app-routes-container">
          {publicRouter}
        </section>
        <InProgressModal
          isOpen={showProgressModal}
          onClose={() => {
            setProgressModal(false);
          }}
        />
      </QuizContextProvider>
    </div>
  );
}

export default App;
