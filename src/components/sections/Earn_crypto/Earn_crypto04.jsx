import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

const M1 = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transitionDuration: "0.5s",
    },
};
const M2 = {
    hidden: {
        x: +100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transitionDuration: "0.5s",
    },
};
export default function Earn_crypto04() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            className="sc-1lw4m5x-0 hbGuCC1"
        >
            <div className="sc-1lw4m5x-1 sc-mht4fz-4 iukxsw2 kmpFOa">
                <motion.div variants={M1} className="sc-mht4fz-0 gwyBVr">
                    <div className="sc-mht4fz-5 eltltj">
                        <h2>The simple way to manage your risk appetite</h2>
                    </div>
                    <div className="sc-mht4fz-6 gcnFDc">
                        <p className="sc-mht4fz-7 iPzTfy">
                            Every strategy for every crypto asset has a Cyborg
                            mood (Core, Adventurous, Brave) that grades its
                            risks so you can make smart investing decisions.
                        </p>
                    </div>
                </motion.div>
                <Parallax
                    renderLayer={(percentage) => (
                        <motion.div
                            variants={M2}
                            className="sc-mht4fz-1 fokCAV"
                        >
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
                                        style={{
                                            paddingTop: "100.04545454545455%",
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
                                        style={{ opacity: "1" }}
                                        sizes="100vw"
                                        decoding="async"
                                        loading="lazy"
                                        src="https://images.prismic.io/swissborg-website/32b13ce2-9c5e-4207-b98a-a38c844306ab_EarnPage-CyborgMood-EN.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=2200&amp;h=2201"
                                        alt="Cyborg mood"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                />
            </div>
        </motion.section>
    );
}
