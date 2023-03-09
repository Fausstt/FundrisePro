import { Button } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const styles = {
    Button: {
        width: "180px",
        height: "60px",
        borderRadius: "15px",
        fontSize: "2rem",
        fontWeight: 700,
        lineHeight: "1tem",
    },
};
const M1 = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transitionDuration: "1s",
    },
};
const H1 = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transitionDuration: "1s",
        transitionDelay: "0.2s",
    },
};
const H2 = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transitionDuration: "1s",
        transitionDelay: "0.4s",
    },
};
const H3 = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transitionDuration: "1s",
        transitionDelay: "0.6s",
    },
};
export default function Tematics01({ OPL, OPS }) {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            className="sc-1lw4m5x-0 sc-snv83o-0 eYfLRZ jRaHvq"
        >
            <div className="sc-1lw4m5x-1 sc-snv83o-1 iukxsw jsYDMz">
                <div className="sc-1lw4m5x-20 sc-17e48i9-0 sc-1l7l1tx-2 bZVTlB huNnTv gctCyG">
                    <div className="sc-1l7l1tx-0 BxzFX">
                        <motion.div
                            variants={H1}
                            className="sc-17e48i9-1 YNpDi"
                        >
                            <h1>
                                Enter the New Era of Investing with Thematics
                            </h1>
                        </motion.div>
                        <motion.div
                            variants={H2}
                            className="sc-17e48i9-2 fFOnEP"
                        >
                            <p>
                                With early &amp; exclusive access to our most
                                pioneering product, you can start investing in a
                                theme-based crypto-bundle, hand-selected and
                                powered by advanced algorithms! 
                            </p>
                        </motion.div>
                        <motion.div
                            variants={H3}
                            className="sc-lpzmvp-0 fFIZyS sc-1l7l1tx-5 GsnXh rating--container"
                        >
                            <div className="sc-lpzmvp-1 hWmKob buttons-container">
                                <div
                                    style={{ gap: "50px" }}
                                    className="sc-10assbt-0 cOVofC"
                                >
                                    <Button
                                        onClick={OPS}
                                        variant="contained"
                                        sx={styles.Button}
                                    >
                                        Sing up
                                    </Button>
                                    <Button
                                        onClick={OPS}
                                        color="secondary"
                                        variant="contained"
                                        sx={styles.Button}
                                    >
                                        Log in
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div variants={M1} className="sc-1l7l1tx-1 kSigqV">
                        <div>
                            <svg
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 550 550"
                                className="sc-1w24omf-1 gIFPvi"
                            >
                                <defs>
                                    <linearGradient
                                        gradientTransform="translate(0 550.6) scale(1 -1)"
                                        gradientUnits="userSpaceOnUse"
                                        id="linear-gradient"
                                        x1="88.36"
                                        x2="441.73"
                                        y1="15.45"
                                        y2="508"
                                    >
                                        <stop
                                            offset="0"
                                            stopColor="#08c99b"
                                        ></stop>
                                        <stop
                                            offset=".47"
                                            stopColor="#007EB9"
                                        ></stop>
                                        <stop
                                            offset="1"
                                            stopColor="#00A1EB"
                                        ></stop>
                                    </linearGradient>
                                    <linearGradient
                                        gradientTransform="translate(0 550.6) scale(1 -1)"
                                        gradientUnits="userSpaceOnUse"
                                        id="linear-gradient-2"
                                        x1="118.9"
                                        x2="414.45"
                                        y1="58.02"
                                        y2="469.97"
                                    >
                                        <stop
                                            offset="0"
                                            stopColor="#08c99b"
                                        ></stop>
                                        <stop
                                            offset=".47"
                                            stopColor="#007EB9"
                                        ></stop>
                                        <stop
                                            offset="1"
                                            stopColor="#00A1EB"
                                        ></stop>
                                    </linearGradient>
                                </defs>
                                <circle
                                    className="circle-1"
                                    cx="275"
                                    cy="275"
                                    r="170"
                                ></circle>
                                <circle
                                    className="circle-2"
                                    cx="275"
                                    cy="275"
                                    r="170"
                                ></circle>
                            </svg>
                            <div className="sc-1w24omf-0 ezxEap">
                                <div
                                    data-gatsby-image-wrapper=""
                                    className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                                >
                                    <div
                                        style={{
                                            maxWidth: "1631px",
                                            display: "block",
                                        }}
                                    >
                                        <img
                                            alt=""
                                            role="presentation"
                                            aria-hidden="true"
                                            src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;1654&#x27; width=&#x27;1631&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                            transition: "opacity 500ms linear",
                                        }}
                                    ></div>
                                    <img
                                        data-gatsby-image-ssr=""
                                        data-main-image=""
                                        style={{
                                            opacity: "1",
                                        }}
                                        sizes="(minWidth: 1631px) 1631px, 100vw"
                                        decoding="async"
                                        loading="lazy"
                                        src="https://images.prismic.io/swissborg-website/f374ee2e-665d-44cb-ad60-d52db6e23c81_ThematicsPage-Hero-Web3-pie-chart.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1631&amp;h=1654"
                                        alt="Thematics Hero Animation"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
