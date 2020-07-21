import React from "react";
import Admin from "../layouts/admin";
import UserStore from "../store/UserStore";

const User = () => {

    return (
        <Admin pageTitle={UserStore.pageTitle}>
            <h5>content of User</h5>
        </Admin>
    )
}

export default User;