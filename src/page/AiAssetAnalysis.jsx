import React from "react";
import AiAssetAnalysis01 from "../components/sections/AiAssetAnalysis/AiAssetAnalysis01";
import AiAssetAnalysis02 from "../components/sections/AiAssetAnalysis/AiAssetAnalysis02";
import AiAssetAnalysis03 from "../components/sections/AiAssetAnalysis/AiAssetAnalysis03";
import AiAssetAnalysis04 from "../components/sections/AiAssetAnalysis/AiAssetAnalysis04";

export default function AiAssetAnalysis({ OPS, OPL }) {
    return (
        <>
            <AiAssetAnalysis01 />
            <AiAssetAnalysis02 />
            <AiAssetAnalysis03 OPS={OPS} OPL={OPL} />
            <AiAssetAnalysis04 />
        </>
    );
}
