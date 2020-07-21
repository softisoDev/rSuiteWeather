import React from "react";
import Admin from "../layouts/admin";
import GeneralStore from "../store/GeneralStore";

const General = () => {

    return (
        <Admin pageTitle={GeneralStore.pageTitle}>
            <h5>content of General</h5>
        </Admin>
    )
}

export default General;