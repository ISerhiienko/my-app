import { Routes, Route,Link  } from "react-router-dom";
import './styles/index.scss';
import { Suspense } from 'react';
import { useTheme } from "./providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

export const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
       <button onClick={toggleTheme}>TOGGLE</button>

      <Link to="/">Main page</Link>
      <Link to="/about ">About site</Link>

      <Suspense fallback={<div>loading...</div>}>
        <Routes>
            <Route path={'/about'} element={<AboutPage />} />
            <Route path={'/'} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}