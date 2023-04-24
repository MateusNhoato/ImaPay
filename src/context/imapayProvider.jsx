import React, { useState } from "react";

import imapayContext from "./imapayContext";

function ImapayProvider({children}){
    const [accountType, setAccountTypeCompleted] = useState("");
    const [transferDate, setTransferDateCompleted] = useState("");
    const [agency, setAgencyCompleted] = useState(0);
    const [account, setAccountCompleted] = useState(0);
    const [transferAmount, setTransferAmountCompleted] = useState(0);
    const [isUserLoggedIn, setUserLogin] = useState(false);

    return(
        <imapayContext.Provider
            value={{
                accountType,
                setAccountTypeCompleted,
                transferDate,
                setTransferDateCompleted,
                agency,
                setAgencyCompleted,
                account,
                setAccountCompleted,
                transferAmount,
                setTransferAmountCompleted,
                isUserLoggedIn,
                setUserLogin
            }}
        >
            {children}
        </imapayContext.Provider>
    )
}

export default ImapayProvider;
