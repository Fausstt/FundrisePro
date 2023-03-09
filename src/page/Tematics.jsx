import React from "react";
import Tematics01 from "../components/sections/Thematics/Tematics01";
import Tematics02 from "../components/sections/Thematics/Tematics02";
import Tematics03 from "../components/sections/Thematics/Tematics03";
import Tematics04 from "../components/sections/Thematics/Tematics04";
import Tematics05 from "../components/sections/Thematics/Tematics05";
import Tematics06 from "../components/sections/Thematics/Tematics06";
import Tematics07 from "../components/sections/Thematics/Tematics07";
import Tematics08 from "../components/sections/Thematics/Tematics08";
import Tematics09 from "../components/sections/Thematics/Tematics09";
export default function Thematics({ OPS, OPL }) {
    return (
        <>
            <Tematics01 OPS={OPS} OPL={OPL} />
            <Tematics02 />
            <Tematics03 />
            <Tematics04 />
            <Tematics05 OPS={OPS} OPL={OPL} />
            <Tematics06 OPS={OPS} OPL={OPL} />
            <Tematics07 />
            <Tematics08 />
            <Tematics09 OPS={OPS} OPL={OPL} />
        </>
    );
}
