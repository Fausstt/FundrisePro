import React from "react";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import l from "../../../img/icon19.webp";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

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
export default function BuyChsb02() {
    return (
        <Parallax
            renderLayer={(percentage) => (
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    className="sc-1lw4m5x-0 sc-1ao1ueu-0 iYpozj dTkNNE"
                >
                    <div className="sc-747qpt-0 ixActg">
                        <div className="sc-1lw4m5x-1 sc-747qpt-3 iukxsw gcFa-DQ panel-container-0 ">
                            <motion.div
                                variants={M1}
                                className="sc-1lw4m5x-3 sc-747qpt-1 kGWgrY bblOil image-cell-0 image-cell"
                            >
                                <div
                                    style={{
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
                                            src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;1601&#x27; width=&#x27;1600&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                        src={l}
                                        alt="CHSB flowers"
                                    />
                                </div>
                            </motion.div>
                            <motion.div
                                variants={M2}
                                className="sc-1lw4m5x-3 sc-747qpt-2 kGWgrY kKGdbe panel-text-container"
                            >
                                <div className="sc-747qpt-4 dtpwBq">
                                    <h2>CHSB Yield 2.0</h2>
                                </div>
                                <div className="sc-747qpt-5 bgcotK">
                                    <p className="paragraph-className">
                                        The CHSB Smart Yield account
                                        revolutionises earning on your cryptos.
                                        By linking the yield paid to the
                                        performance of the FundrisePro
                                        ecosystem, this sustainable yielding
                                        program will reward token holders in the
                                        long term.
                                    </p>
                                </div>
                                <Link to="/chsb-yield">
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
                                        Start yielding
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
