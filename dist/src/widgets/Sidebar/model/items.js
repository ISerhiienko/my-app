import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about.svg";
import MainIcon from "shared/assets/icons/main.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
export var SidebarItemsList = [
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
    },
];
