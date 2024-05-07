import {Routes, Route, Navigate} from "react-router-dom"

import HomePage from "./pages/HomePage"
import Fundraisers from "./pages/Fundraisers"
import Navbar from "./components/Navbar"


const AppRoutes = () => {
  return (
    <div className=" w-full  bg-[#FFF1F1] ">
      <Navbar />
    <Routes>
        <Route path="/" element={  <HomePage/> } ></Route>
        <Route path="/fundraisers" element={<Fundraisers/> } ></Route>
        



        <Route path="*" element={ <Navigate to="/" /> }  />


    </Routes>

    </div>
  )
}

export default AppRoutes