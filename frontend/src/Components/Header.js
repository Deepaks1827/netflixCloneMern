import axios from "axios";
import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_END_Point } from "../utils/constant";
import toast from "react-hot-toast";
import { setUser } from "../redux/userSlice";
import { setToggle } from "../redux/movieSlice";

const Header = () => {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store)=> store.movie.toggle);
  
  console.log("user login", user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleHandler= ()=>{
    dispatch(setToggle());
  };
  const logoutHandle = async () => {
    try {
      const res = await axios.get(`${API_END_Point}/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="absolute z-10 flex w-[100vw] items-center justify-between px-6 bg-gradient-to-b from-black">
      <img
        className="w-56"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflix-logo"
      />
      {user && (
        <div className="flex item-center">
          <IoIosArrowDropdown size="24px" color="white" />
          <h1 className="text-lg font-medium text-white">
            {user.data.fullName}
          </h1>
          <div className="ml-4">
            <button
              onClick={logoutHandle}
              className="bg-red-800 text-white px-4 py2"
            >
              Logout
            </button>
            <button onClick={toggleHandler} className="bg-red-800 text-white px-4 py2 ml-2">
              {toggle ?"Home":"Search Movies"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
