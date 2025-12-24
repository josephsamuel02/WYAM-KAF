import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./utils/routes";
import Navbar from "./components/Navbar";
import Landing from "./pages/landing";
import About from "./pages/about";
import Contact from "./pages/contact";
import StaffTeam from "./pages/staff-team";

function App() {
  return (
    <Router>
      <div className="app min-h-screen mesh-gradient bg-white dark:bg-secondary-950 transition-colors duration-500">
        <Navbar />

        {/* Routes */}
        <main className="pt-20 min-h-screen lg:pt-20">
          <Routes>
            <Route path={routes.Landing_page} element={<Landing />} />
            <Route path={routes.about_page} element={<About />} />
            <Route path={routes.contact_page} element={<Contact />} />
            <Route path={routes.staff_page} element={<StaffTeam />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
