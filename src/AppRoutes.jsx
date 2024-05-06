import {Routes, Route, Navigate} from "react-router-dom"

import HomePage from "./pages/HomePage"
import Fundraisers from "./pages/Fundraisers"


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={  <HomePage/> } ></Route>
        <Route path="/fundraisers" element={<Fundraisers/> } ></Route>
        



        <Route path="*" element={ <Navigate to="/" /> }  />


    </Routes>
  )
}

export default AppRoutes