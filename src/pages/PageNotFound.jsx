import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-screen bg-black flex flex-col justify-center items-center">
      <h1 className="text-xl md:text-6xl text-white text-center mb-3">
        404 <br /> Page Not Found
      </h1>
      <NavLink to='/' className='text-blue-600 underline'>Go back</NavLink>
    </div>
  );
};

export default PageNotFound;
