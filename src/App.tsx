import { useAppTheme } from "./hooks/useAppTheme";

function App() {
  const {handleSwitchTheme} = useAppTheme()
  return (
    <div className="h-screen w-full flex justify-center items-center dark:bg-neutral-900">
      <button onClick={handleSwitchTheme} className="p-2 bg-slate-200 hover:bg-slate-300">Change theme</button>
    </div>
  );
}

export default App;
