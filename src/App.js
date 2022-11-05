import ContentRight from "./components/Content/ContentRight";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row ">
      <Sidebar />
      <section className="flex-1">Content Left</section>
      <ContentRight />
    </div>
  );
}

export default App;
