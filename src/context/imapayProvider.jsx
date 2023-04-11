import React, { useState } from "react";

import imapayContext from "./imapayContext";

function ImapayProvider({children}){
    const [accountType, setAccountType] = useState("");
    const [transferDate, setTransferDate] = useState("");
    const [agency, setAgency] = useState(0);
    const [account, setAccount] = useState(0);
    const [transferValue, setTransferValue] = useState(0);
    const [isUserLoggedIn, setUserLogin] = useState(false);

    return(
        <imapayContext.Provider
            value={{
                accountType,
                setAccountType,
                transferDate,
                setTransferDate,
                agency,
                setAgency,
                account,
                setAccount,
                transferValue,
                setTransferValue,
                isUserLoggedIn,
                setUserLogin
            }}
        >
            {children}
        </imapayContext.Provider>
    )
}

export default ImapayProvider;
