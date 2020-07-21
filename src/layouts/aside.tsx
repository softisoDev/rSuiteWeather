import React from "react";
import {Dropdown, Nav, Sidebar, Sidenav, Icon} from "rsuite";
import 'rsuite/dist/styles/rsuite-default.css';
import {routes} from "../config/constants";
import {Link} from "react-router-dom";


const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    background: '#02445a',
    color: ' #fff',
    overflow: 'hidden'
};

const Aside = () => {
    return (
        <Sidebar
            style={{display: 'flex', flexDirection: 'column'}}
            collapsible
        >
            <Sidenav.Header>
                <div style={headerStyles}>
                    <Icon icon="logo-analytics" size="lg" style={{verticalAlign: 0}}/>
                    <span style={{marginLeft: 12}}> BRAND</span>
                </div>
            </Sidenav.Header>
            <Sidenav
                defaultOpenKeys={['3']}
                appearance="subtle"
            >
                <Sidenav.Body>
                    <Nav>
                        {routes.map((route, n) => {

                            if (route.subRoutes) {
                                return <Dropdown
                                    key={n}
                                    trigger="hover"
                                    title={route.title}
                                    icon={<Icon icon={route.icon}/>}
                                    placement="rightStart"
                                >
                                    {route.subRoutes.map((subRoute, i) => {
                                        if (subRoute.show !== false){
                                            return <Dropdown.Item componentClass={Link} to={subRoute.path} key={i*n}>{subRoute.title}</Dropdown.Item>
                                        }
                                    })}
                                </Dropdown>
                            } else {
                                if (route.show !== false){
                                    return <Nav.Item componentClass={Link} to={route.path} key={n} children={route.title}icon={<Icon icon={route.icon}/>}/>
                                }
                            }
                        })}
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </Sidebar>
    );
}

export default Aside;