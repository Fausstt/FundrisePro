import React from "react";
import SmartEngine01 from "../components/sections/Smart_engine/SmartEngine01";
import SmartEngine02 from "../components/sections/Smart_engine/SmartEngine02";
import SmartEngine03 from "../components/sections/Smart_engine/SmartEngine03";
import SmartEngine04 from "../components/sections/Smart_engine/SmartEngine04";

export default function SmartEngine({ OPL, OPS }) {
    return (
        <>
            <SmartEngine01 />
            <SmartEngine02 />
            <SmartEngine03 OPS={OPS} OPL={OPL} />
            <SmartEngine04 />
        </>
    );
}
