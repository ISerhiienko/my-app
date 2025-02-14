import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { Suspense } from "react";

export default function AppRouter(): JSX.Element {
  return (
    <Suspense fallback={<div>...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            element={
              <Suspense fallback={<div>...</div>}>
                <div className="page-wrapper">{element}</div>
              </Suspense>
            }
            path={path}
          />
        ))}
      </Routes>
    </Suspense>
  );
}
