import React from "react";
import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom"
import { initialState, reducer } from "./Reducers/userReducer"
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import App from "./App"
import Home from "./Pages/Home"
<<<<<<< HEAD
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile"
=======
import CreateProductForm from "./Pages/CreateProductForm";
import SingleProductPage from "./Pages/SingleProductPage";

import SingleStoryPage from "./Pages/SingleStoryPage";
// import CreateClass from "./Pages/CreateClass";
// import JoinClass from "./Pages/JoinClass";
// import ClassPage from "./Pages/ClassPage";
// import CreateContentForm from "./Pages/CreateContentForm";
>>>>>>> e58ea99d1098a896671f7e0256d8e193699b6e01



export const UserContext = React.createContext()

const Routing = () => {
  const navigate = useNavigate()
  const {state, dispatch} = React.useContext(UserContext)

    React.useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))

        if(user) {
            dispatch({type: "USER", payload: user})
            navigate("/")
        }
        else {
            navigate("/auth/signup")
        }
    }, [])

  return (
    <Routes>
        <Route exact path="/auth/signup" Component={SignUp}></Route>
        <Route exact path="/auth/signin" Component={SignIn}></Route>
        <Route exact path="/" Component={App}>

            <Route exact path="" Component={Home}></Route>
<<<<<<< HEAD
            <Route exact path="/cart" Component={Cart}></Route>
            <Route exact path="/profile" Component={Profile}></Route>
            {/* <Route exact path="classes/createClass" Component={CreateClass}></Route>
            <Route exact path="classes/joinClass" Component={JoinClass}></Route>
            <Route exact path="classes/:classId" Component={ClassPage}></Route>
            <Route exact path="createcontent/:classId" Component={CreateContentForm}></Route> */}
=======
            <Route exact path="/createproduct" Component = {CreateProductForm} />
            <Route exact path="/products/:productId" Component={SingleProductPage} />
            
            
>>>>>>> e58ea99d1098a896671f7e0256d8e193699b6e01
        </Route>
    </Routes>
  )
}


export default function LandingPage() {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    return (
        <UserContext.Provider value={{state, dispatch}}>
            <BrowserRouter>
                <Routing />
            </BrowserRouter>
        </UserContext.Provider>
    )
}