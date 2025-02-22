import { Suspense, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";
import { Modal } from "shared/ui/Modal/Modal";

export const App = () => {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="...">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
