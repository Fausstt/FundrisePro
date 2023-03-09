import React from "react";
import { motion } from "framer-motion";

const Q1 = {
    hidden: {
        y: +100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transitionDuration: "1s",
    },
};
const Q2 = {
    hidden: {
        y: +100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.5 },
        transitionDuration: "1s",
    },
};
const Q3 = {
    hidden: {
        y: +100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 1 },
        transitionDuration: "1s",
    },
};

export default function Section_02() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            id="icon-text-slice"
            className="sc-1lw4m5x-0 iAZMeC"
        >
            <div className="sc-1lw4m5x-1 sc-j4xgmx-0 iukxsw sOaBg">
                <motion.div
                    variants={Q1}
                    className="sc-1lw4m5x-3 sc-j4xgmx-1 kGWgrY bGwQdI"
                >
                    <h2>
                        FundrisePro is Europe’s trusted, secure and reliable
                        crypto platform
                    </h2>
                </motion.div>
                <div className="sc-1lw4m5x-3 sc-j4xgmx-3 kGWgrY gqAYxq">
                    <motion.div variants={Q1} className="sc-1n2iy25-0 dqNFKn">
                        <div className="sc-1n2iy25-1 kOhKDh">
                            <div
                                data-gatsby-image-wrapper=""
                                className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1n2iy25-2 gNqfa-d"
                            >
                                <div
                                    style={{
                                        maxWidth: "49px",
                                        display: "block",
                                    }}
                                >
                                    <img
                                        alt=""
                                        role="presentation"
                                        aria-hidden="true"
                                        src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;48&#x27; width=&#x27;49&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                    sizes="(min-width: 49px) 49px, 100vw"
                                    decoding="async"
                                    loading="lazy"
                                    src="https://swissborg-website.cdn.prismic.io/swissborg-website/53414b51-723d-4af0-a19d-94f4aa98e4f9_Homepage-Safe%20Funds.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=49&amp;h=48"
                                    srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/53414b51-723d-4af0-a19d-94f4aa98e4f9_Homepage-Safe%20Funds.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=49&amp;h=48 49w"
                                    alt="Cryptos"
                                />
                            </div>
                        </div>
                        <div className="sc-1n2iy25-3 gZXdCf">
                            <h4>Your funds are safe</h4>
                            <h4>and always accessible</h4>
                        </div>
                    </motion.div>
                    <motion.div variants={Q2} className="sc-1n2iy25-0 dqNFKn">
                        <div className="sc-1n2iy25-1 kOhKDh">
                            <div
                                data-gatsby-image-wrapper=""
                                className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1n2iy25-2 gNqfa-d"
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
                                    src="https://swissborg-website.cdn.prismic.io/swissborg-website/ab5ae39a-49c8-431f-bff3-dcb746bdf412_Homepage-Secure.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48"
                                    srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/ab5ae39a-49c8-431f-bff3-dcb746bdf412_Homepage-Secure.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48 48w"
                                    alt="Lock"
                                />
                            </div>
                        </div>
                        <div className="sc-1n2iy25-3 gZXdCf">
                            <h4>Protected by the most</h4>
                            <h4>secure cryptographic tech</h4>
                        </div>
                    </motion.div>
                    <motion.div variants={Q3} className="sc-1n2iy25-0 dqNFKn">
                        <div className="sc-1n2iy25-1 kOhKDh">
                            <div
                                data-gatsby-image-wrapper=""
                                className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-1n2iy25-2 gNqfa-d"
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
                                    src="https://swissborg-website.cdn.prismic.io/swissborg-website/7b845542-41de-4c05-8ee5-d6cac2d85e12_Homepage-EU%20Regulated.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48"
                                    srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/7b845542-41de-4c05-8ee5-d6cac2d85e12_Homepage-EU%20Regulated.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=48&amp;h=48 48w"
                                    alt="Europe logo"
                                />
                            </div>
                        </div>
                        <div className="sc-1n2iy25-3 gZXdCf">
                            <h4>Licensed in EU and</h4>
                            <h4>regulatory compliant</h4>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
