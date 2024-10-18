import './App.css'
import About from './component/About'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Home from './component/Home'
import Testimonial from './component/Testimonial'
import WorkInfo from './component/WorkInfo'

function App() {
  return (
    <>
      <div className='App'>
        <Home />
        <About />
        <WorkInfo />
        <Testimonial />
        <Contact />
         <Footer/>
      </div>
    
    
    </>
  )
}

export default App
