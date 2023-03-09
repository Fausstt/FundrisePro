import React from "react";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

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
export default function BuyChsb05() {
    return (
        <Parallax
            renderLayer={(percentage) => (
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    className="sc-1lw4m5x-0 sc-1ao1ueu-0 iYpozj jriAaZ"
                >
                    <div className="sc-747qpt-0 ixActg">
                        <div className="sc-1lw4m5x-1 sc-747qpt-3 iukxsw ebCaSs panel-container-0 ">
                            <motion.div
                                variants={M1}
                                className="sc-1lw4m5x-3 sc-747qpt-1 kGWgrY bblOil image-cell-0 image-cell"
                            >
                                <div
                                    style={{
                                        marginTop: "200px",
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
                                            src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;1900&#x27; width=&#x27;1600&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                            width: "350px",
                                            height: "350px",
                                        }}
                                        sizes="(maxWidth: 425px) 90vw, 300px"
                                        decoding="async"
                                        loading="lazy"
                                        src="https://images.prismic.io/swissborg-website/a546cb04-3519-4578-beab-fa7cc6f86f1e_burn-hero-icon.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=308&amp;h=308"
                                        alt="CHSB Protect and Burn"
                                    />
                                </div>
                                <div
                                    style={{
                                        marginTop: "200px",
                                        transform: `translate(0px, -${
                                            percentage * 400
                                        }px)`,
                                    }}
                                    className="sc-1vdo445-0 dAjQKF card-container"
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
                                            src="https://swissborg-website.cdn.prismic.io/swissborg-website/974d1923-566c-47a0-ab4d-a94e8a971190_chsb-icon-gray.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=49"
                                            alt="CHSB Gray"
                                        />
                                    </div>
                                    <p className="sc-1vdo445-2 isOMRu">
                                        CHSB Burned
                                    </p>
                                    <h3 className="sc-1vdo445-3 hDvnTD">
                                        4.9 M
                                    </h3>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={M2}
                                className="sc-1lw4m5x-3 sc-747qpt-2 kGWgrY kKGdbe panel-text-container"
                            >
                                <div className="sc-747qpt-4 dtpwBq">
                                    <h2>CHSB Protect and Choose</h2>
                                </div>
                                <div className="sc-747qpt-5 bgcotK">
                                    <p className="paragraph-className">
                                        20% of the revenue earned from exchange
                                        fees is used to buy back CHSB tokens.
                                        Then, at the end of each quarter, our
                                        CHSB holders can vote on how the tokens
                                        will be used.
                                    </p>
                                </div>
                                <Link href="/">
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
                                        When Burn?
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
