import React from "react"
import { TbLogout } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { BsCart2 } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "./LandingPage";
// import './PagesCSS/Navbar.css'

export default function NavBar() {

    const navigate = useNavigate();
    const {state, dispatch} = React.useContext(UserContext)

    function logOut() {
        localStorage.clear();
        dispatch({type: "CLEAR"})
        navigate("/auth/signin");
    }

    let role

    if(state) {
        role = state.role
    }

    return (
        <div>
        {
            state && 
            <div className="navbar">
                <div className="navbar--title">
                    <NavLink to="" style={{textDecoration: 'none', color: '#333333'}} >
                    {/* <img src = {lunaicon} className="icon"/> */}
                    Hackout
                    </NavLink>
                </div>

                {/* <div className="welcome-message">Welcome {state.username}!</div> */}
                
                <div className="navbar--links">
                    {role==="Buyer" && 
                        <NavLink style={{textDecoration: 'none', color: "black"}} to = "/cart">
                            <div className="navbar--links--cont">
                                <BsCart2 />
                            </div>
                        </NavLink>
                    }

                    <NavLink style={{textDecoration: 'none', color: "black"}} to = "/profile">
                        <div className="navbar--links--cont">
                            <CgProfile />
                        </div>
                    </NavLink>
                    
                    <div 
                        className="navbar--links--cont" 
                        onClick={logOut} 
                        style={{textDecoration: 'none', color: "black"}}
                    >
                        <TbLogout />
                    </div>
                </div>
            </div>
        }
        </div>
    )
}