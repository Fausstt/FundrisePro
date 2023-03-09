import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../img/icon17.webp";
export default function Section_07() {
    return (
        <section className="sc-1lw4m5x-0 sc-fxu8h6-0 iYpozj bDwmPh">
            <div className="sc-1lw4m5x-1 sc-fxu8h6-1 iukxsw">
                <div className="sc-1lw4m5x-3 sc-fxu8h6-2 kGWgrY">
                    <div className="sc-1rvybd7-0 kHDmkU">
                        <div className="sc-1rvybd7-1 iZIXVn banner-chsb-yield">
                            <div className="sc-1rvybd7-2 idiJzW">
                                <div className="sc-1rvybd7-4 ccxHJg illustration-wrapper">
                                    <div
                                        data-gatsby-image-wrapper=""
                                        className="gatsby-image-wrapper"
                                    >
                                        <div
                                            aria-hidden="true"
                                            style={{
                                                paddingTop:
                                                    "58.82352941176471%",
                                            }}
                                        ></div>
                                        <div
                                            aria-hidden="true"
                                            data-placeholder-image=""
                                            style={{
                                                opacity: "1",
                                                transition:
                                                    "opacity 500ms linear",
                                            }}
                                        ></div>
                                        <img
                                            data-gatsby-image-ssr=""
                                            data-main-image=""
                                            style={{ opacity: "1" }}
                                            sizes="(max-width: 425px) 200px, 300px"
                                            decoding="async"
                                            loading="lazy"
                                            src={logo}
                                            alt="CHSB Yield"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="sc-1rvybd7-3 ePjKpj">
                                <div className="sc-1rvybd7-6 jtAGEA">
                                    <h3 className="sc-1rvybd7-7 fepBpq">
                                        Boost your daily rewards with the
                                        innovative CHSB Yield 2.0
                                    </h3>
                                </div>
                                <div className="sc-1rvybd7-8 hWEvim">
                                    <p>
                                        Get the highest yield rate from your
                                        first CHSB and help strengthen the value
                                        of CHSB and the FundrisePro ecosystem
                                    </p>
                                </div>
                                <div className="sc-1rvybd7-9 gUqWWF">
                                    <Link to="/chsb-yield">
                                        <Button
                                            sx={{
                                                width: "160px",
                                                height: "50px",
                                                borderRadius: "15px",
                                                fontSize: "1.4rem",
                                                fontWeight: 700,
                                                lineHeight: "1tem",
                                            }}
                                            variant="contained"
                                        >
                                            Get rewarded
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
