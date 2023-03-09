import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
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
        transitionDuration: "0.5s",
        transitionDelay: "0.2s",
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
        transitionDuration: "0.5s",
        transitionDelay: "0.4s",
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
        transitionDuration: "0.5s",
        transitionDelay: "0.6s",
    },
};
export default function СhsbYield01() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            className="sc-1lw4m5x-4 sc-omu9k6-0 fNhyyX ipdXUa"
        >
            <motion.div
                variants={H1}
                className="sc-1lw4m5x-20 sc-omu9k6-1 bZVTlB eXpsNk"
            >
                <h1>Grow your wealth with the innovative CHSB Yield 2.0</h1>
            </motion.div>
            <div className="sc-1lw4m5x-20 sc-omu9k6-2 bZVTlB hzsGwI">
                <motion.a
                    variants={M1}
                    href="#what-is-chsb"
                    className="sc-omu9k6-3 cLceZt"
                >
                    <Typography variant="span" color={"primary"}>
                        Simple and hassle free
                    </Typography>
                </motion.a>
                <div className="sc-omu9k6-4 hbPFjP"></div>
                <motion.a
                    variants={M2}
                    href="#yield-calculator"
                    className="sc-omu9k6-3 cLceZt"
                >
                    <Typography variant="span" color={"primary"}>
                        Competitive yield rates
                    </Typography>
                </motion.a>
                <div className="sc-omu9k6-4 hbPFjP"></div>
                <motion.a
                    variants={M3}
                    href="#community-strategy"
                    className="sc-omu9k6-3 cLceZt"
                >
                    <Typography variant="span" color={"primary"}>
                        The growth driver for CHSB
                    </Typography>
                </motion.a>
            </div>
            <div className="sc-1lw4m5x-20 sc-omu9k6-6 bZVTlB bePsKp">
                <div className="">
                    <div className="yt-player"></div>
                </div>
            </div>
        </motion.section>
    );
}
