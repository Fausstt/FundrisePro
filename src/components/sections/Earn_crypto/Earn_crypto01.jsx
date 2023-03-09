import { Button } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

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
const M1 = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transitionDuration: "1s",
    },
};
const H1 = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transitionDuration: "1s",
        transitionDelay: "0.2s",
    },
};
const H2 = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transitionDuration: "1s",
        transitionDelay: "0.4s",
    },
};
const H3 = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transitionDuration: "1s",
        transitionDelay: "0.6s",
    },
};
export default function Earn_crypto01({ OPL, OPS }) {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            className="sc-1lw4m5x-0 sc-snv83o-0 hbGuCC1 jRaHvq"
        >
            <div className="sc-1lw4m5x-1 sc-snv83o-1 iukxsw1 jsYDMz">
                <div className="sc-1lw4m5x-20 sc-17e48i9-0 sc-1l7l1tx-2 bZVTlB huNnTv gctCyG">
                    <div className="sc-1l7l1tx-0 BxzFX">
                        <motion.div
                            variants={H1}
                            className="sc-17e48i9-1 YNpDi"
                        >
                            <h1>Earn crypto your way with FundrisePro Earn</h1>
                        </motion.div>
                        <motion.div
                            variants={H2}
                            className="sc-17e48i9-2 fFOnEP"
                        >
                            <p>
                                Investors aren’t one-size-fits-all, so why is
                                your yield? Generate the right yield for you
                                with FundrisePro Earn.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={H3}
                            className="sc-lpzmvp-0 fFIZyS sc-1l7l1tx-5 GsnXh rating--container"
                        >
                            <div className="sc-13jnwv7-0 VDUZM sc-lpzmvp-6 iPjh"></div>
                            <div className="sc-lpzmvp-1 hWmKob buttons-container">
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
                        </motion.div>
                    </div>
                    <motion.div variants={M1} className="sc-1l7l1tx-1 kSigqV">
                        <div
                            data-gatsby-image-wrapper=""
                            className="gatsby-image-wrapper sc-17e48i9-3 PoKrv"
                        >
                            <div
                                aria-hidden="true"
                                style={{
                                    paddingTop: "99.3676603432701%",
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
                                sizes="(maxWidth: 768px) 100vw, (maxWidth: 1024px) 80vw, 780px"
                                decoding="async"
                                loading="lazy"
                                src="https://images.prismic.io/swissborg-website/92cb09d4-d37c-4a29-bdeb-e5e2439bd884_EarnPage-Hero.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=80&amp;w=1107&amp;h=1100"
                                srcSet="https://images.prismic.io/swissborg-website/92cb09d4-d37c-4a29-bdeb-e5e2439bd884_EarnPage-Hero.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=80&amp;w=100&amp;h=99 100w,https://images.prismic.io/swissborg-website/92cb09d4-d37c-4a29-bdeb-e5e2439bd884_EarnPage-Hero.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=80&amp;w=116&amp;h=115 116w,https://images.prismic.io/swissborg-website/92cb09d4-d37c-4a29-bdeb-e5e2439bd884_EarnPage-Hero.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=80&amp;w=135&amp;h=134 135w,https://images.prismic.io/swissborg-website/92cb09d4-d37c-4a29-bdeb-e5e2439bd884_EarnPage-Hero.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=80&amp;w=156&amp;h=155 156w,https://images.prismic.io/swissborg-website/92cb09d4-d37c-4a29-bdeb-e5e2439bd884_EarnPage-Hero.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=80&amp;w=181&amp;h=180 181w,https://images.prismic.io/swissborg-website/92cb09d4-d37c-4a29-bdeb-e5e2439bd884_EarnPage-Hero.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=80&amp;w=210&amp;h=209 210w,https://images.prismic.io/swissborg-website/92cb09d4-d37c-4a29-bdeb-e5e2439bd884_EarnPage-Hero.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=80&amp;w=244&amp;h=242 244w,https://images.prismic.io/swissborg-website/92cb09d4-d37c-4a29-bdeb-e5e2439bd884_EarnPage-Hero.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=80&amp;w=283&amp;h=281 283w,https://images.prismic.io/swissborg-website/92cb09d4-d37c-4a29-bdeb-e5e2439bd884_EarnPage-Hero.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=80&amp;w=328&amp;h=326 328w,https://images.prismic.io/swissborg-website/92cb09d4-d37c-4a29-bdeb-e5e2439bd884_EarnPage-Hero.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=80&amp;w=380&amp;h=378 380w,https://images.prismic.io/swissborg-website/92cb09d4-d37c-4a29-bdeb-e5e2439bd884_EarnPage-Hero.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=80&amp;w=441&amp;h=438 441w,https://images.prismic.io/swissborg-website/92cb09d4-d37c-4a29-bdeb-e5e2439bd884_EarnPage-Hero.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=80&amp;w=512&amp;h=509 512w,https://images.prismic.io/swissborg-website/92cb09d4-d37c-4a29-bdeb-e5e2439bd884_EarnPage-Hero.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=80&amp;w=594&amp;h=590 594w,https://images.prismic.io/swissborg-website/92cb09d4-d37c-4a29-bdeb-e5e2439bd884_EarnPage-Hero.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=80&amp;w=689&amp;h=685 689w,https://images.prismic.io/swissborg-website/92cb09d4-d37c-4a29-bdeb-e5e2439bd884_EarnPage-Hero.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=80&amp;w=799&amp;h=794 799w,https://images.prismic.io/swissborg-website/92cb09d4-d37c-4a29-bdeb-e5e2439bd884_EarnPage-Hero.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=80&amp;w=927&amp;h=921 927w,https://images.prismic.io/swissborg-website/92cb09d4-d37c-4a29-bdeb-e5e2439bd884_EarnPage-Hero.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=80&amp;w=1075&amp;h=1068 1075w,https://images.prismic.io/swissborg-website/92cb09d4-d37c-4a29-bdeb-e5e2439bd884_EarnPage-Hero.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=80&amp;w=1107&amp;h=1100 1107w"
                                alt="Earn Page Hero Illustration"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
