import { Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";

const H1 = {
    hidden: {
        y: +50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transitionDuration: "0.5s",
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
        transform: "scale(0.8)",
        opacity: 0.5,
    },
    visible: {
        opacity: 1,
        transform: "scale(1)",
        transitionDuration: "1.5s",
    },
};
export default function Tematics03() {
    const [Vel, setVel] = useState(0);

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            className="sc-1lw4m5x-0 sc-10ae4vz-0 eoRgFn fDyCqR"
        >
            <div className="sc-1lw4m5x-1 sc-10ae4vz-1 iukxsw">
                <motion.div
                    variants={H1}
                    className="sc-1lw4m5x-3 sc-10ae4vz-2 kGWgrY eCXaGn"
                >
                    <h2>You can now invest in the internet of the future</h2>
                </motion.div>

                <motion.div
                    variants={B1}
                    className="sc-1lw4m5x-3 sc-10ae4vz-4 kGWgrY cGNfaF"
                >
                    <div
                        id="features"
                        className="sc-1iq0pqh-0 jZYMKv sc-10ae4vz-8 ciMwdl tab-container"
                    >
                        <div className="sc-1iq0pqh-1 desJTg">
                            <Tabs value={Vel} className="sc-1iq0pqh-1 desJTg">
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
                                        <Typography
                                            variant="p"
                                            color={"primary"}
                                            className={`sc-1iq0pqh-5 ${
                                                Vel === 0 ? "dDCvh" : "crCSBQ"
                                            }`}
                                        >
                                            What is Web3?
                                        </Typography>
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
                                        <Typography
                                            variant="p"
                                            color={"primary"}
                                            className={`sc-1iq0pqh-5 ${
                                                Vel === 1 ? "dDCvh" : "crCSBQ"
                                            }`}
                                        >
                                            What’s in Web3?
                                        </Typography>
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
                                        <Typography
                                            variant="p"
                                            color={"primary"}
                                            className={`sc-1iq0pqh-5 ${
                                                Vel === 2 ? "dDCvh" : "crCSBQ"
                                            }`}
                                        >
                                            Why choose web3?
                                        </Typography>
                                    }
                                />
                            </Tabs>
                        </div>
                    </div>
                </motion.div>
                <div className="sc-1lw4m5x-3 sc-10ae4vz-9 kGWgrY ccbrwP">
                    <div className="sc-pq96xw-0 jYloGV  mobile-tabs">
                        <div className="sc-pq96xw-1 cCHsuS"></div>
                        <button className="sc-pq96xw-2 gWNKKk"></button>
                        <button className="sc-pq96xw-2 gWNKKk"></button>
                        <button className="sc-pq96xw-2 gWNKKk"></button>
                    </div>
                </div>
                <div
                    className="sc-1lw4m5x-3 sc-10ae4vz-5 kGWgrY hsKQxV"
                    style={{
                        minHeight: `${Vel === 0 ? "447px" : ""} ${
                            Vel === 1 ? "493px" : ""
                        } ${Vel === 2 ? "562px" : ""}`,
                    }}
                >
                    <motion.div variants={M1} className="sc-10ae4vz-6 bRWUOH">
                        <div
                            className={`sc-10ae4vz-7 ${
                                Vel === 0 ? "lgPUFa" : ""
                            } ${Vel === 1 ? "lgPUFb" : ""} ${
                                Vel === 2 ? "lgPUFb" : ""
                            }`}
                        >
                            <div>
                                <div className="sc-hkdheh-0 jRBSel">
                                    <div className="sc-hkdheh-1 kcNhR">
                                        <div
                                            data-gatsby-image-wrapper=""
                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-hkdheh-2 bjKKgE"
                                        >
                                            <div
                                                style={{
                                                    maxWidth: "1248px",
                                                    display: "block",
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;1248&#x27; width=&#x27;1248&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                    opacity: "1",
                                                }}
                                                sizes="(minWidth: 1248px) 1248px, 100vw"
                                                decoding="async"
                                                loading="lazy"
                                                src="https://images.prismic.io/swissborg-website/b087ae61-5af7-4e65-b7f0-9a46b1d11c96_web-3-thematic-card-illustration.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1248&amp;h=1248"
                                                alt="Thematics Web 3"
                                            />
                                        </div>
                                    </div>
                                    <div className="sc-hkdheh-3 kaSznw">
                                        <h3 className="sc-hkdheh-4 kNjSCe">
                                            Introducing Web3, our first Thematic
                                        </h3>
                                        <p className="sc-hkdheh-5 fEerpt">
                                            Web3 is creating a new internet that
                                            is more open, independent and
                                            accessible. The pioneering promise
                                            of the new internet is individual
                                            ownership of data. The increase in
                                            internet transactions will increase
                                            the demand for crypto as the
                                            currency of this brave new Web. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`sc-10ae4vz-7 ${
                                Vel === 0 ? "lgPUFb" : ""
                            } ${Vel === 1 ? "lgPUFa" : ""} ${
                                Vel === 2 ? "lgPUFb" : ""
                            }`}
                        >
                            <div>
                                <div className="sc-3gax6a-0 gKZJYg">
                                    <h3 className="sc-3gax6a-5 jUkWBY">
                                        Web3 cryptos and their target allocation
                                    </h3>
                                    <div className="sc-1dqg576-4 hnhTDG sc-3gax6a-1 cXswOW">
                                        <div className="sc-1dqg576-2 dfjekw">
                                            <div className="sc-1dqg576-3 iQLVg">
                                                <div className="sc-1el4ke7-1 iwWQwX">
                                                    <div
                                                        data-gatsby-image-wrapper=""
                                                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1el4ke7-0 dQrhKA"
                                                    >
                                                        <div
                                                            style={{
                                                                maxWidth:
                                                                    "24px",
                                                                display:
                                                                    "block",
                                                            }}
                                                        >
                                                            <img
                                                                alt=""
                                                                role="presentation"
                                                                aria-hidden="true"
                                                                src="data:image/svg+xml;charset=utf-8,%3Csvg height='24' width='24' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                                style={{
                                                                    maxWidth:
                                                                        "100%",
                                                                    display:
                                                                        "block",
                                                                    position:
                                                                        "static",
                                                                }}
                                                            ></img>
                                                        </div>
                                                        <div
                                                            aria-hidden="true"
                                                            data-placeholder-image=""
                                                            style={{
                                                                opacity: "0",
                                                                transition:
                                                                    "opacity 500ms linear 0s",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                        ></div>
                                                        <img
                                                            width="24"
                                                            height="24"
                                                            data-main-image=""
                                                            style={{
                                                                opacity: "1",
                                                                transition:
                                                                    "opacity 500ms linear 0s",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                            sizes="(min-width: 24px) 24px, 100vw"
                                                            decoding="async"
                                                            loading="lazy"
                                                            src="https://swissborg-website.cdn.prismic.io/swissborg-website/5b1ced59-7c8b-4df0-9650-50a77e5d0b16_eth.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24"
                                                            srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/5b1ced59-7c8b-4df0-9650-50a77e5d0b16_eth.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24 24w"
                                                            alt="Ethereum"
                                                        ></img>
                                                        <noscript>
                                                            <img
                                                                width="24"
                                                                height="24"
                                                                data-main-image=""
                                                                style={{
                                                                    objectFit:
                                                                        "cover",
                                                                    opacity:
                                                                        "0",
                                                                }}
                                                                sizes="(min-width: 24px) 24px, 100vw"
                                                                decoding="async"
                                                                loading="lazy"
                                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/5b1ced59-7c8b-4df0-9650-50a77e5d0b16_eth.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24"
                                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/5b1ced59-7c8b-4df0-9650-50a77e5d0b16_eth.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24 24w"
                                                                alt="Ethereum"
                                                            />
                                                        </noscript>
                                                    </div>
                                                    <span className="sc-1el4ke7-2 bESDsh">
                                                        Ethereum
                                                    </span>
                                                    <span className="sc-1el4ke7-3 czvMFY">
                                                        ETH
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="sc-1dqg576-3 iQLVg">
                                                <span className="sc-1el4ke7-4 bquRkb">
                                                    10%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="sc-1dqg576-2 dfjekw">
                                            <div className="sc-1dqg576-3 iQLVg">
                                                <div className="sc-1el4ke7-1 iwWQwX">
                                                    <div
                                                        data-gatsby-image-wrapper=""
                                                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1el4ke7-0 dQrhKA"
                                                    >
                                                        <div
                                                            style={{
                                                                maxWidth:
                                                                    "24px",
                                                                display:
                                                                    "block",
                                                            }}
                                                        >
                                                            <img
                                                                alt=""
                                                                role="presentation"
                                                                aria-hidden="true"
                                                                src="data:image/svg+xml;charset=utf-8,%3Csvg height='24' width='24' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                                style={{
                                                                    maxWidth:
                                                                        "100%",
                                                                    display:
                                                                        "block",
                                                                    position:
                                                                        "static",
                                                                }}
                                                            ></img>
                                                        </div>
                                                        <div
                                                            aria-hidden="true"
                                                            data-placeholder-image=""
                                                            style={{
                                                                opacity: "0",
                                                                transition:
                                                                    "opacity 500ms linear 0s",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                        ></div>
                                                        <img
                                                            width="24"
                                                            height="24"
                                                            data-main-image=""
                                                            style={{
                                                                opacity: "1",
                                                                transition:
                                                                    "opacity 500ms linear 0s",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                            sizes="(min-width: 24px) 24px, 100vw"
                                                            decoding="async"
                                                            loading="lazy"
                                                            src="https://swissborg-website.cdn.prismic.io/swissborg-website/d4768b65-21b9-4089-a56f-85362e5a15eb_MATIC.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24"
                                                            srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/d4768b65-21b9-4089-a56f-85362e5a15eb_MATIC.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24 24w"
                                                            alt=""
                                                        ></img>
                                                        <noscript>
                                                            <img
                                                                width="24"
                                                                height="24"
                                                                data-main-image=""
                                                                style={{
                                                                    objectFit:
                                                                        "cover",
                                                                    opacity:
                                                                        "0",
                                                                }}
                                                                sizes="(min-width: 24px) 24px, 100vw"
                                                                decoding="async"
                                                                loading="lazy"
                                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/d4768b65-21b9-4089-a56f-85362e5a15eb_MATIC.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24"
                                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/d4768b65-21b9-4089-a56f-85362e5a15eb_MATIC.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24 24w"
                                                                alt=""
                                                            />
                                                        </noscript>
                                                    </div>
                                                    <span className="sc-1el4ke7-2 bESDsh">
                                                        Polygon
                                                    </span>
                                                    <span className="sc-1el4ke7-3 czvMFY">
                                                        MATIC
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="sc-1dqg576-3 iQLVg">
                                                <span className="sc-1el4ke7-4 bquRkb">
                                                    10%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="sc-1dqg576-2 dfjekw">
                                            <div className="sc-1dqg576-3 iQLVg">
                                                <div className="sc-1el4ke7-1 iwWQwX">
                                                    <div
                                                        data-gatsby-image-wrapper=""
                                                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1el4ke7-0 dQrhKA"
                                                    >
                                                        <div
                                                            style={{
                                                                maxWidth:
                                                                    "24px",
                                                                display:
                                                                    "block",
                                                            }}
                                                        >
                                                            <img
                                                                alt=""
                                                                role="presentation"
                                                                aria-hidden="true"
                                                                src="data:image/svg+xml;charset=utf-8,%3Csvg height='25' width='24' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                                style={{
                                                                    maxWidth:
                                                                        "100%",
                                                                    display:
                                                                        "block",
                                                                    position:
                                                                        "static",
                                                                }}
                                                            ></img>
                                                        </div>
                                                        <div
                                                            aria-hidden="true"
                                                            data-placeholder-image=""
                                                            style={{
                                                                opacity: "0",
                                                                transition:
                                                                    "opacity 500ms linear 0s",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                        ></div>
                                                        <img
                                                            width="24"
                                                            height="25"
                                                            data-main-image=""
                                                            style={{
                                                                opacity: "1",
                                                                transition:
                                                                    "opacity 500ms linear 0s",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                            sizes="(min-width: 24px) 24px, 100vw"
                                                            decoding="async"
                                                            loading="lazy"
                                                            src="https://swissborg-website.cdn.prismic.io/swissborg-website/3559b432-6f7f-4cb4-b616-75eabdd20ba0_asset-crypto-polkaDOT.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=25"
                                                            srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/3559b432-6f7f-4cb4-b616-75eabdd20ba0_asset-crypto-polkaDOT.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=25 24w"
                                                            alt="DOT"
                                                        ></img>
                                                        <noscript>
                                                            <img
                                                                width="24"
                                                                height="25"
                                                                data-main-image=""
                                                                style={{
                                                                    objectFit:
                                                                        "cover",
                                                                    opacity:
                                                                        "0",
                                                                }}
                                                                sizes="(min-width: 24px) 24px, 100vw"
                                                                decoding="async"
                                                                loading="lazy"
                                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/3559b432-6f7f-4cb4-b616-75eabdd20ba0_asset-crypto-polkaDOT.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=25"
                                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/3559b432-6f7f-4cb4-b616-75eabdd20ba0_asset-crypto-polkaDOT.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=25 24w"
                                                                alt="DOT"
                                                            />
                                                        </noscript>
                                                    </div>
                                                    <span className="sc-1el4ke7-2 bESDsh">
                                                        Polkadot
                                                    </span>
                                                    <span className="sc-1el4ke7-3 czvMFY">
                                                        DOT
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="sc-1dqg576-3 iQLVg">
                                                <span className="sc-1el4ke7-4 bquRkb">
                                                    10%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="sc-1dqg576-2 dfjekw">
                                            <div className="sc-1dqg576-3 iQLVg">
                                                <div className="sc-1el4ke7-1 iwWQwX">
                                                    <div
                                                        data-gatsby-image-wrapper=""
                                                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1el4ke7-0 dQrhKA"
                                                    >
                                                        <div
                                                            style={{
                                                                maxWidth:
                                                                    "24px",
                                                                display:
                                                                    "block",
                                                            }}
                                                        >
                                                            <img
                                                                alt=""
                                                                role="presentation"
                                                                aria-hidden="true"
                                                                src="data:image/svg+xml;charset=utf-8,%3Csvg height='24' width='24' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                                style={{
                                                                    maxWidth:
                                                                        "100%",
                                                                    display:
                                                                        "block",
                                                                    position:
                                                                        "static",
                                                                }}
                                                            ></img>
                                                        </div>
                                                        <div
                                                            aria-hidden="true"
                                                            data-placeholder-image=""
                                                            style={{
                                                                opacity: "0",
                                                                transition:
                                                                    "opacity 500ms linear 0s",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                        ></div>
                                                        <img
                                                            width="24"
                                                            height="24"
                                                            data-main-image=""
                                                            style={{
                                                                opacity: "1",
                                                                transition:
                                                                    "opacity 500ms linear 0s",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                            sizes="(min-width: 24px) 24px, 100vw"
                                                            decoding="async"
                                                            loading="lazy"
                                                            src="https://swissborg-website.cdn.prismic.io/swissborg-website/43b6bbbc-09cd-47cd-bdd6-aace7802df55_CHSB_token.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24"
                                                            srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/43b6bbbc-09cd-47cd-bdd6-aace7802df55_CHSB_token.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24 24w"
                                                            alt="CHSB"
                                                        ></img>
                                                        <noscript>
                                                            <img
                                                                width="24"
                                                                height="24"
                                                                data-main-image=""
                                                                style={{
                                                                    objectFit:
                                                                        "cover",
                                                                    opacity:
                                                                        "0",
                                                                }}
                                                                sizes="(min-width: 24px) 24px, 100vw"
                                                                decoding="async"
                                                                loading="lazy"
                                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/43b6bbbc-09cd-47cd-bdd6-aace7802df55_CHSB_token.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24"
                                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/43b6bbbc-09cd-47cd-bdd6-aace7802df55_CHSB_token.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24 24w"
                                                                alt="CHSB"
                                                            />
                                                        </noscript>
                                                    </div>
                                                    <span className="sc-1el4ke7-2 bESDsh">
                                                        FundrisePro
                                                    </span>
                                                    <span className="sc-1el4ke7-3 czvMFY">
                                                        CHSB
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="sc-1dqg576-3 iQLVg">
                                                <span className="sc-1el4ke7-4 bquRkb">
                                                    10%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="sc-1dqg576-2 dfjekw">
                                            <div className="sc-1dqg576-3 iQLVg">
                                                <div className="sc-1el4ke7-1 iwWQwX">
                                                    <div
                                                        data-gatsby-image-wrapper=""
                                                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1el4ke7-0 dQrhKA"
                                                    >
                                                        <div
                                                            style={{
                                                                maxWidth:
                                                                    "24px",
                                                                display:
                                                                    "block",
                                                            }}
                                                        >
                                                            <img
                                                                alt=""
                                                                role="presentation"
                                                                aria-hidden="true"
                                                                src="data:image/svg+xml;charset=utf-8,%3Csvg height='24' width='24' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                                style={{
                                                                    maxWidth:
                                                                        "100%",
                                                                    display:
                                                                        "block",
                                                                    position:
                                                                        "static",
                                                                }}
                                                            ></img>
                                                        </div>
                                                        <div
                                                            aria-hidden="true"
                                                            data-placeholder-image=""
                                                            style={{
                                                                opacity: "0",
                                                                transition:
                                                                    "opacity 500ms linear 0s",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                        ></div>
                                                        <img
                                                            width="24"
                                                            height="24"
                                                            data-main-image=""
                                                            style={{
                                                                opacity: "1",
                                                                transition:
                                                                    "opacity 500ms linear 0s",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                            sizes="(min-width: 24px) 24px, 100vw"
                                                            decoding="async"
                                                            loading="lazy"
                                                            src="https://swissborg-website.cdn.prismic.io/swissborg-website/deb672e3-1abc-4e92-b515-5caaac1a4e2a_asset-crypto-ATOM.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24"
                                                            srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/deb672e3-1abc-4e92-b515-5caaac1a4e2a_asset-crypto-ATOM.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24 24w"
                                                            alt="ATOM"
                                                        ></img>
                                                        <noscript>
                                                            <img
                                                                width="24"
                                                                height="24"
                                                                data-main-image=""
                                                                style={{
                                                                    objectFit:
                                                                        "cover",
                                                                    opacity:
                                                                        "0",
                                                                }}
                                                                sizes="(min-width: 24px) 24px, 100vw"
                                                                decoding="async"
                                                                loading="lazy"
                                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/deb672e3-1abc-4e92-b515-5caaac1a4e2a_asset-crypto-ATOM.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24"
                                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/deb672e3-1abc-4e92-b515-5caaac1a4e2a_asset-crypto-ATOM.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24 24w"
                                                                alt="ATOM"
                                                            />
                                                        </noscript>
                                                    </div>
                                                    <span className="sc-1el4ke7-2 bESDsh">
                                                        Cosmos
                                                    </span>
                                                    <span className="sc-1el4ke7-3 czvMFY">
                                                        ATOM
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="sc-1dqg576-3 iQLVg">
                                                <span className="sc-1el4ke7-4 bquRkb">
                                                    10%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="sc-1dqg576-2 dfjekw">
                                            <div className="sc-1dqg576-3 iQLVg">
                                                <div className="sc-1el4ke7-1 iwWQwX">
                                                    <div
                                                        data-gatsby-image-wrapper=""
                                                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1el4ke7-0 dQrhKA"
                                                    >
                                                        <div
                                                            style={{
                                                                maxWidth:
                                                                    "100px",
                                                                display:
                                                                    "block",
                                                            }}
                                                        >
                                                            <img
                                                                alt=""
                                                                role="presentation"
                                                                aria-hidden="true"
                                                                src="data:image/svg+xml;charset=utf-8,%3Csvg height='100' width='100' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                                style={{
                                                                    maxWidth:
                                                                        "100%",
                                                                    display:
                                                                        "block",
                                                                    position:
                                                                        "static",
                                                                }}
                                                            ></img>
                                                        </div>
                                                        <div
                                                            aria-hidden="true"
                                                            data-placeholder-image=""
                                                            style={{
                                                                opacity: "0",
                                                                transition:
                                                                    "opacity 500ms linear 0s",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                        ></div>
                                                        <img
                                                            width="100"
                                                            height="100"
                                                            data-main-image=""
                                                            style={{
                                                                opacity: "1",
                                                                transition:
                                                                    "opacity 500ms linear 0s",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                            sizes="(min-width: 100px) 100px, 100vw"
                                                            decoding="async"
                                                            loading="lazy"
                                                            src="https://swissborg-website.cdn.prismic.io/swissborg-website/5e0c296a-f10a-4a5f-8980-c2ad75d4538f_asset-crypto-AVAX.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=100"
                                                            srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/5e0c296a-f10a-4a5f-8980-c2ad75d4538f_asset-crypto-AVAX.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=100 100w"
                                                            alt="AVAX"
                                                        ></img>
                                                        <noscript>
                                                            <img
                                                                width="100"
                                                                height="100"
                                                                data-main-image=""
                                                                style={{
                                                                    objectFit:
                                                                        "cover",
                                                                    opacity:
                                                                        "0",
                                                                }}
                                                                sizes="(min-width: 100px) 100px, 100vw"
                                                                decoding="async"
                                                                loading="lazy"
                                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/5e0c296a-f10a-4a5f-8980-c2ad75d4538f_asset-crypto-AVAX.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=100"
                                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/5e0c296a-f10a-4a5f-8980-c2ad75d4538f_asset-crypto-AVAX.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=100 100w"
                                                                alt="AVAX"
                                                            />
                                                        </noscript>
                                                    </div>
                                                    <span className="sc-1el4ke7-2 bESDsh">
                                                        Avalanche
                                                    </span>
                                                    <span className="sc-1el4ke7-3 czvMFY">
                                                        AVAX
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="sc-1dqg576-3 iQLVg">
                                                <span className="sc-1el4ke7-4 bquRkb">
                                                    5%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="sc-1dqg576-2 dfjekw">
                                            <div className="sc-1dqg576-3 iQLVg">
                                                <div className="sc-1el4ke7-1 iwWQwX">
                                                    <div
                                                        data-gatsby-image-wrapper=""
                                                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1el4ke7-0 dQrhKA"
                                                    >
                                                        <div
                                                            style={{
                                                                maxWidth:
                                                                    "100px",
                                                                display:
                                                                    "block",
                                                            }}
                                                        >
                                                            <img
                                                                alt=""
                                                                role="presentation"
                                                                aria-hidden="true"
                                                                src="data:image/svg+xml;charset=utf-8,%3Csvg height='100' width='100' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                                style={{
                                                                    maxWidth:
                                                                        "100%",
                                                                    display:
                                                                        "block",
                                                                    position:
                                                                        "static",
                                                                }}
                                                            ></img>
                                                        </div>
                                                        <div
                                                            aria-hidden="true"
                                                            data-placeholder-image=""
                                                            style={{
                                                                opacity: "0",
                                                                transition:
                                                                    "opacity 500ms linear 0s",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                        ></div>
                                                        <img
                                                            width="100"
                                                            height="100"
                                                            data-main-image=""
                                                            style={{
                                                                opacity: "1",
                                                                transition:
                                                                    "opacity 500ms linear 0s",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                            sizes="(min-width: 100px) 100px, 100vw"
                                                            decoding="async"
                                                            loading="lazy"
                                                            src="https://swissborg-website.cdn.prismic.io/swissborg-website/5fc9d110-492e-4c2b-8ef1-ee79f6f48962_asset-crypto-SOL.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=100"
                                                            srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/5fc9d110-492e-4c2b-8ef1-ee79f6f48962_asset-crypto-SOL.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=100 100w"
                                                            alt="SOL"
                                                        ></img>
                                                        <noscript>
                                                            <img
                                                                width="100"
                                                                height="100"
                                                                data-main-image=""
                                                                style={{
                                                                    objectFit:
                                                                        "cover",
                                                                    opacity:
                                                                        "0",
                                                                }}
                                                                sizes="(min-width: 100px) 100px, 100vw"
                                                                decoding="async"
                                                                loading="lazy"
                                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/5fc9d110-492e-4c2b-8ef1-ee79f6f48962_asset-crypto-SOL.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=100"
                                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/5fc9d110-492e-4c2b-8ef1-ee79f6f48962_asset-crypto-SOL.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=100 100w"
                                                                alt="SOL"
                                                            />
                                                        </noscript>
                                                    </div>
                                                    <span className="sc-1el4ke7-2 bESDsh">
                                                        Solana
                                                    </span>
                                                    <span className="sc-1el4ke7-3 czvMFY">
                                                        SOL
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="sc-1dqg576-3 iQLVg">
                                                <span className="sc-1el4ke7-4 bquRkb">
                                                    5%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="sc-1dqg576-2 dfjekw">
                                            <div className="sc-1dqg576-3 iQLVg">
                                                <div className="sc-1el4ke7-1 iwWQwX">
                                                    <div
                                                        data-gatsby-image-wrapper=""
                                                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1el4ke7-0 dQrhKA"
                                                    >
                                                        <div
                                                            style={{
                                                                maxWidth:
                                                                    "24px",
                                                                display:
                                                                    "block",
                                                            }}
                                                        >
                                                            <img
                                                                alt=""
                                                                role="presentation"
                                                                aria-hidden="true"
                                                                src="data:image/svg+xml;charset=utf-8,%3Csvg height='24' width='24' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                                style={{
                                                                    maxWidth:
                                                                        "100%",
                                                                    display:
                                                                        "block",
                                                                    position:
                                                                        "static",
                                                                }}
                                                            ></img>
                                                        </div>
                                                        <div
                                                            aria-hidden="true"
                                                            data-placeholder-image=""
                                                            style={{
                                                                opacity: "0",
                                                                transition:
                                                                    "opacity 500ms linear 0s",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                        ></div>
                                                        <img
                                                            width="24"
                                                            height="24"
                                                            data-main-image=""
                                                            style={{
                                                                opacity: "1",
                                                                transition:
                                                                    "opacity 500ms linear 0s",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                            sizes="(min-width: 24px) 24px, 100vw"
                                                            decoding="async"
                                                            loading="lazy"
                                                            src="https://swissborg-website.cdn.prismic.io/swissborg-website/87507fc9-7f9d-49e6-b4f8-239337a0a378_asset-crypto-NEAR.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24"
                                                            srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/87507fc9-7f9d-49e6-b4f8-239337a0a378_asset-crypto-NEAR.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24 24w"
                                                            alt="NEAR"
                                                        ></img>
                                                        <noscript>
                                                            <img
                                                                width="24"
                                                                height="24"
                                                                data-main-image=""
                                                                style={{
                                                                    objectFit:
                                                                        "cover",
                                                                    opacity:
                                                                        "0",
                                                                }}
                                                                sizes="(min-width: 24px) 24px, 100vw"
                                                                decoding="async"
                                                                loading="lazy"
                                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/87507fc9-7f9d-49e6-b4f8-239337a0a378_asset-crypto-NEAR.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24"
                                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/87507fc9-7f9d-49e6-b4f8-239337a0a378_asset-crypto-NEAR.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24 24w"
                                                                alt="NEAR"
                                                            />
                                                        </noscript>
                                                    </div>
                                                    <span className="sc-1el4ke7-2 bESDsh">
                                                        Near Protocol
                                                    </span>
                                                    <span className="sc-1el4ke7-3 czvMFY">
                                                        NEAR
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="sc-1dqg576-3 iQLVg">
                                                <span className="sc-1el4ke7-4 bquRkb">
                                                    5%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="sc-1dqg576-2 dfjekw">
                                            <div className="sc-1dqg576-3 iQLVg">
                                                <div className="sc-1el4ke7-1 iwWQwX">
                                                    <div
                                                        data-gatsby-image-wrapper=""
                                                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1el4ke7-0 dQrhKA"
                                                    >
                                                        <div
                                                            style={{
                                                                maxWidth:
                                                                    "24px",
                                                                display:
                                                                    "block",
                                                            }}
                                                        >
                                                            <img
                                                                alt=""
                                                                role="presentation"
                                                                aria-hidden="true"
                                                                src="data:image/svg+xml;charset=utf-8,%3Csvg height='24' width='24' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                                style={{
                                                                    maxWidth:
                                                                        "100%",
                                                                    display:
                                                                        "block",
                                                                    position:
                                                                        "static",
                                                                }}
                                                            ></img>
                                                        </div>
                                                        <div
                                                            aria-hidden="true"
                                                            data-placeholder-image=""
                                                            style={{
                                                                opacity: "0",
                                                                transition:
                                                                    "opacity 500ms linear 0s",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                        ></div>
                                                        <img
                                                            width="24"
                                                            height="24"
                                                            data-main-image=""
                                                            style={{
                                                                opacity: "1",
                                                                transition:
                                                                    "opacity 500ms linear 0s",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                            sizes="(min-width: 24px) 24px, 100vw"
                                                            decoding="async"
                                                            loading="lazy"
                                                            src="https://swissborg-website.cdn.prismic.io/swissborg-website/d1187559-6f13-4dc5-b043-38d6f452a06a_ada.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24"
                                                            srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/d1187559-6f13-4dc5-b043-38d6f452a06a_ada.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24 24w"
                                                            alt="ADA"
                                                        ></img>
                                                        <noscript>
                                                            <img
                                                                width="24"
                                                                height="24"
                                                                data-main-image=""
                                                                style={{
                                                                    objectFit:
                                                                        "cover",
                                                                    opacity:
                                                                        "0",
                                                                }}
                                                                sizes="(min-width: 24px) 24px, 100vw"
                                                                decoding="async"
                                                                loading="lazy"
                                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/d1187559-6f13-4dc5-b043-38d6f452a06a_ada.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24"
                                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/d1187559-6f13-4dc5-b043-38d6f452a06a_ada.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24 24w"
                                                                alt="ADA"
                                                            />
                                                        </noscript>
                                                    </div>
                                                    <span className="sc-1el4ke7-2 bESDsh">
                                                        Cardano
                                                    </span>
                                                    <span className="sc-1el4ke7-3 czvMFY">
                                                        ADA
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="sc-1dqg576-3 iQLVg">
                                                <span className="sc-1el4ke7-4 bquRkb">
                                                    5%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="sc-1dqg576-2 dfjekw">
                                            <div className="sc-1dqg576-3 iQLVg">
                                                <div className="sc-1el4ke7-1 iwWQwX">
                                                    <div
                                                        data-gatsby-image-wrapper=""
                                                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1el4ke7-0 dQrhKA"
                                                    >
                                                        <div
                                                            style={{
                                                                maxWidth:
                                                                    "25px",
                                                                display:
                                                                    "block",
                                                            }}
                                                        >
                                                            <img
                                                                alt=""
                                                                role="presentation"
                                                                aria-hidden="true"
                                                                src="data:image/svg+xml;charset=utf-8,%3Csvg height='25' width='25' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                                style={{
                                                                    maxWidth:
                                                                        "100%",
                                                                    display:
                                                                        "block",
                                                                    position:
                                                                        "static",
                                                                }}
                                                            ></img>
                                                        </div>
                                                        <div
                                                            aria-hidden="true"
                                                            data-placeholder-image=""
                                                            style={{
                                                                opacity: "0",
                                                                transition:
                                                                    "opacity 500ms linear 0s",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                        ></div>
                                                        <img
                                                            width="25"
                                                            height="25"
                                                            data-main-image=""
                                                            style={{
                                                                opacity: "1",
                                                                transition:
                                                                    "opacity 500ms linear 0s",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                            sizes="(min-width: 25px) 25px, 100vw"
                                                            decoding="async"
                                                            loading="lazy"
                                                            src="https://swissborg-website.cdn.prismic.io/swissborg-website/84ea513a-75d4-4c2f-a13f-8982ad5dea2e_CELO.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25"
                                                            srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/84ea513a-75d4-4c2f-a13f-8982ad5dea2e_CELO.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25 25w"
                                                            alt="Celo"
                                                        ></img>
                                                        <noscript>
                                                            <img
                                                                width="25"
                                                                height="25"
                                                                data-main-image=""
                                                                style={{
                                                                    objectFit:
                                                                        "cover",
                                                                    opacity:
                                                                        "0",
                                                                }}
                                                                sizes="(min-width: 25px) 25px, 100vw"
                                                                decoding="async"
                                                                loading="lazy"
                                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/84ea513a-75d4-4c2f-a13f-8982ad5dea2e_CELO.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25"
                                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/84ea513a-75d4-4c2f-a13f-8982ad5dea2e_CELO.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25 25w"
                                                                alt="Celo"
                                                            />
                                                        </noscript>
                                                    </div>
                                                    <span className="sc-1el4ke7-2 bESDsh">
                                                        Celo
                                                    </span>
                                                    <span className="sc-1el4ke7-3 czvMFY">
                                                        CELO
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="sc-1dqg576-3 iQLVg">
                                                <span className="sc-1el4ke7-4 bquRkb">
                                                    5%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="sc-1dqg576-2 dfjekw">
                                            <div className="sc-1dqg576-3 iQLVg">
                                                <div className="sc-1el4ke7-1 iwWQwX">
                                                    <div
                                                        data-gatsby-image-wrapper=""
                                                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1el4ke7-0 dQrhKA"
                                                    >
                                                        <div
                                                            style={{
                                                                maxWidth:
                                                                    "25px",
                                                                display:
                                                                    "block",
                                                            }}
                                                        >
                                                            <img
                                                                alt=""
                                                                role="presentation"
                                                                aria-hidden="true"
                                                                src="data:image/svg+xml;charset=utf-8,%3Csvg height='25' width='25' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                                style={{
                                                                    maxWidth:
                                                                        "100%",
                                                                    display:
                                                                        "block",
                                                                    position:
                                                                        "static",
                                                                }}
                                                            ></img>
                                                        </div>
                                                        <div
                                                            aria-hidden="true"
                                                            data-placeholder-image=""
                                                            style={{
                                                                opacity: "0",
                                                                transition:
                                                                    "opacity 500ms linear 0s",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                        ></div>
                                                        <img
                                                            width="25"
                                                            height="25"
                                                            data-main-image=""
                                                            style={{
                                                                opacity: "1",
                                                                transition:
                                                                    "opacity 500ms linear 0s",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                            sizes="(min-width: 25px) 25px, 100vw"
                                                            decoding="async"
                                                            loading="lazy"
                                                            src="https://swissborg-website.cdn.prismic.io/swissborg-website/e28b513b-5948-4367-bb2e-5d7ea4f87562_SECRET.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25"
                                                            srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/e28b513b-5948-4367-bb2e-5d7ea4f87562_SECRET.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25 25w"
                                                            alt="Secret"
                                                        ></img>
                                                        <noscript>
                                                            <img
                                                                width="25"
                                                                height="25"
                                                                data-main-image=""
                                                                style={{
                                                                    objectFit:
                                                                        "cover",
                                                                    opacity:
                                                                        "0",
                                                                }}
                                                                sizes="(min-width: 25px) 25px, 100vw"
                                                                decoding="async"
                                                                loading="lazy"
                                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/e28b513b-5948-4367-bb2e-5d7ea4f87562_SECRET.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25"
                                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/e28b513b-5948-4367-bb2e-5d7ea4f87562_SECRET.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25 25w"
                                                                alt="Secret"
                                                            />
                                                        </noscript>
                                                    </div>
                                                    <span className="sc-1el4ke7-2 bESDsh">
                                                        Secret
                                                    </span>
                                                    <span className="sc-1el4ke7-3 czvMFY">
                                                        SCRT
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="sc-1dqg576-3 iQLVg">
                                                <span className="sc-1el4ke7-4 bquRkb">
                                                    10%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="sc-1dqg576-2 dfjekw">
                                            <div className="sc-1dqg576-3 iQLVg">
                                                <div className="sc-1el4ke7-1 iwWQwX">
                                                    <div
                                                        data-gatsby-image-wrapper=""
                                                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1el4ke7-0 dQrhKA"
                                                    >
                                                        <div
                                                            style={{
                                                                maxWidth:
                                                                    "25px",
                                                                display:
                                                                    "block",
                                                            }}
                                                        >
                                                            <img
                                                                alt=""
                                                                role="presentation"
                                                                aria-hidden="true"
                                                                src="data:image/svg+xml;charset=utf-8,%3Csvg height='25' width='25' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                                style={{
                                                                    maxWidth:
                                                                        "100%",
                                                                    display:
                                                                        "block",
                                                                    position:
                                                                        "static",
                                                                }}
                                                            ></img>
                                                        </div>
                                                        <div
                                                            aria-hidden="true"
                                                            data-placeholder-image=""
                                                            style={{
                                                                opacity: "0",
                                                                transition:
                                                                    "opacity 500ms linear 0s",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                        ></div>
                                                        <img
                                                            width="25"
                                                            height="25"
                                                            data-main-image=""
                                                            style={{
                                                                opacity: "1",
                                                                transition:
                                                                    "opacity 500ms linear 0s",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                            sizes="(min-width: 25px) 25px, 100vw"
                                                            decoding="async"
                                                            loading="lazy"
                                                            src="https://swissborg-website.cdn.prismic.io/swissborg-website/6ad15396-78cf-4005-af70-37ac712dd4e7_MINA.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25"
                                                            srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/6ad15396-78cf-4005-af70-37ac712dd4e7_MINA.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25 25w"
                                                            alt="Mina"
                                                        ></img>
                                                        <noscript>
                                                            <img
                                                                width="25"
                                                                height="25"
                                                                data-main-image=""
                                                                style={{
                                                                    objectFit:
                                                                        "cover",
                                                                    opacity:
                                                                        "0",
                                                                }}
                                                                sizes="(min-width: 25px) 25px, 100vw"
                                                                decoding="async"
                                                                loading="lazy"
                                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/6ad15396-78cf-4005-af70-37ac712dd4e7_MINA.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25"
                                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/6ad15396-78cf-4005-af70-37ac712dd4e7_MINA.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25 25w"
                                                                alt="Mina"
                                                            />
                                                        </noscript>
                                                    </div>
                                                    <span className="sc-1el4ke7-2 bESDsh">
                                                        Mina
                                                    </span>
                                                    <span className="sc-1el4ke7-3 czvMFY">
                                                        MINA
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="sc-1dqg576-3 iQLVg">
                                                <span className="sc-1el4ke7-4 bquRkb">
                                                    7.5%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="sc-1dqg576-2 dfjekw">
                                            <div className="sc-1dqg576-3 iQLVg">
                                                <div className="sc-1el4ke7-1 iwWQwX">
                                                    <div
                                                        data-gatsby-image-wrapper=""
                                                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1el4ke7-0 dQrhKA"
                                                    >
                                                        <div
                                                            style={{
                                                                maxWidth:
                                                                    "25px",
                                                                display:
                                                                    "block",
                                                            }}
                                                        >
                                                            <img
                                                                alt=""
                                                                role="presentation"
                                                                aria-hidden="true"
                                                                src="data:image/svg+xml;charset=utf-8,%3Csvg height='25' width='25' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                                style={{
                                                                    maxWidth:
                                                                        "100%",
                                                                    display:
                                                                        "block",
                                                                    position:
                                                                        "static",
                                                                }}
                                                            ></img>
                                                        </div>
                                                        <div
                                                            aria-hidden="true"
                                                            data-placeholder-image=""
                                                            style={{
                                                                opacity: "0",
                                                                transition:
                                                                    "opacity 500ms linear 0s",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                        ></div>
                                                        <img
                                                            width="25"
                                                            height="25"
                                                            data-main-image=""
                                                            style={{
                                                                opacity: "1",
                                                                transition:
                                                                    "opacity 500ms linear 0s",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                            sizes="(min-width: 25px) 25px, 100vw"
                                                            decoding="async"
                                                            loading="lazy"
                                                            src="https://swissborg-website.cdn.prismic.io/swissborg-website/ed8b50f4-a650-43e1-a785-47d527464ac3_KUSAMA.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25"
                                                            srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/ed8b50f4-a650-43e1-a785-47d527464ac3_KUSAMA.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25 25w"
                                                            alt="Kusama"
                                                        ></img>
                                                        <noscript>
                                                            <img
                                                                width="25"
                                                                height="25"
                                                                data-main-image=""
                                                                style={{
                                                                    objectFit:
                                                                        "cover",
                                                                    opacity:
                                                                        "0",
                                                                }}
                                                                sizes="(min-width: 25px) 25px, 100vw"
                                                                decoding="async"
                                                                loading="lazy"
                                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/ed8b50f4-a650-43e1-a785-47d527464ac3_KUSAMA.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25"
                                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/ed8b50f4-a650-43e1-a785-47d527464ac3_KUSAMA.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25 25w"
                                                                alt="Kusama"
                                                            />
                                                        </noscript>
                                                    </div>
                                                    <span className="sc-1el4ke7-2 bESDsh">
                                                        Kusama
                                                    </span>
                                                    <span className="sc-1el4ke7-3 czvMFY">
                                                        KSM
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="sc-1dqg576-3 iQLVg">
                                                <span className="sc-1el4ke7-4 bquRkb">
                                                    7.5%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sc-3gax6a-2 hkcGSC">
                                        <div className="sc-1dqg576-4 hnhTDG sc-3gax6a-3 bfxVwh">
                                            <div className="sc-1dqg576-2 dfjekw">
                                                <div className="sc-1dqg576-3 iQLVg">
                                                    <div className="sc-1el4ke7-1 iwWQwX">
                                                        <div
                                                            data-gatsby-image-wrapper=""
                                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1el4ke7-0 dQrhKA"
                                                        >
                                                            <div
                                                                style={{
                                                                    maxWidth:
                                                                        "24px",
                                                                    display:
                                                                        "block",
                                                                }}
                                                            >
                                                                <img
                                                                    alt=""
                                                                    role="presentation"
                                                                    aria-hidden="true"
                                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height='24' width='24' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                                    style={{
                                                                        maxWidth:
                                                                            "100%",
                                                                        display:
                                                                            "block",
                                                                        position:
                                                                            "static",
                                                                    }}
                                                                ></img>
                                                            </div>
                                                            <div
                                                                aria-hidden="true"
                                                                data-placeholder-image=""
                                                                style={{
                                                                    opacity:
                                                                        "0",
                                                                    transition:
                                                                        "opacity 500ms linear 0s",
                                                                    objectFit:
                                                                        "cover",
                                                                }}
                                                            ></div>
                                                            <img
                                                                width="24"
                                                                height="24"
                                                                data-main-image=""
                                                                style={{
                                                                    objectFit:
                                                                        "cover",
                                                                    opacity:
                                                                        "1",
                                                                }}
                                                                sizes="(min-width: 24px) 24px, 100vw"
                                                                decoding="async"
                                                                loading="lazy"
                                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/5b1ced59-7c8b-4df0-9650-50a77e5d0b16_eth.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24"
                                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/5b1ced59-7c8b-4df0-9650-50a77e5d0b16_eth.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24 24w"
                                                                alt="Ethereum"
                                                            ></img>
                                                            <noscript>
                                                                <img
                                                                    width="24"
                                                                    height="24"
                                                                    data-main-image=""
                                                                    style={{
                                                                        objectFit:
                                                                            "cover",
                                                                        opacity:
                                                                            "0",
                                                                    }}
                                                                    sizes="(min-width: 24px) 24px, 100vw"
                                                                    decoding="async"
                                                                    loading="lazy"
                                                                    src="https://swissborg-website.cdn.prismic.io/swissborg-website/5b1ced59-7c8b-4df0-9650-50a77e5d0b16_eth.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24"
                                                                    srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/5b1ced59-7c8b-4df0-9650-50a77e5d0b16_eth.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24 24w"
                                                                    alt="Ethereum"
                                                                />
                                                            </noscript>
                                                        </div>
                                                        <span className="sc-1el4ke7-2 bESDsh">
                                                            Ethereum
                                                        </span>
                                                        <span className="sc-1el4ke7-3 czvMFY">
                                                            ETH
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="sc-1dqg576-3 iQLVg">
                                                    <span className="sc-1el4ke7-4 bquRkb">
                                                        10%
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="sc-1dqg576-2 dfjekw">
                                                <div className="sc-1dqg576-3 iQLVg">
                                                    <div className="sc-1el4ke7-1 iwWQwX">
                                                        <div
                                                            data-gatsby-image-wrapper=""
                                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1el4ke7-0 dQrhKA"
                                                        >
                                                            <div
                                                                style={{
                                                                    maxWidth:
                                                                        "24px",
                                                                    display:
                                                                        "block",
                                                                }}
                                                            >
                                                                <img
                                                                    alt=""
                                                                    role="presentation"
                                                                    aria-hidden="true"
                                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height='24' width='24' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                                    style={{
                                                                        maxWidth:
                                                                            "100%",
                                                                        display:
                                                                            "block",
                                                                        position:
                                                                            "static",
                                                                    }}
                                                                ></img>
                                                            </div>
                                                            <div
                                                                aria-hidden="true"
                                                                data-placeholder-image=""
                                                                style={{
                                                                    opacity:
                                                                        "0",
                                                                    transition:
                                                                        "opacity 500ms linear 0s",
                                                                    objectFit:
                                                                        "cover",
                                                                }}
                                                            ></div>
                                                            <img
                                                                width="24"
                                                                height="24"
                                                                data-main-image=""
                                                                style={{
                                                                    objectFit:
                                                                        "cover",
                                                                    opacity:
                                                                        "1",
                                                                }}
                                                                sizes="(min-width: 24px) 24px, 100vw"
                                                                decoding="async"
                                                                loading="lazy"
                                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/d4768b65-21b9-4089-a56f-85362e5a15eb_MATIC.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24"
                                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/d4768b65-21b9-4089-a56f-85362e5a15eb_MATIC.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24 24w"
                                                                alt=""
                                                            ></img>
                                                            <noscript>
                                                                <img
                                                                    width="24"
                                                                    height="24"
                                                                    data-main-image=""
                                                                    style={{
                                                                        objectFit:
                                                                            "cover",
                                                                        opacity:
                                                                            "0",
                                                                    }}
                                                                    sizes="(min-width: 24px) 24px, 100vw"
                                                                    decoding="async"
                                                                    loading="lazy"
                                                                    src="https://swissborg-website.cdn.prismic.io/swissborg-website/d4768b65-21b9-4089-a56f-85362e5a15eb_MATIC.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24"
                                                                    srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/d4768b65-21b9-4089-a56f-85362e5a15eb_MATIC.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24 24w"
                                                                    alt=""
                                                                />
                                                            </noscript>
                                                        </div>
                                                        <span className="sc-1el4ke7-2 bESDsh">
                                                            Polygon
                                                        </span>
                                                        <span className="sc-1el4ke7-3 czvMFY">
                                                            MATIC
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="sc-1dqg576-3 iQLVg">
                                                    <span className="sc-1el4ke7-4 bquRkb">
                                                        10%
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="sc-1dqg576-2 dfjekw">
                                                <div className="sc-1dqg576-3 iQLVg">
                                                    <div className="sc-1el4ke7-1 iwWQwX">
                                                        <div
                                                            data-gatsby-image-wrapper=""
                                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1el4ke7-0 dQrhKA"
                                                        >
                                                            <div
                                                                style={{
                                                                    maxWidth:
                                                                        "24px",
                                                                    display:
                                                                        "block",
                                                                }}
                                                            >
                                                                <img
                                                                    alt=""
                                                                    role="presentation"
                                                                    aria-hidden="true"
                                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height='25' width='24' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                                    style={{
                                                                        maxWidth:
                                                                            "100%",
                                                                        display:
                                                                            "block",
                                                                        position:
                                                                            "static",
                                                                    }}
                                                                ></img>
                                                            </div>
                                                            <div
                                                                aria-hidden="true"
                                                                data-placeholder-image=""
                                                                style={{
                                                                    opacity:
                                                                        "0",
                                                                    transition:
                                                                        "opacity 500ms linear 0s",
                                                                    objectFit:
                                                                        "cover",
                                                                }}
                                                            ></div>
                                                            <img
                                                                width="24"
                                                                height="25"
                                                                data-main-image=""
                                                                style={{
                                                                    objectFit:
                                                                        "cover",
                                                                    opacity:
                                                                        "1",
                                                                }}
                                                                sizes="(min-width: 24px) 24px, 100vw"
                                                                decoding="async"
                                                                loading="lazy"
                                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/3559b432-6f7f-4cb4-b616-75eabdd20ba0_asset-crypto-polkaDOT.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=25"
                                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/3559b432-6f7f-4cb4-b616-75eabdd20ba0_asset-crypto-polkaDOT.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=25 24w"
                                                                alt="DOT"
                                                            ></img>
                                                            <noscript>
                                                                <img
                                                                    width="24"
                                                                    height="25"
                                                                    data-main-image=""
                                                                    style={{
                                                                        objectFit:
                                                                            "cover",
                                                                        opacity:
                                                                            "0",
                                                                    }}
                                                                    sizes="(min-width: 24px) 24px, 100vw"
                                                                    decoding="async"
                                                                    loading="lazy"
                                                                    src="https://swissborg-website.cdn.prismic.io/swissborg-website/3559b432-6f7f-4cb4-b616-75eabdd20ba0_asset-crypto-polkaDOT.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=25"
                                                                    srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/3559b432-6f7f-4cb4-b616-75eabdd20ba0_asset-crypto-polkaDOT.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=25 24w"
                                                                    alt="DOT"
                                                                />
                                                            </noscript>
                                                        </div>
                                                        <span className="sc-1el4ke7-2 bESDsh">
                                                            Polkadot
                                                        </span>
                                                        <span className="sc-1el4ke7-3 czvMFY">
                                                            DOT
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="sc-1dqg576-3 iQLVg">
                                                    <span className="sc-1el4ke7-4 bquRkb">
                                                        10%
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="sc-1dqg576-2 dfjekw">
                                                <div className="sc-1dqg576-3 iQLVg">
                                                    <div className="sc-1el4ke7-1 iwWQwX">
                                                        <div
                                                            data-gatsby-image-wrapper=""
                                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1el4ke7-0 dQrhKA"
                                                        >
                                                            <div
                                                                style={{
                                                                    maxWidth:
                                                                        "24px",
                                                                    display:
                                                                        "block",
                                                                }}
                                                            >
                                                                <img
                                                                    alt=""
                                                                    role="presentation"
                                                                    aria-hidden="true"
                                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height='24' width='24' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                                    style={{
                                                                        maxWidth:
                                                                            "100%",
                                                                        display:
                                                                            "block",
                                                                        position:
                                                                            "static",
                                                                    }}
                                                                ></img>
                                                            </div>
                                                            <div
                                                                aria-hidden="true"
                                                                data-placeholder-image=""
                                                                style={{
                                                                    opacity:
                                                                        "0",
                                                                    transition:
                                                                        "opacity 500ms linear 0s",
                                                                    objectFit:
                                                                        "cover",
                                                                }}
                                                            ></div>
                                                            <img
                                                                width="24"
                                                                height="24"
                                                                data-main-image=""
                                                                style={{
                                                                    objectFit:
                                                                        "cover",
                                                                    opacity:
                                                                        "1",
                                                                }}
                                                                sizes="(min-width: 24px) 24px, 100vw"
                                                                decoding="async"
                                                                loading="lazy"
                                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/43b6bbbc-09cd-47cd-bdd6-aace7802df55_CHSB_token.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24"
                                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/43b6bbbc-09cd-47cd-bdd6-aace7802df55_CHSB_token.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24 24w"
                                                                alt="CHSB"
                                                            ></img>
                                                            <noscript>
                                                                <img
                                                                    width="24"
                                                                    height="24"
                                                                    data-main-image=""
                                                                    style={{
                                                                        objectFit:
                                                                            "cover",
                                                                        opacity:
                                                                            "0",
                                                                    }}
                                                                    sizes="(min-width: 24px) 24px, 100vw"
                                                                    decoding="async"
                                                                    loading="lazy"
                                                                    src="https://swissborg-website.cdn.prismic.io/swissborg-website/43b6bbbc-09cd-47cd-bdd6-aace7802df55_CHSB_token.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24"
                                                                    srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/43b6bbbc-09cd-47cd-bdd6-aace7802df55_CHSB_token.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24 24w"
                                                                    alt="CHSB"
                                                                />
                                                            </noscript>
                                                        </div>
                                                        <span className="sc-1el4ke7-2 bESDsh">
                                                            FundrisePro
                                                        </span>
                                                        <span className="sc-1el4ke7-3 czvMFY">
                                                            CHSB
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="sc-1dqg576-3 iQLVg">
                                                    <span className="sc-1el4ke7-4 bquRkb">
                                                        10%
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="sc-1dqg576-2 dfjekw">
                                                <div className="sc-1dqg576-3 iQLVg">
                                                    <div className="sc-1el4ke7-1 iwWQwX">
                                                        <div
                                                            data-gatsby-image-wrapper=""
                                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1el4ke7-0 dQrhKA"
                                                        >
                                                            <div
                                                                style={{
                                                                    maxWidth:
                                                                        "24px",
                                                                    display:
                                                                        "block",
                                                                }}
                                                            >
                                                                <img
                                                                    alt=""
                                                                    role="presentation"
                                                                    aria-hidden="true"
                                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height='24' width='24' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                                    style={{
                                                                        maxWidth:
                                                                            "100%",
                                                                        display:
                                                                            "block",
                                                                        position:
                                                                            "static",
                                                                    }}
                                                                ></img>
                                                            </div>
                                                            <div
                                                                aria-hidden="true"
                                                                data-placeholder-image=""
                                                                style={{
                                                                    opacity:
                                                                        "0",
                                                                    transition:
                                                                        "opacity 500ms linear 0s",
                                                                    objectFit:
                                                                        "cover",
                                                                }}
                                                            ></div>
                                                            <img
                                                                width="24"
                                                                height="24"
                                                                data-main-image=""
                                                                style={{
                                                                    objectFit:
                                                                        "cover",
                                                                    opacity:
                                                                        "1",
                                                                }}
                                                                sizes="(min-width: 24px) 24px, 100vw"
                                                                decoding="async"
                                                                loading="lazy"
                                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/deb672e3-1abc-4e92-b515-5caaac1a4e2a_asset-crypto-ATOM.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24"
                                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/deb672e3-1abc-4e92-b515-5caaac1a4e2a_asset-crypto-ATOM.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24 24w"
                                                                alt="ATOM"
                                                            ></img>
                                                            <noscript>
                                                                <img
                                                                    width="24"
                                                                    height="24"
                                                                    data-main-image=""
                                                                    style={{
                                                                        objectFit:
                                                                            "cover",
                                                                        opacity:
                                                                            "0",
                                                                    }}
                                                                    sizes="(min-width: 24px) 24px, 100vw"
                                                                    decoding="async"
                                                                    loading="lazy"
                                                                    src="https://swissborg-website.cdn.prismic.io/swissborg-website/deb672e3-1abc-4e92-b515-5caaac1a4e2a_asset-crypto-ATOM.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24"
                                                                    srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/deb672e3-1abc-4e92-b515-5caaac1a4e2a_asset-crypto-ATOM.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24 24w"
                                                                    alt="ATOM"
                                                                />
                                                            </noscript>
                                                        </div>
                                                        <span className="sc-1el4ke7-2 bESDsh">
                                                            Cosmos
                                                        </span>
                                                        <span className="sc-1el4ke7-3 czvMFY">
                                                            ATOM
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="sc-1dqg576-3 iQLVg">
                                                    <span className="sc-1el4ke7-4 bquRkb">
                                                        10%
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="sc-1dqg576-2 dfjekw">
                                                <div className="sc-1dqg576-3 iQLVg">
                                                    <div className="sc-1el4ke7-1 iwWQwX">
                                                        <div
                                                            data-gatsby-image-wrapper=""
                                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1el4ke7-0 dQrhKA"
                                                        >
                                                            <div
                                                                style={{
                                                                    maxWidth:
                                                                        "100px",
                                                                    display:
                                                                        "block",
                                                                }}
                                                            >
                                                                <img
                                                                    alt=""
                                                                    role="presentation"
                                                                    aria-hidden="true"
                                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height='100' width='100' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                                    style={{
                                                                        maxWidth:
                                                                            "100%",
                                                                        display:
                                                                            "block",
                                                                        position:
                                                                            "static",
                                                                    }}
                                                                ></img>
                                                            </div>
                                                            <div
                                                                aria-hidden="true"
                                                                data-placeholder-image=""
                                                                style={{
                                                                    opacity:
                                                                        "0",
                                                                    transition:
                                                                        "opacity 500ms linear 0s",
                                                                    objectFit:
                                                                        "cover",
                                                                }}
                                                            ></div>
                                                            <img
                                                                width="100"
                                                                height="100"
                                                                data-main-image=""
                                                                style={{
                                                                    objectFit:
                                                                        "cover",
                                                                    opacity:
                                                                        "1",
                                                                }}
                                                                sizes="(min-width: 100px) 100px, 100vw"
                                                                decoding="async"
                                                                loading="lazy"
                                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/5e0c296a-f10a-4a5f-8980-c2ad75d4538f_asset-crypto-AVAX.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=100"
                                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/5e0c296a-f10a-4a5f-8980-c2ad75d4538f_asset-crypto-AVAX.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=100 100w"
                                                                alt="AVAX"
                                                            ></img>
                                                            <noscript>
                                                                <img
                                                                    width="100"
                                                                    height="100"
                                                                    data-main-image=""
                                                                    style={{
                                                                        objectFit:
                                                                            "cover",
                                                                        opacity:
                                                                            "0",
                                                                    }}
                                                                    sizes="(min-width: 100px) 100px, 100vw"
                                                                    decoding="async"
                                                                    loading="lazy"
                                                                    src="https://swissborg-website.cdn.prismic.io/swissborg-website/5e0c296a-f10a-4a5f-8980-c2ad75d4538f_asset-crypto-AVAX.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=100"
                                                                    srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/5e0c296a-f10a-4a5f-8980-c2ad75d4538f_asset-crypto-AVAX.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=100 100w"
                                                                    alt="AVAX"
                                                                />
                                                            </noscript>
                                                        </div>
                                                        <span className="sc-1el4ke7-2 bESDsh">
                                                            Avalanche
                                                        </span>
                                                        <span className="sc-1el4ke7-3 czvMFY">
                                                            AVAX
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="sc-1dqg576-3 iQLVg">
                                                    <span className="sc-1el4ke7-4 bquRkb">
                                                        5%
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="sc-1dqg576-2 dfjekw">
                                                <div className="sc-1dqg576-3 iQLVg">
                                                    <div className="sc-1el4ke7-1 iwWQwX">
                                                        <div
                                                            data-gatsby-image-wrapper=""
                                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1el4ke7-0 dQrhKA"
                                                        >
                                                            <div
                                                                style={{
                                                                    maxWidth:
                                                                        "100px",
                                                                    display:
                                                                        "block",
                                                                }}
                                                            >
                                                                <img
                                                                    alt=""
                                                                    role="presentation"
                                                                    aria-hidden="true"
                                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height='100' width='100' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                                    style={{
                                                                        maxWidth:
                                                                            "100%",
                                                                        display:
                                                                            "block",
                                                                        position:
                                                                            "static",
                                                                    }}
                                                                ></img>
                                                            </div>
                                                            <div
                                                                aria-hidden="true"
                                                                data-placeholder-image=""
                                                                style={{
                                                                    opacity:
                                                                        "0",
                                                                    transition:
                                                                        "opacity 500ms linear 0s",
                                                                    objectFit:
                                                                        "cover",
                                                                }}
                                                            ></div>
                                                            <img
                                                                width="100"
                                                                height="100"
                                                                data-main-image=""
                                                                style={{
                                                                    objectFit:
                                                                        "cover",
                                                                    opacity:
                                                                        "1",
                                                                }}
                                                                sizes="(min-width: 100px) 100px, 100vw"
                                                                decoding="async"
                                                                loading="lazy"
                                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/5fc9d110-492e-4c2b-8ef1-ee79f6f48962_asset-crypto-SOL.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=100"
                                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/5fc9d110-492e-4c2b-8ef1-ee79f6f48962_asset-crypto-SOL.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=100 100w"
                                                                alt="SOL"
                                                            ></img>
                                                            <noscript>
                                                                <img
                                                                    width="100"
                                                                    height="100"
                                                                    data-main-image=""
                                                                    style={{
                                                                        objectFit:
                                                                            "cover",
                                                                        opacity:
                                                                            "0",
                                                                    }}
                                                                    sizes="(min-width: 100px) 100px, 100vw"
                                                                    decoding="async"
                                                                    loading="lazy"
                                                                    src="https://swissborg-website.cdn.prismic.io/swissborg-website/5fc9d110-492e-4c2b-8ef1-ee79f6f48962_asset-crypto-SOL.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=100"
                                                                    srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/5fc9d110-492e-4c2b-8ef1-ee79f6f48962_asset-crypto-SOL.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=100 100w"
                                                                    alt="SOL"
                                                                />
                                                            </noscript>
                                                        </div>
                                                        <span className="sc-1el4ke7-2 bESDsh">
                                                            Solana
                                                        </span>
                                                        <span className="sc-1el4ke7-3 czvMFY">
                                                            SOL
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="sc-1dqg576-3 iQLVg">
                                                    <span className="sc-1el4ke7-4 bquRkb">
                                                        5%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sc-1dqg576-4 hnhTDG sc-3gax6a-4 hiwmZm">
                                            <div className="sc-1dqg576-2 dfjekw">
                                                <div className="sc-1dqg576-3 iQLVg">
                                                    <div className="sc-1el4ke7-1 iwWQwX">
                                                        <div
                                                            data-gatsby-image-wrapper=""
                                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1el4ke7-0 dQrhKA"
                                                        >
                                                            <div
                                                                style={{
                                                                    maxWidth:
                                                                        "24px",
                                                                    display:
                                                                        "block",
                                                                }}
                                                            >
                                                                <img
                                                                    alt=""
                                                                    role="presentation"
                                                                    aria-hidden="true"
                                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height='24' width='24' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                                    style={{
                                                                        maxWidth:
                                                                            "100%",
                                                                        display:
                                                                            "block",
                                                                        position:
                                                                            "static",
                                                                    }}
                                                                ></img>
                                                            </div>
                                                            <div
                                                                aria-hidden="true"
                                                                data-placeholder-image=""
                                                                style={{
                                                                    opacity:
                                                                        "0",
                                                                    transition:
                                                                        "opacity 500ms linear 0s",
                                                                    objectFit:
                                                                        "cover",
                                                                }}
                                                            ></div>
                                                            <img
                                                                width="24"
                                                                height="24"
                                                                data-main-image=""
                                                                style={{
                                                                    objectFit:
                                                                        "cover",
                                                                    opacity:
                                                                        "1",
                                                                }}
                                                                sizes="(min-width: 24px) 24px, 100vw"
                                                                decoding="async"
                                                                loading="lazy"
                                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/87507fc9-7f9d-49e6-b4f8-239337a0a378_asset-crypto-NEAR.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24"
                                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/87507fc9-7f9d-49e6-b4f8-239337a0a378_asset-crypto-NEAR.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24 24w"
                                                                alt="NEAR"
                                                            ></img>
                                                            <noscript>
                                                                <img
                                                                    width="24"
                                                                    height="24"
                                                                    data-main-image=""
                                                                    style={{
                                                                        objectFit:
                                                                            "cover",
                                                                        opacity:
                                                                            "0",
                                                                    }}
                                                                    sizes="(min-width: 24px) 24px, 100vw"
                                                                    decoding="async"
                                                                    loading="lazy"
                                                                    src="https://swissborg-website.cdn.prismic.io/swissborg-website/87507fc9-7f9d-49e6-b4f8-239337a0a378_asset-crypto-NEAR.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24"
                                                                    srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/87507fc9-7f9d-49e6-b4f8-239337a0a378_asset-crypto-NEAR.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24 24w"
                                                                    alt="NEAR"
                                                                />
                                                            </noscript>
                                                        </div>
                                                        <span className="sc-1el4ke7-2 bESDsh">
                                                            Near Protocol
                                                        </span>
                                                        <span className="sc-1el4ke7-3 czvMFY">
                                                            NEAR
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="sc-1dqg576-3 iQLVg">
                                                    <span className="sc-1el4ke7-4 bquRkb">
                                                        5%
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="sc-1dqg576-2 dfjekw">
                                                <div className="sc-1dqg576-3 iQLVg">
                                                    <div className="sc-1el4ke7-1 iwWQwX">
                                                        <div
                                                            data-gatsby-image-wrapper=""
                                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1el4ke7-0 dQrhKA"
                                                        >
                                                            <div
                                                                style={{
                                                                    maxWidth:
                                                                        "24px",
                                                                    display:
                                                                        "block",
                                                                }}
                                                            >
                                                                <img
                                                                    alt=""
                                                                    role="presentation"
                                                                    aria-hidden="true"
                                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height='24' width='24' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                                    style={{
                                                                        maxWidth:
                                                                            "100%",
                                                                        display:
                                                                            "block",
                                                                        position:
                                                                            "static",
                                                                    }}
                                                                ></img>
                                                            </div>
                                                            <div
                                                                aria-hidden="true"
                                                                data-placeholder-image=""
                                                                style={{
                                                                    opacity:
                                                                        "0",
                                                                    transition:
                                                                        "opacity 500ms linear 0s",
                                                                    objectFit:
                                                                        "cover",
                                                                }}
                                                            ></div>
                                                            <img
                                                                width="24"
                                                                height="24"
                                                                data-main-image=""
                                                                style={{
                                                                    objectFit:
                                                                        "cover",
                                                                    opacity:
                                                                        "1",
                                                                }}
                                                                sizes="(min-width: 24px) 24px, 100vw"
                                                                decoding="async"
                                                                loading="lazy"
                                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/d1187559-6f13-4dc5-b043-38d6f452a06a_ada.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24"
                                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/d1187559-6f13-4dc5-b043-38d6f452a06a_ada.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24 24w"
                                                                alt="ADA"
                                                            ></img>
                                                            <noscript>
                                                                <img
                                                                    width="24"
                                                                    height="24"
                                                                    data-main-image=""
                                                                    style={{
                                                                        objectFit:
                                                                            "cover",
                                                                        opacity:
                                                                            "0",
                                                                    }}
                                                                    sizes="(min-width: 24px) 24px, 100vw"
                                                                    decoding="async"
                                                                    loading="lazy"
                                                                    src="https://swissborg-website.cdn.prismic.io/swissborg-website/d1187559-6f13-4dc5-b043-38d6f452a06a_ada.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24"
                                                                    srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/d1187559-6f13-4dc5-b043-38d6f452a06a_ada.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=24&amp;h=24 24w"
                                                                    alt="ADA"
                                                                />
                                                            </noscript>
                                                        </div>
                                                        <span className="sc-1el4ke7-2 bESDsh">
                                                            Cardano
                                                        </span>
                                                        <span className="sc-1el4ke7-3 czvMFY">
                                                            ADA
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="sc-1dqg576-3 iQLVg">
                                                    <span className="sc-1el4ke7-4 bquRkb">
                                                        5%
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="sc-1dqg576-2 dfjekw">
                                                <div className="sc-1dqg576-3 iQLVg">
                                                    <div className="sc-1el4ke7-1 iwWQwX">
                                                        <div
                                                            data-gatsby-image-wrapper=""
                                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1el4ke7-0 dQrhKA"
                                                        >
                                                            <div
                                                                style={{
                                                                    maxWidth:
                                                                        "25px",
                                                                    display:
                                                                        "block",
                                                                }}
                                                            >
                                                                <img
                                                                    alt=""
                                                                    role="presentation"
                                                                    aria-hidden="true"
                                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height='25' width='25' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                                    style={{
                                                                        maxWidth:
                                                                            "100%",
                                                                        display:
                                                                            "block",
                                                                        position:
                                                                            "static",
                                                                    }}
                                                                ></img>
                                                            </div>
                                                            <div
                                                                aria-hidden="true"
                                                                data-placeholder-image=""
                                                                style={{
                                                                    opacity:
                                                                        "0",
                                                                    transition:
                                                                        "opacity 500ms linear 0s",
                                                                    objectFit:
                                                                        "cover",
                                                                }}
                                                            ></div>
                                                            <img
                                                                width="25"
                                                                height="25"
                                                                data-main-image=""
                                                                style={{
                                                                    objectFit:
                                                                        "cover",
                                                                    opacity:
                                                                        "1",
                                                                }}
                                                                sizes="(min-width: 25px) 25px, 100vw"
                                                                decoding="async"
                                                                loading="lazy"
                                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/84ea513a-75d4-4c2f-a13f-8982ad5dea2e_CELO.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25"
                                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/84ea513a-75d4-4c2f-a13f-8982ad5dea2e_CELO.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25 25w"
                                                                alt="Celo"
                                                            ></img>
                                                            <noscript>
                                                                <img
                                                                    width="25"
                                                                    height="25"
                                                                    data-main-image=""
                                                                    style={{
                                                                        objectFit:
                                                                            "cover",
                                                                        opacity:
                                                                            "0",
                                                                    }}
                                                                    sizes="(min-width: 25px) 25px, 100vw"
                                                                    decoding="async"
                                                                    loading="lazy"
                                                                    src="https://swissborg-website.cdn.prismic.io/swissborg-website/84ea513a-75d4-4c2f-a13f-8982ad5dea2e_CELO.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25"
                                                                    srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/84ea513a-75d4-4c2f-a13f-8982ad5dea2e_CELO.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25 25w"
                                                                    alt="Celo"
                                                                />
                                                            </noscript>
                                                        </div>
                                                        <span className="sc-1el4ke7-2 bESDsh">
                                                            Celo
                                                        </span>
                                                        <span className="sc-1el4ke7-3 czvMFY">
                                                            CELO
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="sc-1dqg576-3 iQLVg">
                                                    <span className="sc-1el4ke7-4 bquRkb">
                                                        5%
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="sc-1dqg576-2 dfjekw">
                                                <div className="sc-1dqg576-3 iQLVg">
                                                    <div className="sc-1el4ke7-1 iwWQwX">
                                                        <div
                                                            data-gatsby-image-wrapper=""
                                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1el4ke7-0 dQrhKA"
                                                        >
                                                            <div
                                                                style={{
                                                                    maxWidth:
                                                                        "25px",
                                                                    display:
                                                                        "block",
                                                                }}
                                                            >
                                                                <img
                                                                    alt=""
                                                                    role="presentation"
                                                                    aria-hidden="true"
                                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height='25' width='25' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                                    style={{
                                                                        maxWidth:
                                                                            "100%",
                                                                        display:
                                                                            "block",
                                                                        position:
                                                                            "static",
                                                                    }}
                                                                ></img>
                                                            </div>
                                                            <div
                                                                aria-hidden="true"
                                                                data-placeholder-image=""
                                                                style={{
                                                                    opacity:
                                                                        "0",
                                                                    transition:
                                                                        "opacity 500ms linear 0s",
                                                                    objectFit:
                                                                        "cover",
                                                                }}
                                                            ></div>
                                                            <img
                                                                width="25"
                                                                height="25"
                                                                data-main-image=""
                                                                style={{
                                                                    objectFit:
                                                                        "cover",
                                                                    opacity:
                                                                        "1",
                                                                }}
                                                                sizes="(min-width: 25px) 25px, 100vw"
                                                                decoding="async"
                                                                loading="lazy"
                                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/e28b513b-5948-4367-bb2e-5d7ea4f87562_SECRET.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25"
                                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/e28b513b-5948-4367-bb2e-5d7ea4f87562_SECRET.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25 25w"
                                                                alt="Secret"
                                                            ></img>
                                                            <noscript>
                                                                <img
                                                                    width="25"
                                                                    height="25"
                                                                    data-main-image=""
                                                                    style={{
                                                                        objectFit:
                                                                            "cover",
                                                                        opacity:
                                                                            "0",
                                                                    }}
                                                                    sizes="(min-width: 25px) 25px, 100vw"
                                                                    decoding="async"
                                                                    loading="lazy"
                                                                    src="https://swissborg-website.cdn.prismic.io/swissborg-website/e28b513b-5948-4367-bb2e-5d7ea4f87562_SECRET.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25"
                                                                    srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/e28b513b-5948-4367-bb2e-5d7ea4f87562_SECRET.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25 25w"
                                                                    alt="Secret"
                                                                />
                                                            </noscript>
                                                        </div>
                                                        <span className="sc-1el4ke7-2 bESDsh">
                                                            Secret
                                                        </span>
                                                        <span className="sc-1el4ke7-3 czvMFY">
                                                            SCRT
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="sc-1dqg576-3 iQLVg">
                                                    <span className="sc-1el4ke7-4 bquRkb">
                                                        10%
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="sc-1dqg576-2 dfjekw">
                                                <div className="sc-1dqg576-3 iQLVg">
                                                    <div className="sc-1el4ke7-1 iwWQwX">
                                                        <div
                                                            data-gatsby-image-wrapper=""
                                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1el4ke7-0 dQrhKA"
                                                        >
                                                            <div
                                                                style={{
                                                                    maxWidth:
                                                                        "25px",
                                                                    display:
                                                                        "block",
                                                                }}
                                                            >
                                                                <img
                                                                    alt=""
                                                                    role="presentation"
                                                                    aria-hidden="true"
                                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height='25' width='25' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                                    style={{
                                                                        maxWidth:
                                                                            "100%",
                                                                        display:
                                                                            "block",
                                                                        position:
                                                                            "static",
                                                                    }}
                                                                ></img>
                                                            </div>
                                                            <div
                                                                aria-hidden="true"
                                                                data-placeholder-image=""
                                                                style={{
                                                                    opacity:
                                                                        "0",
                                                                    transition:
                                                                        "opacity 500ms linear 0s",
                                                                    objectFit:
                                                                        "cover",
                                                                }}
                                                            ></div>
                                                            <img
                                                                width="25"
                                                                height="25"
                                                                data-main-image=""
                                                                style={{
                                                                    objectFit:
                                                                        "cover",
                                                                    opacity:
                                                                        "1",
                                                                }}
                                                                sizes="(min-width: 25px) 25px, 100vw"
                                                                decoding="async"
                                                                loading="lazy"
                                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/6ad15396-78cf-4005-af70-37ac712dd4e7_MINA.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25"
                                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/6ad15396-78cf-4005-af70-37ac712dd4e7_MINA.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25 25w"
                                                                alt="Mina"
                                                            ></img>
                                                            <noscript>
                                                                <img
                                                                    width="25"
                                                                    height="25"
                                                                    data-main-image=""
                                                                    style={{
                                                                        objectFit:
                                                                            "cover",
                                                                        opacity:
                                                                            "0",
                                                                    }}
                                                                    sizes="(min-width: 25px) 25px, 100vw"
                                                                    decoding="async"
                                                                    loading="lazy"
                                                                    src="https://swissborg-website.cdn.prismic.io/swissborg-website/6ad15396-78cf-4005-af70-37ac712dd4e7_MINA.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25"
                                                                    srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/6ad15396-78cf-4005-af70-37ac712dd4e7_MINA.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25 25w"
                                                                    alt="Mina"
                                                                />
                                                            </noscript>
                                                        </div>
                                                        <span className="sc-1el4ke7-2 bESDsh">
                                                            Mina
                                                        </span>
                                                        <span className="sc-1el4ke7-3 czvMFY">
                                                            MINA
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="sc-1dqg576-3 iQLVg">
                                                    <span className="sc-1el4ke7-4 bquRkb">
                                                        7.5%
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="sc-1dqg576-2 dfjekw">
                                                <div className="sc-1dqg576-3 iQLVg">
                                                    <div className="sc-1el4ke7-1 iwWQwX">
                                                        <div
                                                            data-gatsby-image-wrapper=""
                                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1el4ke7-0 dQrhKA"
                                                        >
                                                            <div
                                                                style={{
                                                                    maxWidth:
                                                                        "25px",
                                                                    display:
                                                                        "block",
                                                                }}
                                                            >
                                                                <img
                                                                    alt=""
                                                                    role="presentation"
                                                                    aria-hidden="true"
                                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height='25' width='25' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                                    style={{
                                                                        maxWidth:
                                                                            "100%",
                                                                        display:
                                                                            "block",
                                                                        position:
                                                                            "static",
                                                                    }}
                                                                ></img>
                                                            </div>
                                                            <div
                                                                aria-hidden="true"
                                                                data-placeholder-image=""
                                                                style={{
                                                                    opacity:
                                                                        "0",
                                                                    transition:
                                                                        "opacity 500ms linear 0s",
                                                                    objectFit:
                                                                        "cover",
                                                                }}
                                                            ></div>
                                                            <img
                                                                width="25"
                                                                height="25"
                                                                data-main-image=""
                                                                style={{
                                                                    objectFit:
                                                                        "cover",
                                                                    opacity:
                                                                        "1",
                                                                }}
                                                                sizes="(min-width: 25px) 25px, 100vw"
                                                                decoding="async"
                                                                loading="lazy"
                                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/ed8b50f4-a650-43e1-a785-47d527464ac3_KUSAMA.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25"
                                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/ed8b50f4-a650-43e1-a785-47d527464ac3_KUSAMA.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25 25w"
                                                                alt="Kusama"
                                                            ></img>
                                                            <noscript>
                                                                <img
                                                                    width="25"
                                                                    height="25"
                                                                    data-main-image=""
                                                                    style={{
                                                                        objectFit:
                                                                            "cover",
                                                                        opacity:
                                                                            "0",
                                                                    }}
                                                                    sizes="(min-width: 25px) 25px, 100vw"
                                                                    decoding="async"
                                                                    loading="lazy"
                                                                    src="https://swissborg-website.cdn.prismic.io/swissborg-website/ed8b50f4-a650-43e1-a785-47d527464ac3_KUSAMA.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25"
                                                                    srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/ed8b50f4-a650-43e1-a785-47d527464ac3_KUSAMA.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25 25w"
                                                                    alt="Kusama"
                                                                />
                                                            </noscript>
                                                        </div>
                                                        <span className="sc-1el4ke7-2 bESDsh">
                                                            Kusama
                                                        </span>
                                                        <span className="sc-1el4ke7-3 czvMFY">
                                                            KSM
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="sc-1dqg576-3 iQLVg">
                                                    <span className="sc-1el4ke7-4 bquRkb">
                                                        7.5%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`sc-10ae4vz-7 ${
                                Vel === 0 ? "lgPUFb" : ""
                            } ${Vel === 1 ? "lgPUFb" : ""} ${
                                Vel === 2 ? "lgPUFa" : ""
                            }`}
                        >
                            <div>
                                <div className="sc-1ewx155-0 cQiGrh">
                                    <h3 className="sc-1ewx155-1 jnOYTw">
                                        Why choose Web3
                                    </h3>
                                    <div className="sc-1ewx155-3 cDfckf">
                                        <div className="sc-1ucyg33-0 bCtAxq">
                                            <div className="sc-1ucyg33-1 gRcGUl">
                                                <div
                                                    data-gatsby-image-wrapper=""
                                                    className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1ucyg33-2 dfkmyu"
                                                >
                                                    <div
                                                        style={{
                                                            maxWidth: "48px",
                                                            display: "block",
                                                        }}
                                                    >
                                                        <img
                                                            alt=""
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;48&#x27; width=&#x27;48&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
                                                            style={{
                                                                maxWidth:
                                                                    "100%",
                                                                display:
                                                                    "block",
                                                                position:
                                                                    "static",
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
                                                            opacity: "1",
                                                        }}
                                                        sizes="(minWidth: 48px) 48px, 100vw"
                                                        decoding="async"
                                                        loading="lazy"
                                                        src="https://swissborg-website.cdn.prismic.io/swissborg-website/3d292728-ca8c-4826-b965-8d7d52c4ce89_It-will-be-huge.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48"
                                                        srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/3d292728-ca8c-4826-b965-8d7d52c4ce89_It-will-be-huge.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48 48w"
                                                        alt="Bar chart"
                                                    />
                                                </div>
                                            </div>
                                            <h4 className="sc-1ucyg33-3 hLAkNw">
                                                It’s going to be huge!
                                            </h4>
                                            <div className="sc-1ucyg33-4 XEbmh">
                                                <p>
                                                    The global Web 3.0
                                                    blockchain market size was
                                                    USD 1.36 billion in 2021 and
                                                    is expected to expand at a
                                                    compound annual growth rate
                                                    of 44.9% from 2022 to 2030.*
                                                </p>
                                            </div>
                                        </div>
                                        <div className="sc-1ucyg33-0 bCtAxq">
                                            <div className="sc-1ucyg33-1 gRcGUl">
                                                <div
                                                    data-gatsby-image-wrapper=""
                                                    className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1ucyg33-2 dfkmyu"
                                                >
                                                    <div
                                                        style={{
                                                            maxWidth: "48px",
                                                            display: "block",
                                                        }}
                                                    >
                                                        <img
                                                            alt=""
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;48&#x27; width=&#x27;48&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
                                                            style={{
                                                                maxWidth:
                                                                    "100%",
                                                                display:
                                                                    "block",
                                                                position:
                                                                    "static",
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
                                                            opacity: "1",
                                                        }}
                                                        sizes="(minWidth: 48px) 48px, 100vw"
                                                        decoding="async"
                                                        loading="lazy"
                                                        src="https://swissborg-website.cdn.prismic.io/swissborg-website/092acc01-49f3-40cd-849b-abfaf3b3fc77_it-will-open-opportunities.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48"
                                                        srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/092acc01-49f3-40cd-849b-abfaf3b3fc77_it-will-open-opportunities.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48 48w"
                                                        alt="Pie chart"
                                                    />
                                                </div>
                                            </div>
                                            <h4 className="sc-1ucyg33-3 hLAkNw">
                                                It will open doors
                                            </h4>
                                            <div className="sc-1ucyg33-4 XEbmh">
                                                <p>
                                                    You don’t want to miss out
                                                    on early access to the
                                                    business opportunities that
                                                    the marketplace of the
                                                    future proposes.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="sc-1ucyg33-0 bCtAxq">
                                            <div className="sc-1ucyg33-1 gRcGUl">
                                                <div
                                                    data-gatsby-image-wrapper=""
                                                    className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1ucyg33-2 dfkmyu"
                                                >
                                                    <div
                                                        style={{
                                                            maxWidth: "48px",
                                                            display: "block",
                                                        }}
                                                    >
                                                        <img
                                                            alt=""
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;48&#x27; width=&#x27;48&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
                                                            style={{
                                                                maxWidth:
                                                                    "100%",
                                                                display:
                                                                    "block",
                                                                position:
                                                                    "static",
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
                                                            opacity: "1",
                                                        }}
                                                        sizes="(minWidth: 48px) 48px, 100vw"
                                                        decoding="async"
                                                        loading="lazy"
                                                        src="https://swissborg-website.cdn.prismic.io/swissborg-website/c20aee41-0d7a-40a2-b7f0-73d06519d9c0_It-will-replace-centralised-internet.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48"
                                                        srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/c20aee41-0d7a-40a2-b7f0-73d06519d9c0_It-will-replace-centralised-internet.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48 48w"
                                                        alt="Community"
                                                    />
                                                </div>
                                            </div>
                                            <h4 className="sc-1ucyg33-3 hLAkNw">
                                                It will replace the centralized
                                                internet
                                            </h4>
                                            <div className="sc-1ucyg33-4 XEbmh">
                                                <p>
                                                    Decentralization of Web3
                                                    will break the hold of
                                                    monopolizing giants opening
                                                    the internet for many
                                                    individuals to interact,
                                                    play, learn and trade
                                                    autonomously.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="sc-1ucyg33-0 bCtAxq">
                                            <div className="sc-1ucyg33-1 gRcGUl">
                                                <div
                                                    data-gatsby-image-wrapper=""
                                                    className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1ucyg33-2 dfkmyu"
                                                >
                                                    <div
                                                        style={{
                                                            maxWidth: "48px",
                                                            display: "block",
                                                        }}
                                                    >
                                                        <img
                                                            alt=""
                                                            role="presentation"
                                                            aria-hidden="true"
                                                            src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;48&#x27; width=&#x27;48&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
                                                            style={{
                                                                maxWidth:
                                                                    "100%",
                                                                display:
                                                                    "block",
                                                                position:
                                                                    "static",
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
                                                            opacity: "1",
                                                        }}
                                                        sizes="(minWidth: 48px) 48px, 100vw"
                                                        decoding="async"
                                                        loading="lazy"
                                                        src="https://swissborg-website.cdn.prismic.io/swissborg-website/54c89769-3bd3-423d-947a-8685b936ed33_It-will-introduce-new-era-of-ownership.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48"
                                                        srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/54c89769-3bd3-423d-947a-8685b936ed33_It-will-introduce-new-era-of-ownership.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48 48w"
                                                        alt="Security shield"
                                                    />
                                                </div>
                                            </div>
                                            <h4 className="sc-1ucyg33-3 hLAkNw">
                                                It will introduce a new era of
                                                ownership
                                            </h4>
                                            <div className="sc-1ucyg33-4 XEbmh">
                                                <p>
                                                    Making data ownable and
                                                    redefining old notions of
                                                    ownership, will be an
                                                    economic paradigm shift
                                                    opening doors to many
                                                    industries and communities.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="sc-1ewx155-2 eutlDS">
                                        * Statistic source:{" "}
                                        <a
                                            href="https://www.grandviewresearch.com/industry-analysis/web-3-0-blockchain-market-report"
                                            className="sc-1ewx155-4 eCrMTj"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Grand View Research
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="sc-1lw4m5x-3 sc-10ae4vz-3 kGWgrY">
                    <h4>Watch this space, more Thematics coming soon!</h4>
                </div>
            </div>
        </motion.section>
    );
}
