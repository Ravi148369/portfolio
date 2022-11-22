import About from "./components/About";
import Contact from "./components/Contact";
import IntroPage from "./components/IntroPage";
import Projects from "./components/Projects";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="bg-navy-100 min-h-screen">
      <div>
        <div className="fixed">
          <SideBar/>
        </div>
        <div>
          <IntroPage/>
          <About/>
          <Projects/>
          <Contact/>
        </div>
      </div>
    </div>
  );
}

export default App;
