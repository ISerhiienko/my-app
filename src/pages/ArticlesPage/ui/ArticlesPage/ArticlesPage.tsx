import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Article, ArticleList, ArticleView } from "entities/Article";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const article = {
        id: "1",
        title: "Javascript news",
        subtitle: "What's new in JS for 2025?",
        img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
        views: 1022,
        createdAt: "03.09.2025",
        user: {
            id: "1",
            username: "ihor",
        },
        type: [
            "IT",
            "POLITICS",
        ],
        blocks: [
            {
                id: "1",
                type: "TEXT",
                title: "Block Title",
                paragraphs: [
                    "The program traditionally called 'Hello, world!' is very simple. "
                    + "It outputs the phrase 'Hello, world!' "
                    + "or something similar, using some programming language.",
                ],
            },
        ],
    } as Article;

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList
                isLoading
                view={ArticleView.BIG}
                articles={[article]}
            />
        </div>
    );
};

export default memo(ArticlesPage);
