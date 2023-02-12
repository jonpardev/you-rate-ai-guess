import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center">
      <Header />
      <div className="w-full h-full grow bg-white flex justify-center" style={{ padding: "0 env(safe-area-inset-right) 0 env(safe-area-inset-left)" }}>
        <div className="w-full max-w-3xl flex flex-col items-center px-4 py-8 gap-4">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App;