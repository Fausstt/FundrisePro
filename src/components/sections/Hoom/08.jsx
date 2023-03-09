import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
const H1 = {
    hidden: {
        y: +30,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transitionDuration: "0.3s",
        transitionDelay: "0.4s",
    },
};
export default function Section_08() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            className="sc-1lw4m5x-4 sc-1whvkot-0 fNhyyX cwvAiJ"
        >
            <div className="sc-1lw4m5x-20 sc-1lw4m5x-21 sc-1whvkot-1 bZVTlB kBvVty">
                <motion.h2 variants={H1}>
                    Top rates on your favourite cryptos
                </motion.h2>
            </div>
            <div className="sc-1whvkot-2 enpGth">
                <h3>Average rates over the past 30 days*</h3>
            </div>
            <div className="sc-1lw4m5x-20 sc-1f7f9m9-1 bZVTlB eOeKda auto-slider-container">
                <div
                    direction="rightToLeft"
                    className="sc-1f7f9m9-0 fueuDb auto-slider-group"
                >
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/d1646cdd-cfd3-4886-8e35-99ca8bd1a034_USDC.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="USDC"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">USDC</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is USDC yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/43b6bbbc-09cd-47cd-bdd6-aace7802df55_CHSB_token.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="CHSB"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">CHSB</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is CHSB yield 2.0?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/5b1ced59-7c8b-4df0-9650-50a77e5d0b16_eth.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="ETH"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">ETH</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is ETH yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/ebed7a92-2f5b-434a-87ca-c1c98f3b032a_btc.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="BTC"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">BTC</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is BTC yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/2a288e20-54db-4378-a95a-3cedfbdcb84b_bnb.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="BNB"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">BNB</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is BNB yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/3a8ddc5d-74d3-4434-bb76-818ad2ed507e_asset-crypto-USDT.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="USDT"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">USDT</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is USDT yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/d4941848-96ac-45d0-b968-73da2896dd8c_XRP.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="XRP"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">XRP</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is XRP yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/d4768b65-21b9-4089-a56f-85362e5a15eb_MATIC.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="MATIC"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">MATIC</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is MATIC yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/35bbb8a3-9b77-4821-a1fd-f0dc6d73493a_asset-crypto-EURt.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="EURT"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">EURT</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is EURT yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/18696ae7-1151-4df4-9fd5-8ab85666945d_DAI.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="DAI"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">DAI</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is DAI yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/ab2d1157-5525-40f4-bbcf-df655f9a8729_GHST.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="GHST"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">GHST</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is GHST yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/5e0c296a-f10a-4a5f-8980-c2ad75d4538f_asset-crypto-AVAX.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="AVAX"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">AVAX</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is AVAX yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/64c509b2-9aa2-4bd9-983d-07a5a306ca3c_CRV.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="CRV"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">CRV</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is CRV yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/8ffa3ce4-d497-4609-9db7-06462ac38b33_link.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="LINK"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">LINK</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is LINK yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/3559b432-6f7f-4cb4-b616-75eabdd20ba0_asset-crypto-polkaDOT.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="DOT"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">DOT</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is DOT yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/e102c3f0-d3c6-4a7e-bd99-c25db29248c8_Aave.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="AAVE"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">AAVE</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is AAVE yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/38a607f1-ed4c-4716-b3b1-aa0db09c924f_asset-crypto-BNT.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="BNT"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">BNT</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is BNT yield?
                            </Typography>
                        </div>
                    </div>
                </div>
                <div
                    direction="rightToLeft"
                    className="sc-1f7f9m9-0 fueuDb auto-slider-group"
                >
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/d1646cdd-cfd3-4886-8e35-99ca8bd1a034_USDC.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="USDC"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">USDC</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is USDC yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/43b6bbbc-09cd-47cd-bdd6-aace7802df55_CHSB_token.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="CHSB"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">CHSB</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is CHSB yield 2.0?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/5b1ced59-7c8b-4df0-9650-50a77e5d0b16_eth.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="ETH"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">ETH</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is ETH yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/ebed7a92-2f5b-434a-87ca-c1c98f3b032a_btc.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="BTC"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">BTC</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is BTC yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/2a288e20-54db-4378-a95a-3cedfbdcb84b_bnb.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="BNB"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">BNB</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is BNB yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/3a8ddc5d-74d3-4434-bb76-818ad2ed507e_asset-crypto-USDT.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="USDT"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">USDT</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is USDT yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/d4941848-96ac-45d0-b968-73da2896dd8c_XRP.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="XRP"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">XRP</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is XRP yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/d4768b65-21b9-4089-a56f-85362e5a15eb_MATIC.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="MATIC"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">MATIC</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is MATIC yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/35bbb8a3-9b77-4821-a1fd-f0dc6d73493a_asset-crypto-EURt.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="EURT"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">EURT</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is EURT yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/18696ae7-1151-4df4-9fd5-8ab85666945d_DAI.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="DAI"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">DAI</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is DAI yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/ab2d1157-5525-40f4-bbcf-df655f9a8729_GHST.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="GHST"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">GHST</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is GHST yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/5e0c296a-f10a-4a5f-8980-c2ad75d4538f_asset-crypto-AVAX.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="AVAX"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">AVAX</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is AVAX yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/64c509b2-9aa2-4bd9-983d-07a5a306ca3c_CRV.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="CRV"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">CRV</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is CRV yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/8ffa3ce4-d497-4609-9db7-06462ac38b33_link.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="LINK"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">LINK</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is LINK yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/3559b432-6f7f-4cb4-b616-75eabdd20ba0_asset-crypto-polkaDOT.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="DOT"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">DOT</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is DOT yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/e102c3f0-d3c6-4a7e-bd99-c25db29248c8_Aave.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="AAVE"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">AAVE</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is AAVE yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/38a607f1-ed4c-4716-b3b1-aa0db09c924f_asset-crypto-BNT.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="BNT"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">BNT</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is BNT yield?
                            </Typography>
                        </div>
                    </div>
                </div>
                <div
                    direction="rightToLeft"
                    className="sc-1f7f9m9-0 fueuDb auto-slider-group"
                >
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/d1646cdd-cfd3-4886-8e35-99ca8bd1a034_USDC.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="USDC"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">USDC</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is USDC yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/43b6bbbc-09cd-47cd-bdd6-aace7802df55_CHSB_token.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="CHSB"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">CHSB</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is CHSB yield 2.0?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/5b1ced59-7c8b-4df0-9650-50a77e5d0b16_eth.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="ETH"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">ETH</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is ETH yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/ebed7a92-2f5b-434a-87ca-c1c98f3b032a_btc.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="BTC"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">BTC</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is BTC yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/2a288e20-54db-4378-a95a-3cedfbdcb84b_bnb.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="BNB"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">BNB</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is BNB yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/3a8ddc5d-74d3-4434-bb76-818ad2ed507e_asset-crypto-USDT.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="USDT"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">USDT</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is USDT yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/d4941848-96ac-45d0-b968-73da2896dd8c_XRP.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="XRP"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">XRP</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is XRP yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/d4768b65-21b9-4089-a56f-85362e5a15eb_MATIC.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="MATIC"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">MATIC</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is MATIC yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/35bbb8a3-9b77-4821-a1fd-f0dc6d73493a_asset-crypto-EURt.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="EURT"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">EURT</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is EURT yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/18696ae7-1151-4df4-9fd5-8ab85666945d_DAI.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="DAI"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">DAI</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is DAI yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/ab2d1157-5525-40f4-bbcf-df655f9a8729_GHST.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="GHST"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">GHST</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is GHST yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/5e0c296a-f10a-4a5f-8980-c2ad75d4538f_asset-crypto-AVAX.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="AVAX"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">AVAX</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is AVAX yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/64c509b2-9aa2-4bd9-983d-07a5a306ca3c_CRV.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="CRV"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">CRV</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is CRV yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/8ffa3ce4-d497-4609-9db7-06462ac38b33_link.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="LINK"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">LINK</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is LINK yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/3559b432-6f7f-4cb4-b616-75eabdd20ba0_asset-crypto-polkaDOT.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="DOT"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">DOT</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is DOT yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/e102c3f0-d3c6-4a7e-bd99-c25db29248c8_Aave.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="AAVE"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">AAVE</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is AAVE yield?
                            </Typography>
                        </div>
                    </div>
                    <div className="sc-wb6e1m-0 ejPWct">
                        <div className="sc-wb6e1m-1 iPieUv">
                            <img
                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/38a607f1-ed4c-4716-b3b1-aa0db09c924f_asset-crypto-BNT.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
                                alt="BNT"
                                className="sc-wb6e1m-2 fqBoVh"
                            />
                        </div>
                        <p className="sc-wb6e1m-3 kEMsFe">BNT</p>
                        <h3 className="sc-wb6e1m-4 efIZJb"></h3>
                        <div className="sc-wb6e1m-6 gCLzVs">
                            <Typography variant="span" color={"primary"}>
                                What is BNT yield?
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sc-1whvkot-3 fPlamf">
                <p>*Calculated based on Genesis Premium yield rates</p>
            </div>
        </motion.section>
    );
}
