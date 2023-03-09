import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../../../img/0102.png";
import L1 from "../../../img/icon11.png";
import L2 from "../../../img/icon14.png";
import L3 from "../../../img/icon10.png";
import L4 from "../../../img/icon13.png";
import L5 from "../../../img/icon05.png";
import L6 from "../../../img/icon06.png";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const H1 = {
    hidden: {
        y: +30,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transitionDuration: "0.3s",
    },
};
const H2 = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transitionDuration: "1s",
    },
};
const P1 = {
    hidden: {
        y: -50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transitionDuration: "0.5s",
        transitionDelay: "0.4s",
    },
};
const P2 = {
    hidden: {
        y: -50,
        x: +50,
        opacity: 0,
    },
    visible: {
        y: 0,
        x: 0,
        opacity: 1,
        transitionDuration: "0.5s",
        transitionDelay: "0.6s",
    },
};
const P3 = {
    hidden: {
        y: +50,
        x: +50,
        opacity: 0,
    },
    visible: {
        y: 0,
        x: 0,
        opacity: 1,
        transitionDuration: "0.5s",
        transitionDelay: "0.8s",
    },
};
const P4 = {
    hidden: {
        y: +50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transitionDuration: "0.5s",
        transitionDelay: "1s",
    },
};
const P5 = {
    hidden: {
        y: +50,
        x: -50,
        opacity: 0,
    },
    visible: {
        y: 0,
        x: 0,
        opacity: 1,
        transitionDuration: "0.5s",
        transitionDelay: "1.2s",
    },
};
const P6 = {
    hidden: {
        y: -50,
        x: -50,
        opacity: 0,
    },
    visible: {
        y: 0,
        x: 0,
        opacity: 1,
        transitionDuration: "0.5s",
        transitionDelay: "1.6s",
    },
};
const PP1 = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transitionDuration: "2s",
        transitionDelay: "0.4s",
    },
};
const PP2 = {
    hidden: {
        transform: "rotate(0deg)",
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transform: "rotate(360deg)",
        transitionDuration: "0.3s",
        transitionDelay: "0.4s",
    },
};
export default function Section_09() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            className="sc-xt6w9w-1 iLXxwi"
        >
            <motion.div variants={H1} className="sc-xt6w9w-2 iKlpif">
                <h2>CHSB Token</h2>
            </motion.div>
            <motion.div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: "20px",
                }}
                variants={H1}
                className="sc-xt6w9w-0 hwxsmC"
            >
                <p>
                    FundrisePro community members can participate and invest in
                    the FundrisePro ecosystem with our CHSB multi-utility token
                    issued on the Ethereum blockchain.
                </p>
                <Link to="/buy-chsb">
                    <Button
                        sx={{
                            width: "220px",
                            height: "70px",
                            borderRadius: "15px",
                            fontSize: "1.8rem",
                            fontWeight: 700,
                            lineHeight: "1tem",
                        }}
                        variant="contained"
                    >
                        Discover CHSB Toke
                    </Button>
                </Link>
            </motion.div>

            <motion.ul variants={H2} className="mobile-only">
                <li className="sc-12zym2-1 fZIMcL">
                    <div
                        data-gatsby-image-wrapper=""
                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                    >
                        <div style={{ maxWidth: "48px", display: "block" }}>
                            <img
                                alt=""
                                role="presentation"
                                aria-hidden="true"
                                src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;48&#x27; width=&#x27;48&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                            sizes="(min-width: 48px) 48px, 100vw"
                            decoding="async"
                            loading="lazy"
                            src="https://swissborg-website.cdn.prismic.io/swissborg-website/08617039-1fbf-4143-811b-5b1ab577c545_SwissBorg-Referendums.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48"
                            srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/08617039-1fbf-4143-811b-5b1ab577c545_SwissBorg-Referendums.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48 48w"
                            alt="FundrisePro Referendums"
                        />
                    </div>
                    <div className="sc-12zym2-2 bMqqnH">
                        <h3 className="sc-12zym2-0 bMKpAz">Participation</h3>
                        <p>
                            Take part in the future of FundrisePro by giving
                            your opinion in referendums.
                        </p>
                    </div>
                </li>
                <li className="sc-12zym2-1 fZIMcL">
                    <div
                        data-gatsby-image-wrapper=""
                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                    >
                        <div style={{ maxWidth: "81px", display: "block" }}>
                            <img
                                alt=""
                                role="presentation"
                                aria-hidden="true"
                                src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;81&#x27; width=&#x27;81&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                            sizes="(min-width: 81px) 81px, 100vw"
                            decoding="async"
                            loading="lazy"
                            src="https://swissborg-website.cdn.prismic.io/swissborg-website/dae0dfca-e683-4ccd-949b-799e2be76b4c_stacking-chsb-icon.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=81&amp;h=81"
                            srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/dae0dfca-e683-4ccd-949b-799e2be76b4c_stacking-chsb-icon.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=81&amp;h=81 81w"
                            alt="Staking CHSB Icon"
                        />
                    </div>
                    <div className="sc-12zym2-2 bMqqnH">
                        <h3 className="sc-12zym2-0 bMKpAz">Staking</h3>
                        <p>
                            Stake CHSB to become Premium, unlocking unique
                            benefits.
                        </p>
                    </div>
                </li>
                <li className="sc-12zym2-1 fZIMcL">
                    <div
                        data-gatsby-image-wrapper=""
                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                    >
                        <div style={{ maxWidth: "41px", display: "block" }}>
                            <img
                                alt=""
                                role="presentation"
                                aria-hidden="true"
                                src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;41&#x27; width=&#x27;41&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                            sizes="(min-width: 41px) 41px, 100vw"
                            decoding="async"
                            loading="lazy"
                            src="https://swissborg-website.cdn.prismic.io/swissborg-website/647b73ac-ce96-447a-aa0c-ec6e3a7677fc_premium-account-icon.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=41&amp;h=41"
                            srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/647b73ac-ce96-447a-aa0c-ec6e3a7677fc_premium-account-icon.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=41&amp;h=41 41w"
                            alt="Premium Icon"
                        />
                    </div>
                    <div className="sc-12zym2-2 bMqqnH">
                        <h3 className="sc-12zym2-0 bMKpAz">Premium Benefits</h3>
                        <p>
                            Pay low fees on transactions and get a boost on
                            Yield Program.
                        </p>
                    </div>
                </li>
                <li className="sc-12zym2-1 fZIMcL">
                    <div
                        data-gatsby-image-wrapper=""
                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                    >
                        <div style={{ maxWidth: "48px", display: "block" }}>
                            <img
                                alt=""
                                role="presentation"
                                aria-hidden="true"
                                src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;48&#x27; width=&#x27;48&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                            sizes="(min-width: 48px) 48px, 100vw"
                            decoding="async"
                            loading="lazy"
                            src="https://swissborg-website.cdn.prismic.io/swissborg-website/c3296d7d-1499-4474-9164-daf97b609658_SwissBorg-Protect-and-burn.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48"
                            srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/c3296d7d-1499-4474-9164-daf97b609658_SwissBorg-Protect-and-burn.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48 48w"
                            alt="Protect and Choose Icon"
                        />
                    </div>
                    <div className="sc-12zym2-2 bMqqnH">
                        <h3 className="sc-12zym2-0 bMKpAz">
                            Protect and Choose
                        </h3>
                        <p>
                            Benefit from a decrease in token supply through our
                            Protect and Choose mechanism.
                        </p>
                    </div>
                </li>
                <li className="sc-12zym2-1 fZIMcL">
                    <div
                        data-gatsby-image-wrapper=""
                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                    >
                        <div style={{ maxWidth: "81px", display: "block" }}>
                            <img
                                alt=""
                                role="presentation"
                                aria-hidden="true"
                                src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;81&#x27; width=&#x27;81&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                            sizes="(min-width: 81px) 81px, 100vw"
                            decoding="async"
                            loading="lazy"
                            src="https://swissborg-website.cdn.prismic.io/swissborg-website/f07b3082-4af5-4fb1-8786-41455b8b9f58_community-index-icon.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=81&amp;h=81"
                            srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/f07b3082-4af5-4fb1-8786-41455b8b9f58_community-index-icon.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=81&amp;h=81 81w"
                            alt="Community Index Icon"
                        />
                    </div>
                    <div className="sc-12zym2-2 bMqqnH">
                        <h3 className="sc-12zym2-0 bMKpAz">Community Index</h3>
                        <p>
                            Contribute to the value of the ecosystem over the
                            long term.
                        </p>
                    </div>
                </li>
                <li className="sc-12zym2-1 fZIMcL">
                    <div
                        data-gatsby-image-wrapper=""
                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                    >
                        <div style={{ maxWidth: "25px", display: "block" }}>
                            <img
                                alt=""
                                role="presentation"
                                aria-hidden="true"
                                src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;25&#x27; width=&#x27;25&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                            sizes="(min-width: 25px) 25px, 100vw"
                            decoding="async"
                            loading="lazy"
                            src="https://swissborg-website.cdn.prismic.io/swissborg-website/0c0f3939-d9c5-40d9-8c76-f969b722956e_icon-smart%20yield.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25"
                            srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/0c0f3939-d9c5-40d9-8c76-f969b722956e_icon-smart%20yield.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=25&amp;h=25 25w"
                            alt="Yield Icon"
                        />
                    </div>
                    <div className="sc-12zym2-2 bMqqnH">
                        <h3 className="sc-12zym2-0 bMKpAz">
                            CHSB Yield Program
                        </h3>
                        <p>
                            Put your CHSB in the Yield Program and get rewarded
                            daily with new CHSB.
                        </p>
                    </div>
                </li>
            </motion.ul>

            <div className="sc-1mop4l0-0 dllGQq desktop-only">
                <ul className="sc-1pb7q5f-0 hfKpcS desktop-only">
                    <motion.li
                        whileHover={{
                            transitionDelay: "0",
                            scale: 1.3,
                        }}
                        variants={P2}
                        className="sc-1qd9d4j-0 degqsI PS"
                    >
                        <div className="sc-123z20s-0 epWbkI PS01">
                            <div
                                data-gatsby-image-wrapper=""
                                className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1325u2n-0 hnNXQR"
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
                                    sizes="(min-width: 48px) 48px, 100vw"
                                    decoding="async"
                                    loading="lazy"
                                    src={L2}
                                    alt="SwissBorg Referendums"
                                />
                            </div>
                            <Typography
                                variant="span"
                                color={"primary"}
                                className="sc-123z20s-1 iJYguG"
                            >
                                Participation
                            </Typography>
                        </div>
                        <div className="sc-1mm9d3f-0 hDQBSx PS02">
                            <p>
                                Take part in the future of FundrisePro by giving
                                your opinion in referendums.
                            </p>
                        </div>
                    </motion.li>
                    <motion.li
                        whileHover={{
                            transitionDelay: "0",
                            scale: 1.3,
                        }}
                        variants={P1}
                        className="sc-1qd9d4j-0 degqsI PS"
                    >
                        <div className="sc-123z20s-0 epWbkI PS01">
                            <div
                                data-gatsby-image-wrapper=""
                                className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1325u2n-0 hnNXQR"
                            >
                                <div
                                    style={{
                                        maxWidth: "81px",
                                        display: "block",
                                    }}
                                >
                                    <img
                                        alt=""
                                        role="presentation"
                                        aria-hidden="true"
                                        src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;81&#x27; width=&#x27;81&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                    sizes="(min-width: 81px) 81px, 100vw"
                                    decoding="async"
                                    loading="lazy"
                                    src={L1}
                                    alt="Staking CHSB Icon"
                                />
                            </div>
                            <Typography
                                variant="span"
                                color={"primary"}
                                className="sc-123z20s-1 iJYguG"
                            >
                                Staking
                            </Typography>
                        </div>
                        <div className="sc-1mm9d3f-0 hDQBSx PS02">
                            <p>
                                Stake CHSB to become Premium, unlocking unique
                                benefits.
                            </p>
                        </div>
                    </motion.li>
                    <motion.li
                        whileHover={{
                            transitionDelay: "0",
                            scale: 1.3,
                        }}
                        variants={P3}
                        className="sc-1qd9d4j-0 degqsI PS"
                    >
                        <div className="sc-123z20s-0 epWbkI PS01">
                            <div
                                data-gatsby-image-wrapper=""
                                className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1325u2n-0 hnNXQR"
                            >
                                <div
                                    style={{
                                        maxWidth: "41px",
                                        display: "block",
                                    }}
                                >
                                    <img
                                        alt=""
                                        role="presentation"
                                        aria-hidden="true"
                                        src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;41&#x27; width=&#x27;41&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                    sizes="(min-width: 41px) 41px, 100vw"
                                    decoding="async"
                                    loading="lazy"
                                    src={L3}
                                    alt="Premium Icon"
                                />
                            </div>
                            <Typography
                                variant="span"
                                color={"primary"}
                                className="sc-123z20s-1 iJYguG"
                            >
                                Premium Benefits
                            </Typography>
                        </div>
                        <div className="sc-1mm9d3f-0 hDQBSx PS02">
                            <p>
                                Pay low fees on transactions and get a boost on
                                Yield Program.
                            </p>
                        </div>
                    </motion.li>
                    <motion.li
                        whileHover={{
                            transitionDelay: "0",
                            scale: 1.3,
                        }}
                        variants={P4}
                        className="sc-1qd9d4j-0 degqsI PS"
                    >
                        <div className="sc-123z20s-0 epWbkI PS01">
                            <div
                                data-gatsby-image-wrapper=""
                                className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1325u2n-0 hnNXQR"
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
                                    sizes="(min-width: 48px) 48px, 100vw"
                                    decoding="async"
                                    loading="lazy"
                                    src={L4}
                                    alt="Protect and Choose Icon"
                                />
                            </div>
                            <Typography
                                variant="span"
                                color={"primary"}
                                className="sc-123z20s-1 iJYguG"
                            >
                                Protect and Choose
                            </Typography>
                        </div>
                        <div className="sc-1mm9d3f-0 hDQBSx PS02">
                            <p>
                                Benefit from a decrease in token supply through
                                our Protect and Choose mechanism.
                            </p>
                        </div>
                    </motion.li>
                    <motion.li
                        whileHover={{
                            transitionDelay: "0",
                            scale: 1.3,
                        }}
                        variants={P5}
                        className="sc-1qd9d4j-0 degqsI PS"
                    >
                        <div className="sc-123z20s-0 epWbkI PS01">
                            <div
                                data-gatsby-image-wrapper=""
                                className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1325u2n-0 hnNXQR"
                            >
                                <div
                                    style={{
                                        maxWidth: "81px",
                                        display: "block",
                                    }}
                                >
                                    <img
                                        alt=""
                                        role="presentation"
                                        aria-hidden="true"
                                        src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;81&#x27; width=&#x27;81&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                    sizes="(min-width: 81px) 81px, 100vw"
                                    decoding="async"
                                    loading="lazy"
                                    src={L5}
                                    alt="Community Index Icon"
                                />
                            </div>
                            <Typography
                                variant="span"
                                color={"primary"}
                                className="sc-123z20s-1 iJYguG"
                            >
                                Community Index
                            </Typography>
                        </div>
                        <div className="sc-1mm9d3f-0 hDQBSx PS02">
                            <p>
                                Contribute to the value of the ecosystem over
                                the long term.
                            </p>
                        </div>
                    </motion.li>
                    <motion.li
                        whileHover={{
                            transitionDelay: "0",
                            scale: 1.3,
                        }}
                        variants={P6}
                        className="sc-1qd9d4j-0 degqsI PS"
                    >
                        <div className="sc-123z20s-0 epWbkI PS01">
                            <div
                                data-gatsby-image-wrapper=""
                                className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1325u2n-0 hnNXQR"
                            >
                                <div
                                    style={{
                                        maxWidth: "25px",
                                        display: "block",
                                    }}
                                >
                                    <img
                                        alt=""
                                        role="presentation"
                                        aria-hidden="true"
                                        src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;25&#x27; width=&#x27;25&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                    sizes="(min-width: 25px) 25px, 100vw"
                                    decoding="async"
                                    loading="lazy"
                                    src={L6}
                                    alt="Yield Icon"
                                />
                            </div>
                            <Typography
                                variant="span"
                                color={"primary"}
                                className="sc-123z20s-1 iJYguG"
                            >
                                CHSB Yield Program
                            </Typography>
                        </div>
                        <div className="sc-1mm9d3f-0 hDQBSx PS02">
                            <p>
                                Put your CHSB in the Yield Program and get
                                rewarded daily with new CHSB.
                            </p>
                        </div>
                    </motion.li>
                </ul>

                <motion.div
                    variants={PP1}
                    data-gatsby-image-wrapper=""
                    className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-17y43i8-0 bAOxs "
                >
                    <div
                        style={{
                            maxWidth: "400px",
                            display: "block",
                        }}
                    >
                        <img
                            alt=""
                            role="presentation"
                            aria-hidden="true"
                            src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;400&#x27; width=&#x27;400&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
                            style={{
                                maxWidth: "100%",
                                display: "block",
                                position: "static",
                            }}
                        />
                    </div>

                    <div>
                        <img src={logo} alt="CHSB Icon" />
                    </div>
                </motion.div>

                <motion.svg
                    variants={PP2}
                    id="Layer_1"
                    style={{
                        stroke: "#00A1EB",
                    }}
                    data-name="Layer 1"
                    viewBox="0 0 655.968 672"
                    className="sc-1b88zsx-0 ueOPe"
                >
                    <polygon points="100 204.373 100 467.627 327.984 599.253 555.968 467.627 555.968 204.373 327.984 72.747 100 204.373"></polygon>
                    <line
                        x1="100"
                        y1="467.627"
                        x2="555.968"
                        y2="204.373"
                    ></line>
                    <line
                        x1="100"
                        y1="204.373"
                        x2="555.968"
                        y2="467.627"
                    ></line>
                    <line
                        x1="327.984"
                        x2="327.984"
                        y1="599.254"
                        y2="72.746"
                    ></line>
                </motion.svg>
            </div>
        </motion.section>
    );
}
