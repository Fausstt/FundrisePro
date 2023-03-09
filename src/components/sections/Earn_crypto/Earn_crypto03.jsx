import React from "react";
import { motion } from "framer-motion";
import L1 from "../../../img/icon02.png";
import L2 from "../../../img/icon04.png";
import L3 from "../../../img/icon03.png";

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
const M1 = {
    hidden: {
        y: +50,
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
        y: +50,
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
        y: +50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transitionDuration: "1s",
        transitionDelay: "0.4s",
    },
};
export default function Earn_crypto03() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            id="icon-text-slice"
            className="sc-1lw4m5x-0 hbGuCC1"
        >
            <div className="sc-1lw4m5x-1 sc-j4xgmx-0 iukxsw1 sOaBg">
                <motion.div
                    variants={H1}
                    className="sc-1lw4m5x-3 sc-j4xgmx-1 kGWgrY bGwQdI"
                >
                    <h2>Everything you need to customise your yield</h2>
                </motion.div>
                <div className="sc-1lw4m5x-3 sc-j4xgmx-3 kGWgrY gqAYxq">
                    <motion.div variants={M1} className="sc-1n2iy25-0 dqNFKn">
                        <div className="sc-1n2iy25-1 kOhKDh">
                            <div
                                data-gatsby-image-wrapper=""
                                className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1n2iy25-2 gNqfa-d"
                            >
                                <div
                                    style={{
                                        maxWidth: "100px",
                                        display: "block",
                                    }}
                                >
                                    <img
                                        alt=""
                                        role="presentation"
                                        aria-hidden="true"
                                        src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;100&#x27; width=&#x27;100&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                    sizes="(min-width: 100px) 100px, 100vw"
                                    decoding="async"
                                    loading="lazy"
                                    src={L1}
                                    alt="Investing Options Icon"
                                />
                            </div>
                        </div>
                        <div className="sc-1n2iy25-3 gZXdCf">
                            <h3>Flexible investing options</h3>
                        </div>
                        <div className="sc-1n2iy25-4 bWzEA">
                            <p>
                                Choose a range of yielding strategies for each
                                token, all in one app
                            </p>
                        </div>
                    </motion.div>
                    <motion.div variants={M2} className="sc-1n2iy25-0 dqNFKn">
                        <div className="sc-1n2iy25-1 kOhKDh">
                            <div
                                data-gatsby-image-wrapper=""
                                className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1n2iy25-2 gNqfa-d"
                            >
                                <div
                                    style={{
                                        maxWidth: "100px",
                                        display: "block",
                                    }}
                                >
                                    <img
                                        alt=""
                                        role="presentation"
                                        aria-hidden="true"
                                        src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;100&#x27; width=&#x27;100&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                    sizes="(min-width: 100px) 100px, 100vw"
                                    decoding="async"
                                    loading="lazy"
                                    src={L2}
                                    alt="Tailor Investments Icon"
                                />
                            </div>
                        </div>
                        <div className="sc-1n2iy25-3 gZXdCf">
                            <h3>Tailor investments to your profile</h3>
                        </div>
                        <div className="sc-1n2iy25-4 bWzEA">
                            <p>
                                Choose your risk and yield level, and split
                                funds between strategies for the ultimate
                                custom  strategy
                            </p>
                        </div>
                    </motion.div>
                    <motion.div variants={M3} className="sc-1n2iy25-0 dqNFKn">
                        <div className="sc-1n2iy25-1 kOhKDh">
                            <div
                                data-gatsby-image-wrapper=""
                                className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1n2iy25-2 gNqfa-d"
                            >
                                <div
                                    style={{
                                        maxWidth: "100px",
                                        display: "block",
                                    }}
                                >
                                    <img
                                        alt=""
                                        role="presentation"
                                        aria-hidden="true"
                                        src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;100&#x27; width=&#x27;100&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                    sizes="(min-width: 100px) 100px, 100vw"
                                    decoding="async"
                                    loading="lazy"
                                    src={L3}
                                    alt="Limited Exposure Icon"
                                />
                            </div>
                        </div>
                        <div className="sc-1n2iy25-3 gZXdCf">
                            <h3>Limit your exposure</h3>
                        </div>
                        <div className="sc-1n2iy25-4 bWzEA">
                            <p>
                                FundrisePro Earn reduces risk by only offering
                                access to established DeFi protocols
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
