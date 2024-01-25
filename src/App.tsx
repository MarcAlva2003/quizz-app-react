import './app.css'

import { HeaderComponent } from "./components/header/header.component";
import { useAppRouter } from "./hooks/useAppRouter";

function App() {
  const { publicRouter } = useAppRouter();
  return (
    <div className="bg-grey w-full h-screen dark:bg-navy-dark app-content-container">
      <HeaderComponent/>
      <section className='w-full app-routes-container'>
        {publicRouter}
      </section>
    </div>
  );
}

export default App;
