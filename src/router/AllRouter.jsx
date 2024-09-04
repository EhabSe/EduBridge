import App from "../App"
import { AboutRoute } from "../modules/about/router/AboutRoute"
import { ContuctRoute } from "../modules/contuct/router/contuctRoute"
import { JoinusRoute } from "../modules/joinus/router/JoinusRoute"
import Main from "../modules/main/pages/Main"
import { OurworkRoute } from "../modules/ourwork/router/OurWork"
import {DashboardRoute} from '../modules/dashboard/router/DashboardRoute'
import { BlogRoute } from "../modules/Blog/router/BlogRoute"
export const routes = [
    {
    path : "/",
    element : <App/>,
    children : [
    {
    path : "",
    element : <Main/>,
    },
    ...JoinusRoute,
    ...ContuctRoute,
    ...AboutRoute,
    ...OurworkRoute,
    ...DashboardRoute,
    ...BlogRoute
    ]
    }
]