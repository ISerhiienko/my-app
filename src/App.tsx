import { Routes, Route,Link  } from "react-router-dom";
import './index.scss';
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage/MainPageLazy";
import { Suspense } from 'react';

export const App = () => {
  return (
    <div className="app">
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