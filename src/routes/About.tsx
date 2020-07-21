import React from "react";
import Admin from "../layouts/admin";
import AboutStore from "../store/AboutStore";


const About = () => {

    return (
        <Admin pageTitle={AboutStore.pageTitle}>
            <h5>content of About</h5>
        </Admin>
    )
}

export default About;