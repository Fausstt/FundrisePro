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
    },
};
const M1 = {
    hidden: {
        transform: "scale(0.8)",
        opacity: 0.5,
    },
    visible: {
        opacity: 1,
        transform: "scale(1)",
        transitionDuration: "1.5s",
    },
};
export default function Earn_crypto02() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            className="sc-76c5jr-0 iexPzT"
        >
            <div className="sc-1lw4m5x-5 sc-76c5jr-1 NCgFe">
                <motion.div variants={H1} className="sc-76c5jr-2 bjGzUB">
                    <h2>
                        The Cripto Boost app makes it easy for you to earn a
                        yield every day.
                    </h2>
                </motion.div>
                <motion.div
                    variants={M1}
                    className="sc-1lw4m5x-20 sc-1e57hx5-3 bZVTlB dlBBNH"
                >
                    <div
                        width="200"
                        height="113"
                        className="sc-1e57hx5-2 OjbyM"
                    >
                        <iframe
                            width="200"
                            height="113"
                            src="https://www.youtube.com/embed/AJZN2kb1aV4?feature=oembed"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="How Cripto Boost Earn is simplifying DeFi"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
