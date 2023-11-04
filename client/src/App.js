import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import { GlobalProvider } from './Reducers/cartItems';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Navbar />
        <Outlet />
      </div>
    </GlobalProvider>
    
  );
}

export default App;