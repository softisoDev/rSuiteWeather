import Dashboard from "../routes/Dashboard";
import About from "../routes/About";
import Weather from "../routes/Weather";
import {SVGIcon} from "rsuite/lib/@types/common";
import {IconNames} from "rsuite/lib/Icon/Icon";
import User from "../routes/User";
import General from "../routes/General";
import WeatherSingle from "../routes/WeatherSingle";

interface IRoute {
    path: string;
    title: string;
    show?: boolean,
    icon: IconNames | SVGIcon;
    component: any,
    subRoutes?: IRoute[],
}

export const routes: IRoute[] = [
    {
        path: "/",
        title: "Dashboard",
        icon: "dashboard",
        component: Dashboard
    },
    {
        path: "/about",
        title: "About",
        icon: "file-text-o",
        component: About,
    },
    {
        path: "/weather",
        title: "Weather",
        icon: "sun-o",
        component: Weather
    },
    {
        path: "/weather/:location",
        title: "WeatherSingle",
        show: false,
        icon: "sun-o",
        component: WeatherSingle
    },
    {
        path: "/setting",
        title: "Setting",
        icon: "gears2",
        component: null,
        subRoutes: [
            {
                path: "/setting/user",
                title: "User",
                icon: "user",
                component: User
            },
            {
                path: "/setting/general",
                title: "General",
                icon: "gear-circle",
                component: General
            }
        ]
    }
];