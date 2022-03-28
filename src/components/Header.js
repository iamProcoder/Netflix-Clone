import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Logonetflix from "../assets/image/Logonetflix.png";
import ProfileImg from "../assets/image/profile_img.jpg";

const Header = () => {

  const navigate = useNavigate();
  const [isNavFixed, setIsNavFixed] = useState(false);
  const movingNavBar = () => {
     if (window.scrollY > 100) setIsNavFixed(true);
     else setIsNavFixed(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', movingNavBar);
    return () => window.removeEventListener('scroll', movingNavBar);
  }, []);

  return (
    <>
      <nav className={`flex justify-between font-sans text-center text-white p-6 h-24 fixed z-10 ${isNavFixed && 'bg-black '} shadow w-full ease-in transition-all duration-200 sm:flex-row sm:text-left sm:justify-between sm:items-baseline`}>
        <div className="fixed">
          <div className="w-full justify-start mt-1 mb-2 sm:mb-0 lg:flex lg:items-center">
          <img src={Logonetflix} alt="Netflix" className="w-24 object-contain fixed cursor-pointer" onClick={() => navigate("/")} />
                   
              <div className="max-xs:text-xs max-xs:inline-flex max-xs:-ml-1 max-xs:mt-8 ml-32 text-sm lg:flex-grow" id="mobile-menu">
                  <div className={`mt-0 lg:inline-block lg:mt-0 ${isNavFixed ? 'hover:text-gray-500' : 'hover:text-white hover:bg-opacity-60'} hover:bg-black p-2 mr-4 rounded cursor-pointer`}  onClick={() => navigate("/")}>MainPage</div>
                  <div className={`mt-0 lg:inline-block lg:mt-0 ${isNavFixed ? 'hover:text-gray-500' : 'hover:text-white hover:bg-opacity-60'} hover:bg-black p-2 mr-4 rounded cursor-pointer`}  onClick={() => navigate("/serious")}>Series</div>
                  <div className={`mt-0 lg:inline-block lg:mt-0 ${isNavFixed ? 'hover:text-gray-500' : 'hover:text-white hover:bg-opacity-60'} hover:bg-black p-2 mr-4 rounded cursor-pointer`}>Movies</div>
                  <div className={`mt-0 lg:inline-block lg:mt-0 ${isNavFixed ? 'hover:text-gray-500' : 'hover:text-white hover:bg-opacity-60'} hover:bg-black p-2 mr-4 rounded cursor-pointer`}>New</div>
                  <div className={`mt-0 lg:inline-block lg:mt-0 ${isNavFixed ? 'hover:text-gray-500' : 'hover:text-white hover:bg-opacity-60'} hover:bg-black p-2 mr-4 rounded cursor-pointer`}>My List</div>
              </div>
            
          
          <div className="justify-end rounded">
            <img src={ProfileImg} alt="Profile" className="h-10 w-24 max-xs:h-6 max-xs:w-16 object-contain cursor-pointer fixed -mt-5 max-xs:-mt-14 right-0" onClick={() => navigate("/profile")} />
          </div>
        </div>
        </div>
      </nav>

    </>
  )
}

export default Header