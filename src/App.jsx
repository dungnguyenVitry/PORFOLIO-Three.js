import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Hero, Navbar, Tech, Certificate} from './components';



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center" >
          <Navbar/>
          <Hero/>
        </div>
        <About />
        <Experience/>
        <Tech/>
        <Certificate/>
      </div>
      <div className="relative z-0">
        <Contact/>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
