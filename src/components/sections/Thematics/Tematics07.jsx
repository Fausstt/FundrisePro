import React from "react";
import img from "../../../img/9.png";
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
export default function Tematics07() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            className="sc-1lw4m5x-0 gsfSuU"
        >
            <div className="sc-1lw4m5x-1 sc-mht4fz-4 iukxsw1 iuVMEy3">
                <div className="sc-mht4fz-0 gwyBVr">
                    <span className="sc-mht4fz-8 bdsmSz">COMING SOON</span>
                    <motion.div variants={H1} className="sc-mht4fz-5 eltltj">
                        <h2>Earn rewards</h2>
                    </motion.div>
                    <motion.div variants={H2} className="sc-mht4fz-6 gcnFDc">
                        <p className="sc-mht4fz-7 iPzTfy">
                            With Web3 Thematics, your funds will be staked
                            whenever possible and in exchange you will receive
                            rewards paid out in CHSB
                        </p>
                    </motion.div>
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
                                        style={{
                                            paddingTop: "99.95456610631531%",
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
                                        sizes="100vw"
                                        decoding="async"
                                        loading="lazy"
                                        src={img}
                                        alt="CHSB Rewards"
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
