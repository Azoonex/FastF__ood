import React from "react"
import { useThemContent } from "./context/context";
import routes from './routes.tsx';
import { useRoutes } from "react-router-dom";
import { Footer } from "./components/index.ts";
import Home from "./components/home/Home.tsx";


const App: React.FC = () => {

  const them = useThemContent()
  const darkMode = them.darkMode;

  let router = useRoutes(routes)

  return (
    <div className={`${darkMode ? 'bg-dark' : 'bg-light ' }`}>
     <Home />
      {router}
      <Footer />
    </div>
  )
}

export default App
