import { Routes, Route,Link  } from "react-router-dom";
import './styles/index.scss';
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage/MainPageLazy";
import { Suspense } from 'react';
import {useTheme} from "./theme/useTheme";

export const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`app ${theme}`}>
       <button onClick={toggleTheme}>TOGGLE</button>

      <Link to="/">Main page</Link>
      <Link to="/about ">About site</Link>

      <Suspense fallback={<div>loading...</div>}>
        <Routes>
            <Route path={'/about'} element={<AboutPageLazy />} />
            <Route path={'/'} element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  )
}