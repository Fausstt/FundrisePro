import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Section_04() {
    return (
        <section className="sc-1lw4m5x-0 sc-fxu8h6-0 iYpozj bDwmPh">
            <div className="sc-1lw4m5x-1 sc-fxu8h6-1 iukxsw">
                <div className="sc-1lw4m5x-3 sc-fxu8h6-2 kGWgrY">
                    <div className="sc-wmasp9-0 upiKY">
                        <div className="sc-wmasp9-2 gVjQwX">
                            <div
                                data-gatsby-image-wrapper=""
                                className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-wmasp9-3 jczpkX"
                            >
                                <div
                                    style={{
                                        maxWidth: "2200px",
                                        display: "block",
                                    }}
                                >
                                    <img
                                        alt=""
                                        role="presentation"
                                        aria-hidden="true"
                                        src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;2200&#x27; width=&#x27;2200&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
                                        style={{
                                            maxWidth: "100%",
                                            display: "block",
                                            position: "static",
                                        }}
                                    />
                                </div>
                                <div
                                    aria-hidden="true"
                                    data-placeholder-image=""
                                    style={{
                                        opacity: "1",
                                        transition: "opacity 500ms linear",
                                    }}
                                ></div>
                                <img
                                    style={{ opacity: "1" }}
                                    src={
                                        "https://wordpes.panelser.fun/wp-content/themes/react-test/static/media/icon18.faf45c7214ad4cea8bf2.webp"
                                    }
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="sc-wmasp9-1 bEDkBk">
                            <h3 className="sc-wmasp9-4 dqQkSM">
                                Invest in the internet of the future!
                            </h3>
                            <p className="sc-wmasp9-5 ijjegC">
                                Grow your wealth with Web3 Thematic.
                            </p>
                            <Link to="/thematics">
                                <Button
                                    sx={{
                                        width: "200px",
                                        height: "60px",
                                        borderRadius: "15px",
                                        fontSize: "1.8rem",
                                        fontWeight: 700,
                                        lineHeight: "1tem",
                                    }}
                                    size="large"
                                    variant="contained"
                                >
                                    Early access
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
