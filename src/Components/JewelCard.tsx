
interface JewelCardProps{
  image : string;
  desc?:string
}


function JewelCard({image,desc}:JewelCardProps) {
  return (
    <>
    
    <div id="products" className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border  border-gray-300 bg-white shadow-md">
  <a  className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#products">
    <img className="object-cover w-full" src={image} alt="product image" />
    <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
  </a>
  <div className="mt-4 px-5 pb-5">
    
      <h5 className="text-2xl tracking-tight text-slate-900 text-center font-extrabold"><strong>{desc}</strong></h5>
    
    <div className="mt-2 mb-5 flex items-center justify-between">
      
      
    </div>
    
  </div>
</div>
    </>
    


  )
}





export default JewelCard