import { Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Counter } from "entities/Counter";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="...">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <Counter />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
