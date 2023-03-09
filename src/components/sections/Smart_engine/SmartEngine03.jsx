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
        transitionDuration: "1s",
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
export default function SmartEngine03({ OPL, OPS }) {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            className="sc-1lw4m5x-0 sc-1yosp1l-0 iYpozj"
        >
            <div className="sc-1lw4m5x-1 sc-1yosp1l-1 iukxsw">
                <motion.div
                    variants={H1}
                    className="sc-1lw4m5x-3 sc-1yosp1l-2 kGWgrY kmKilY"
                >
                    <h2>
                        Download the FundrisePro app and kickstart your crypto
                        wealth today
                    </h2>
                </motion.div>
                <div className="sc-1lw4m5x-3 sc-1yosp1l-3 kGWgrY ehQaZt">
                    <div
                        style={{ gap: "50px" }}
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
