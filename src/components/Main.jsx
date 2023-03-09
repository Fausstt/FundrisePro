import React from "react";
import { Route, Routes } from "react-router";
import Home from "../page/Home";
import EarnCrypto from "../page/EarnCrypto";
import Thematics from "../page/Tematics";
import СhsbYield from "../page/СhsbYield";
import SmartEngine from "../page/SmartEngine";
import PortfolioAnalytics from "../page/PortfolioAnalytics";
import AiAssetAnalysis from "../page/AiAssetAnalysis";
import BuyChsb from "../page/BuyChsb";
import "../components/sections/Hoom/Home.css";
import "../components/sections/Earn_crypto/Earn_crypto.css";
import "../components/sections/Thematics/Tematics.css";
import "../components/sections/Сhsb_yield/Сhsb_yield.css";
import "../components/sections/Smart_engine/SmartEngine.css";
// // import "../components/sections/PortfolioAnalytics/PortfolioAnalytics.css";
// // import "../components/sections/AiAssetAnalysis/AiAssetAnalysis.css";
import "../components/sections/BuyChsb/BuyChsb.css";
import About_us from "../page/About_us";
// import Registration from "../page/Registration";

export default function Main({ OPR, OPS, OPL }) {
    return (
        <main id="main" className="sc-9lfxyf-0 kDJGMO">
            <Routes>
                <Route path="*" element={<Home OPR={OPR} />} />
                <Route path="About_us" element={<About_us OPR={OPR} />} />
                {/* <Route path="Registration" element={<Registration />} /> */}
                <Route
                    path="thematics"
                    element={<Thematics OPS={OPS} OPL={OPL} />}
                />
                <Route
                    path="earn-crypto"
                    element={<EarnCrypto OPS={OPS} OPL={OPL} />}
                />
                <Route
                    path="chsb-yield"
                    element={<СhsbYield />}
                    OPS={OPS}
                    OPL={OPL}
                />
                <Route
                    path="smart-engine"
                    element={<SmartEngine OPS={OPS} OPL={OPL} />}
                />
                <Route
                    path="portfolio-analytics"
                    element={<PortfolioAnalytics OPS={OPS} OPL={OPL} />}
                />
                <Route
                    path="ai-asset-analysis"
                    element={<AiAssetAnalysis OPS={OPS} OPL={OPL} />}
                />
                <Route
                    path="buy-chsb"
                    element={<BuyChsb OPS={OPS} OPL={OPL} />}
                />
            </Routes>
        </main>
    );
}
