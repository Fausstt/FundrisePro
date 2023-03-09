import React from "react";
import СhsbYield01 from "../components/sections/Сhsb_yield/СhsbYield01";
import СhsbYield02 from "../components/sections/Сhsb_yield/СhsbYield02";
import СhsbYield03 from "../components/sections/Сhsb_yield/СhsbYield03";
import СhsbYield04 from "../components/sections/Сhsb_yield/СhsbYield04";
import СhsbYield05 from "../components/sections/Сhsb_yield/СhsbYield05";
import СhsbYield06 from "../components/sections/Сhsb_yield/СhsbYield06";

export default function СhsbYield({ OPS, OPL }) {
    return (
        <>
            <div className="sc-19txvol-0 dgQeEy">
                <СhsbYield01 />
                <СhsbYield02 />
                <СhsbYield03 />
            </div>
            <СhsbYield04 />
            <СhsbYield05 />
            <СhsbYield06 OPS={OPS} OPL={OPL} />
        </>
    );
}
