

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between px-4 py-3">
      <div>
        <a href="#" className=" hover:text-gray-300 font-semibold">
          Logo
        </a>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="font-semibold hover:underline">
          Features
        </a>
        <a href="#" className="font-semibold hover:underline">
          Pricing
        </a>
        <a href="#" className="font-semibold hover:underline">
          About
        </a>
        <a href="#" className="font-semibold hover:underline">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;