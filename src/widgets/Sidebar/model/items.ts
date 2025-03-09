import React from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about.svg";
import MainIcon from "shared/assets/icons/main.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import ArticleIcon from "shared/assets/icons/article.svg";

export interface SidebarItemType {
    path: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    t_file: string;
    text: string;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        t_file: "main",
        text: "Головна",
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        t_file: "about",
        text: "Про_сайт",
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        t_file: "profile",
        text: "Профіль",
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        Icon: ArticleIcon,
        t_file: "article",
        text: "Статті",
        authOnly: true,
    },

];
