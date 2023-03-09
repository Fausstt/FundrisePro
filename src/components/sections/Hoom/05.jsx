import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Tab, Tabs, Typography } from "@mui/material";
import L1 from "../../../img/10.png";
import L2 from "../../../img/icon19.webp";

import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";

const H1 = {
    hidden: {
        y: +50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transitionDuration: "0.5",
    },
};
const B1 = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transitionDuration: "1s",
    },
};
const M1 = {
    hidden: {
        x: -400,
        opacity: 0,
    },
    visible: {
        x: 0,
        position: "relative",
        top: "200px",
        opacity: 1,
        transitionDuration: "1s",
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
        transitionDuration: "1s",
    },
};

export default function Section_05() {
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
                            <h2>Invest and grow your crypto portfolio</h2>
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
                                            <div className="sc-1iq0pqh-2 ePJhsH">
                                                <Typography
                                                    variant="p"
                                                    color={"primary"}
                                                    className={`sc-1iq0pqh-5 ${
                                                        Vel === 0
                                                            ? "dDCvh"
                                                            : "iLBGeb"
                                                    }`}
                                                >
                                                    Thematics
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
                                                    FundrisePro Earn
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
                                                    CHSB Yield
                                                </Typography>
                                            </div>
                                        }
                                    />
                                </Tabs>
                            </motion.div>
                        </div>

                        <div className="sc-1lw4m5x-3 sc-14nmkzk-4 kGWgrY SHzop">
                            <div className="sc-pq96xw-0 jYloGV mobile-tabs">
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
                                                        maxWidth: "2200px",
                                                        display: "block",
                                                    }}
                                                >
                                                    <img
                                                        alt=""
                                                        role="presentation"
                                                        aria-hidden="true"
                                                        src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;2200&#x27; width=&#x27;2200&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                    sizes="(min-width: 2200px) 2200px, 100vw"
                                                    decoding="async"
                                                    loading="lazy"
                                                    src="https://images.prismic.io/swissborg-website/42b4c17f-9cec-43d9-866a-ec8b1e8e3e36_Homepage-ThematicsTab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=2200&amp;h=2200"
                                                    alt="Web 3 thematics"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sc-92nsh9-2 fSLVGJ">
                                        <div className="sc-10g1lpr-0 WvvvD">
                                            <div className="sc-10g1lpr-1 etlzTA">
                                                <div className="sc-10g1lpr-2 bOMYWK">
                                                    <h3>
                                                        Crypto made simple with
                                                        Thematics
                                                    </h3>
                                                </div>
                                                <div className="sc-10g1lpr-3 mcNqv">
                                                    <p>
                                                        Our crypto bundles make
                                                        it easy to invest in
                                                        what inspires you. You
                                                        can now grow and
                                                        diversify your portfolio
                                                        in just one tap. Web3 is
                                                        only our first bundle,
                                                        more Thematic categories
                                                        will come.
                                                    </p>
                                                </div>
                                                <Link
                                                    className="sc-1yw1o2j-0 jtsZgu sc-10g1lpr-4 bLneZp"
                                                    to="/thematics"
                                                >
                                                    <span className="sc-1yw1o2j-1 lcdIii">
                                                        <span>
                                                            Early access
                                                        </span>
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
                                                        maxWidth: "2200px",
                                                        display: "block",
                                                    }}
                                                >
                                                    <img
                                                        alt=""
                                                        role="presentation"
                                                        aria-hidden="true"
                                                        src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;2200&#x27; width=&#x27;2200&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                    sizes="(min-width: 2200px) 2200px, 100vw"
                                                    decoding="async"
                                                    loading="lazy"
                                                    src="https://images.prismic.io/swissborg-website/c5b3dd1a-ef6d-4000-904c-ae0726ec0b79_Homepage-EarnTab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=2200&amp;h=2200"
                                                    srcSet="https://images.prismic.io/swissborg-website/c5b3dd1a-ef6d-4000-904c-ae0726ec0b79_Homepage-EarnTab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=100 100w,https://images.prismic.io/swissborg-website/c5b3dd1a-ef6d-4000-904c-ae0726ec0b79_Homepage-EarnTab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=116&amp;h=116 116w,https://images.prismic.io/swissborg-website/c5b3dd1a-ef6d-4000-904c-ae0726ec0b79_Homepage-EarnTab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=135&amp;h=135 135w,https://images.prismic.io/swissborg-website/c5b3dd1a-ef6d-4000-904c-ae0726ec0b79_Homepage-EarnTab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=156&amp;h=156 156w,https://images.prismic.io/swissborg-website/c5b3dd1a-ef6d-4000-904c-ae0726ec0b79_Homepage-EarnTab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=181&amp;h=181 181w,https://images.prismic.io/swissborg-website/c5b3dd1a-ef6d-4000-904c-ae0726ec0b79_Homepage-EarnTab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=210&amp;h=210 210w,https://images.prismic.io/swissborg-website/c5b3dd1a-ef6d-4000-904c-ae0726ec0b79_Homepage-EarnTab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=244&amp;h=244 244w,https://images.prismic.io/swissborg-website/c5b3dd1a-ef6d-4000-904c-ae0726ec0b79_Homepage-EarnTab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=283&amp;h=283 283w,https://images.prismic.io/swissborg-website/c5b3dd1a-ef6d-4000-904c-ae0726ec0b79_Homepage-EarnTab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=328&amp;h=328 328w,https://images.prismic.io/swissborg-website/c5b3dd1a-ef6d-4000-904c-ae0726ec0b79_Homepage-EarnTab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=380&amp;h=380 380w,https://images.prismic.io/swissborg-website/c5b3dd1a-ef6d-4000-904c-ae0726ec0b79_Homepage-EarnTab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=441&amp;h=441 441w,https://images.prismic.io/swissborg-website/c5b3dd1a-ef6d-4000-904c-ae0726ec0b79_Homepage-EarnTab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=512&amp;h=512 512w,https://images.prismic.io/swissborg-website/c5b3dd1a-ef6d-4000-904c-ae0726ec0b79_Homepage-EarnTab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=594&amp;h=594 594w,https://images.prismic.io/swissborg-website/c5b3dd1a-ef6d-4000-904c-ae0726ec0b79_Homepage-EarnTab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=689&amp;h=689 689w,https://images.prismic.io/swissborg-website/c5b3dd1a-ef6d-4000-904c-ae0726ec0b79_Homepage-EarnTab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=799&amp;h=799 799w,https://images.prismic.io/swissborg-website/c5b3dd1a-ef6d-4000-904c-ae0726ec0b79_Homepage-EarnTab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=927&amp;h=927 927w,https://images.prismic.io/swissborg-website/c5b3dd1a-ef6d-4000-904c-ae0726ec0b79_Homepage-EarnTab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1075&amp;h=1075 1075w,https://images.prismic.io/swissborg-website/c5b3dd1a-ef6d-4000-904c-ae0726ec0b79_Homepage-EarnTab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1247&amp;h=1247 1247w,https://images.prismic.io/swissborg-website/c5b3dd1a-ef6d-4000-904c-ae0726ec0b79_Homepage-EarnTab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1446&amp;h=1446 1446w,https://images.prismic.io/swissborg-website/c5b3dd1a-ef6d-4000-904c-ae0726ec0b79_Homepage-EarnTab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1678&amp;h=1678 1678w,https://images.prismic.io/swissborg-website/c5b3dd1a-ef6d-4000-904c-ae0726ec0b79_Homepage-EarnTab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1946&amp;h=1946 1946w,https://images.prismic.io/swissborg-website/c5b3dd1a-ef6d-4000-904c-ae0726ec0b79_Homepage-EarnTab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=2200&amp;h=2200 2200w"
                                                    alt="SwissBorg Earn"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sc-92nsh9-2 fSLVGJ">
                                        <div className="sc-10g1lpr-0 WvvvD">
                                            <div className="sc-10g1lpr-1 etlzTA">
                                                <div className="sc-10g1lpr-2 bOMYWK">
                                                    <h3>
                                                        Easy passive income with
                                                        FundrisePro Earn
                                                    </h3>
                                                </div>
                                                <div className="sc-10g1lpr-3 mcNqv">
                                                    <p>
                                                        Our system works with
                                                        selected counter parties
                                                        with a full range of
                                                        DeFi protocols to find
                                                        you the best return for
                                                        the lowest risk, using
                                                        top platforms such as
                                                        Compound, Curve,
                                                        Binance, Aave and
                                                        Uniswap.
                                                    </p>
                                                </div>
                                                <Link
                                                    className="sc-1yw1o2j-0 jtsZgu sc-10g1lpr-4 bLneZp"
                                                    to="/earn-crypto"
                                                >
                                                    <span className="sc-1yw1o2j-1 lcdIii">
                                                        <span>
                                                            Start earning
                                                        </span>
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
                                                    src="https://images.prismic.io/swissborg-website/7d5be472-cfd7-40d4-87d7-4eb5525db3a7_home-page-chsb-yield-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1641&amp;h=1640"
                                                    srcSet="https://images.prismic.io/swissborg-website/7d5be472-cfd7-40d4-87d7-4eb5525db3a7_home-page-chsb-yield-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=100 100w,https://images.prismic.io/swissborg-website/7d5be472-cfd7-40d4-87d7-4eb5525db3a7_home-page-chsb-yield-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=116&amp;h=116 116w,https://images.prismic.io/swissborg-website/7d5be472-cfd7-40d4-87d7-4eb5525db3a7_home-page-chsb-yield-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=135&amp;h=135 135w,https://images.prismic.io/swissborg-website/7d5be472-cfd7-40d4-87d7-4eb5525db3a7_home-page-chsb-yield-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=156&amp;h=156 156w,https://images.prismic.io/swissborg-website/7d5be472-cfd7-40d4-87d7-4eb5525db3a7_home-page-chsb-yield-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=181&amp;h=181 181w,https://images.prismic.io/swissborg-website/7d5be472-cfd7-40d4-87d7-4eb5525db3a7_home-page-chsb-yield-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=210&amp;h=210 210w,https://images.prismic.io/swissborg-website/7d5be472-cfd7-40d4-87d7-4eb5525db3a7_home-page-chsb-yield-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=244&amp;h=244 244w,https://images.prismic.io/swissborg-website/7d5be472-cfd7-40d4-87d7-4eb5525db3a7_home-page-chsb-yield-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=283&amp;h=283 283w,https://images.prismic.io/swissborg-website/7d5be472-cfd7-40d4-87d7-4eb5525db3a7_home-page-chsb-yield-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=328&amp;h=328 328w,https://images.prismic.io/swissborg-website/7d5be472-cfd7-40d4-87d7-4eb5525db3a7_home-page-chsb-yield-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=380&amp;h=380 380w,https://images.prismic.io/swissborg-website/7d5be472-cfd7-40d4-87d7-4eb5525db3a7_home-page-chsb-yield-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=441&amp;h=441 441w,https://images.prismic.io/swissborg-website/7d5be472-cfd7-40d4-87d7-4eb5525db3a7_home-page-chsb-yield-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=512&amp;h=512 512w,https://images.prismic.io/swissborg-website/7d5be472-cfd7-40d4-87d7-4eb5525db3a7_home-page-chsb-yield-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=594&amp;h=594 594w,https://images.prismic.io/swissborg-website/7d5be472-cfd7-40d4-87d7-4eb5525db3a7_home-page-chsb-yield-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=689&amp;h=689 689w,https://images.prismic.io/swissborg-website/7d5be472-cfd7-40d4-87d7-4eb5525db3a7_home-page-chsb-yield-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=799&amp;h=799 799w,https://images.prismic.io/swissborg-website/7d5be472-cfd7-40d4-87d7-4eb5525db3a7_home-page-chsb-yield-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=927&amp;h=926 927w,https://images.prismic.io/swissborg-website/7d5be472-cfd7-40d4-87d7-4eb5525db3a7_home-page-chsb-yield-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1075&amp;h=1074 1075w,https://images.prismic.io/swissborg-website/7d5be472-cfd7-40d4-87d7-4eb5525db3a7_home-page-chsb-yield-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1247&amp;h=1246 1247w,https://images.prismic.io/swissborg-website/7d5be472-cfd7-40d4-87d7-4eb5525db3a7_home-page-chsb-yield-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1446&amp;h=1445 1446w,https://images.prismic.io/swissborg-website/7d5be472-cfd7-40d4-87d7-4eb5525db3a7_home-page-chsb-yield-tab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1641&amp;h=1640 1641w"
                                                    alt="CHSB Yield"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sc-92nsh9-2 fSLVGJ">
                                        <div className="sc-10g1lpr-0 WvvvD">
                                            <div className="sc-10g1lpr-1 etlzTA">
                                                <div className="sc-10g1lpr-2 bOMYWK">
                                                    <h3>
                                                        Earn CHSB token rewards
                                                    </h3>
                                                </div>
                                                <div className="sc-10g1lpr-3 mcNqv">
                                                    <p>
                                                        As a CHSB token holder,
                                                        earn rewards in CHSB
                                                        based on the performance
                                                        of the entire Cripto
                                                        Boost ecosystem
                                                        reflected in one simple
                                                        indicator: The Community
                                                        Index.
                                                    </p>
                                                </div>
                                                <Link
                                                    className="sc-1yw1o2j-0 jtsZgu sc-10g1lpr-4 bLneZp"
                                                    to="/chsb-yield"
                                                >
                                                    <span className="sc-1yw1o2j-1 lcdIii">
                                                        <span>
                                                            Start earning
                                                        </span>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc-47vzns-2 dTbJUG">
                                <motion.div
                                    variants={M1}
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
                                                    maxWidth: "2200px",
                                                    display: "block",
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;2200&#x27; width=&#x27;2200&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                sizes="(min-width: 2200px) 2200px, 100vw"
                                                decoding="async"
                                                loading="lazy"
                                                src={L2}
                                                alt="Web 3 thematics"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            opacity: `${Vel === 1 ? "1" : "0"}`,
                                            transform: `translate(0px, -${
                                                percentage * 200
                                            }px)`,
                                            // position: "relative",
                                            // top: "100px",
                                        }}
                                        className="sc-gg0f3z-0 fxDXsF"
                                    >
                                        <div
                                            data-gatsby-image-wrapper=""
                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-gg0f3z-1 kmYPPe"
                                        >
                                            <div
                                                style={{
                                                    maxWidth: "2200px",
                                                    display: "block",
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;2200&#x27; width=&#x27;2200&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                sizes="(min-width: 2200px) 2200px, 100vw"
                                                decoding="async"
                                                loading="lazy"
                                                src="https://images.prismic.io/swissborg-website/c5b3dd1a-ef6d-4000-904c-ae0726ec0b79_Homepage-EarnTab.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=2200&amp;h=2200"
                                                alt="SwissBorg Earn"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            opacity: `${Vel === 2 ? "1" : "0"}`,
                                            transform: `translate(0px, -${
                                                percentage * 200
                                            }px)`,
                                            // position: "relative",
                                            // top: "100px",
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
                                                src={L1}
                                                alt="CHSB Yield"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={M2}
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
                                                        Crypto made simple with
                                                        Thematics
                                                    </h3>
                                                </div>
                                                <div className="sc-10g1lpr-3 mcNqv">
                                                    <p>
                                                        Our crypto bundles make
                                                        it easy to invest in
                                                        what inspires you. You
                                                        can now grow and
                                                        diversify your portfolio
                                                        in just one tap. Web3 is
                                                        only our first bundle,
                                                        more Thematic categories
                                                        will come.
                                                    </p>
                                                </div>
                                                <Link to="/thematics">
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
                                                        Early access
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="sc-10g1lpr-0 WvvvD">
                                            <div className="sc-10g1lpr-1 etlzTA">
                                                <div className="sc-10g1lpr-2 bOMYWK">
                                                    <h3>
                                                        Easy passive income with
                                                        FundrisePro Earn
                                                    </h3>
                                                </div>
                                                <div className="sc-10g1lpr-3 mcNqv">
                                                    <p>
                                                        Our system works with
                                                        selected counter parties
                                                        with a full range of
                                                        DeFi protocols to find
                                                        you the best return for
                                                        the lowest risk, using
                                                        top platforms such as
                                                        Compound, Curve,
                                                        Binance, Aave and
                                                        Uniswap.
                                                    </p>
                                                </div>
                                                <Link to="/earn-crypto">
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
                                                        Start earning
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="sc-10g1lpr-0 WvvvD">
                                            <div className="sc-10g1lpr-1 etlzTA">
                                                <div className="sc-10g1lpr-2 bOMYWK">
                                                    <h3>
                                                        Earn CHSB token rewards
                                                    </h3>
                                                </div>
                                                <div className="sc-10g1lpr-3 mcNqv">
                                                    <p>
                                                        As a CHSB token holder,
                                                        earn rewards in CHSB
                                                        based on the performance
                                                        of the entire Cripto
                                                        Boost ecosystem
                                                        reflected in one simple
                                                        indicator: The Community
                                                        Index.
                                                    </p>
                                                </div>
                                                <Link to="/chsb-yield">
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
                                                        Start earning
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
