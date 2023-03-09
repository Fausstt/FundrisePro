import React from "react";
import Earn_crypto01 from "../components/sections/Earn_crypto/Earn_crypto01";
import Earn_crypto02 from "../components/sections/Earn_crypto/Earn_crypto02";
import Earn_crypto03 from "../components/sections/Earn_crypto/Earn_crypto03";
import Earn_crypto04 from "../components/sections/Earn_crypto/Earn_crypto04";
import Earn_crypto05 from "../components/sections/Earn_crypto/Earn_crypto05";
import Earn_crypto06 from "../components/sections/Earn_crypto/Earn_crypto06";
import Earn_crypto07 from "../components/sections/Earn_crypto/Earn_crypto07";
import Earn_crypto08 from "../components/sections/Earn_crypto/Earn_crypto08";

export default function EarnCrypto({ OPL, OPS }) {
    return (
        <>
            <Earn_crypto01 OPS={OPS} OPL={OPL} />
            {/* <Earn_crypto02 /> */}
            <Earn_crypto03 />
            <Earn_crypto04 />
            <Earn_crypto05 />
            <Earn_crypto06 />
            <Earn_crypto07 />
            <Earn_crypto08 />
        </>
    );
}
