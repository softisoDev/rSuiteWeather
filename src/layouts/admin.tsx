import React, {FC} from "react";
import 'rsuite/dist/styles/rsuite-default.css';
import {Container, Header, Content} from "rsuite";
import Aside from './aside';
import {observer, useLocalStore} from "mobx-react"

interface IProps {
    pageTitle: string,
}

const Admin: FC<IProps> = (props) => {

    return (
        <Container>

            <Aside/>

            <Container style={{padding:"15px"}}>
                <Header>
                    <h2>{props.pageTitle}</h2>
                </Header>
                <Content>
                    {props.children}
                </Content>
            </Container>

        </Container>
    );
}


export default observer(Admin);