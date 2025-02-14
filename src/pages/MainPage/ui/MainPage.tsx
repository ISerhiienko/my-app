import { useTranslation } from "react-i18next";

export default function MainPage(): JSX.Element {
  const { t } = useTranslation("main");

  return (
    <div>
      {t("Головна")} {t("нове")}
    </div>
  );
}
