import About from "./components/About";
import Contact from "./components/Contact";
import IntroPage from "./components/IntroPage";
import Projects from "./components/Projects";
import HamburgerMenu from "./components/HamburgerMenu";
import SideBar from "./components/SideBar";
function App() {
  
  return (
    <div className="bg-[#DEF2F8] min-h-screen">
      <div className="flex">
        <div className="fixed lg:w-1/6">
          <SideBar/>
        </div>
        <div className="lg:w-5/6 lg:ml-auto">
          <HamburgerMenu/>
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
