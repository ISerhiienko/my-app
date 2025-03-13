import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/main.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import ArticleIcon from "shared/assets/icons/article.svg";
import { SidebarItemType } from "../types/sidebar";

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
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
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
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
            );
        }

        return sidebarItemsList;
    },
);
