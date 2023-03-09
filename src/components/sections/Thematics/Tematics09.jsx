import { Button } from "@mui/material";
import React from "react";
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
        y: +20,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transitionDuration: "0.5s",
        transitionDelay: "0.2s",
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
        transitionDuration: "1.5s",
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
export default function Tematics09({ OPS, OPL }) {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            className="sc-1lw4m5x-0 sc-tic9mr-0 iYpozj"
        >
            <div className="sc-1lw4m5x-1 sc-tic9mr-1 iukxsw">
                <div className="sc-1lw4m5x-3 sc-tic9mr-2 kGWgrY iOULpn">
                    <div className="sc-tic9mr-3 fjsrde">
                        <motion.div
                            variants={H1}
                            className="sc-tic9mr-4 jmSRsP"
                        >
                            <h2>
                                Put your money where your heart is in just one
                                tap
                            </h2>
                        </motion.div>
                        <motion.ol variants={H2} className="sc-tic9mr-6 eoEjEn">
                            <li className="sc-tic9mr-5 cKYVJI">
                                Go to the Marketplace tab in the FundrisePro app
                                and look for Web3 Thematic.
                            </li>
                            <li className="sc-tic9mr-5 cKYVJI">
                                Tap on Invest Now and top-up your desired
                                amount. You can start with as little as €5.
                            </li>
                            <li className="sc-tic9mr-5 cKYVJI">
                                Sit back and watch your portfolio grow!
                            </li>
                        </motion.ol>
                    </div>
                    <motion.div variants={M1} className="sc-tic9mr-7 fPPSsm">
                        <div className="sc-tic9mr-9 gJREVo">
                            <div className="sc-tic9mr-10 gjEctd">
                                <div
                                    data-gatsby-image-wrapper=""
                                    className="gatsby-image-wrapper"
                                >
                                    <div
                                        aria-hidden="true"
                                        style={{
                                            paddingTop: "205.6%",
                                        }}
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
                                        sizes="(maxWidth: 425px) 280px, 300px"
                                        decoding="async"
                                        loading="lazy"
                                        src="https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=280&amp;h=576"
                                        srcSet="https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=280&amp;h=576 280w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=300&amp;h=617 300w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=420&amp;h=864 420w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=450&amp;h=925 450w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=560&amp;h=1151 560w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=600&amp;h=1234 600w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=840&amp;h=1727 840w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=900&amp;h=1850 900w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1120&amp;h=2303 1120w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1200&amp;h=2467 1200w"
                                        alt="Marketplace Thematics"
                                    />
                                </div>
                            </div>
                            <div className="sc-tic9mr-10 gjEctc">
                                <div
                                    data-gatsby-image-wrapper=""
                                    className="gatsby-image-wrapper"
                                >
                                    <div
                                        aria-hidden="true"
                                        style={{
                                            paddingTop: "205.6%",
                                        }}
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
                                        sizes="(maxWidth: 425px) 280px, 300px"
                                        decoding="async"
                                        loading="lazy"
                                        src="https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=280&amp;h=576"
                                        srcSet="https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=280&amp;h=576 280w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=300&amp;h=617 300w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=420&amp;h=864 420w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=450&amp;h=925 450w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=560&amp;h=1151 560w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=600&amp;h=1234 600w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=840&amp;h=1727 840w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=900&amp;h=1850 900w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1120&amp;h=2303 1120w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1200&amp;h=2467 1200w"
                                        alt="Marketplace Thematics"
                                    />
                                    <noscript>
                                        <img
                                            data-gatsby-image-ssr=""
                                            data-main-image=""
                                            style={{
                                                opacity: "1",
                                            }}
                                            sizes="(maxWidth: 425px) 280px, 300px"
                                            decoding="async"
                                            loading="lazy"
                                            src="https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=280&amp;h=576"
                                            srcSet="https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=280&amp;h=576 280w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=300&amp;h=617 300w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=420&amp;h=864 420w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=450&amp;h=925 450w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=560&amp;h=1151 560w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=600&amp;h=1234 600w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=840&amp;h=1727 840w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=900&amp;h=1850 900w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1120&amp;h=2303 1120w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1200&amp;h=2467 1200w"
                                            alt="Marketplace Thematics"
                                        />
                                    </noscript>
                                </div>
                            </div>
                            <div className="sc-tic9mr-10 gjEctc">
                                <div
                                    data-gatsby-image-wrapper=""
                                    className="gatsby-image-wrapper"
                                >
                                    <div
                                        aria-hidden="true"
                                        style={{
                                            paddingTop: "205.6%",
                                        }}
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
                                        sizes="(maxWidth: 425px) 280px, 300px"
                                        decoding="async"
                                        loading="lazy"
                                        src="https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=280&amp;h=576"
                                        srcSet="https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=280&amp;h=576 280w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=300&amp;h=617 300w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=420&amp;h=864 420w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=450&amp;h=925 450w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=560&amp;h=1151 560w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=600&amp;h=1234 600w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=840&amp;h=1727 840w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=900&amp;h=1850 900w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1120&amp;h=2303 1120w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1200&amp;h=2467 1200w"
                                        alt="Marketplace Thematics"
                                    />
                                    <noscript>
                                        <img
                                            data-gatsby-image-ssr=""
                                            data-main-image=""
                                            style={{
                                                opacity: "1",
                                            }}
                                            sizes="(maxWidth: 425px) 280px, 300px"
                                            decoding="async"
                                            loading="lazy"
                                            src="https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=280&amp;h=576"
                                            srcSet="https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=280&amp;h=576 280w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=300&amp;h=617 300w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=420&amp;h=864 420w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=450&amp;h=925 450w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=560&amp;h=1151 560w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=600&amp;h=1234 600w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=840&amp;h=1727 840w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=900&amp;h=1850 900w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1120&amp;h=2303 1120w,https://images.prismic.io/swissborg-website/788c363f-e275-4c18-b6a3-96cff16fb15c_Thematic-Page-App-Screen-Marketplace.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1200&amp;h=2467 1200w"
                                            alt="Marketplace Thematics"
                                        />
                                    </noscript>
                                </div>
                            </div>
                        </div>
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
            </div>
        </motion.section>
    );
}
