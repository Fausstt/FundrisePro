import React from "react";
import PortfolioAnalytics01 from "../components/sections/PortfolioAnalytics/PortfolioAnalytics01";
import PortfolioAnalytics02 from "../components/sections/PortfolioAnalytics/PortfolioAnalytics02";
import PortfolioAnalytics03 from "../components/sections/PortfolioAnalytics/PortfolioAnalytics03";
import PortfolioAnalytics04 from "../components/sections/PortfolioAnalytics/PortfolioAnalytics04";

export default function PortfolioAnalytics({ OPL, OPS }) {
    return (
        <>
            <PortfolioAnalytics01 />
            <PortfolioAnalytics02 />
            <PortfolioAnalytics03 OPS={OPS} OPL={OPL} />
            <PortfolioAnalytics04 />
        </>
    );
}
