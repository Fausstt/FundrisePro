import React from "react";
import Section_01 from "../components/sections/Hoom/01";
import Section_02 from "../components/sections/Hoom/02";
import Section_03 from "../components/sections/Hoom/03";
import Section_04 from "../components/sections/Hoom/04";
import Section_05 from "../components/sections/Hoom/05";
import Section_06 from "../components/sections/Hoom/06";
import Section_07 from "../components/sections/Hoom/07";
import Section_08 from "../components/sections/Hoom/08";
import Section_09 from "../components/sections/Hoom/09";
import Section_10 from "../components/sections/Hoom/10";
import Section_11 from "../components/sections/Hoom/11";

export default function Home({ OPR }) {
    return (
        <>
            <Section_01 OPR={OPR} />
            <Section_02 />
            <Section_03 />
            <Section_04 />
            <Section_05 />
            <Section_06 />
            <Section_07 />
            <Section_08 />
            <Section_09 />
            <Section_10 />
            <Section_11 />
        </>
    );
}
