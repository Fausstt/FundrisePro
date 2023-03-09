import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Tab, Tabs, Typography } from "@mui/material";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import L1 from "../../../img/icon22.png";
const H1 = {
    hidden: {
        y: +50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transitionDuration: "0.5s",
        transitionDelay: "0.2s",
    },
};
const B1 = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transitionDuration: "1s",
        transitionDelay: "0.2s",
    },
};
const M1 = {
    hidden: {
        x: -400,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transitionDuration: "1s",
        transitionDelay: "0.2s",
    },
};
const M2 = {
    hidden: {
        x: +400,

        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        position: "relative",
        top: "200px",
        transitionDuration: "1s",
        transitionDelay: "0.2s",
    },
};

export default function Section_06() {
    const [Vel, setVel] = useState(0);

    return (
        <Parallax
            renderLayer={(percentage) => (
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    className="sc-1lw4m5x-0 sc-14nmkzk-0 hbGuCC gepCdV"
                >
                    <div className="sc-1lw4m5x-1 sc-14nmkzk-1 iukxsw eNqFUJ">
                        <motion.div
                            variants={H1}
                            className="sc-1lw4m5x-3 sc-14nmkzk-2 kGWgrY iZTXam"
                        >
                            <h2>Invest with the best tools</h2>
                        </motion.div>
                        <div className="sc-1lw4m5x-3 sc-14nmkzk-3 kGWgrY eUeawI">
                            <motion.div
                                variants={B1}
                                id="features"
                                className="sc-1iq0pqh-0 jZYMKv sc-14nmkzk-5 dNyMDh tab-container"
                            >
                                <Tabs
                                    value={Vel}
                                    className="sc-1iq0pqh-1 desJTg"
                                >
                                    <Tab
                                        sx={{
                                            borderRadius: "10px",
                                            background:
                                                Vel === 0
                                                    ? "rgba(0,161,235,0.1)"
                                                    : "",
                                        }}
                                        onClick={() => setVel(0)}
                                        label={
                                            <div className="sc-1iq0pqh-2 ePJhsH tab tab--0">
                                                <Typography
                                                    variant="p"
                                                    color={"primary"}
                                                    className={`sc-1iq0pqh-5 ${
                                                        Vel === 0
                                                            ? "dDCvh"
                                                            : "iLBGeb"
                                                    }`}
                                                >
                                                    Smart Engine
                                                </Typography>
                                            </div>
                                        }
                                    />
                                    <Tab
                                        sx={{
                                            borderRadius: "10px",
                                            background:
                                                Vel === 1
                                                    ? "rgba(0,161,235,0.1)"
                                                    : "",
                                        }}
                                        onClick={() => setVel(1)}
                                        label={
                                            <div className="sc-1iq0pqh-2 ePJhsH tab tab--1">
                                                <Typography
                                                    variant="p"
                                                    color={"primary"}
                                                    className={`sc-1iq0pqh-5 ${
                                                        Vel === 1
                                                            ? "dDCvh"
                                                            : "iLBGeb"
                                                    }`}
                                                >
                                                    Portfolio Analytics
                                                </Typography>
                                            </div>
                                        }
                                    />
                                    <Tab
                                        sx={{
                                            borderRadius: "10px",
                                            background:
                                                Vel === 2
                                                    ? "rgba(0,161,235,0.1)"
                                                    : "",
                                        }}
                                        onClick={() => setVel(2)}
                                        label={
                                            <div className="sc-1iq0pqh-2 ePJhsH tab tab--2">
                                                <Typography
                                                    variant="p"
                                                    color={"primary"}
                                                    className={`sc-1iq0pqh-5 ${
                                                        Vel === 2
                                                            ? "dDCvh"
                                                            : "iLBGeb"
                                                    }`}
                                                >
                                                    Hourly Asset Analysis
                                                </Typography>
                                            </div>
                                        }
                                    />
                                </Tabs>
                            </motion.div>
                        </div>

                        <div className="sc-1lw4m5x-3 sc-14nmkzk-4 kGWgrY SHzop">
                            <div className="sc-pq96xw-0 jYloGV mobile-tabs">
                                <div className="sc-pq96xw-1 cCHsuS"></div>
                                <button className="sc-pq96xw-2 gWNKKk"></button>
                                <button className="sc-pq96xw-2 gWNKKk"></button>
                                <button className="sc-pq96xw-2 gWNKKk"></button>
                            </div>
                        </div>

                        <div className="sc-1lw4m5x-3 sc-14nmkzk-6 kGWgrY hSawPD">
                            <div
                                className={`sc-92nsh9-0 ${
                                    Vel === 0 ? "gllXyn" : ""
                                } ${Vel === 1 ? "eJVgcP" : ""} ${
                                    Vel === 2 ? "gpwyno" : ""
                                }`}
                            >
                                <div className="sc-92nsh9-3 hqHQjN">
                                    <div className="sc-92nsh9-1 cGwxGG">
                                        <div className="sc-gg0f3z-0 fxDXsF">
                                            <div
                                                data-gatsby-image-wrapper=""
                                                className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-gg0f3z-1 kmYPPe"
                                            >
                                                <div
                                                    style={{
                                                        maxWidth: "1641px",
                                                        display: "block",
                                                    }}
                                                >
                                                    <img
                                                        alt=""
                                                        role="presentation"
                                                        aria-hidden="true"
                                                        src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;1640.0000000000002&#x27; width=&#x27;1641&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
                                                        style={{
                                                            maxWidth: "100%",
                                                            display: "block",
                                                            position: "static",
                                                        }}
                                                    />
                                                </div>
                                                <div
                                                    aria-hidden="true"
                                                    data-placeholder-image=""
                                                    style={{
                                                        opacity: "1",
                                                        transition:
                                                            "opacity 500ms linear",
                                                    }}
                                                ></div>
                                                <img
                                                    data-gatsby-image-ssr=""
                                                    data-main-image=""
                                                    style={{ opacity: "1" }}
                                                    sizes="(min-width: 1641px) 1641px, 100vw"
                                                    decoding="async"
                                                    loading="lazy"
                                                    src="https://images.prismic.io/swissborg-website/0dc0edb2-0592-40b2-bb30-f843fa6ae9cc_home-page-smart-engine-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1641&amp;h=1640"
                                                    srcSet="https://images.prismic.io/swissborg-website/0dc0edb2-0592-40b2-bb30-f843fa6ae9cc_home-page-smart-engine-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=100 100w,https://images.prismic.io/swissborg-website/0dc0edb2-0592-40b2-bb30-f843fa6ae9cc_home-page-smart-engine-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=116&amp;h=116 116w,https://images.prismic.io/swissborg-website/0dc0edb2-0592-40b2-bb30-f843fa6ae9cc_home-page-smart-engine-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=135&amp;h=135 135w,https://images.prismic.io/swissborg-website/0dc0edb2-0592-40b2-bb30-f843fa6ae9cc_home-page-smart-engine-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=156&amp;h=156 156w,https://images.prismic.io/swissborg-website/0dc0edb2-0592-40b2-bb30-f843fa6ae9cc_home-page-smart-engine-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=181&amp;h=181 181w,https://images.prismic.io/swissborg-website/0dc0edb2-0592-40b2-bb30-f843fa6ae9cc_home-page-smart-engine-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=210&amp;h=210 210w,https://images.prismic.io/swissborg-website/0dc0edb2-0592-40b2-bb30-f843fa6ae9cc_home-page-smart-engine-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=244&amp;h=244 244w,https://images.prismic.io/swissborg-website/0dc0edb2-0592-40b2-bb30-f843fa6ae9cc_home-page-smart-engine-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=283&amp;h=283 283w,https://images.prismic.io/swissborg-website/0dc0edb2-0592-40b2-bb30-f843fa6ae9cc_home-page-smart-engine-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=328&amp;h=328 328w,https://images.prismic.io/swissborg-website/0dc0edb2-0592-40b2-bb30-f843fa6ae9cc_home-page-smart-engine-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=380&amp;h=380 380w,https://images.prismic.io/swissborg-website/0dc0edb2-0592-40b2-bb30-f843fa6ae9cc_home-page-smart-engine-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=441&amp;h=441 441w,https://images.prismic.io/swissborg-website/0dc0edb2-0592-40b2-bb30-f843fa6ae9cc_home-page-smart-engine-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=512&amp;h=512 512w,https://images.prismic.io/swissborg-website/0dc0edb2-0592-40b2-bb30-f843fa6ae9cc_home-page-smart-engine-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=594&amp;h=594 594w,https://images.prismic.io/swissborg-website/0dc0edb2-0592-40b2-bb30-f843fa6ae9cc_home-page-smart-engine-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=689&amp;h=689 689w,https://images.prismic.io/swissborg-website/0dc0edb2-0592-40b2-bb30-f843fa6ae9cc_home-page-smart-engine-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=799&amp;h=799 799w,https://images.prismic.io/swissborg-website/0dc0edb2-0592-40b2-bb30-f843fa6ae9cc_home-page-smart-engine-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=927&amp;h=926 927w,https://images.prismic.io/swissborg-website/0dc0edb2-0592-40b2-bb30-f843fa6ae9cc_home-page-smart-engine-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1075&amp;h=1074 1075w,https://images.prismic.io/swissborg-website/0dc0edb2-0592-40b2-bb30-f843fa6ae9cc_home-page-smart-engine-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1247&amp;h=1246 1247w,https://images.prismic.io/swissborg-website/0dc0edb2-0592-40b2-bb30-f843fa6ae9cc_home-page-smart-engine-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1446&amp;h=1445 1446w,https://images.prismic.io/swissborg-website/0dc0edb2-0592-40b2-bb30-f843fa6ae9cc_home-page-smart-engine-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1641&amp;h=1640 1641w"
                                                    alt="Smart Engine"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sc-92nsh9-2 fSLVGJ">
                                        <div className="sc-10g1lpr-0 WvvvD">
                                            <div className="sc-10g1lpr-1 etlzTA">
                                                <div className="sc-10g1lpr-2 bOMYWK">
                                                    <h3>
                                                        Don’t pay more for the
                                                        same cryptoassets
                                                    </h3>
                                                </div>
                                                <div className="sc-10g1lpr-3 mcNqv">
                                                    <p>
                                                        Our
                                                        <strong>
                                                            Smart Engine
                                                        </strong>
                                                        connects to leading
                                                        exchanges Binance,
                                                        Kraken, LMAX, HitBTC and
                                                        Bitfinex, finding the
                                                        best route to execute
                                                        your orders in
                                                        milliseconds. No need to
                                                        sign up to multiple
                                                        exchanges.
                                                    </p>
                                                </div>
                                                <Link
                                                    className="sc-1yw1o2j-0 jtsZgu sc-10g1lpr-4 bLneZp"
                                                    to="/smart-engine"
                                                >
                                                    <span className="sc-1yw1o2j-1 lcdIii">
                                                        <span>Exchange</span>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sc-92nsh9-3 hqHQjN">
                                    <div className="sc-92nsh9-1 cGwxGG">
                                        <div className="sc-gg0f3z-0 fxDXsF">
                                            <div
                                                data-gatsby-image-wrapper=""
                                                className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-gg0f3z-1 kmYPPe"
                                            >
                                                <div
                                                    style={{
                                                        maxWidth: "1641px",
                                                        display: "block",
                                                    }}
                                                >
                                                    <img
                                                        alt=""
                                                        role="presentation"
                                                        aria-hidden="true"
                                                        src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;1640.0000000000002&#x27; width=&#x27;1641&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
                                                        style={{
                                                            maxWidth: "100%",
                                                            display: "block",
                                                            position: "static",
                                                        }}
                                                    />
                                                </div>
                                                <div
                                                    aria-hidden="true"
                                                    data-placeholder-image=""
                                                    style={{
                                                        opacity: "1",
                                                        transition:
                                                            "opacity 500ms linear",
                                                    }}
                                                ></div>
                                                <img
                                                    data-gatsby-image-ssr=""
                                                    data-main-image=""
                                                    style={{ opacity: "1" }}
                                                    sizes="(min-width: 1641px) 1641px, 100vw"
                                                    decoding="async"
                                                    loading="lazy"
                                                    src="https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1641&amp;h=1640"
                                                    srcSet="https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=100 100w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=116&amp;h=116 116w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=135&amp;h=135 135w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=156&amp;h=156 156w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=181&amp;h=181 181w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=210&amp;h=210 210w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=244&amp;h=244 244w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=283&amp;h=283 283w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=328&amp;h=328 328w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=380&amp;h=380 380w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=441&amp;h=441 441w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=512&amp;h=512 512w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=594&amp;h=594 594w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=689&amp;h=689 689w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=799&amp;h=799 799w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=927&amp;h=926 927w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1075&amp;h=1074 1075w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1247&amp;h=1246 1247w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1446&amp;h=1445 1446w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1641&amp;h=1640 1641w"
                                                    alt="Portfolio Analytics"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sc-92nsh9-2 fSLVGJ">
                                        <div className="sc-10g1lpr-0 WvvvD">
                                            <div className="sc-10g1lpr-1 etlzTA">
                                                <div className="sc-10g1lpr-2 bOMYWK">
                                                    <h2>
                                                        Understand your money at
                                                        the tap of a finger
                                                    </h2>
                                                </div>
                                                <div className="sc-10g1lpr-3 mcNqv">
                                                    <p>
                                                        Get real transparency
                                                        with Portfolio Analytics
                                                        that clearly shows when
                                                        you are making money,
                                                        and when you are paying
                                                        fees. Portfolio
                                                        Analytics makes the
                                                        complex simple by
                                                        offering meaningful
                                                        statistics in an easy
                                                        and clear format.
                                                    </p>
                                                </div>
                                                <Link
                                                    className="sc-1yw1o2j-0 jtsZgu sc-10g1lpr-4 bLneZp"
                                                    to="/portfolio-analytics"
                                                >
                                                    <span className="sc-1yw1o2j-1 lcdIii">
                                                        <span>Manage</span>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sc-92nsh9-3 hqHQjN">
                                    <div className="sc-92nsh9-1 cGwxGG">
                                        <div className="sc-gg0f3z-0 fxDXsF">
                                            <div
                                                data-gatsby-image-wrapper=""
                                                className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-gg0f3z-1 kmYPPe"
                                            >
                                                <div
                                                    style={{
                                                        maxWidth: "1641px",
                                                        display: "block",
                                                    }}
                                                >
                                                    <img
                                                        alt=""
                                                        role="presentation"
                                                        aria-hidden="true"
                                                        src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;1640.0000000000002&#x27; width=&#x27;1641&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
                                                        style={{
                                                            maxWidth: "100%",
                                                            display: "block",
                                                            position: "static",
                                                        }}
                                                    />
                                                </div>
                                                <div
                                                    aria-hidden="true"
                                                    data-placeholder-image=""
                                                    style={{
                                                        opacity: "1",
                                                        transition:
                                                            "opacity 500ms linear",
                                                    }}
                                                ></div>
                                                <img
                                                    data-gatsby-image-ssr=""
                                                    data-main-image=""
                                                    style={{ opacity: "1" }}
                                                    sizes="(min-width: 1641px) 1641px, 100vw"
                                                    decoding="async"
                                                    loading="lazy"
                                                    src="https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1641&amp;h=1640"
                                                    srcSet="https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=100 100w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=116&amp;h=116 116w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=135&amp;h=135 135w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=156&amp;h=156 156w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=181&amp;h=181 181w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=210&amp;h=210 210w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=244&amp;h=244 244w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=283&amp;h=283 283w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=328&amp;h=328 328w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=380&amp;h=380 380w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=441&amp;h=441 441w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=512&amp;h=512 512w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=594&amp;h=594 594w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=689&amp;h=689 689w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=799&amp;h=799 799w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=927&amp;h=926 927w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1075&amp;h=1074 1075w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1247&amp;h=1246 1247w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1446&amp;h=1445 1446w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1641&amp;h=1640 1641w"
                                                    alt="Hourly Asset Analysis"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sc-92nsh9-2 fSLVGJ">
                                        <div className="sc-10g1lpr-0 WvvvD">
                                            <div className="sc-10g1lpr-1 etlzTA">
                                                <div className="sc-10g1lpr-2 bOMYWK">
                                                    <h2>
                                                        Turn insight into
                                                        advantage
                                                    </h2>
                                                </div>
                                                <div className="sc-10g1lpr-3 mcNqv">
                                                    <p>
                                                        Make smarter decisions
                                                        before you invest with
                                                        our Hourly Asset
                                                        Analysis. Using machine
                                                        learning, we provide
                                                        trend predictions on
                                                        each cryptoasset offered
                                                        in the SwissBorg app.
                                                    </p>
                                                </div>
                                                <Link
                                                    className="sc-1yw1o2j-0 jtsZgu sc-10g1lpr-4 bLneZp"
                                                    to="/ai-asset-analysis"
                                                >
                                                    <span className="sc-1yw1o2j-1 lcdIii">
                                                        <span>Analyse</span>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc-47vzns-2 eaTQIy">
                                <motion.div
                                    variants={M2}
                                    className="sc-47vzns-0 okdHn"
                                >
                                    <div
                                        style={{
                                            opacity: `${Vel === 0 ? "1" : "0"}`,
                                            transform: `translate(0px, -${
                                                percentage * 200
                                            }px)`,
                                        }}
                                        className="sc-gg0f3z-0 fxDXsE"
                                    >
                                        <div
                                            data-gatsby-image-wrapper=""
                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-gg0f3z-1 kmYPPe"
                                        >
                                            <div
                                                style={{
                                                    maxWidth: "1641px",
                                                    display: "block",
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;1640.0000000000002&#x27; width=&#x27;1641&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
                                                    style={{
                                                        maxWidth: "100%",
                                                        display: "block",
                                                        position: "static",
                                                    }}
                                                />
                                            </div>
                                            <div
                                                aria-hidden="true"
                                                data-placeholder-image=""
                                                style={{
                                                    opacity: "1",
                                                    transition:
                                                        "opacity 500ms linear",
                                                }}
                                            ></div>
                                            <img
                                                data-gatsby-image-ssr=""
                                                data-main-image=""
                                                style={{
                                                    width: "350px",
                                                    opacity: "1",
                                                }}
                                                sizes="(min-width: 1641px) 1641px, 100vw"
                                                decoding="async"
                                                loading="lazy"
                                                src={L1}
                                                alt="Smart Engine"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            opacity: `${Vel === 1 ? "1" : "0"}`,
                                            transform: `translate(0px, -${
                                                percentage * 200
                                            }px)`,
                                        }}
                                        className="sc-gg0f3z-0 fxDXsF"
                                    >
                                        <div
                                            data-gatsby-image-wrapper=""
                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-gg0f3z-1 kmYPPe"
                                        >
                                            <div
                                                style={{
                                                    maxWidth: "1641px",
                                                    display: "block",
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;1640.0000000000002&#x27; width=&#x27;1641&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
                                                    style={{
                                                        maxWidth: "100%",
                                                        display: "block",
                                                        position: "static",
                                                    }}
                                                />
                                            </div>
                                            <div
                                                aria-hidden="true"
                                                data-placeholder-image=""
                                                style={{
                                                    opacity: "1",
                                                    transition:
                                                        "opacity 500ms linear",
                                                }}
                                            ></div>
                                            <img
                                                data-gatsby-image-ssr=""
                                                data-main-image=""
                                                style={{ opacity: "1" }}
                                                sizes="(min-width: 1641px) 1641px, 100vw"
                                                decoding="async"
                                                loading="lazy"
                                                src="https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1641&amp;h=1640"
                                                srcSet="https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=100 100w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=116&amp;h=116 116w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=135&amp;h=135 135w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=156&amp;h=156 156w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=181&amp;h=181 181w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=210&amp;h=210 210w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=244&amp;h=244 244w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=283&amp;h=283 283w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=328&amp;h=328 328w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=380&amp;h=380 380w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=441&amp;h=441 441w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=512&amp;h=512 512w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=594&amp;h=594 594w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=689&amp;h=689 689w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=799&amp;h=799 799w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=927&amp;h=926 927w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1075&amp;h=1074 1075w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1247&amp;h=1246 1247w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1446&amp;h=1445 1446w,https://images.prismic.io/swissborg-website/850870bb-3ab4-4506-a55b-c88eab2f9911_home-page-porfolio-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1641&amp;h=1640 1641w"
                                                alt="Portfolio Analytics"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            opacity: `${Vel === 2 ? "1" : "0"}`,
                                            transform: `translate(0px, -${
                                                percentage * 200
                                            }px)`,
                                        }}
                                        className="sc-gg0f3z-0 fxDXsF"
                                    >
                                        <div
                                            data-gatsby-image-wrapper=""
                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-gg0f3z-1 kmYPPe"
                                        >
                                            <div
                                                style={{
                                                    maxWidth: "1641px",
                                                    display: "block",
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;1640.0000000000002&#x27; width=&#x27;1641&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
                                                    style={{
                                                        maxWidth: "100%",
                                                        display: "block",
                                                        position: "static",
                                                    }}
                                                />
                                            </div>
                                            <div
                                                aria-hidden="true"
                                                data-placeholder-image=""
                                                style={{
                                                    opacity: "1",
                                                    transition:
                                                        "opacity 500ms linear",
                                                }}
                                            ></div>
                                            <img
                                                data-gatsby-image-ssr=""
                                                data-main-image=""
                                                style={{ opacity: "1" }}
                                                sizes="(min-width: 1641px) 1641px, 100vw"
                                                decoding="async"
                                                loading="lazy"
                                                src="https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1641&amp;h=1640"
                                                srcSet="https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=100 100w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=116&amp;h=116 116w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=135&amp;h=135 135w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=156&amp;h=156 156w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=181&amp;h=181 181w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=210&amp;h=210 210w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=244&amp;h=244 244w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=283&amp;h=283 283w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=328&amp;h=328 328w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=380&amp;h=380 380w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=441&amp;h=441 441w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=512&amp;h=512 512w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=594&amp;h=594 594w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=689&amp;h=689 689w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=799&amp;h=799 799w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=927&amp;h=926 927w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1075&amp;h=1074 1075w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1247&amp;h=1246 1247w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1446&amp;h=1445 1446w,https://images.prismic.io/swissborg-website/a015ec51-ca02-4e71-a83f-83bc554257fd_home-page-asset-analysis-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1641&amp;h=1640 1641w"
                                                alt="Hourly Asset Analysis"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={M1}
                                    className="sc-47vzns-1 DZiAw"
                                >
                                    <div
                                        className={`sc-47vzns-3 ${
                                            Vel === 0 ? "eIyxcS" : ""
                                        } ${Vel === 1 ? "ewFLXb" : ""} ${
                                            Vel === 2 ? "gRKNrI" : ""
                                        }`}
                                    >
                                        <div className="sc-10g1lpr-0 WvvvD">
                                            <div className="sc-10g1lpr-1 etlzTA">
                                                <div className="sc-10g1lpr-2 bOMYWK">
                                                    <h3>
                                                        Don’t pay more for the
                                                        same cryptoassets
                                                    </h3>
                                                </div>
                                                <div className="sc-10g1lpr-3 mcNqv">
                                                    <p>
                                                        Our
                                                        <strong>
                                                            Smart Engine
                                                        </strong>
                                                        connects to leading
                                                        exchanges Binance,
                                                        Kraken, LMAX, HitBTC and
                                                        Bitfinex, finding the
                                                        best route to execute
                                                        your orders in
                                                        milliseconds. No need to
                                                        sign up to multiple
                                                        exchanges.
                                                    </p>
                                                </div>
                                                <Link to="/smart-engine">
                                                    <Button
                                                        sx={{
                                                            width: "200px",
                                                            height: "60px",
                                                            borderRadius:
                                                                "15px",
                                                            fontSize: "1.8rem",
                                                            fontWeight: 700,
                                                            lineHeight: "1tem",
                                                        }}
                                                        variant="outlined"
                                                    >
                                                        Exchange
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="sc-10g1lpr-0 WvvvD">
                                            <div className="sc-10g1lpr-1 etlzTA">
                                                <div className="sc-10g1lpr-2 bOMYWK">
                                                    <h2>
                                                        Understand your money at
                                                        the tap of a finger
                                                    </h2>
                                                </div>
                                                <div className="sc-10g1lpr-3 mcNqv">
                                                    <p>
                                                        Get real transparency
                                                        with Portfolio Analytics
                                                        that clearly shows when
                                                        you are making money,
                                                        and when you are paying
                                                        fees. Portfolio
                                                        Analytics makes the
                                                        complex simple by
                                                        offering meaningful
                                                        statistics in an easy
                                                        and clear format.
                                                    </p>
                                                </div>
                                                <Link to="/portfolio-analytics">
                                                    <Button
                                                        sx={{
                                                            width: "200px",
                                                            height: "60px",
                                                            borderRadius:
                                                                "15px",
                                                            fontSize: "1.8rem",
                                                            fontWeight: 700,
                                                            lineHeight: "1tem",
                                                        }}
                                                        variant="outlined"
                                                    >
                                                        Manage
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="sc-10g1lpr-0 WvvvD">
                                            <div className="sc-10g1lpr-1 etlzTA">
                                                <div className="sc-10g1lpr-2 bOMYWK">
                                                    <h2>
                                                        Turn insight into
                                                        advantage
                                                    </h2>
                                                </div>
                                                <div className="sc-10g1lpr-3 mcNqv">
                                                    <p>
                                                        Make smarter decisions
                                                        before you invest with
                                                        our Hourly Asset
                                                        Analysis. Using machine
                                                        learning, we provide
                                                        trend predictions on
                                                        each cryptoasset offered
                                                        in the FundrisePro app.
                                                    </p>
                                                </div>
                                                <Link to="/ai-asset-analysis">
                                                    <Button
                                                        sx={{
                                                            width: "200px",
                                                            height: "60px",
                                                            borderRadius:
                                                                "15px",
                                                            fontSize: "1.8rem",
                                                            fontWeight: 700,
                                                            lineHeight: "1tem",
                                                        }}
                                                        variant="outlined"
                                                    >
                                                        Analyse
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.section>
            )}
        />
    );
}
