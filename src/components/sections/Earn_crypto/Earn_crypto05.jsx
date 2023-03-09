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
export default function Earn_crypto05() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            className="sc-1lw4m5x-0 hbGuCC1"
        >
            <div className="sc-1lw4m5x-1 sc-mht4fz-4 iukxsw2 hJXFpu">
                <motion.div variants={M2} className="sc-mht4fz-0 gwyBVr">
                    <div className="sc-mht4fz-5 eltltj">
                        <h2>See your potential earnings at a glance</h2>
                    </div>
                    <div className="sc-mht4fz-6 gcnFDc">
                        <p className="sc-mht4fz-7 iPzTfy">
                            Investing isn’t just about managing risk, though -
                            it’s about balancing risk and returns. FundrisePro
                            Earn makes this simple with estimated annual yields
                            visible at a glance.
                        </p>
                    </div>
                </motion.div>
                <Parallax
                    renderLayer={(percentage) => (
                        <motion.div
                            variants={M1}
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
                                        style={{ opacity: "1" }}
                                        sizes="100vw"
                                        decoding="async"
                                        loading="lazy"
                                        src="https://images.prismic.io/swissborg-website/a77ce5c0-bc1c-446f-8b7d-f1bee9977547_EarnPage-APY-EN.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=2201&amp;h=2200"
                                        srcSet="https://images.prismic.io/swissborg-website/a77ce5c0-bc1c-446f-8b7d-f1bee9977547_EarnPage-APY-EN.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=100&amp;h=100 100w,https://images.prismic.io/swissborg-website/a77ce5c0-bc1c-446f-8b7d-f1bee9977547_EarnPage-APY-EN.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=116&amp;h=116 116w,https://images.prismic.io/swissborg-website/a77ce5c0-bc1c-446f-8b7d-f1bee9977547_EarnPage-APY-EN.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=135&amp;h=135 135w,https://images.prismic.io/swissborg-website/a77ce5c0-bc1c-446f-8b7d-f1bee9977547_EarnPage-APY-EN.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=156&amp;h=156 156w,https://images.prismic.io/swissborg-website/a77ce5c0-bc1c-446f-8b7d-f1bee9977547_EarnPage-APY-EN.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=181&amp;h=181 181w,https://images.prismic.io/swissborg-website/a77ce5c0-bc1c-446f-8b7d-f1bee9977547_EarnPage-APY-EN.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=210&amp;h=210 210w,https://images.prismic.io/swissborg-website/a77ce5c0-bc1c-446f-8b7d-f1bee9977547_EarnPage-APY-EN.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=244&amp;h=244 244w,https://images.prismic.io/swissborg-website/a77ce5c0-bc1c-446f-8b7d-f1bee9977547_EarnPage-APY-EN.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=283&amp;h=283 283w,https://images.prismic.io/swissborg-website/a77ce5c0-bc1c-446f-8b7d-f1bee9977547_EarnPage-APY-EN.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=328&amp;h=328 328w,https://images.prismic.io/swissborg-website/a77ce5c0-bc1c-446f-8b7d-f1bee9977547_EarnPage-APY-EN.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=380&amp;h=380 380w,https://images.prismic.io/swissborg-website/a77ce5c0-bc1c-446f-8b7d-f1bee9977547_EarnPage-APY-EN.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=441&amp;h=441 441w,https://images.prismic.io/swissborg-website/a77ce5c0-bc1c-446f-8b7d-f1bee9977547_EarnPage-APY-EN.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=512&amp;h=512 512w,https://images.prismic.io/swissborg-website/a77ce5c0-bc1c-446f-8b7d-f1bee9977547_EarnPage-APY-EN.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=594&amp;h=594 594w,https://images.prismic.io/swissborg-website/a77ce5c0-bc1c-446f-8b7d-f1bee9977547_EarnPage-APY-EN.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=689&amp;h=689 689w,https://images.prismic.io/swissborg-website/a77ce5c0-bc1c-446f-8b7d-f1bee9977547_EarnPage-APY-EN.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=799&amp;h=799 799w,https://images.prismic.io/swissborg-website/a77ce5c0-bc1c-446f-8b7d-f1bee9977547_EarnPage-APY-EN.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=927&amp;h=927 927w,https://images.prismic.io/swissborg-website/a77ce5c0-bc1c-446f-8b7d-f1bee9977547_EarnPage-APY-EN.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1075&amp;h=1075 1075w,https://images.prismic.io/swissborg-website/a77ce5c0-bc1c-446f-8b7d-f1bee9977547_EarnPage-APY-EN.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1247&amp;h=1246 1247w,https://images.prismic.io/swissborg-website/a77ce5c0-bc1c-446f-8b7d-f1bee9977547_EarnPage-APY-EN.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1446&amp;h=1445 1446w,https://images.prismic.io/swissborg-website/a77ce5c0-bc1c-446f-8b7d-f1bee9977547_EarnPage-APY-EN.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1678&amp;h=1677 1678w,https://images.prismic.io/swissborg-website/a77ce5c0-bc1c-446f-8b7d-f1bee9977547_EarnPage-APY-EN.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=1946&amp;h=1945 1946w,https://images.prismic.io/swissborg-website/a77ce5c0-bc1c-446f-8b7d-f1bee9977547_EarnPage-APY-EN.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=2201&amp;h=2200 2201w"
                                        alt="Potential earnings Illustration"
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
