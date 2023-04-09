import React, { useState } from "react";

import imapayContext from "./imapayContext";

function ImapayProvider({children}){
    const [accountType, setAccountType] = useState("");
    const [transferDate, setTransferDate] = useState("");
    const [agency, setAgency] = useState(0);
    const [account, setAccount] = useState(0);
    const [transferValue, setTransferValue] = useState(0);

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
                setTransferValue
            }}
        >
            {children}
        </imapayContext.Provider>
    )
}

export default ImapayProvider;
