import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";
import { t } from "i18next";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps): JSX.Element => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <div className={cls.links}>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
        {t("Головна")}
      </AppLink>

      {/* eslint-disable-next-line i18next/no-literal-string */}
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
        {t("Про сайт")}
      </AppLink>
    </div>
  </div>
);
