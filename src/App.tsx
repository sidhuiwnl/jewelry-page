
import Breaking from "./Components/Breaking"
import IntroSection from "./Components/IntroSection"
import JewelCard from "./Components/JewelCard"
import image1 from './assets/img1.jpeg'
import image2 from './assets/img2.jpeg'
import image3 from './assets/img3.jpeg'
import image4 from './assets/img4.jpeg'
import image5 from './assets/img5.jpeg'
import image6 from './assets/img6.jpeg'
import image7 from './assets/img10.jpeg'
import image8 from './assets/img8.jpeg'
import image9 from './assets/img9.jpeg'
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"



function App() {
  return (
    <>
    <Navbar/>
    <IntroSection/>
    <Breaking/>
    <div className="grid grid-cols-3 p-1 m-3">
      <JewelCard image={image1} desc={"A red color Bag"}/>
      <JewelCard image={image2} desc={"A golden Bag"}/>
      <JewelCard image={image3} desc={"A brown Box"}/>
      <JewelCard image={image4} desc={"A red color Bag"}/>
      <JewelCard image={image5}  desc={"A brown Box"}/>
      <JewelCard image={image6} desc={"A red color Bag"}/>
      <JewelCard image={image8} desc={"A red color Bag"}/>
      <JewelCard image={image7}  desc={"A brown Box"}/>
      <JewelCard image={image9}  desc={"A brown Box"}/>

      
    </div>
    <Breaking/>
    <Footer/>
    </>
  )
}

export default App
