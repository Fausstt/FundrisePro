import React from "react";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import logo from "../../../img/01.png";
import logo2 from "../../../img/icon10.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const M1 = {
    hidden: {
        x: -400,
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
export default function BuyChsb06() {
    return (
        <Parallax
            renderLayer={(percentage) => (
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    className="sc-1lw4m5x-0 sc-1ao1ueu-0 iYpozj BoQfu"
                >
                    <div className="sc-747qpt-0 ixActg">
                        <div className="sc-1lw4m5x-1 sc-747qpt-3 iukxsw gcFa-DQ panel-container-0 image-floating">
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
                                >
                                    <div
                                        data-gatsby-image-wrapper=""
                                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained panel-illustration"
                                    >
                                        <div
                                            style={{
                                                maxWidth: "24px",
                                                display: "block",
                                            }}
                                        >
                                            <img
                                                alt=""
                                                role="presentation"
                                                aria-hidden="true"
                                                src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;24&#x27; width=&#x27;24&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                            sizes="(maxWidth: 425px) 90vw, 300px"
                                            decoding="async"
                                            loading="lazy"
                                            src={logo}
                                            alt="CHSB Token"
                                        />
                                    </div>
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
                                        </div>
                                        <div className="sc-6alekw-3 FAbgL chsb-breakdown-text-cell"></div>
                                    </div>
                                    <div
                                        style={{
                                            marginTop: "100px",
                                            transform: `translate(0px, -${
                                                percentage * 200
                                            }px)`,
                                        }}
                                        className="sc-1vdo445-0 hDRRBy card-container"
                                    >
                                        <div
                                            data-gatsby-image-wrapper=""
                                            className="gatsby-image-wrapper sc-1vdo445-1 bSpzgl"
                                        >
                                            <div
                                                aria-hidden="true"
                                                style={{
                                                    paddingTop:
                                                        "102.08333333333333%",
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
                                                sizes="100vw"
                                                decoding="async"
                                                loading="lazy"
                                                src={logo2}
                                                alt="Premium"
                                            />
                                        </div>
                                        <p className="sc-1vdo445-2 isOMRu">
                                            CHSB locked
                                        </p>
                                        <h3 className="sc-1vdo445-3 hDvnTD">
                                            136.91 M
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={M2}
                                className="sc-1lw4m5x-3 sc-747qpt-2 kGWgrY kKGdbe panel-text-container"
                            >
                                <div className="sc-747qpt-4 dtpwBq">
                                    <h2>Locking</h2>
                                </div>
                                <div className="sc-747qpt-5 bgcotK">
                                    <p className="paragraph-className">
                                        Users can lock their CHSB tokens for a
                                        pre-defined period, reducing the
                                        available supply and increasing scarcity
                                        while enjoying Premium benefits.
                                    </p>
                                </div>
                                <Link to="/earn-crypto">
                                    <Button
                                        sx={{
                                            width: "200px",
                                            height: "60px",
                                            borderRadius: "15px",
                                            fontSize: "1.8rem",
                                            fontWeight: 700,
                                            lineHeight: "1tem",
                                        }}
                                        size="large"
                                        variant="contained"
                                    >
                                        More CHSB metrics
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
