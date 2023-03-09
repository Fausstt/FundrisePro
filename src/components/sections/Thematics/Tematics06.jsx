import { Button } from "@mui/material";
import React from "react";
import { Parallax } from "react-parallax";
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
        // transitionDelay: "1s",
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
const styles = {
    Button: {
        width: "180px",
        height: "60px",
        borderRadius: "15px",
        fontSize: "2rem",
        fontWeight: 700,
        lineHeight: "1tem",
    },
    Button01: {
        width: "180px",
        height: "60px",
        borderRadius: "15px",
        fontSize: "2rem",
        fontWeight: 700,
        lineHeight: "1tem",
        color: "#000",
    },
};
export default function Tematics06({ OPS, OPL }) {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            className="sc-1lw4m5x-0 eiuycK"
        >
            <div className="sc-1lw4m5x-1 sc-mht4fz-4 iukxsw1 kXnNde">
                <div className="sc-mht4fz-0 gwyBVr">
                    <motion.div variants={H1} className="sc-mht4fz-5 eltltj">
                        <h2>Save time and energy with reallocation</h2>
                    </motion.div>
                    <motion.div variants={H2} className="sc-mht4fz-6 gcnFDc">
                        <p className="sc-mht4fz-7 iPzTfy">
                            FundrisePro reviews the digital assets inside a
                            Thematic every 70 days, evaluating new market
                            opportunities and low-performing assets. The
                            coins/tokens and their allocation are therefore
                            periodically changed, ensuring the Thematic stays
                            true to its theme and performs at its optimal level.
                        </p>
                    </motion.div>
                    <div
                        style={{ gap: "50px", marginTop: "20px" }}
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
                            onClick={OPL}
                            color="secondary"
                            variant="contained"
                            sx={styles.Button01}
                        >
                            Log in
                        </Button>
                    </div>
                </div>
                <Parallax
                    renderLayer={(percentage) => (
                        <div className="sc-mht4fz-1 fokCAV">
                            <div
                                style={{
                                    transform: `translate(0px, -${
                                        percentage * 200
                                    }px)`,
                                    position: "relative",
                                    top: "100px",
                                }}
                                className="sc-mht4fz-2 gCdEBc"
                            >
                                <div
                                    data-gatsby-image-wrapper=""
                                    className="gatsby-image-wrapper sc-mht4fz-3 gKILQN"
                                >
                                    <div
                                        aria-hidden="true"
                                        style={{ paddingTop: "100%" }}
                                    ></div>
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
                                        sizes="100vw"
                                        decoding="async"
                                        loading="lazy"
                                        src="https://images.prismic.io/swissborg-website/c64dacf2-8680-46a6-83fd-9c3b39d839cc_ThematicsPage-Reallocation.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=2200&amp;h=2200"
                                        alt="Save time and energy with reallocation"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                />
            </div>
        </motion.section>
    );
}
