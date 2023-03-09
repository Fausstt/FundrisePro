import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

export default function Section_03() {
    const Q1 = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transitionDuration: "1s",
        },
    };
    const Q2 = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 0.5 },
            transitionDuration: "1s",
        },
    };
    const Q3 = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 1 },
            transitionDuration: "1s",
        },
    };
    const [Num01, setNum01] = useState(0);
    const [Num02, setNum02] = useState(0);
    const [Num03, setNum03] = useState(0);

    const add01 = () => {
        let n = 0;
        let i = setInterval(() => {
            n++;
            if (n === 59) {
                clearInterval(i);
            }
            setNum01(n);
        }, 30);
    };
    const add02 = () => {
        let n = 0;
        let i = setInterval(() => {
            n = n + 2;
            if (n === 686) {
                clearInterval(i);
            }
            setNum02(n);
        }, 6);
    };
    const add03 = () => {
        let n = 0;
        let i = setInterval(() => {
            n++;
            if (n === 145) {
                clearInterval(i);
            }
            setNum03(n);
        }, 12);
    };
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            className="sc-1lw4m5x-0 sc-5pebwg-0 jqqRNO hWXkVH"
        >
            <div className="sc-1lw4m5x-1 sc-5pebwg-1 iukxsw">
                <div className="sc-1lw4m5x-3 sc-5pebwg-9 kGWgrY">
                    <div className="sc-5pebwg-2 bLbumT">
                        <motion.div
                            onViewportEnter={add01}
                            variants={Q1}
                            className="sc-5pebwg-3 TWoEK"
                        >
                            <Typography
                                variant="span"
                                color={"primary"}
                                className="sc-5pebwg-4 EjNQo"
                            >
                                <span className="sc-5pebwg-5 iFboAz">$</span>
                                <span className="stat-0">0.{Num01}</span>
                                <span className="sc-5pebwg-5 iFboAz">B</span>
                            </Typography>
                            <div className="sc-5pebwg-6 gyXQBd">
                                <p>Total user cryptoassets value</p>
                            </div>
                        </motion.div>
                        <motion.div
                            onViewportEnter={add02}
                            variants={Q2}
                            className="sc-5pebwg-3 TWoEK"
                        >
                            <Typography
                                variant="span"
                                color={"primary"}
                                className="sc-5pebwg-4 EjNQo"
                            >
                                <span className="stat-1">{Num02}</span>
                                <span className="sc-5pebwg-5 iFboAz">K+</span>
                            </Typography>
                            <div className="sc-5pebwg-6 gyXQBd">
                                <p>Total number of verified users</p>
                            </div>
                        </motion.div>
                        <motion.div
                            onViewportEnter={add03}
                            variants={Q3}
                            className="sc-5pebwg-3 TWoEK"
                        >
                            <Typography
                                variant="span"
                                color={"primary"}
                                className="sc-5pebwg-4 EjNQo"
                            >
                                <span className="stat-2">{Num03}</span>
                                <span className="sc-5pebwg-5 iFboAz">K+</span>
                            </Typography>
                            <div className="sc-5pebwg-6 gyXQBd">
                                <p>CHSB Token holders</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
