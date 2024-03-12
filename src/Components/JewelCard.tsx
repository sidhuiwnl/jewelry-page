

function JewelCard({image}) {
  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
  <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
    <img className="object-cover" src={image} alt="product image" />
    <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
  </a>
  <div className="mt-4 px-5 pb-5">
    <a href="#">
      <h5 className="text-xl tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
    </a>
    <div className="mt-2 mb-5 flex items-center justify-between">
      
      
    </div>
    
  </div>
</div>


  )
}





export default JewelCard