import React from "react";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
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
export default function BuyChsb04() {
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
                                        src="https://images.prismic.io/swissborg-website/a86c7e44-3fe0-40bf-a01e-97203abd0d1a_Community%20index.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;rect=0%2C0%2C800%2C800&amp;w=1600&amp;h=1600"
                                        alt="Community Score Chart"
                                    />
                                </div>
                                <div
                                    style={{
                                        marginTop: "200px",
                                        transform: `translate(0px, -${
                                            percentage * 400
                                        }px)`,
                                    }}
                                    className="sc-1vdo445-0 sPiGI card-container"
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
                                            src="https://swissborg-website.cdn.prismic.io/swissborg-website/661d369d-f0f0-4df3-bee6-ff2fb0ae9212_community-icon-white.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=49"
                                            alt="Community"
                                        />
                                    </div>
                                    <p className="sc-1vdo445-2 isOMRu">
                                        COMMUNITY SCORE
                                    </p>
                                    <h3 className="sc-1vdo445-3 hDvnTD">
                                        8/10
                                    </h3>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={M2}
                                className="sc-1lw4m5x-3 sc-747qpt-2 kGWgrY kKGdbe panel-text-container"
                            >
                                <div className="sc-747qpt-4 dtpwBq">
                                    <h2>Community Index</h2>
                                </div>
                                <div className="sc-747qpt-5 bgcotK">
                                    <p className="paragraph-className">
                                        SwissBorg’s initiative is returning to
                                        the core values of blockchain. We have
                                        developed a yielding program for the
                                        CHSB token that is calculated based on
                                        our scoring system - the Community
                                        Index.
                                    </p>
                                </div>
                                <Link to="/">
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
                                        Read the white paper
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
