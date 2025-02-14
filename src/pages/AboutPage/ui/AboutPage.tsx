import { useTranslation } from "react-i18next";

export default function AboutPage(): JSX.Element {
  const { t } = useTranslation("about");

  return <div>{t("Про сайт")}</div>;
}
