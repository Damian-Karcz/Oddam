import React from 'react';
import ReturnItemsHeader from "./ReturnItemsHeader";
import ReturnItemsForm from "./ReturnItemsForm"
import HomeContact from "../HomeContact";
import {withFirebase} from "../Firebase";

function ReturnItemsHome({firebase}) {
    const user = firebase.getCurrentUser()

    return (
        <>
            <ReturnItemsHeader/>
            <ReturnItemsForm user={user}/>
            <HomeContact/>
        </>
    )
}

export default withFirebase(ReturnItemsHome)