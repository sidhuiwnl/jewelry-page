
import Breaking from "./Components/Breaking"
import IntroSection from "./Components/IntroSection"
import JewelCard from "./Components/JewelCard"
import image1 from './assets/img1.jpeg'
import image2 from './assets/img2.jpeg'
import image3 from './assets/img3.jpeg'
import image4 from './assets/img4.jpeg'
import image5 from './assets/img5.jpeg'
import image6 from './assets/img6.jpeg'
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"



function App() {
  return (
    <>
    <Navbar/>
    <IntroSection/>
    <Breaking/>
    <div className="grid grid-cols-3 p-1 m-3">
      <JewelCard image={image1}/>
      <JewelCard image={image2}/>
      <JewelCard image={image3}/>
      <JewelCard image={image4}/>
      <JewelCard image={image5}/>
      <JewelCard image={image6}/>

      
    </div>
    <Breaking/>
    <Footer/>
    </>
  )
}

export default App
