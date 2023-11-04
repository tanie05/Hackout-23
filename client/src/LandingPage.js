import React from "react";
import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom"
import { initialState, reducer } from "./Reducers/userReducer"
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import App from "./App"
import Home from "./Pages/Home"
import CreateProductForm from "./Pages/CreateProductForm";
import SingleProductPage from "./Pages/SingleProductPage";

import SingleStoryPage from "./Pages/SingleStoryPage";
// import CreateClass from "./Pages/CreateClass";
// import JoinClass from "./Pages/JoinClass";
// import ClassPage from "./Pages/ClassPage";
// import CreateContentForm from "./Pages/CreateContentForm";



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
            <Route exact path="/createproduct" Component = {CreateProductForm} />
            <Route exact path="/products/:productId" Component={SingleProductPage} />
            
            
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