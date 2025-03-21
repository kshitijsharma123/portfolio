import Navbar from "./components/Navbar";
import ProfileSection from "./components/ProfileSection";
import SkillsComponent from "./components/Skill";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <div class="container mx-auto px-4 py-8 rounded-3xl bg-white">
        <Navbar />
        <ProfileSection />
        <SkillsComponent />
        <Projects />

        
       
      </div>
    </div>
  );
}

export default App;
