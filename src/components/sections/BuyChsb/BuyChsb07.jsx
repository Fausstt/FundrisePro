import React from "react";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import logo from "../../../img/icon18.webp";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const M2 = {
    hidden: {
        x: -400,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transitionDuration: "1s",
    },
};
const M1 = {
    hidden: {
        x: +400,
        opacity: 0,
    },
    visible: {
        position: "relative",
        top: "200px",
        x: 0,
        opacity: 1,
        transitionDuration: "1s",
    },
};
export default function BuyChsb07() {
    return (
        <Parallax
            renderLayer={(percentage) => (
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    className="sc-1lw4m5x-0 sc-1ao1ueu-0 iYpozj dTkNNE"
                >
                    <div className="sc-747qpt-0 ixActg">
                        <div className="sc-1lw4m5x-1 sc-747qpt-3 iukxsw ebCaSs panel-container-0 ">
                            <motion.div
                                variants={M1}
                                className="sc-1lw4m5x-3 sc-747qpt-1 kGWgrY bblOil image-cell-0 image-cell"
                            >
                                <div
                                    style={{
                                        marginBottom: "100px",
                                        transform: `translate(0px, -${
                                            percentage * 200
                                        }px)`,
                                    }}
                                    data-gatsby-image-wrapper=""
                                    className="gatsby-image-wrapper gatsby-image-wrapper-constrained panel-illustration"
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
                                            src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;1600&#x27; width=&#x27;1600&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                        style={{ opacity: "1" }}
                                        sizes="(maxWidth: 425px) 90vw, 300px"
                                        decoding="async"
                                        loading="lazy"
                                        src={logo}
                                        alt="Premium Benefits"
                                    />
                                </div>
                            </motion.div>
                            <motion.div
                                variants={M2}
                                className="sc-1lw4m5x-3 sc-747qpt-2 kGWgrY kKGdbe panel-text-container"
                            >
                                <div className="sc-747qpt-4 dtpwBq">
                                    <h2>Premium Benefits</h2>
                                </div>
                                <div className="sc-747qpt-5 bgcotK">
                                    <p className="paragraph-className">
                                        By holding CHSB tokens, Premium users
                                        show their confidence and trust in the
                                        CHSB&#x27;s long term value. Premium
                                        users unlock unique benefits:
                                    </p>
                                    <ul>
                                        <li className="sc-747qpt-7 gpBmZr">
                                            <div className="sc-747qpt-6 ckVmAK">
                                                <svg
                                                    width="42"
                                                    height="39"
                                                    viewBox="0 0 42 39"
                                                    fill="none"
                                                >
                                                    <circle
                                                        cx="21"
                                                        cy="21"
                                                        r="8.16667"
                                                        fill="white"
                                                        stroke="url(#circle_stroke_0)"
                                                        strokeWidth="1.16667"
                                                        strokeLinecap="round"
                                                    ></circle>
                                                    <circle
                                                        cx="21.0004"
                                                        cy="21.0005"
                                                        r="5.25"
                                                        fill="#13E5BF"
                                                        fillOpacity="0.2"
                                                    ></circle>
                                                    <path
                                                        d="M18.6668 21L20.3638 22.75L23.3335 19.25"
                                                        stroke="url(#circle_stroke_1)"
                                                        strokeWidth="1.16667"
                                                        strokeLinecap="round"
                                                    ></path>
                                                    <defs>
                                                        <linearGradient
                                                            id="circle_stroke_0"
                                                            x1="12.25"
                                                            y1="12.25"
                                                            x2="12.25"
                                                            y2="29.75"
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop stopColor="#13E5BF"></stop>
                                                            <stop
                                                                offset="1"
                                                                stopColor="#01C38D"
                                                            ></stop>
                                                        </linearGradient>
                                                        <linearGradient
                                                            id="circle_stroke_1"
                                                            x1="18.6668"
                                                            y1="19.25"
                                                            x2="18.6668"
                                                            y2="22.75"
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop stopColor="#13E5BF"></stop>
                                                            <stop
                                                                offset="1"
                                                                stopColor="#01C38D"
                                                            ></stop>
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <strong>Lower fees</strong> When you
                                            buy/sell Bitcoin, CHSB and
                                            stablecoins
                                        </li>
                                        <li className="sc-747qpt-7 gpBmZr">
                                            <div className="sc-747qpt-6 ckVmAK">
                                                <svg
                                                    width="42"
                                                    height="39"
                                                    viewBox="0 0 42 39"
                                                    fill="none"
                                                >
                                                    <circle
                                                        cx="21"
                                                        cy="21"
                                                        r="8.16667"
                                                        fill="white"
                                                        stroke="url(#circle_stroke_0)"
                                                        strokeWidth="1.16667"
                                                        strokeLinecap="round"
                                                    ></circle>
                                                    <circle
                                                        cx="21.0004"
                                                        cy="21.0005"
                                                        r="5.25"
                                                        fill="#13E5BF"
                                                        fillOpacity="0.2"
                                                    ></circle>
                                                    <path
                                                        d="M18.6668 21L20.3638 22.75L23.3335 19.25"
                                                        stroke="url(#circle_stroke_1)"
                                                        strokeWidth="1.16667"
                                                        strokeLinecap="round"
                                                    ></path>
                                                    <defs>
                                                        <linearGradient
                                                            id="circle_stroke_0"
                                                            x1="12.25"
                                                            y1="12.25"
                                                            x2="12.25"
                                                            y2="29.75"
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop stopColor="#13E5BF"></stop>
                                                            <stop
                                                                offset="1"
                                                                stopColor="#01C38D"
                                                            ></stop>
                                                        </linearGradient>
                                                        <linearGradient
                                                            id="circle_stroke_1"
                                                            x1="18.6668"
                                                            y1="19.25"
                                                            x2="18.6668"
                                                            y2="22.75"
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop stopColor="#13E5BF"></stop>
                                                            <stop
                                                                offset="1"
                                                                stopColor="#01C38D"
                                                            ></stop>
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <strong>Yield boost </strong>
                                            Increase your yield on your cryptos
                                            including: USDC, BTC, ETH, CHSB and
                                            more
                                        </li>
                                    </ul>
                                </div>
                                <Link href="/">
                                    <Button
                                        sx={{
                                            width: "280px",
                                            height: "60px",
                                            borderRadius: "15px",
                                            fontSize: "1.5rem",
                                            fontWeight: 700,
                                            lineHeight: "1tem",
                                        }}
                                        size="large"
                                        variant="contained"
                                    >
                                        Become a Premium member
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>
            )}
        />
    );
}
