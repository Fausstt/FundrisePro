import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export default function App() {
    const Open_regestration = () =>
        window.open("./dop_pages/open-account", "_self");
    return (
        <>
            <div id="___gatsby">
                <div style={{ outline: "none" }} id="gatsby-focus-wrapper">
                    <Header OPR={Open_regestration} />
                    <Main
                        OPR={Open_regestration}
                        OPS={Open_regestration}
                        OPL={Open_regestration}
                    />
                    <Footer OPR={Open_regestration} />
                </div>
            </div>
        </>
    );
}
