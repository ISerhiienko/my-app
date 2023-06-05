import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { Suspense } from 'react';

export default function AppRouter() {
  return (
     <Suspense fallback={<div>loading...</div>}>
        <Routes>
           {Object.values(routeConfig).map(({element, path}) => (
              <Route key={path} element={element} path={path} />
           ))}
        </Routes>
      </Suspense>
  )
}
