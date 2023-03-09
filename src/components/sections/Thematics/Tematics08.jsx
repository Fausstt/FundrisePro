import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";
const AccordionADD = [
    {
        T: "How can I get early access?",
        B: "SwissBorg Thematics is being rolled out step by step. It was first opened to Generation and Pioneer premium tier members. Any user who upgrades to those tier levels will get access to Thematics. The Thematic will open to other premium tiers and standard users in phases.",
    },
    {
        T: "What is rebalancing?",
        B: "Your Thematic consists of various tokens/coins, each with a carefully curated target percentage. Because of the fast pace and volatile crypto markets, these percentage allocations can easily drift. To achieve the desired target percentage of each coin within the Thematic, necessary exchanges are made to rebalance asset allocations.",
    },
    {
        T: "What is reallocation?",
        B: "Depending on the performance of the Thematic coins, the coin list will be updated at every 10th Auto-Rebalance to make sure your Thematic achieves the best performance.",
    },
    {
        T: "Do I really own the tokens/coins?",
        B: "Yes, with Thematics you own the underlying assets. It is a bundle of tokens not just a simple index.",
    },
    {
        T: "What is the minimum investment amount?",
        B: "The minimum investment amount is 5 Euros or the equivalent in your local currency. ",
    },
    {
        T: "What is the minimum investment period?",
        B: "There is no minimum investment period. You are free to sell your Thematic investment at any time. In the future, you will be able to earn rewards based on your holding duration.",
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
export default function Tematics08() {
    return (
        <section className="sc-1lw4m5x-0 sc-1rqtu78-0 iAZMeC">
            <div className="sc-1lw4m5x-1 sc-1rqtu78-1 iukxsw hMwVIt">
                <div className="sc-1lw4m5x-3 sc-1rqtu78-2 kGWgrY bVwshE">
                    <div className="sc-1rqtu78-3 glmMoD">
                        <h2>Frequently asked questions</h2>
                    </div>

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
        </section>
    );
}
