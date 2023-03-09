import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tab, Tabs, Typography } from "@mui/material";
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
const H2 = {
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
const M1 = {
    hidden: {
        y: -50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transitionDuration: "1s",
    },
};
const M2 = {
    hidden: {
        y: -50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transitionDuration: "1s",
        transitionDelay: "0.2s",
    },
};
const M3 = {
    hidden: {
        y: -50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transitionDuration: "1s",
        transitionDelay: "0.4s",
    },
};
const M4 = {
    hidden: {
        y: -50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transitionDuration: "1s",
        transitionDelay: "0.6s",
    },
};
export default function СhsbYield04() {
    const [Vel, setVel] = useState(0);

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            className="sc-1lw4m5x-4 sc-d3rxpy-0 fNhyyX cHFAeY"
        >
            <div id="community-strategy" className="sc-d3rxpy-4 gpcAkY"></div>
            <motion.div
                variants={H1}
                className="sc-1lw4m5x-20 sc-d3rxpy-1 bZVTlB iMCbKO"
            >
                <h2>Discover our community-centric strategy</h2>
            </motion.div>
            <motion.div
                variants={H2}
                className="sc-1lw4m5x-20 sc-d3rxpy-2 bZVTlB bIKYQJ"
            >
                <p>
                    Why these numbers matter and what do they mean for the CHSB
                    Yield 2.0 Program
                </p>
            </motion.div>
            <div className="sc-1lw4m5x-20 sc-d3rxpy-3 bZVTlB fQXjVG">
                <div className="sc-t661eg-0 gglbJG">
                    <div className="sc-3lq649-0 bXBsKZ">
                        <Tabs
                            variant="fullWidth"
                            indicatorColor="none"
                            value={Vel}
                            className="sc-9j4gsn-0 fqBobK"
                        >
                            <Tab
                                sx={{
                                    margin: "0",
                                    padding: "0",
                                }}
                                onClick={() => setVel(0)}
                                label={
                                    <motion.div
                                        variants={M1}
                                        className={`sc-9j4gsn-3 ${
                                            Vel === 0 ? "dLaAXD" : "iNKbtc"
                                        }`}
                                    >
                                        <Typography
                                            variant="p"
                                            color={"primary"}
                                            className="sc-9j4gsn-1 ejZWhj"
                                        >
                                            89 938
                                        </Typography>
                                        <h3 className="sc-9j4gsn-2 dCfGqx">
                                            Users in CHSB Yield Wallet
                                        </h3>
                                    </motion.div>
                                }
                            />
                            <Tab
                                sx={{
                                    margin: "0",
                                    padding: "0",
                                }}
                                onClick={() => setVel(1)}
                                label={
                                    <motion.div
                                        variants={M2}
                                        className={`sc-9j4gsn-3 ${
                                            Vel === 1 ? "dLaAXD" : "iNKbtc"
                                        }`}
                                    >
                                        <Typography
                                            variant="p"
                                            color={"primary"}
                                            className="sc-9j4gsn-1 ejZWhj"
                                        >
                                            330,838,817
                                        </Typography>
                                        <h3 className="sc-9j4gsn-2 dCfGqx">
                                            CHSBs held in Yield Wallet
                                        </h3>
                                    </motion.div>
                                }
                            />
                            <Tab
                                sx={{
                                    margin: "0",
                                    padding: "0",
                                }}
                                onClick={() => setVel(2)}
                                label={
                                    <motion.div
                                        variants={M3}
                                        className={`sc-9j4gsn-3 ${
                                            Vel === 2 ? "dLaAXD" : "iNKbtc"
                                        }`}
                                    >
                                        <Typography
                                            variant="p"
                                            color={"primary"}
                                            className="sc-9j4gsn-1 ejZWhj"
                                        >
                                            8/10
                                        </Typography>
                                        <h3 className="sc-9j4gsn-2 dCfGqx">
                                            Community index
                                        </h3>
                                    </motion.div>
                                }
                            />
                            <Tab
                                sx={{
                                    margin: "0",
                                    padding: "0",
                                }}
                                onClick={() => setVel(3)}
                                label={
                                    <motion.div
                                        variants={M4}
                                        className={`sc-9j4gsn-3 ${
                                            Vel === 3 ? "dLaAXD" : "iNKbtc"
                                        }`}
                                    >
                                        <Typography
                                            variant="p"
                                            color={"primary"}
                                            className="sc-9j4gsn-1 ejZWhj"
                                        >
                                            15.95% p.a.
                                        </Typography>
                                        <h3 className="sc-9j4gsn-2 dCfGqx">
                                            Top CHSB Yield rate
                                        </h3>
                                    </motion.div>
                                }
                            />
                        </Tabs>
                    </div>
                    <div
                        className={`sc-t661eg-1  
                        ${Vel === 0 && "jzmvdY"}
                        ${Vel === 1 && "BXBkA"}
                        ${Vel === 2 && "cJsgVL"}
                        ${Vel === 3 && "frdPbm"}`}
                    >
                        <div
                            className={`sc-14oz79x-0 ${
                                Vel === 0 ? "EliWM" : "dEeSlR"
                            }`}
                        >
                            <h3 className="sc-14oz79x-1 itMRKX"></h3>
                            <h4 className="sc-14oz79x-2 cKcMwF">
                                Users in CHSB Yield Wallet
                            </h4>
                            <div className="sc-14oz79x-8 bgFOQq">
                                <h3 className="sc-14oz79x-5 hMRBte">
                                    Why do we want to grow the FundrisePro
                                    community?
                                </h3>
                                <p className="sc-14oz79x-7 dldAkQ">
                                    The value of a network grows alongside the
                                    number of users in the network. By
                                    attracting new users and decreasing the
                                    concentration of CHSB, we will grow the
                                    value of our ecosystem exponentially while
                                    reducing risk and volatility. The more
                                    attractive the CHSB Yield Program is for new
                                    investors, the more we can boost CHSB
                                    adoption, and the more the ecosystems value
                                    will grow in the long term.
                                </p>
                                <div className="sc-1amd30g-0 UXsol">
                                    <div
                                        data-gatsby-image-wrapper=""
                                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                                    >
                                        <div
                                            style={{
                                                maxWidth: "1600px",
                                                display: "block",
                                            }}
                                        >
                                            <img
                                                alt=""
                                                role="presentation"
                                                aria-hidden="true"
                                                src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;800&#x27; width=&#x27;1600&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                            sizes="(min-width: 1600px) 1600px, 100vw"
                                            decoding="async"
                                            loading="lazy"
                                            src="https://images.prismic.io/swissborg-website/ff40ca12-d72c-4dab-a52a-7e946b102353_CHSB_Growing_ecosystem_1600x800.jpg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1600&amp;h=800"
                                            srcSet="https://images.prismic.io/swissborg-website/ff40ca12-d72c-4dab-a52a-7e946b102353_CHSB_Growing_ecosystem_1600x800.jpg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=50 100w,https://images.prismic.io/swissborg-website/ff40ca12-d72c-4dab-a52a-7e946b102353_CHSB_Growing_ecosystem_1600x800.jpg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=116&amp;h=58 116w,https://images.prismic.io/swissborg-website/ff40ca12-d72c-4dab-a52a-7e946b102353_CHSB_Growing_ecosystem_1600x800.jpg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=135&amp;h=68 135w,https://images.prismic.io/swissborg-website/ff40ca12-d72c-4dab-a52a-7e946b102353_CHSB_Growing_ecosystem_1600x800.jpg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=156&amp;h=78 156w,https://images.prismic.io/swissborg-website/ff40ca12-d72c-4dab-a52a-7e946b102353_CHSB_Growing_ecosystem_1600x800.jpg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=181&amp;h=91 181w,https://images.prismic.io/swissborg-website/ff40ca12-d72c-4dab-a52a-7e946b102353_CHSB_Growing_ecosystem_1600x800.jpg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=210&amp;h=105 210w,https://images.prismic.io/swissborg-website/ff40ca12-d72c-4dab-a52a-7e946b102353_CHSB_Growing_ecosystem_1600x800.jpg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=244&amp;h=122 244w,https://images.prismic.io/swissborg-website/ff40ca12-d72c-4dab-a52a-7e946b102353_CHSB_Growing_ecosystem_1600x800.jpg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=283&amp;h=142 283w,https://images.prismic.io/swissborg-website/ff40ca12-d72c-4dab-a52a-7e946b102353_CHSB_Growing_ecosystem_1600x800.jpg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=328&amp;h=164 328w,https://images.prismic.io/swissborg-website/ff40ca12-d72c-4dab-a52a-7e946b102353_CHSB_Growing_ecosystem_1600x800.jpg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=380&amp;h=190 380w,https://images.prismic.io/swissborg-website/ff40ca12-d72c-4dab-a52a-7e946b102353_CHSB_Growing_ecosystem_1600x800.jpg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=441&amp;h=221 441w,https://images.prismic.io/swissborg-website/ff40ca12-d72c-4dab-a52a-7e946b102353_CHSB_Growing_ecosystem_1600x800.jpg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=512&amp;h=256 512w,https://images.prismic.io/swissborg-website/ff40ca12-d72c-4dab-a52a-7e946b102353_CHSB_Growing_ecosystem_1600x800.jpg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=594&amp;h=297 594w,https://images.prismic.io/swissborg-website/ff40ca12-d72c-4dab-a52a-7e946b102353_CHSB_Growing_ecosystem_1600x800.jpg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=689&amp;h=345 689w,https://images.prismic.io/swissborg-website/ff40ca12-d72c-4dab-a52a-7e946b102353_CHSB_Growing_ecosystem_1600x800.jpg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=799&amp;h=400 799w,https://images.prismic.io/swissborg-website/ff40ca12-d72c-4dab-a52a-7e946b102353_CHSB_Growing_ecosystem_1600x800.jpg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=927&amp;h=464 927w,https://images.prismic.io/swissborg-website/ff40ca12-d72c-4dab-a52a-7e946b102353_CHSB_Growing_ecosystem_1600x800.jpg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1075&amp;h=538 1075w,https://images.prismic.io/swissborg-website/ff40ca12-d72c-4dab-a52a-7e946b102353_CHSB_Growing_ecosystem_1600x800.jpg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1247&amp;h=624 1247w,https://images.prismic.io/swissborg-website/ff40ca12-d72c-4dab-a52a-7e946b102353_CHSB_Growing_ecosystem_1600x800.jpg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1446&amp;h=723 1446w,https://images.prismic.io/swissborg-website/ff40ca12-d72c-4dab-a52a-7e946b102353_CHSB_Growing_ecosystem_1600x800.jpg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1600&amp;h=800 1600w"
                                            alt="CHSB Ecosystem"
                                        />
                                    </div>
                                    <button className="sc-1amd30g-1 gnLgfA">
                                        <svg
                                            width="26"
                                            height="25"
                                            viewBox="0 0 26 25"
                                            fill="none"
                                        >
                                            <path
                                                d="M7.76036 16.7709L17.5172 7.01401L13.3381 7.09757C13.0078 7.10418 12.7414 6.83773 12.748 6.50743C12.7544 6.18749 13.0152 5.92668 13.3351 5.92029L18.9835 5.80735C19.2071 5.80287 19.3684 5.92873 19.4498 6.01009C19.4895 6.04985 19.5351 6.10845 19.5721 6.1756C19.6071 6.23915 19.6551 6.34713 19.6525 6.47648L19.5396 12.1248C19.5332 12.4447 19.2724 12.7055 18.9525 12.7119C18.6222 12.7185 18.3557 12.4521 18.3623 12.1218L18.4445 8.01107L8.68765 17.7679L12.8667 17.6844C13.197 17.6778 13.4635 17.9442 13.4569 18.2745C13.4505 18.5944 13.1897 18.8553 12.8697 18.8616L7.22141 18.9746C6.99776 18.9791 6.83644 18.8532 6.75507 18.7718C6.71532 18.7321 6.66979 18.6735 6.63277 18.6063C6.59775 18.5428 6.54974 18.4348 6.55233 18.3055L6.66527 12.6571C6.67166 12.3372 6.93247 12.0764 7.25241 12.07C7.58271 12.0634 7.84916 12.3298 7.84255 12.6601L7.76036 16.7709Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M24.9023 12.512C24.9023 19.1394 19.5298 24.512 12.9023 24.512C6.27493 24.512 0.902344 19.1394 0.902344 12.512C0.902344 5.88455 6.27493 0.511963 12.9023 0.511963C19.5298 0.511963 24.9023 5.88455 24.9023 12.512ZM23.3023 12.512C23.3023 18.2557 18.6461 22.912 12.9023 22.912C7.15858 22.912 2.50234 18.2557 2.50234 12.512C2.50234 6.7682 7.15858 2.11196 12.9023 2.11196C18.6461 2.11196 23.3023 6.7682 23.3023 12.512Z"
                                                fill="white"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`sc-14oz79x-0 ${
                                Vel === 1 ? "EliWM" : "dEeSlR"
                            }`}
                        >
                            <h3 className="sc-14oz79x-1 itMRKX">330,838,817</h3>
                            <h4 className="sc-14oz79x-2 cKcMwF">
                                CHSBs held in Yield Wallet
                            </h4>
                            <div className="sc-14oz79x-8 bgFOQq">
                                <h3 className="sc-14oz79x-5 hMRBte">
                                    How is the CHSB supply distributed today?
                                </h3>
                                <p className="sc-14oz79x-7 dldAkQ">
                                    The CHSB Token can be used for multiple
                                    purposes. Most CHSB are locked by Premium
                                    users for 12 months, staked in the CHSB
                                    Yield Wallet to generate daily rewards, or
                                    burned forever thanks to the Protect and
                                    Burn program. The remaining circulating
                                    supply decreases over time.{" "}
                                </p>
                                <div className="sc-6alekw-0 hrefzU chsb-breakdown-container">
                                    <div className="sc-6alekw-1 jyFZvu chsb-breakdown-chart-cell">
                                        <div className="sc-ycoly9-0 bPVopM undefined chart-container">
                                            <svg
                                                viewBox="0 0 153 153"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="sc-ycoly9-1 gwCrwl"
                                            >
                                                <defs>
                                                    <linearGradient
                                                        id="circulating-gradient"
                                                        gradientTransform="rotate(180)"
                                                    >
                                                        <stop
                                                            offset="0%"
                                                            stopColor="#CCF3E8"
                                                        ></stop>
                                                        <stop
                                                            offset="100%"
                                                            stopColor="#93fcde"
                                                        ></stop>
                                                    </linearGradient>
                                                    <linearGradient
                                                        id="stacked-gradient"
                                                        gradientTransform="rotate(180)"
                                                    >
                                                        <stop
                                                            offset="0%"
                                                            stopColor="#13E5BF"
                                                        ></stop>
                                                        <stop
                                                            offset="100%"
                                                            stopColor="#01C38D"
                                                        ></stop>
                                                    </linearGradient>
                                                    <linearGradient
                                                        id="burned-gradient"
                                                        gradientTransform="rotate(180)"
                                                    >
                                                        <stop
                                                            offset="0%"
                                                            stopColor="#364053"
                                                        ></stop>
                                                        <stop
                                                            offset="100%"
                                                            stopColor="#191E29"
                                                        ></stop>
                                                    </linearGradient>
                                                    <linearGradient
                                                        id="yield-gradient"
                                                        gradientTransform="rotate(270)"
                                                    >
                                                        <stop
                                                            offset="0%"
                                                            stopColor="#9373FF"
                                                        ></stop>
                                                        <stop
                                                            offset="100%"
                                                            stopColor="#5A3FFF"
                                                        ></stop>
                                                    </linearGradient>
                                                    <linearGradient
                                                        id="buy-back-gradient"
                                                        gradientTransform="rotate(270)"
                                                    >
                                                        <stop
                                                            offset="0%"
                                                            stopColor="#7ABCFF"
                                                        ></stop>
                                                        <stop
                                                            offset="100%"
                                                            stopColor="#2D95FF"
                                                        ></stop>
                                                    </linearGradient>
                                                </defs>
                                                <circle
                                                    cx="76.5"
                                                    cy="76.5"
                                                    r="60"
                                                    stroke="url(&#x27;#circulating-gradient&#x27;)"
                                                    strokeDasharray="112.62552 1880"
                                                    style={{
                                                        transform:
                                                            "rotateZ(162.396deg)",
                                                    }}
                                                    opacity="1"
                                                    strokeWidth="20"
                                                    className="sc-ycoly9-2 sc-ycoly9-3 kaRmum bEnDc"
                                                ></circle>
                                                <circle
                                                    stroke="url(&#x27;#stacked-gradient&#x27;)"
                                                    strokeDasharray="73.24992000000002 1880"
                                                    opacity="1"
                                                    strokeWidth="20"
                                                    style={{
                                                        transform:
                                                            "rotateZ(-90deg)",
                                                    }}
                                                    cx="76.5"
                                                    cy="76.5"
                                                    r="60"
                                                    className="sc-ycoly9-2 sc-ycoly9-4 kaRmum hnvymB"
                                                ></circle>
                                                <circle
                                                    stroke="url(&#x27;#burned-gradient&#x27;)"
                                                    strokeDasharray="2.5999199999999996 1880"
                                                    opacity="1"
                                                    strokeWidth="20"
                                                    style={{
                                                        transform:
                                                            "rotateZ(-20.01599999999999deg)",
                                                    }}
                                                    cx="76.5"
                                                    cy="76.5"
                                                    r="60"
                                                    className="sc-ycoly9-2 sc-ycoly9-5 kaRmum dFmNzg"
                                                ></circle>
                                                <circle
                                                    stroke="url(&#x27;#yield-gradient&#x27;)"
                                                    strokeDasharray="177.02064 1880"
                                                    opacity="1"
                                                    strokeWidth="20"
                                                    style={{
                                                        transform:
                                                            "rotateZ(-6.731999999999985deg)",
                                                    }}
                                                    cx="76.5"
                                                    cy="76.5"
                                                    r="60"
                                                    className="sc-ycoly9-2 sc-ycoly9-6 kaRmum dSYjbf"
                                                ></circle>
                                                <circle
                                                    stroke="url(&#x27;#buy-back-gradient&#x27;)"
                                                    strokeDasharray="11.304 1880"
                                                    opacity="1"
                                                    strokeWidth="20"
                                                    style={{
                                                        transform:
                                                            "rotateZ(-17.531999999999982deg)",
                                                    }}
                                                    cx="76.5"
                                                    cy="76.5"
                                                    r="60"
                                                    className="sc-ycoly9-2 sc-ycoly9-7 kaRmum gRZZNS"
                                                ></circle>
                                            </svg>
                                            <div className="sc-ycoly9-8 hPKnCq chsb-pie-chart-legend-cell">
                                                <div className="sc-ycoly9-9 cBmwDs legend-item legend-item--0">
                                                    <span className="sc-ycoly9-10 jJmoHS"></span>
                                                    <p className="sc-ycoly9-11 fKfHOF">
                                                        In Premium accounts
                                                    </p>
                                                </div>
                                                <div className="sc-ycoly9-9 cBmwDs legend-item legend-item--1">
                                                    <span className="sc-ycoly9-10 jJmoHS"></span>
                                                    <p className="sc-ycoly9-11 fKfHOF">
                                                        Burned
                                                    </p>
                                                </div>
                                                <div className="sc-ycoly9-9 cBmwDs legend-item legend-item--2">
                                                    <span className="sc-ycoly9-10 jJmoHS"></span>
                                                    <p className="sc-ycoly9-11 fKfHOF">
                                                        In Yield
                                                    </p>
                                                </div>
                                                <div className="sc-ycoly9-9 cBmwDs legend-item legend-item--3">
                                                    <span className="sc-ycoly9-10 jJmoHS"></span>
                                                    <p className="sc-ycoly9-11 fKfHOF">
                                                        Circulating supply
                                                    </p>
                                                </div>
                                                <div className="sc-ycoly9-9 cBmwDs legend-item legend-item--4">
                                                    <span className="sc-ycoly9-10 jJmoHS"></span>
                                                    <p className="sc-ycoly9-11 fKfHOF">
                                                        In Buyback Pool
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="sc-6alekw-2 dbjbHP">
                                            CHSB Supply Breakdown
                                        </h3>
                                    </div>
                                    <div className="sc-6alekw-3 FAbgL chsb-breakdown-text-cell">
                                        <p>
                                            <strong>
                                                Why is it better when there’s a
                                                decreasing circulating supply of
                                                CHSB?
                                            </strong>
                                        </p>
                                        <p>
                                            Having more CHSBs locked in yield
                                            increases scarcity and reduces
                                            selling pressure. If the demand is
                                            greater than the supply, the value
                                            of CHSB increases.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`sc-14oz79x-0 ${
                                Vel === 2 ? "EliWM" : "dEeSlR"
                            }`}
                        >
                            <h3 className="sc-14oz79x-1 itMRKX">8/10</h3>
                            <h4 className="sc-14oz79x-2 cKcMwF">
                                Community index
                            </h4>
                            <div className="sc-14oz79x-8 bgFOQq">
                                <h3 className="sc-14oz79x-5 hMRBte">
                                    How can you contribute to boost the yield
                                    rates?
                                </h3>
                                <p className="sc-14oz79x-7 dldAkQ">
                                    The Community Index is a scoring system
                                    based on the activities of the entire Cripto
                                    Boost community. The CHSB yield rate is
                                    calculated using this score, meaning the
                                    more active the ecosystem, the higher the
                                    rates you get. You, as a community member,
                                    can directly contribute to the Community
                                    Index score.
                                </p>
                                <div className="sc-x2sufe-0 cBXipF">
                                    <div className="sc-x2sufe-1 hDlLuL">
                                        <div
                                            data-gatsby-image-wrapper=""
                                            className="gatsby-image-wrapper"
                                        >
                                            <div
                                                aria-hidden="true"
                                                style={{
                                                    paddingTop:
                                                        "122.05882352941177%",
                                                }}
                                            ></div>
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
                                                sizes="90vw"
                                                decoding="async"
                                                loading="lazy"
                                                src="https://images.prismic.io/swissborg-website/67fb3f86-0daa-4617-9fa4-020fee24a4d9_comm-index-stats-bg-mobile.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;rect=0%2C0%2C1200%2C1465&amp;w=1700&amp;h=2075"
                                                srcSet="https://images.prismic.io/swissborg-website/67fb3f86-0daa-4617-9fa4-020fee24a4d9_comm-index-stats-bg-mobile.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;rect=0%2C0%2C1200%2C1465&amp;w=330&amp;h=403 330w,https://images.prismic.io/swissborg-website/67fb3f86-0daa-4617-9fa4-020fee24a4d9_comm-index-stats-bg-mobile.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;rect=0%2C0%2C1200%2C1465&amp;w=360&amp;h=439 360w,https://images.prismic.io/swissborg-website/67fb3f86-0daa-4617-9fa4-020fee24a4d9_comm-index-stats-bg-mobile.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;rect=0%2C0%2C1200%2C1465&amp;w=375&amp;h=458 375w,https://images.prismic.io/swissborg-website/67fb3f86-0daa-4617-9fa4-020fee24a4d9_comm-index-stats-bg-mobile.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;rect=0%2C0%2C1200%2C1465&amp;w=425&amp;h=519 425w,https://images.prismic.io/swissborg-website/67fb3f86-0daa-4617-9fa4-020fee24a4d9_comm-index-stats-bg-mobile.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;rect=0%2C0%2C1200%2C1465&amp;w=660&amp;h=806 660w,https://images.prismic.io/swissborg-website/67fb3f86-0daa-4617-9fa4-020fee24a4d9_comm-index-stats-bg-mobile.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;rect=0%2C0%2C1200%2C1465&amp;w=720&amp;h=879 720w,https://images.prismic.io/swissborg-website/67fb3f86-0daa-4617-9fa4-020fee24a4d9_comm-index-stats-bg-mobile.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;rect=0%2C0%2C1200%2C1465&amp;w=750&amp;h=915 750w,https://images.prismic.io/swissborg-website/67fb3f86-0daa-4617-9fa4-020fee24a4d9_comm-index-stats-bg-mobile.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;rect=0%2C0%2C1200%2C1465&amp;w=850&amp;h=1038 850w,https://images.prismic.io/swissborg-website/67fb3f86-0daa-4617-9fa4-020fee24a4d9_comm-index-stats-bg-mobile.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;rect=0%2C0%2C1200%2C1465&amp;w=990&amp;h=1208 990w,https://images.prismic.io/swissborg-website/67fb3f86-0daa-4617-9fa4-020fee24a4d9_comm-index-stats-bg-mobile.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;rect=0%2C0%2C1200%2C1465&amp;w=1080&amp;h=1318 1080w,https://images.prismic.io/swissborg-website/67fb3f86-0daa-4617-9fa4-020fee24a4d9_comm-index-stats-bg-mobile.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;rect=0%2C0%2C1200%2C1465&amp;w=1125&amp;h=1373 1125w,https://images.prismic.io/swissborg-website/67fb3f86-0daa-4617-9fa4-020fee24a4d9_comm-index-stats-bg-mobile.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;rect=0%2C0%2C1200%2C1465&amp;w=1275&amp;h=1556 1275w,https://images.prismic.io/swissborg-website/67fb3f86-0daa-4617-9fa4-020fee24a4d9_comm-index-stats-bg-mobile.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;rect=0%2C0%2C1200%2C1465&amp;w=1500&amp;h=1831 1500w,https://images.prismic.io/swissborg-website/67fb3f86-0daa-4617-9fa4-020fee24a4d9_comm-index-stats-bg-mobile.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;rect=0%2C0%2C1200%2C1465&amp;w=1700&amp;h=2075 1700w"
                                                alt="CyBorg with Community Index small"
                                            />
                                        </div>
                                    </div>
                                    <div className="sc-x2sufe-2 eWmjDs">
                                        <div
                                            data-gatsby-image-wrapper=""
                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                                        >
                                            <div
                                                style={{
                                                    maxWidth: "3600px",
                                                    display: "block",
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;1520.0000000000002&#x27; width=&#x27;3600&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                sizes="(min-width: 3600px) 3600px, 100vw"
                                                decoding="async"
                                                loading="lazy"
                                                src="https://images.prismic.io/swissborg-website/635817f9-e2fc-4788-accb-3cd8bf83e300_comm-index-stats-bg-desktop.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=3600&amp;h=1520"
                                                srcSet="https://images.prismic.io/swissborg-website/635817f9-e2fc-4788-accb-3cd8bf83e300_comm-index-stats-bg-desktop.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=42 100w,https://images.prismic.io/swissborg-website/635817f9-e2fc-4788-accb-3cd8bf83e300_comm-index-stats-bg-desktop.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=116&amp;h=49 116w,https://images.prismic.io/swissborg-website/635817f9-e2fc-4788-accb-3cd8bf83e300_comm-index-stats-bg-desktop.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=135&amp;h=57 135w,https://images.prismic.io/swissborg-website/635817f9-e2fc-4788-accb-3cd8bf83e300_comm-index-stats-bg-desktop.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=156&amp;h=66 156w,https://images.prismic.io/swissborg-website/635817f9-e2fc-4788-accb-3cd8bf83e300_comm-index-stats-bg-desktop.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=181&amp;h=76 181w,https://images.prismic.io/swissborg-website/635817f9-e2fc-4788-accb-3cd8bf83e300_comm-index-stats-bg-desktop.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=210&amp;h=89 210w,https://images.prismic.io/swissborg-website/635817f9-e2fc-4788-accb-3cd8bf83e300_comm-index-stats-bg-desktop.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=244&amp;h=103 244w,https://images.prismic.io/swissborg-website/635817f9-e2fc-4788-accb-3cd8bf83e300_comm-index-stats-bg-desktop.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=283&amp;h=119 283w,https://images.prismic.io/swissborg-website/635817f9-e2fc-4788-accb-3cd8bf83e300_comm-index-stats-bg-desktop.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=328&amp;h=138 328w,https://images.prismic.io/swissborg-website/635817f9-e2fc-4788-accb-3cd8bf83e300_comm-index-stats-bg-desktop.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=380&amp;h=160 380w,https://images.prismic.io/swissborg-website/635817f9-e2fc-4788-accb-3cd8bf83e300_comm-index-stats-bg-desktop.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=441&amp;h=186 441w,https://images.prismic.io/swissborg-website/635817f9-e2fc-4788-accb-3cd8bf83e300_comm-index-stats-bg-desktop.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=512&amp;h=216 512w,https://images.prismic.io/swissborg-website/635817f9-e2fc-4788-accb-3cd8bf83e300_comm-index-stats-bg-desktop.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=594&amp;h=251 594w,https://images.prismic.io/swissborg-website/635817f9-e2fc-4788-accb-3cd8bf83e300_comm-index-stats-bg-desktop.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=689&amp;h=291 689w,https://images.prismic.io/swissborg-website/635817f9-e2fc-4788-accb-3cd8bf83e300_comm-index-stats-bg-desktop.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=799&amp;h=337 799w,https://images.prismic.io/swissborg-website/635817f9-e2fc-4788-accb-3cd8bf83e300_comm-index-stats-bg-desktop.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=927&amp;h=391 927w,https://images.prismic.io/swissborg-website/635817f9-e2fc-4788-accb-3cd8bf83e300_comm-index-stats-bg-desktop.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1075&amp;h=454 1075w,https://images.prismic.io/swissborg-website/635817f9-e2fc-4788-accb-3cd8bf83e300_comm-index-stats-bg-desktop.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1247&amp;h=527 1247w,https://images.prismic.io/swissborg-website/635817f9-e2fc-4788-accb-3cd8bf83e300_comm-index-stats-bg-desktop.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1446&amp;h=611 1446w,https://images.prismic.io/swissborg-website/635817f9-e2fc-4788-accb-3cd8bf83e300_comm-index-stats-bg-desktop.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1678&amp;h=708 1678w,https://images.prismic.io/swissborg-website/635817f9-e2fc-4788-accb-3cd8bf83e300_comm-index-stats-bg-desktop.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1946&amp;h=822 1946w,https://images.prismic.io/swissborg-website/635817f9-e2fc-4788-accb-3cd8bf83e300_comm-index-stats-bg-desktop.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=2257&amp;h=953 2257w,https://images.prismic.io/swissborg-website/635817f9-e2fc-4788-accb-3cd8bf83e300_comm-index-stats-bg-desktop.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=2619&amp;h=1106 2619w,https://images.prismic.io/swissborg-website/635817f9-e2fc-4788-accb-3cd8bf83e300_comm-index-stats-bg-desktop.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=3038&amp;h=1283 3038w,https://images.prismic.io/swissborg-website/635817f9-e2fc-4788-accb-3cd8bf83e300_comm-index-stats-bg-desktop.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=3524&amp;h=1488 3524w,https://images.prismic.io/swissborg-website/635817f9-e2fc-4788-accb-3cd8bf83e300_comm-index-stats-bg-desktop.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=3600&amp;h=1520 3600w"
                                                alt="CyBorg with Community Index"
                                            />
                                        </div>
                                    </div>
                                    <div className="sc-x2sufe-8 iyPhMK">
                                        <time className="sc-x2sufe-3 jkSpXP">
                                            {/* <p className="sc-x2sufe-4 blULLJ">Week<!-- --> <!-- -->46</p>
          <p className="sc-x2sufe-5 eNHIwR">November 15 - 19, 2021</p> */}
                                        </time>
                                        <div className="sc-x2sufe-6 fonRzM">
                                            <div className="sc-vomxfd-0 iqhHMT">
                                                <div className="sc-vomxfd-2 kXAXTd">
                                                    <svg
                                                        width="100"
                                                        height="108"
                                                        viewBox="0 0 100 108"
                                                        fill="none"
                                                    >
                                                        <g filter="url(#filter0_bii_1276_123486)">
                                                            <path
                                                                d="M0 33.7914C0 29.1581 2.51812 24.8887 6.57901 22.6369L43.779 2.00871C47.6474 -0.13637 52.3526 -0.136367 56.221 2.00872L93.421 22.6369C97.4819 24.8887 100 29.1581 100 33.7914V74.2084C100 78.8417 97.4819 83.1111 93.421 85.363L56.221 105.991C52.3526 108.136 47.6474 108.136 43.779 105.991L6.57901 85.3629C2.51812 83.1111 0 78.8417 0 74.2084V33.7914Z"
                                                                fill="url(#paint0_linear_1276_123486)"
                                                            ></path>
                                                        </g>
                                                        <defs>
                                                            <filter
                                                                id="filter0_bii_1276_123486"
                                                                x="-3.31572"
                                                                y="-2.91582"
                                                                width="106.631"
                                                                height="113.831"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                            >
                                                                <feFlood
                                                                    floodOpacity="0"
                                                                    result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feGaussianBlur
                                                                    in="BackgroundImage"
                                                                    stdDeviation="1.65786"
                                                                ></feGaussianBlur>
                                                                <feComposite
                                                                    in2="SourceAlpha"
                                                                    operator="in"
                                                                    result="effect1_backgroundBlur_1276_123486"
                                                                ></feComposite>
                                                                <feBlend
                                                                    mode="normal"
                                                                    in="SourceGraphic"
                                                                    in2="effect1_backgroundBlur_1276_123486"
                                                                    result="shape"
                                                                ></feBlend>
                                                                <feColorMatrix
                                                                    in="SourceAlpha"
                                                                    type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha"
                                                                ></feColorMatrix>
                                                                <feOffset dx="-0.684877"></feOffset>
                                                                <feGaussianBlur stdDeviation="0.256829"></feGaussianBlur>
                                                                <feComposite
                                                                    in2="hardAlpha"
                                                                    operator="arithmetic"
                                                                    k2="-1"
                                                                    k3="1"
                                                                ></feComposite>
                                                                <feColorMatrix
                                                                    type="matrix"
                                                                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
                                                                ></feColorMatrix>
                                                                <feBlend
                                                                    mode="normal"
                                                                    in2="shape"
                                                                    result="effect2_innerShadow_1276_123486"
                                                                ></feBlend>
                                                                <feColorMatrix
                                                                    in="SourceAlpha"
                                                                    type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha"
                                                                ></feColorMatrix>
                                                                <feOffset dx="0.684877"></feOffset>
                                                                <feGaussianBlur stdDeviation="0.171219"></feGaussianBlur>
                                                                <feComposite
                                                                    in2="hardAlpha"
                                                                    operator="arithmetic"
                                                                    k2="-1"
                                                                    k3="1"
                                                                ></feComposite>
                                                                <feColorMatrix
                                                                    type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                                                                ></feColorMatrix>
                                                                <feBlend
                                                                    mode="normal"
                                                                    in2="effect2_innerShadow_1276_123486"
                                                                    result="effect3_innerShadow_1276_123486"
                                                                ></feBlend>
                                                            </filter>
                                                            <linearGradient
                                                                id="paint0_linear_1276_123486"
                                                                x1="6.26042"
                                                                y1="99.367"
                                                                x2="107.527"
                                                                y2="17.9425"
                                                                gradientUnits="userSpaceOnUse"
                                                            >
                                                                <stop stopColor="#8F96A1"></stop>
                                                                <stop
                                                                    offset="1"
                                                                    stopColor="#191E29"
                                                                ></stop>
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                    <p className="sc-vomxfd-6 hHxNQj">
                                                        CHSB
                                                    </p>
                                                    <div className="sc-vomxfd-4 ccLtB"></div>
                                                </div>
                                                <div className="sc-vomxfd-2 hthnpy">
                                                    <svg
                                                        width="100"
                                                        height="108"
                                                        viewBox="0 0 100 108"
                                                        fill="none"
                                                    >
                                                        <g filter="url(#filter0_bii_1276_123486)">
                                                            <path
                                                                d="M0 33.7914C0 29.1581 2.51812 24.8887 6.57901 22.6369L43.779 2.00871C47.6474 -0.13637 52.3526 -0.136367 56.221 2.00872L93.421 22.6369C97.4819 24.8887 100 29.1581 100 33.7914V74.2084C100 78.8417 97.4819 83.1111 93.421 85.363L56.221 105.991C52.3526 108.136 47.6474 108.136 43.779 105.991L6.57901 85.3629C2.51812 83.1111 0 78.8417 0 74.2084V33.7914Z"
                                                                fill="url(#paint0_linear_1276_123486)"
                                                            ></path>
                                                        </g>
                                                        <defs>
                                                            <filter
                                                                id="filter0_bii_1276_123486"
                                                                x="-3.31572"
                                                                y="-2.91582"
                                                                width="106.631"
                                                                height="113.831"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                            >
                                                                <feFlood
                                                                    floodOpacity="0"
                                                                    result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feGaussianBlur
                                                                    in="BackgroundImage"
                                                                    stdDeviation="1.65786"
                                                                ></feGaussianBlur>
                                                                <feComposite
                                                                    in2="SourceAlpha"
                                                                    operator="in"
                                                                    result="effect1_backgroundBlur_1276_123486"
                                                                ></feComposite>
                                                                <feBlend
                                                                    mode="normal"
                                                                    in="SourceGraphic"
                                                                    in2="effect1_backgroundBlur_1276_123486"
                                                                    result="shape"
                                                                ></feBlend>
                                                                <feColorMatrix
                                                                    in="SourceAlpha"
                                                                    type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha"
                                                                ></feColorMatrix>
                                                                <feOffset dx="-0.684877"></feOffset>
                                                                <feGaussianBlur stdDeviation="0.256829"></feGaussianBlur>
                                                                <feComposite
                                                                    in2="hardAlpha"
                                                                    operator="arithmetic"
                                                                    k2="-1"
                                                                    k3="1"
                                                                ></feComposite>
                                                                <feColorMatrix
                                                                    type="matrix"
                                                                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
                                                                ></feColorMatrix>
                                                                <feBlend
                                                                    mode="normal"
                                                                    in2="shape"
                                                                    result="effect2_innerShadow_1276_123486"
                                                                ></feBlend>
                                                                <feColorMatrix
                                                                    in="SourceAlpha"
                                                                    type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha"
                                                                ></feColorMatrix>
                                                                <feOffset dx="0.684877"></feOffset>
                                                                <feGaussianBlur stdDeviation="0.171219"></feGaussianBlur>
                                                                <feComposite
                                                                    in2="hardAlpha"
                                                                    operator="arithmetic"
                                                                    k2="-1"
                                                                    k3="1"
                                                                ></feComposite>
                                                                <feColorMatrix
                                                                    type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                                                                ></feColorMatrix>
                                                                <feBlend
                                                                    mode="normal"
                                                                    in2="effect2_innerShadow_1276_123486"
                                                                    result="effect3_innerShadow_1276_123486"
                                                                ></feBlend>
                                                            </filter>
                                                            <linearGradient
                                                                id="paint0_linear_1276_123486"
                                                                x1="6.26042"
                                                                y1="99.367"
                                                                x2="107.527"
                                                                y2="17.9425"
                                                                gradientUnits="userSpaceOnUse"
                                                            >
                                                                <stop stopColor="#8F96A1"></stop>
                                                                <stop
                                                                    offset="1"
                                                                    stopColor="#191E29"
                                                                ></stop>
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                    <p className="sc-vomxfd-6 hHxNQj">
                                                        Volume
                                                    </p>
                                                    <div className="sc-vomxfd-4 ccLtB"></div>
                                                </div>
                                                <div className="sc-vomxfd-2 hlGMef">
                                                    <svg
                                                        width="100"
                                                        height="108"
                                                        viewBox="0 0 100 108"
                                                        fill="none"
                                                    >
                                                        <g filter="url(#filter0_bii_1276_123486)">
                                                            <path
                                                                d="M0 33.7914C0 29.1581 2.51812 24.8887 6.57901 22.6369L43.779 2.00871C47.6474 -0.13637 52.3526 -0.136367 56.221 2.00872L93.421 22.6369C97.4819 24.8887 100 29.1581 100 33.7914V74.2084C100 78.8417 97.4819 83.1111 93.421 85.363L56.221 105.991C52.3526 108.136 47.6474 108.136 43.779 105.991L6.57901 85.3629C2.51812 83.1111 0 78.8417 0 74.2084V33.7914Z"
                                                                fill="url(#paint0_linear_1276_123486)"
                                                            ></path>
                                                        </g>
                                                        <defs>
                                                            <filter
                                                                id="filter0_bii_1276_123486"
                                                                x="-3.31572"
                                                                y="-2.91582"
                                                                width="106.631"
                                                                height="113.831"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                            >
                                                                <feFlood
                                                                    floodOpacity="0"
                                                                    result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feGaussianBlur
                                                                    in="BackgroundImage"
                                                                    stdDeviation="1.65786"
                                                                ></feGaussianBlur>
                                                                <feComposite
                                                                    in2="SourceAlpha"
                                                                    operator="in"
                                                                    result="effect1_backgroundBlur_1276_123486"
                                                                ></feComposite>
                                                                <feBlend
                                                                    mode="normal"
                                                                    in="SourceGraphic"
                                                                    in2="effect1_backgroundBlur_1276_123486"
                                                                    result="shape"
                                                                ></feBlend>
                                                                <feColorMatrix
                                                                    in="SourceAlpha"
                                                                    type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha"
                                                                ></feColorMatrix>
                                                                <feOffset dx="-0.684877"></feOffset>
                                                                <feGaussianBlur stdDeviation="0.256829"></feGaussianBlur>
                                                                <feComposite
                                                                    in2="hardAlpha"
                                                                    operator="arithmetic"
                                                                    k2="-1"
                                                                    k3="1"
                                                                ></feComposite>
                                                                <feColorMatrix
                                                                    type="matrix"
                                                                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
                                                                ></feColorMatrix>
                                                                <feBlend
                                                                    mode="normal"
                                                                    in2="shape"
                                                                    result="effect2_innerShadow_1276_123486"
                                                                ></feBlend>
                                                                <feColorMatrix
                                                                    in="SourceAlpha"
                                                                    type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha"
                                                                ></feColorMatrix>
                                                                <feOffset dx="0.684877"></feOffset>
                                                                <feGaussianBlur stdDeviation="0.171219"></feGaussianBlur>
                                                                <feComposite
                                                                    in2="hardAlpha"
                                                                    operator="arithmetic"
                                                                    k2="-1"
                                                                    k3="1"
                                                                ></feComposite>
                                                                <feColorMatrix
                                                                    type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                                                                ></feColorMatrix>
                                                                <feBlend
                                                                    mode="normal"
                                                                    in2="effect2_innerShadow_1276_123486"
                                                                    result="effect3_innerShadow_1276_123486"
                                                                ></feBlend>
                                                            </filter>
                                                            <linearGradient
                                                                id="paint0_linear_1276_123486"
                                                                x1="6.26042"
                                                                y1="99.367"
                                                                x2="107.527"
                                                                y2="17.9425"
                                                                gradientUnits="userSpaceOnUse"
                                                            >
                                                                <stop stopColor="#8F96A1"></stop>
                                                                <stop
                                                                    offset="1"
                                                                    stopColor="#191E29"
                                                                ></stop>
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                    <p className="sc-vomxfd-6 hHxNQj">
                                                        App Activity
                                                    </p>
                                                    <div className="sc-vomxfd-4 ccLtB"></div>
                                                </div>
                                                <div className="sc-vomxfd-2 jfsjdg">
                                                    <svg
                                                        width="100"
                                                        height="108"
                                                        viewBox="0 0 100 108"
                                                        fill="none"
                                                    >
                                                        <g filter="url(#filter0_bii_1276_123486)">
                                                            <path
                                                                d="M0 33.7914C0 29.1581 2.51812 24.8887 6.57901 22.6369L43.779 2.00871C47.6474 -0.13637 52.3526 -0.136367 56.221 2.00872L93.421 22.6369C97.4819 24.8887 100 29.1581 100 33.7914V74.2084C100 78.8417 97.4819 83.1111 93.421 85.363L56.221 105.991C52.3526 108.136 47.6474 108.136 43.779 105.991L6.57901 85.3629C2.51812 83.1111 0 78.8417 0 74.2084V33.7914Z"
                                                                fill="url(#paint0_linear_1276_123486)"
                                                            ></path>
                                                        </g>
                                                        <defs>
                                                            <filter
                                                                id="filter0_bii_1276_123486"
                                                                x="-3.31572"
                                                                y="-2.91582"
                                                                width="106.631"
                                                                height="113.831"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                            >
                                                                <feFlood
                                                                    floodOpacity="0"
                                                                    result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feGaussianBlur
                                                                    in="BackgroundImage"
                                                                    stdDeviation="1.65786"
                                                                ></feGaussianBlur>
                                                                <feComposite
                                                                    in2="SourceAlpha"
                                                                    operator="in"
                                                                    result="effect1_backgroundBlur_1276_123486"
                                                                ></feComposite>
                                                                <feBlend
                                                                    mode="normal"
                                                                    in="SourceGraphic"
                                                                    in2="effect1_backgroundBlur_1276_123486"
                                                                    result="shape"
                                                                ></feBlend>
                                                                <feColorMatrix
                                                                    in="SourceAlpha"
                                                                    type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha"
                                                                ></feColorMatrix>
                                                                <feOffset dx="-0.684877"></feOffset>
                                                                <feGaussianBlur stdDeviation="0.256829"></feGaussianBlur>
                                                                <feComposite
                                                                    in2="hardAlpha"
                                                                    operator="arithmetic"
                                                                    k2="-1"
                                                                    k3="1"
                                                                ></feComposite>
                                                                <feColorMatrix
                                                                    type="matrix"
                                                                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
                                                                ></feColorMatrix>
                                                                <feBlend
                                                                    mode="normal"
                                                                    in2="shape"
                                                                    result="effect2_innerShadow_1276_123486"
                                                                ></feBlend>
                                                                <feColorMatrix
                                                                    in="SourceAlpha"
                                                                    type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha"
                                                                ></feColorMatrix>
                                                                <feOffset dx="0.684877"></feOffset>
                                                                <feGaussianBlur stdDeviation="0.171219"></feGaussianBlur>
                                                                <feComposite
                                                                    in2="hardAlpha"
                                                                    operator="arithmetic"
                                                                    k2="-1"
                                                                    k3="1"
                                                                ></feComposite>
                                                                <feColorMatrix
                                                                    type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                                                                ></feColorMatrix>
                                                                <feBlend
                                                                    mode="normal"
                                                                    in2="effect2_innerShadow_1276_123486"
                                                                    result="effect3_innerShadow_1276_123486"
                                                                ></feBlend>
                                                            </filter>
                                                            <linearGradient
                                                                id="paint0_linear_1276_123486"
                                                                x1="6.26042"
                                                                y1="99.367"
                                                                x2="107.527"
                                                                y2="17.9425"
                                                                gradientUnits="userSpaceOnUse"
                                                            >
                                                                <stop stopColor="#8F96A1"></stop>
                                                                <stop
                                                                    offset="1"
                                                                    stopColor="#191E29"
                                                                ></stop>
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                    <p className="sc-vomxfd-6 hHxNQj">
                                                        Social
                                                    </p>
                                                    <div className="sc-vomxfd-4 ccLtB"></div>
                                                </div>
                                                <div className="sc-vomxfd-2 izeyVN">
                                                    <svg
                                                        width="100"
                                                        height="108"
                                                        viewBox="0 0 100 108"
                                                        fill="none"
                                                    >
                                                        <g filter="url(#filter0_bii_1276_123486)">
                                                            <path
                                                                d="M0 33.7914C0 29.1581 2.51812 24.8887 6.57901 22.6369L43.779 2.00871C47.6474 -0.13637 52.3526 -0.136367 56.221 2.00872L93.421 22.6369C97.4819 24.8887 100 29.1581 100 33.7914V74.2084C100 78.8417 97.4819 83.1111 93.421 85.363L56.221 105.991C52.3526 108.136 47.6474 108.136 43.779 105.991L6.57901 85.3629C2.51812 83.1111 0 78.8417 0 74.2084V33.7914Z"
                                                                fill="url(#paint0_linear_1276_123486)"
                                                            ></path>
                                                        </g>
                                                        <defs>
                                                            <filter
                                                                id="filter0_bii_1276_123486"
                                                                x="-3.31572"
                                                                y="-2.91582"
                                                                width="106.631"
                                                                height="113.831"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                            >
                                                                <feFlood
                                                                    floodOpacity="0"
                                                                    result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feGaussianBlur
                                                                    in="BackgroundImage"
                                                                    stdDeviation="1.65786"
                                                                ></feGaussianBlur>
                                                                <feComposite
                                                                    in2="SourceAlpha"
                                                                    operator="in"
                                                                    result="effect1_backgroundBlur_1276_123486"
                                                                ></feComposite>
                                                                <feBlend
                                                                    mode="normal"
                                                                    in="SourceGraphic"
                                                                    in2="effect1_backgroundBlur_1276_123486"
                                                                    result="shape"
                                                                ></feBlend>
                                                                <feColorMatrix
                                                                    in="SourceAlpha"
                                                                    type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha"
                                                                ></feColorMatrix>
                                                                <feOffset dx="-0.684877"></feOffset>
                                                                <feGaussianBlur stdDeviation="0.256829"></feGaussianBlur>
                                                                <feComposite
                                                                    in2="hardAlpha"
                                                                    operator="arithmetic"
                                                                    k2="-1"
                                                                    k3="1"
                                                                ></feComposite>
                                                                <feColorMatrix
                                                                    type="matrix"
                                                                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
                                                                ></feColorMatrix>
                                                                <feBlend
                                                                    mode="normal"
                                                                    in2="shape"
                                                                    result="effect2_innerShadow_1276_123486"
                                                                ></feBlend>
                                                                <feColorMatrix
                                                                    in="SourceAlpha"
                                                                    type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha"
                                                                ></feColorMatrix>
                                                                <feOffset dx="0.684877"></feOffset>
                                                                <feGaussianBlur stdDeviation="0.171219"></feGaussianBlur>
                                                                <feComposite
                                                                    in2="hardAlpha"
                                                                    operator="arithmetic"
                                                                    k2="-1"
                                                                    k3="1"
                                                                ></feComposite>
                                                                <feColorMatrix
                                                                    type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                                                                ></feColorMatrix>
                                                                <feBlend
                                                                    mode="normal"
                                                                    in2="effect2_innerShadow_1276_123486"
                                                                    result="effect3_innerShadow_1276_123486"
                                                                ></feBlend>
                                                            </filter>
                                                            <linearGradient
                                                                id="paint0_linear_1276_123486"
                                                                x1="6.26042"
                                                                y1="99.367"
                                                                x2="107.527"
                                                                y2="17.9425"
                                                                gradientUnits="userSpaceOnUse"
                                                            >
                                                                <stop stopColor="#8F96A1"></stop>
                                                                <stop
                                                                    offset="1"
                                                                    stopColor="#191E29"
                                                                ></stop>
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                    <p className="sc-vomxfd-6 hHxNQj">
                                                        App invitations
                                                    </p>
                                                    <div className="sc-vomxfd-4 ccLtB"></div>
                                                </div>
                                                <div className="sc-vomxfd-2 eUKOsi">
                                                    <svg
                                                        width="100"
                                                        height="108"
                                                        viewBox="0 0 100 108"
                                                        fill="none"
                                                    >
                                                        <g filter="url(#filter0_bii_1276_123486)">
                                                            <path
                                                                d="M0 33.7914C0 29.1581 2.51812 24.8887 6.57901 22.6369L43.779 2.00871C47.6474 -0.13637 52.3526 -0.136367 56.221 2.00872L93.421 22.6369C97.4819 24.8887 100 29.1581 100 33.7914V74.2084C100 78.8417 97.4819 83.1111 93.421 85.363L56.221 105.991C52.3526 108.136 47.6474 108.136 43.779 105.991L6.57901 85.3629C2.51812 83.1111 0 78.8417 0 74.2084V33.7914Z"
                                                                fill="url(#paint0_linear_1276_123486)"
                                                            ></path>
                                                        </g>
                                                        <defs>
                                                            <filter
                                                                id="filter0_bii_1276_123486"
                                                                x="-3.31572"
                                                                y="-2.91582"
                                                                width="106.631"
                                                                height="113.831"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                            >
                                                                <feFlood
                                                                    floodOpacity="0"
                                                                    result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feGaussianBlur
                                                                    in="BackgroundImage"
                                                                    stdDeviation="1.65786"
                                                                ></feGaussianBlur>
                                                                <feComposite
                                                                    in2="SourceAlpha"
                                                                    operator="in"
                                                                    result="effect1_backgroundBlur_1276_123486"
                                                                ></feComposite>
                                                                <feBlend
                                                                    mode="normal"
                                                                    in="SourceGraphic"
                                                                    in2="effect1_backgroundBlur_1276_123486"
                                                                    result="shape"
                                                                ></feBlend>
                                                                <feColorMatrix
                                                                    in="SourceAlpha"
                                                                    type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha"
                                                                ></feColorMatrix>
                                                                <feOffset dx="-0.684877"></feOffset>
                                                                <feGaussianBlur stdDeviation="0.256829"></feGaussianBlur>
                                                                <feComposite
                                                                    in2="hardAlpha"
                                                                    operator="arithmetic"
                                                                    k2="-1"
                                                                    k3="1"
                                                                ></feComposite>
                                                                <feColorMatrix
                                                                    type="matrix"
                                                                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
                                                                ></feColorMatrix>
                                                                <feBlend
                                                                    mode="normal"
                                                                    in2="shape"
                                                                    result="effect2_innerShadow_1276_123486"
                                                                ></feBlend>
                                                                <feColorMatrix
                                                                    in="SourceAlpha"
                                                                    type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha"
                                                                ></feColorMatrix>
                                                                <feOffset dx="0.684877"></feOffset>
                                                                <feGaussianBlur stdDeviation="0.171219"></feGaussianBlur>
                                                                <feComposite
                                                                    in2="hardAlpha"
                                                                    operator="arithmetic"
                                                                    k2="-1"
                                                                    k3="1"
                                                                ></feComposite>
                                                                <feColorMatrix
                                                                    type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                                                                ></feColorMatrix>
                                                                <feBlend
                                                                    mode="normal"
                                                                    in2="effect2_innerShadow_1276_123486"
                                                                    result="effect3_innerShadow_1276_123486"
                                                                ></feBlend>
                                                            </filter>
                                                            <linearGradient
                                                                id="paint0_linear_1276_123486"
                                                                x1="6.26042"
                                                                y1="99.367"
                                                                x2="107.527"
                                                                y2="17.9425"
                                                                gradientUnits="userSpaceOnUse"
                                                            >
                                                                <stop stopColor="#8F96A1"></stop>
                                                                <stop
                                                                    offset="1"
                                                                    stopColor="#191E29"
                                                                ></stop>
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                    <p className="sc-vomxfd-6 hHxNQj">
                                                        CHSB holders
                                                    </p>
                                                    <div className="sc-vomxfd-4 ccLtB"></div>
                                                </div>
                                                <div className="sc-vomxfd-1 dEeHpO">
                                                    <svg
                                                        width="282"
                                                        height="298"
                                                        viewBox="0 0 282 298"
                                                        fill="none"
                                                    >
                                                        <defs>
                                                            <filter
                                                                id="filter0_dii_1314_hexaongWithShadow"
                                                                x="0.458134"
                                                                y="0.124882"
                                                                width="281.084"
                                                                height="297.75"
                                                                filterUnits="userSpaceOnUse"
                                                                colorInterpolationFilters="sRGB"
                                                            >
                                                                <feFlood
                                                                    floodOpacity="0"
                                                                    result="BackgroundImageFix"
                                                                ></feFlood>
                                                                <feColorMatrix
                                                                    in="SourceAlpha"
                                                                    type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha"
                                                                ></feColorMatrix>
                                                                <feOffset></feOffset>
                                                                <feGaussianBlur stdDeviation="20.2709"></feGaussianBlur>
                                                                <feColorMatrix
                                                                    type="matrix"
                                                                    values="0 0 0 0 0.00392157 0 0 0 0 0.764706 0 0 0 0 0.552941 0 0 0 0.4 0"
                                                                ></feColorMatrix>
                                                                <feBlend
                                                                    mode="normal"
                                                                    in2="BackgroundImageFix"
                                                                    result="effect1_dropShadow_1314HexagonWithShadow"
                                                                ></feBlend>
                                                                <feBlend
                                                                    mode="normal"
                                                                    in="SourceGraphic"
                                                                    in2="effect1_dropShadow_1314HexagonWithShadow"
                                                                    result="shape"
                                                                ></feBlend>
                                                                <feColorMatrix
                                                                    in="SourceAlpha"
                                                                    type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha"
                                                                ></feColorMatrix>
                                                                <feOffset dx="-1.21626"></feOffset>
                                                                <feGaussianBlur stdDeviation="0.608128"></feGaussianBlur>
                                                                <feComposite
                                                                    in2="hardAlpha"
                                                                    operator="arithmetic"
                                                                    k2="-1"
                                                                    k3="1"
                                                                ></feComposite>
                                                                <feColorMatrix
                                                                    type="matrix"
                                                                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
                                                                ></feColorMatrix>
                                                                <feBlend
                                                                    mode="normal"
                                                                    in2="shape"
                                                                    result="effect2_innerShadow_1314_hexaongWithShadow"
                                                                ></feBlend>
                                                                <feColorMatrix
                                                                    in="SourceAlpha"
                                                                    type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha"
                                                                ></feColorMatrix>
                                                                <feOffset dx="1.21626"></feOffset>
                                                                <feGaussianBlur stdDeviation="0.608128"></feGaussianBlur>
                                                                <feComposite
                                                                    in2="hardAlpha"
                                                                    operator="arithmetic"
                                                                    k2="-1"
                                                                    k3="1"
                                                                ></feComposite>
                                                                <feColorMatrix
                                                                    type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                                                                ></feColorMatrix>
                                                                <feBlend
                                                                    mode="normal"
                                                                    in2="effect2_innerShadow_1314_hexaongWithShadow"
                                                                    result="effect3_innerShadow_1314_hexagonWithShadow"
                                                                ></feBlend>
                                                            </filter>
                                                            <linearGradient
                                                                id="paint0_linear_1314_hexagonWithShadow"
                                                                x1="269.619"
                                                                y1="149"
                                                                x2="41"
                                                                y2="149"
                                                                gradientUnits="userSpaceOnUse"
                                                            >
                                                                <stop stopColor="#13E5BF"></stop>
                                                                <stop
                                                                    offset="1"
                                                                    stopColor="#01C38D"
                                                                ></stop>
                                                            </linearGradient>
                                                        </defs>
                                                        <g filter="url(#filter0_dii_1314_hexaongWithShadow)">
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M229 211.883C235.601 208.178 241 199.082 241 191.671V106.329C241 98.918 235.601 89.8224 229 86.1168L153 43.446C146.399 39.7403 135.601 39.7403 129 43.446L52.9997 86.1168C46.3994 89.8224 41 98.918 41 106.329V191.671C41 199.082 46.3994 208.178 52.9997 211.883L129 254.554C135.601 258.26 146.399 258.26 153 254.554L229 211.883Z"
                                                                fill="url(#paint0_linear_1314_hexagonWithShadow)"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                    <p className="sc-vomxfd-3 jqhvmx">
                                                        8
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sc-x2sufe-7 hjWNTx">
                                            <a
                                                href="https://www.youtube.com/watch?v=XGLC_57s9L8"
                                                className="sc-1w54p7-0 gMFXzD"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <div className="sc-1w54p7-1 Kfgax">
                                                    <svg
                                                        width="40"
                                                        height="39"
                                                        viewBox="0 0 40 39"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M30.5562 4.83838H9.44391C7.25766 4.83838 5.48535 6.61068 5.48535 8.79694V29.9092C5.48535 32.0955 7.25766 33.8678 9.44391 33.8678H30.5562C32.7425 33.8678 34.5148 32.0955 34.5148 29.9092V8.79694C34.5148 6.61068 32.7425 4.83838 30.5562 4.83838Z"
                                                            fill="#EA3323"
                                                        ></path>
                                                        <path
                                                            d="M25.6445 18.9496L16.5728 24.1872L16.5728 13.7121L25.6445 18.9496Z"
                                                            fill="white"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <p className="sc-1w54p7-2 hBFJSl">
                                                    Find out next week’s
                                                    community index at
                                                    SwissBorg’s Pow Wow on
                                                    youtube. Every Tuesday @
                                                    9:00 PM CET
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`sc-14oz79x-0 ${
                                Vel === 3 ? "EliWM" : "dEeSlR"
                            }`}
                        >
                            <h3 className="sc-14oz79x-1 itMRKX">
                                undefined% p.a.
                            </h3>
                            <h4 className="sc-14oz79x-2 cKcMwF">
                                Top CHSB Yield rate
                            </h4>
                            <div className="sc-14oz79x-8 bgFOQq">
                                <h3 className="sc-14oz79x-5 hMRBte">
                                    Understanding the yields and yield rates
                                </h3>
                                <p className="sc-14oz79x-7 dldAkQ">
                                    The number of CHSB you hold in the yield
                                    program will influence the yield you earn,
                                    with different tiers of CHSB being assigned
                                    different yield rates. The most important
                                    thing to remember is, no matter how many
                                    CHSB you have in your yield wallet, you will
                                    always benefit from the maximum yield rate
                                    for your account type for each yield tier.
                                </p>
                                <div className="sc-1eo1jdh-0 icsiEI">
                                    <h3 className="sc-1eo1jdh-1 kaxcps">
                                        CHSB Yield 2.0 current rates
                                    </h3>
                                    <div className="sc-1eo1jdh-2 iiByyQ">
                                        <div className="sc-1eo1jdh-3 sc-1eo1jdh-4 gtPmgo izcZIa">
                                            <div className="sc-1eo1jdh-5 fAgshV"></div>
                                            <span className="sc-1eo1jdh-6 dZLmIP">
                                                Staked amount
                                            </span>
                                        </div>
                                        <div className="sc-1eo1jdh-3 sc-1eo1jdh-4 gtPmgo kBLqbE">
                                            <div className="sc-1eo1jdh-5 fAgshV">
                                                <div
                                                    data-gatsby-image-wrapper=""
                                                    className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
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
                                                        sizes="(min-width: 48px) 48px, 100vw"
                                                        decoding="async"
                                                        loading="lazy"
                                                        src="https://swissborg-website.cdn.prismic.io/swissborg-website/a0535509-cf20-4431-8fcf-f8deff9cc7f3_icon-tier%201-Standard.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48"
                                                        srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/a0535509-cf20-4431-8fcf-f8deff9cc7f3_icon-tier%201-Standard.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48 48w"
                                                        alt="Standard diamond"
                                                    />
                                                </div>
                                            </div>
                                            <span className="sc-1eo1jdh-6 dZLmIP">
                                                Standard
                                            </span>
                                        </div>
                                        <div className="sc-1eo1jdh-3 sc-1eo1jdh-4 gtPmgo fLvTzA">
                                            <div className="sc-1eo1jdh-5 fAgshV">
                                                <div
                                                    data-gatsby-image-wrapper=""
                                                    className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
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
                                                        sizes="(min-width: 48px) 48px, 100vw"
                                                        decoding="async"
                                                        loading="lazy"
                                                        src="https://swissborg-website.cdn.prismic.io/swissborg-website/7d7ee923-4e97-472b-8739-9aaa70f89d48_icon-tier%202-Explorer.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48"
                                                        srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/7d7ee923-4e97-472b-8739-9aaa70f89d48_icon-tier%202-Explorer.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48 48w"
                                                        alt="Explorer diamond"
                                                    />
                                                </div>
                                            </div>
                                            <span className="sc-1eo1jdh-6 dZLmIP">
                                                Explorer
                                            </span>
                                        </div>
                                        <div className="sc-1eo1jdh-3 sc-1eo1jdh-4 gtPmgo cSSkLm">
                                            <div className="sc-1eo1jdh-5 fAgshV">
                                                <div
                                                    data-gatsby-image-wrapper=""
                                                    className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
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
                                                        sizes="(min-width: 48px) 48px, 100vw"
                                                        decoding="async"
                                                        loading="lazy"
                                                        src="https://swissborg-website.cdn.prismic.io/swissborg-website/39d18134-8aee-4924-967f-3f570ad4b421_icon-tier%203-Community.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48"
                                                        srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/39d18134-8aee-4924-967f-3f570ad4b421_icon-tier%203-Community.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48 48w"
                                                        alt="Community diamond"
                                                    />
                                                </div>
                                            </div>
                                            <span className="sc-1eo1jdh-6 dZLmIP">
                                                Community
                                            </span>
                                        </div>
                                        <div className="sc-1eo1jdh-3 sc-1eo1jdh-4 gtPmgo bHQRPi">
                                            <div className="sc-1eo1jdh-5 fAgshV">
                                                <div
                                                    data-gatsby-image-wrapper=""
                                                    className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
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
                                                        sizes="(min-width: 48px) 48px, 100vw"
                                                        decoding="async"
                                                        loading="lazy"
                                                        src="https://swissborg-website.cdn.prismic.io/swissborg-website/f74bd7ff-243c-4112-91ed-a5fedcaa37ae_icon-tier%204-Pioneer.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48"
                                                        srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/f74bd7ff-243c-4112-91ed-a5fedcaa37ae_icon-tier%204-Pioneer.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48 48w"
                                                        alt="Pioneer diamond"
                                                    />
                                                </div>
                                            </div>
                                            <span className="sc-1eo1jdh-6 dZLmIP">
                                                Pioneer
                                            </span>
                                        </div>
                                        <div className="sc-1eo1jdh-3 sc-1eo1jdh-4 gtPmgo fVBGtY">
                                            <div className="sc-1eo1jdh-5 fAgshV">
                                                <div
                                                    data-gatsby-image-wrapper=""
                                                    className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
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
                                                        sizes="(min-width: 48px) 48px, 100vw"
                                                        decoding="async"
                                                        loading="lazy"
                                                        src="https://swissborg-website.cdn.prismic.io/swissborg-website/4b562bc4-54ae-4f65-811c-39103ff03a40_icon-tier%205-Generation.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48"
                                                        srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/4b562bc4-54ae-4f65-811c-39103ff03a40_icon-tier%205-Generation.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48 48w"
                                                        alt="Generation"
                                                    />
                                                </div>
                                            </div>
                                            <span className="sc-1eo1jdh-6 dZLmIP">
                                                Generation
                                            </span>
                                        </div>
                                        <div className="sc-1eo1jdh-3 sc-1eo1jdh-4 gtPmgo izcZIa">
                                            <div className="sc-1eo1jdh-5 fAgshV">
                                                <div
                                                    data-gatsby-image-wrapper=""
                                                    className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
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
                                                        sizes="(min-width: 48px) 48px, 100vw"
                                                        decoding="async"
                                                        loading="lazy"
                                                        src="https://swissborg-website.cdn.prismic.io/swissborg-website/4067bb23-fa7e-4e08-b513-4f82d4bb1098_icon-tier%206-Genesis.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48"
                                                        srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/4067bb23-fa7e-4e08-b513-4f82d4bb1098_icon-tier%206-Genesis.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48 48w"
                                                        alt="Genesis diamond"
                                                    />
                                                </div>
                                            </div>
                                            <span className="sc-1eo1jdh-6 dZLmIP">
                                                Genesis
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => setVel(Vel - 1)}
                        style={{
                            display: `${Vel == 0 ? "none" : "grid"}`,
                            transform: "rotate(180deg)",
                        }}
                        className="sc-1t1tjll-0 dJFfpF tab-arrow-left"
                        aria-label="Scroll to left"
                    >
                        <span
                            direction="left"
                            className="sc-1t1tjll-1 dlxRGu"
                        ></span>
                    </button>
                    <button
                        onClick={() => setVel(Vel + 1)}
                        style={{
                            display: `${Vel == 3 ? "none" : "grid"}`,
                        }}
                        className="sc-1t1tjll-0 dJFfpF tab-arrow-right"
                        aria-label="Scroll to right"
                    >
                        <span
                            direction="right"
                            className="sc-1t1tjll-1 dlxRGu"
                        ></span>
                    </button>
                </div>
            </div>
        </motion.section>
    );
}
