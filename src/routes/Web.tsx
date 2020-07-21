import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import {routes} from "../config/constants";


export default function WebRoutes() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    {routes.map((route, i) => {
                        if (!route.subRoutes) {
                            return <Route exact path={route.path} key={i} component={route.component}/>
                        } else {
                            return route.subRoutes.map((subRoute, n) => {
                                return <Route exact path={subRoute.path} key={n} component={subRoute.component}/>
                            });
                        }
                    })}
                </Switch>
            </div>
        </BrowserRouter>
    )
}