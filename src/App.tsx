import { HeaderComponent } from "./components/header/header.component";
import { useAppRouter } from "./hooks/useAppRouter";
function App() {
  const { publicRouter } = useAppRouter();
  return (
    <div className="bg-grey px-[140px] py-[90px] w-full h-screen dark:bg-navy-dark">
      <HeaderComponent/>
      {publicRouter}
    </div>
  );
}

export default App;
