import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

export default function Section_10() {
    const H1 = {
        hidden: {
            y: +50,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transitionDuration: "0.5s",
            transitionDelay: "0.4s",
        },
    };
    const P1 = {
        hidden: {
            x: -150,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transitionDuration: "0.5s",
            transitionDelay: "0.4s",
        },
    };
    const P2 = {
        hidden: {
            x: -400,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transitionDuration: "0.5s",
            transitionDelay: "0.4s",
        },
    };
    const P3 = {
        hidden: {
            x: -500,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transitionDuration: "0.5s",
            transitionDelay: "0.4s",
        },
    };
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            className="sc-1lw4m5x-0 sc-3ipwyl-0 iYpozj"
        >
            <div className="sc-1lw4m5x-1 sc-3ipwyl-1 iukxsw gzxWNf">
                <motion.div
                    variants={H1}
                    className="sc-1lw4m5x-3 sc-3ipwyl-2 kGWgrY Hneqe"
                >
                    <h2>
                        Join 379,152 smart users and start investing in
                        cryptoassets at the best available price anywhere at any
                        time
                    </h2>
                </motion.div>
                <div className="sc-1lw4m5x-3 sc-3ipwyl-3 kGWgrY knnVsM">
                    <motion.div variants={P1} className="sc-3ipwyl-4 chLfvf">
                        <div className="sc-1g3jj8m-0 ekGnVt card--container">
                            <div className="sc-1g3jj8m-1 itbfKP">
                                <div
                                    data-gatsby-image-wrapper=""
                                    className="gatsby-image-wrapper"
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
                                        style={{ opacity: "1" }}
                                        sizes="70px"
                                        decoding="async"
                                        loading="lazy"
                                        src="https://images.prismic.io/swissborg-website/5a646741-d1df-44d1-9472-ab00a9e88ecc_avatar-boxmining.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;rect=0%2C0%2C70%2C70&amp;w=70&amp;h=70"
                                        srcSet="https://images.prismic.io/swissborg-website/5a646741-d1df-44d1-9472-ab00a9e88ecc_avatar-boxmining.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;rect=0%2C0%2C70%2C70&amp;w=65&amp;h=65 65w,https://images.prismic.io/swissborg-website/5a646741-d1df-44d1-9472-ab00a9e88ecc_avatar-boxmining.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;rect=0%2C0%2C70%2C70&amp;w=70&amp;h=70 70w"
                                        alt="boxmining avatar"
                                    />
                                </div>
                            </div>
                            <div className="sc-1g3jj8m-2 SzqJE">
                                <p className="sc-1g3jj8m-3 kEEVtN">
                                    &quot; They have an app where you can
                                    directly buy crypto and cash out as well, a
                                    BIG portal, that doesn’t have margins for
                                    premium holders… &quot;
                                </p>
                            </div>
                            <div className="sc-1g3jj8m-4 lkwQVk">
                                <Typography
                                    variant="span"
                                    color={"primary"}
                                    className="sc-1g3jj8m-5 ebOwAX"
                                >
                                    @boxmining
                                </Typography>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={P2} className="sc-3ipwyl-4 chLfvf">
                        <div className="sc-1g3jj8m-0 ekGnVt card--container">
                            <div className="sc-1g3jj8m-1 itbfKP">
                                <div
                                    data-gatsby-image-wrapper=""
                                    className="gatsby-image-wrapper"
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
                                        style={{ opacity: "1" }}
                                        sizes="70px"
                                        decoding="async"
                                        loading="lazy"
                                        src="https://images.prismic.io/swissborg-website/b5e50c5a-338b-4ac0-bc4b-89fee68ed648_avatar-ivan.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;rect=0%2C0%2C70%2C70&amp;w=70&amp;h=70"
                                        srcSet="https://images.prismic.io/swissborg-website/b5e50c5a-338b-4ac0-bc4b-89fee68ed648_avatar-ivan.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;rect=0%2C0%2C70%2C70&amp;w=65&amp;h=65 65w,https://images.prismic.io/swissborg-website/b5e50c5a-338b-4ac0-bc4b-89fee68ed648_avatar-ivan.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;rect=0%2C0%2C70%2C70&amp;w=70&amp;h=70 70w"
                                        alt="IvanonTech avatar"
                                    />
                                </div>
                            </div>
                            <div className="sc-1g3jj8m-2 SzqJE">
                                <p className="sc-1g3jj8m-3 kEEVtN">
                                    &quot; The most important thing about
                                    FundrisePro is that it is the best way to
                                    buy #crypto in many countries &quot;
                                </p>
                            </div>
                            <div className="sc-1g3jj8m-4 lkwQVk">
                                <Typography
                                    variant="span"
                                    color={"primary"}
                                    className="sc-1g3jj8m-5 ebOwAX"
                                >
                                    @IvanonTech
                                </Typography>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={P3} className="sc-3ipwyl-4 chLfvf">
                        <div className="sc-1g3jj8m-0 ekGnVt card--container">
                            <div className="sc-1g3jj8m-1 itbfKP">
                                <div
                                    data-gatsby-image-wrapper=""
                                    className="gatsby-image-wrapper"
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
                                        style={{ opacity: "1" }}
                                        sizes="70px"
                                        decoding="async"
                                        loading="lazy"
                                        src="https://images.prismic.io/swissborg-website/1236c910-67aa-462c-8450-60a781f9e4e8_avatar-tmg.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;rect=0%2C0%2C70%2C70&amp;w=70&amp;h=70"
                                        srcSet="https://images.prismic.io/swissborg-website/1236c910-67aa-462c-8450-60a781f9e4e8_avatar-tmg.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;rect=0%2C0%2C70%2C70&amp;w=65&amp;h=65 65w,https://images.prismic.io/swissborg-website/1236c910-67aa-462c-8450-60a781f9e4e8_avatar-tmg.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;rect=0%2C0%2C70%2C70&amp;w=70&amp;h=70 70w"
                                        alt="ThatMartiniGuy avatar"
                                    />
                                </div>
                            </div>
                            <div className="sc-1g3jj8m-2 SzqJE">
                                <p className="sc-1g3jj8m-3 kEEVtN">
                                    &quot; They have the lowest rates and the
                                    best execution possible. You get more
                                    Bitcoin for your money using FundrisePro
                                    platform even when you include fees...
                                    &quot;
                                </p>
                            </div>
                            <div className="sc-1g3jj8m-4 lkwQVk">
                                <Typography
                                    variant="span"
                                    color={"primary"}
                                    className="sc-1g3jj8m-5 ebOwAX"
                                >
                                    @ThatMartiniGuy
                                </Typography>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
