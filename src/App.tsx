import "./app.css";

import { HeaderComponent } from "./components/header/header.component";
import { QuizContextProvider } from "./context/quiz.context";
import { useAppRouter } from "./hooks/useAppRouter";

function App() {
  const { publicRouter } = useAppRouter();
  return (
    <div className="bg-grey w-full min-h-screen dark:bg-navy-dark app-content-container">
      <QuizContextProvider>
        <HeaderComponent />
        <section className="w-full app-routes-container">
          {publicRouter}
        </section>
      </QuizContextProvider>
    </div>
  );
}

export default App;
