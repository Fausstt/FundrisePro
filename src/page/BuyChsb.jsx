import React from "react";
import BuyChsb01 from "../components/sections/BuyChsb/BuyChsb01";
import BuyChsb02 from "../components/sections/BuyChsb/BuyChsb02";
import BuyChsb03 from "../components/sections/BuyChsb/BuyChsb03";
import BuyChsb04 from "../components/sections/BuyChsb/BuyChsb04";
import BuyChsb05 from "../components/sections/BuyChsb/BuyChsb05";
import BuyChsb06 from "../components/sections/BuyChsb/BuyChsb06";
import BuyChsb07 from "../components/sections/BuyChsb/BuyChsb07";
import BuyChsb08 from "../components/sections/BuyChsb/BuyChsb08";
import BuyChsb09 from "../components/sections/BuyChsb/BuyChsb09";

export default function BuyChsb({ OPS, OPL }) {
    return (
        <>
            <BuyChsb01 />
            <BuyChsb02 />
            <BuyChsb03 />
            <BuyChsb04 />
            <BuyChsb05 />
            <BuyChsb06 />
            <BuyChsb07 />
            <BuyChsb08 />
            <BuyChsb09 OPS={OPS} OPL={OPL} />
        </>
    );
}
