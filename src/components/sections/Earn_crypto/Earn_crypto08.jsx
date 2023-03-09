import React from "react";
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
const AccordionADD = [
    {
        T: "How is SwissBorg Earn different from Smart Yield?",
        B: "While Smart Yield is a great product, its main challenge is that it’s a one-size-fits-all approach. Every investor has access to the same level of risk and the same level of yield, regardless of their risk profile and investing preferences.With SwissBorg Earn, instead of being offered one yielding option per asset, you will be able to choose from multiple strategies based on their risk level and projected yield.",
    },
    {
        T: "How will I know the risk level of different strategies?",
        B: "There will be a Cyborg mood score for every strategy, with ratings ranging from Core (low risk) to Brave (high risk). These risk ratings are based on both the crypto asset you are investing in as well as the protocol the strategy you choose will give access to.",
    },
    {
        T: "Where can I learn more about different yielding strategies?",
        B: "Each strategy has a ‘Learn more’ section where you can learn more about the protocol generating your yield",
    },
    {
        T: "Are the low-risk yielding strategies safe?",
        B: "Every investment involves risk, and this should be taken into consideration before investing any funds. However, the Cyborg mood ratings indicate the level of risk compared to other strategies for generating crypto yields.",
    },
    {
        T: "Is there a minimum investment period?",
        B: "Most strategies only have a 24-hour lock-in period. Certain strategies might require you to lock your crypto for a longer period of time, though. If this is the case, it will be indicated in the app.",
    },
];
const styles = {
    FT: {
        fontFamily: '"TTCommons-DemiBold", sans-serif',
        fontSize: "1.8rem",
        lineHeight: "1.15em",
        fontWeight: 500,
    },
    FB: {
        fontFamily: '"TTCommons-DemiBold", sans-serif',
        fontSize: "1.5rem",
        lineHeight: "1.15em",
    },
};
export default function Earn_crypto08() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            className="sc-1lw4m5x-0 sc-1rqtu78-0 hbGuCC"
        >
            <div className="sc-1lw4m5x-1 sc-1rqtu78-1 iukxsw1 hMwVIt">
                <div className="sc-1lw4m5x-3 sc-1rqtu78-2 kGWgrY bVwshE">
                    <motion.div variants={H1} className="sc-1rqtu78-3 glmMoD">
                        <h2>FAQ</h2>
                    </motion.div>
                    <div className="sc-ao3l14-0 DewFw">
                        <div className="sc-ao3l14-1 JFsmZ">
                            {AccordionADD.map((i) => (
                                <Accordion key={i.T}>
                                    <AccordionSummary
                                        expandIcon={
                                            <KeyboardArrowDownIcon
                                                fontSize="large"
                                                color="primary"
                                            />
                                        }
                                    >
                                        <Typography sx={styles.FT}>
                                            {i.T}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography sx={styles.FB}>
                                            {i.B}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="sc-1lw4m5x-3 kGWgrY"></div>
            </div>
        </motion.section>
    );
}
