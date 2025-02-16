import { useTranslation } from "react-i18next";
import { BugButton } from "app/providers/ErrorBoundary";

export default function MainPage(): JSX.Element {
  const { t } = useTranslation("main");

  return (
    <div>
      <BugButton />
      {t("Головна")}
    </div>
  );
}
