import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Contact,
} from "./components";
import StarsBackground from "./components/StarsBackground";
export default function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <StarsBackground />
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}
