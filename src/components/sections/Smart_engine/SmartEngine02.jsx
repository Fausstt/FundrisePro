import { Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
const H1 = {
    hidden: {
        y: +50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transitionDuration: "1s",
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
        position: "relative",
        top: "200px",
        opacity: 1,
        transitionDuration: "1s",
        transitionDelay: "0.4s",
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
        transitionDelay: "0.4s",
    },
};
export default function SmartEngine02() {
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
                            <h2>
                                Our revolutionary Smart Engine takes the
                                guesswork out of investing
                            </h2>
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
                                                    Best execution
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
                                                    Unique trading pairs
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
                                                    Transparent
                                                </Typography>
                                            </div>
                                        }
                                    />
                                    <Tab
                                        sx={{
                                            borderRadius: "10px",
                                            background:
                                                Vel === 3
                                                    ? "rgba(0,161,235,0.1)"
                                                    : "",
                                        }}
                                        onClick={() => setVel(3)}
                                        label={
                                            <div className="sc-1iq0pqh-2 ePJhsH tab tab--3">
                                                <Typography
                                                    variant="p"
                                                    color={"primary"}
                                                    className={`sc-1iq0pqh-5 ${
                                                        Vel === 3
                                                            ? "dDCvh"
                                                            : "iLBGeb"
                                                    }`}
                                                >
                                                    No hidden fees
                                                </Typography>
                                            </div>
                                        }
                                    />
                                </Tabs>
                            </motion.div>
                        </div>

                        <div className="sc-1lw4m5x-3 sc-14nmkzk-4 kGWgrY SHzop">
                            <div className="sc-pq96xw-0 kzXska  mobile-tabs">
                                <div className="sc-pq96xw-1 jeKIlh"></div>
                                <button className="sc-pq96xw-2 gWNKKk"></button>
                                <button className="sc-pq96xw-2 gWNKKk"></button>
                                <button className="sc-pq96xw-2 gWNKKk"></button>
                                <button className="sc-pq96xw-2 gWNKKk"></button>
                            </div>
                        </div>

                        <div className="sc-1lw4m5x-3 sc-14nmkzk-6 kGWgrY hSawPD">
                            <div className="sc-92nsh9-0 jqmqKQ">
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
                                                    alt="Best price execution"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sc-92nsh9-2 fSLVGJ">
                                        <div className="sc-10g1lpr-0 WvvvD">
                                            <div className="sc-10g1lpr-1 etlzTA">
                                                <div className="sc-10g1lpr-2 bOMYWK">
                                                    <h3>
                                                        Buy, sell &amp; exchange
                                                        always at the best
                                                        available price
                                                    </h3>
                                                </div>
                                                <div className="sc-10g1lpr-3 mcNqv">
                                                    <p>
                                                        Market volatility often
                                                        leads to price
                                                        differences across
                                                        exchanges. Our Smart
                                                        Engine takes advantage
                                                        of this by finding the
                                                        best execution route
                                                        every time, meaning you
                                                        get the best price from
                                                        multiple exchanges.
                                                    </p>
                                                </div>
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
                                                        maxWidth: "1640px",
                                                        display: "block",
                                                    }}
                                                >
                                                    <img
                                                        alt=""
                                                        role="presentation"
                                                        aria-hidden="true"
                                                        src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;1640&#x27; width=&#x27;1640&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                    sizes="(min-width: 1640px) 1640px, 100vw"
                                                    decoding="async"
                                                    loading="lazy"
                                                    src="https://images.prismic.io/swissborg-website/e1b5b8e3-3685-48ce-b42c-3503b4c3f16a_smart-engine-page-trading-pairs-chf-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1640&amp;h=1640"
                                                    alt="Unique trading pairs"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sc-92nsh9-2 fSLVGJ">
                                        <div className="sc-10g1lpr-0 WvvvD">
                                            <div className="sc-10g1lpr-1 etlzTA">
                                                <div className="sc-10g1lpr-2 bOMYWK">
                                                    <h3>
                                                        Access 2,295 unique
                                                        crypto to fiat trading
                                                        pairs
                                                    </h3>
                                                </div>
                                                <div className="sc-10g1lpr-3 mcNqv">
                                                    <p>
                                                        Trade any fiat or crypto
                                                        pair, even if it doesn’t
                                                        exist on any exchange.
                                                        EUR to CHSB, or CHF to
                                                        PAX Gold and more! We do
                                                        all the conversions for
                                                        you and find the best
                                                        route and price.
                                                    </p>
                                                </div>
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
                                                        maxWidth: "1640px",
                                                        display: "block",
                                                    }}
                                                >
                                                    <img
                                                        alt=""
                                                        role="presentation"
                                                        aria-hidden="true"
                                                        src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;1640&#x27; width=&#x27;1640&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                    sizes="(min-width: 1640px) 1640px, 100vw"
                                                    decoding="async"
                                                    loading="lazy"
                                                    src="https://images.prismic.io/swissborg-website/c47604f2-04d3-442c-9e5a-5b577c95fc2a_smart-engine-page-transparency-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1640&amp;h=1640"
                                                    alt="Transparent"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sc-92nsh9-2 fSLVGJ">
                                        <div className="sc-10g1lpr-0 WvvvD">
                                            <div className="sc-10g1lpr-1 etlzTA">
                                                <div className="sc-10g1lpr-2 bOMYWK">
                                                    <h3>
                                                        Get a fully transparent
                                                        exchange report
                                                    </h3>
                                                </div>
                                                <div className="sc-10g1lpr-3 mcNqv">
                                                    <p>
                                                        With the{" "}
                                                        <strong>
                                                            Smart Exchange
                                                            Report
                                                        </strong>
                                                        , you will be able to
                                                        review and keep track of
                                                        every exchange. Review
                                                        all the details at each
                                                        step of your exchange.
                                                    </p>
                                                </div>
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
                                                        maxWidth: "1640px",
                                                        display: "block",
                                                    }}
                                                >
                                                    <img
                                                        alt=""
                                                        role="presentation"
                                                        aria-hidden="true"
                                                        src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;1640&#x27; width=&#x27;1640&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                    sizes="(min-width: 1640px) 1640px, 100vw"
                                                    decoding="async"
                                                    loading="lazy"
                                                    src="https://images.prismic.io/swissborg-website/50b94beb-5e31-484c-b998-3b1b6d6fe151_smart-engine-page-fees-eur-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1640&amp;h=1640"
                                                    alt="No hidden fees"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sc-92nsh9-2 fSLVGJ">
                                        <div className="sc-10g1lpr-0 WvvvD">
                                            <div className="sc-10g1lpr-1 etlzTA">
                                                <div className="sc-10g1lpr-2 bOMYWK">
                                                    <h3>
                                                        Enjoy zero spreads and
                                                        no inflated exchange
                                                        rates
                                                    </h3>
                                                </div>
                                                <div className="sc-10g1lpr-3 mcNqv">
                                                    <p>
                                                        While other apps claim
                                                        “zero fees” but hide
                                                        them in the exchange
                                                        rate or spread, we
                                                        always offer the best
                                                        possible price without
                                                        taking a cut. Instead,
                                                        we charge a small
                                                        transparent fee that we
                                                        reinvest into the
                                                        ecosystem.
                                                    </p>
                                                </div>
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
                                                alt="Best price execution"
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
                                                    maxWidth: "1640px",
                                                    display: "block",
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;1640&#x27; width=&#x27;1640&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                sizes="(min-width: 1640px) 1640px, 100vw"
                                                decoding="async"
                                                loading="lazy"
                                                src="https://images.prismic.io/swissborg-website/e1b5b8e3-3685-48ce-b42c-3503b4c3f16a_smart-engine-page-trading-pairs-chf-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1640&amp;h=1640"
                                                srcSet="https://images.prismic.io/swissborg-website/e1b5b8e3-3685-48ce-b42c-3503b4c3f16a_smart-engine-page-trading-pairs-chf-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=100 100w,https://images.prismic.io/swissborg-website/e1b5b8e3-3685-48ce-b42c-3503b4c3f16a_smart-engine-page-trading-pairs-chf-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=116&amp;h=116 116w,https://images.prismic.io/swissborg-website/e1b5b8e3-3685-48ce-b42c-3503b4c3f16a_smart-engine-page-trading-pairs-chf-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=135&amp;h=135 135w,https://images.prismic.io/swissborg-website/e1b5b8e3-3685-48ce-b42c-3503b4c3f16a_smart-engine-page-trading-pairs-chf-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=156&amp;h=156 156w,https://images.prismic.io/swissborg-website/e1b5b8e3-3685-48ce-b42c-3503b4c3f16a_smart-engine-page-trading-pairs-chf-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=181&amp;h=181 181w,https://images.prismic.io/swissborg-website/e1b5b8e3-3685-48ce-b42c-3503b4c3f16a_smart-engine-page-trading-pairs-chf-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=210&amp;h=210 210w,https://images.prismic.io/swissborg-website/e1b5b8e3-3685-48ce-b42c-3503b4c3f16a_smart-engine-page-trading-pairs-chf-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=244&amp;h=244 244w,https://images.prismic.io/swissborg-website/e1b5b8e3-3685-48ce-b42c-3503b4c3f16a_smart-engine-page-trading-pairs-chf-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=283&amp;h=283 283w,https://images.prismic.io/swissborg-website/e1b5b8e3-3685-48ce-b42c-3503b4c3f16a_smart-engine-page-trading-pairs-chf-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=328&amp;h=328 328w,https://images.prismic.io/swissborg-website/e1b5b8e3-3685-48ce-b42c-3503b4c3f16a_smart-engine-page-trading-pairs-chf-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=380&amp;h=380 380w,https://images.prismic.io/swissborg-website/e1b5b8e3-3685-48ce-b42c-3503b4c3f16a_smart-engine-page-trading-pairs-chf-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=441&amp;h=441 441w,https://images.prismic.io/swissborg-website/e1b5b8e3-3685-48ce-b42c-3503b4c3f16a_smart-engine-page-trading-pairs-chf-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=512&amp;h=512 512w,https://images.prismic.io/swissborg-website/e1b5b8e3-3685-48ce-b42c-3503b4c3f16a_smart-engine-page-trading-pairs-chf-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=594&amp;h=594 594w,https://images.prismic.io/swissborg-website/e1b5b8e3-3685-48ce-b42c-3503b4c3f16a_smart-engine-page-trading-pairs-chf-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=689&amp;h=689 689w,https://images.prismic.io/swissborg-website/e1b5b8e3-3685-48ce-b42c-3503b4c3f16a_smart-engine-page-trading-pairs-chf-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=799&amp;h=799 799w,https://images.prismic.io/swissborg-website/e1b5b8e3-3685-48ce-b42c-3503b4c3f16a_smart-engine-page-trading-pairs-chf-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=927&amp;h=927 927w,https://images.prismic.io/swissborg-website/e1b5b8e3-3685-48ce-b42c-3503b4c3f16a_smart-engine-page-trading-pairs-chf-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1075&amp;h=1075 1075w,https://images.prismic.io/swissborg-website/e1b5b8e3-3685-48ce-b42c-3503b4c3f16a_smart-engine-page-trading-pairs-chf-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1247&amp;h=1247 1247w,https://images.prismic.io/swissborg-website/e1b5b8e3-3685-48ce-b42c-3503b4c3f16a_smart-engine-page-trading-pairs-chf-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1446&amp;h=1446 1446w,https://images.prismic.io/swissborg-website/e1b5b8e3-3685-48ce-b42c-3503b4c3f16a_smart-engine-page-trading-pairs-chf-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1640&amp;h=1640 1640w"
                                                alt="Unique trading pairs"
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
                                                    maxWidth: "1640px",
                                                    display: "block",
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;1640&#x27; width=&#x27;1640&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                sizes="(min-width: 1640px) 1640px, 100vw"
                                                decoding="async"
                                                loading="lazy"
                                                src="https://images.prismic.io/swissborg-website/c47604f2-04d3-442c-9e5a-5b577c95fc2a_smart-engine-page-transparency-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1640&amp;h=1640"
                                                srcSet="https://images.prismic.io/swissborg-website/c47604f2-04d3-442c-9e5a-5b577c95fc2a_smart-engine-page-transparency-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=100 100w,https://images.prismic.io/swissborg-website/c47604f2-04d3-442c-9e5a-5b577c95fc2a_smart-engine-page-transparency-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=116&amp;h=116 116w,https://images.prismic.io/swissborg-website/c47604f2-04d3-442c-9e5a-5b577c95fc2a_smart-engine-page-transparency-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=135&amp;h=135 135w,https://images.prismic.io/swissborg-website/c47604f2-04d3-442c-9e5a-5b577c95fc2a_smart-engine-page-transparency-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=156&amp;h=156 156w,https://images.prismic.io/swissborg-website/c47604f2-04d3-442c-9e5a-5b577c95fc2a_smart-engine-page-transparency-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=181&amp;h=181 181w,https://images.prismic.io/swissborg-website/c47604f2-04d3-442c-9e5a-5b577c95fc2a_smart-engine-page-transparency-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=210&amp;h=210 210w,https://images.prismic.io/swissborg-website/c47604f2-04d3-442c-9e5a-5b577c95fc2a_smart-engine-page-transparency-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=244&amp;h=244 244w,https://images.prismic.io/swissborg-website/c47604f2-04d3-442c-9e5a-5b577c95fc2a_smart-engine-page-transparency-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=283&amp;h=283 283w,https://images.prismic.io/swissborg-website/c47604f2-04d3-442c-9e5a-5b577c95fc2a_smart-engine-page-transparency-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=328&amp;h=328 328w,https://images.prismic.io/swissborg-website/c47604f2-04d3-442c-9e5a-5b577c95fc2a_smart-engine-page-transparency-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=380&amp;h=380 380w,https://images.prismic.io/swissborg-website/c47604f2-04d3-442c-9e5a-5b577c95fc2a_smart-engine-page-transparency-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=441&amp;h=441 441w,https://images.prismic.io/swissborg-website/c47604f2-04d3-442c-9e5a-5b577c95fc2a_smart-engine-page-transparency-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=512&amp;h=512 512w,https://images.prismic.io/swissborg-website/c47604f2-04d3-442c-9e5a-5b577c95fc2a_smart-engine-page-transparency-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=594&amp;h=594 594w,https://images.prismic.io/swissborg-website/c47604f2-04d3-442c-9e5a-5b577c95fc2a_smart-engine-page-transparency-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=689&amp;h=689 689w,https://images.prismic.io/swissborg-website/c47604f2-04d3-442c-9e5a-5b577c95fc2a_smart-engine-page-transparency-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=799&amp;h=799 799w,https://images.prismic.io/swissborg-website/c47604f2-04d3-442c-9e5a-5b577c95fc2a_smart-engine-page-transparency-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=927&amp;h=927 927w,https://images.prismic.io/swissborg-website/c47604f2-04d3-442c-9e5a-5b577c95fc2a_smart-engine-page-transparency-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1075&amp;h=1075 1075w,https://images.prismic.io/swissborg-website/c47604f2-04d3-442c-9e5a-5b577c95fc2a_smart-engine-page-transparency-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1247&amp;h=1247 1247w,https://images.prismic.io/swissborg-website/c47604f2-04d3-442c-9e5a-5b577c95fc2a_smart-engine-page-transparency-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1446&amp;h=1446 1446w,https://images.prismic.io/swissborg-website/c47604f2-04d3-442c-9e5a-5b577c95fc2a_smart-engine-page-transparency-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1640&amp;h=1640 1640w"
                                                alt="Transparent"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            opacity: `${Vel === 3 ? "1" : "0"}`,
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
                                                    maxWidth: "1640px",
                                                    display: "block",
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;1640&#x27; width=&#x27;1640&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                sizes="(min-width: 1640px) 1640px, 100vw"
                                                decoding="async"
                                                loading="lazy"
                                                src="https://images.prismic.io/swissborg-website/50b94beb-5e31-484c-b998-3b1b6d6fe151_smart-engine-page-fees-eur-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1640&amp;h=1640"
                                                srcSet="https://images.prismic.io/swissborg-website/50b94beb-5e31-484c-b998-3b1b6d6fe151_smart-engine-page-fees-eur-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=100 100w,https://images.prismic.io/swissborg-website/50b94beb-5e31-484c-b998-3b1b6d6fe151_smart-engine-page-fees-eur-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=116&amp;h=116 116w,https://images.prismic.io/swissborg-website/50b94beb-5e31-484c-b998-3b1b6d6fe151_smart-engine-page-fees-eur-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=135&amp;h=135 135w,https://images.prismic.io/swissborg-website/50b94beb-5e31-484c-b998-3b1b6d6fe151_smart-engine-page-fees-eur-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=156&amp;h=156 156w,https://images.prismic.io/swissborg-website/50b94beb-5e31-484c-b998-3b1b6d6fe151_smart-engine-page-fees-eur-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=181&amp;h=181 181w,https://images.prismic.io/swissborg-website/50b94beb-5e31-484c-b998-3b1b6d6fe151_smart-engine-page-fees-eur-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=210&amp;h=210 210w,https://images.prismic.io/swissborg-website/50b94beb-5e31-484c-b998-3b1b6d6fe151_smart-engine-page-fees-eur-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=244&amp;h=244 244w,https://images.prismic.io/swissborg-website/50b94beb-5e31-484c-b998-3b1b6d6fe151_smart-engine-page-fees-eur-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=283&amp;h=283 283w,https://images.prismic.io/swissborg-website/50b94beb-5e31-484c-b998-3b1b6d6fe151_smart-engine-page-fees-eur-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=328&amp;h=328 328w,https://images.prismic.io/swissborg-website/50b94beb-5e31-484c-b998-3b1b6d6fe151_smart-engine-page-fees-eur-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=380&amp;h=380 380w,https://images.prismic.io/swissborg-website/50b94beb-5e31-484c-b998-3b1b6d6fe151_smart-engine-page-fees-eur-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=441&amp;h=441 441w,https://images.prismic.io/swissborg-website/50b94beb-5e31-484c-b998-3b1b6d6fe151_smart-engine-page-fees-eur-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=512&amp;h=512 512w,https://images.prismic.io/swissborg-website/50b94beb-5e31-484c-b998-3b1b6d6fe151_smart-engine-page-fees-eur-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=594&amp;h=594 594w,https://images.prismic.io/swissborg-website/50b94beb-5e31-484c-b998-3b1b6d6fe151_smart-engine-page-fees-eur-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=689&amp;h=689 689w,https://images.prismic.io/swissborg-website/50b94beb-5e31-484c-b998-3b1b6d6fe151_smart-engine-page-fees-eur-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=799&amp;h=799 799w,https://images.prismic.io/swissborg-website/50b94beb-5e31-484c-b998-3b1b6d6fe151_smart-engine-page-fees-eur-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=927&amp;h=927 927w,https://images.prismic.io/swissborg-website/50b94beb-5e31-484c-b998-3b1b6d6fe151_smart-engine-page-fees-eur-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1075&amp;h=1075 1075w,https://images.prismic.io/swissborg-website/50b94beb-5e31-484c-b998-3b1b6d6fe151_smart-engine-page-fees-eur-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1247&amp;h=1247 1247w,https://images.prismic.io/swissborg-website/50b94beb-5e31-484c-b998-3b1b6d6fe151_smart-engine-page-fees-eur-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1446&amp;h=1446 1446w,https://images.prismic.io/swissborg-website/50b94beb-5e31-484c-b998-3b1b6d6fe151_smart-engine-page-fees-eur-en.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1640&amp;h=1640 1640w"
                                                alt="No hidden fees"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={M2}
                                    className="sc-47vzns-1 DZiAw"
                                >
                                    <div
                                        className={`sc-47vzns-3 
                                ${Vel === 0 ? "cjwsDF" : ""}
                                 ${Vel === 1 ? "jIOYeY" : ""} 
                                 ${Vel === 2 ? "fSMXDT" : ""}
                                 ${Vel === 3 ? "eKdvSG" : ""}
                                 `}
                                    >
                                        <div className="sc-10g1lpr-0 WvvvD">
                                            <div className="sc-10g1lpr-1 etlzTA">
                                                <div className="sc-10g1lpr-2 bOMYWK">
                                                    <h3>
                                                        Buy, sell &amp; exchange
                                                        always at the best
                                                        available price
                                                    </h3>
                                                </div>
                                                <div className="sc-10g1lpr-3 mcNqv">
                                                    <p>
                                                        Market volatility often
                                                        leads to price
                                                        differences across
                                                        exchanges. Our Smart
                                                        Engine takes advantage
                                                        of this by finding the
                                                        best execution route
                                                        every time, meaning you
                                                        get the best price from
                                                        multiple exchanges.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sc-10g1lpr-0 WvvvD">
                                            <div className="sc-10g1lpr-1 etlzTA">
                                                <div className="sc-10g1lpr-2 bOMYWK">
                                                    <h3>
                                                        Access 2,295 unique
                                                        crypto to fiat trading
                                                        pairs
                                                    </h3>
                                                </div>
                                                <div className="sc-10g1lpr-3 mcNqv">
                                                    <p>
                                                        Trade any fiat or crypto
                                                        pair, even if it doesn’t
                                                        exist on any exchange.
                                                        EUR to CHSB, or CHF to
                                                        PAX Gold and more! We do
                                                        all the conversions for
                                                        you and find the best
                                                        route and price.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sc-10g1lpr-0 WvvvD">
                                            <div className="sc-10g1lpr-1 etlzTA">
                                                <div className="sc-10g1lpr-2 bOMYWK">
                                                    <h3>
                                                        Get a fully transparent
                                                        exchange report
                                                    </h3>
                                                </div>
                                                <div className="sc-10g1lpr-3 mcNqv">
                                                    <p>
                                                        With the{" "}
                                                        <strong>
                                                            Smart Exchange
                                                            Report
                                                        </strong>
                                                        , you will be able to
                                                        review and keep track of
                                                        every exchange. Review
                                                        all the details at each
                                                        step of your exchange.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sc-10g1lpr-0 WvvvD">
                                            <div className="sc-10g1lpr-1 etlzTA">
                                                <div className="sc-10g1lpr-2 bOMYWK">
                                                    <h3>
                                                        Enjoy zero spreads and
                                                        no inflated exchange
                                                        rates
                                                    </h3>
                                                </div>
                                                <div className="sc-10g1lpr-3 mcNqv">
                                                    <p>
                                                        While other apps claim
                                                        “zero fees” but hide
                                                        them in the exchange
                                                        rate or spread, we
                                                        always offer the best
                                                        possible price without
                                                        taking a cut. Instead,
                                                        we charge a small
                                                        transparent fee that we
                                                        reinvest into the
                                                        ecosystem.
                                                    </p>
                                                </div>
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
