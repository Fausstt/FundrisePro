import { Close, Menu } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../img/01.png";

export default function Header({ OPR }) {
    // debugger;
    const loc = useLocation();
    const witeLoc = [
        "/About_us",
        "/earn-crypto",
        "/smart-engine",
        "/portfolio-analytics",
        "/ai-asset-analysis",
    ];
    const [ColT, setColT] = useState(false);
    const [ColF, setColF] = useState(false);
    const [Col, setCol] = useState(false);
    const [Men, setMen] = useState(false);
    const nav = [
        { nav: "Invest", to: "portfolio-analytics" },
        { nav: "Community", to: "thematics" },
        { nav: "Learn", to: "chsb-yield" },
        { nav: "About us", to: "About_us" },
    ];
    useEffect(() => {
        window.addEventListener("scroll", scr);
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
        if (!witeLoc.includes(loc.pathname)) {
            setColF(true);
            setCol(false);
        } else {
            setColF(false);
            setCol(true);
        }
    }, [loc]);
    useEffect(() => {
        if (ColF) {
            if (ColT <= -600) {
                setCol(true);
            } else {
                setCol(false);
            }
        }
    }, [ColT]);
    const MenT = () => {
        Men ? setMen(false) : setMen(true);
    };
    function scr() {
        const c = document.getElementById("main");
        const dat = c.getBoundingClientRect();
        setColT(dat.top);
    }

    const b1 = {
        justifyContent: "center",
        color: Col ? "#000" : "#fff",
    };
    return (
        <header
            style={{
                background: Col ? "#fff" : "transparent",
            }}
            className="sc-utixb6-0 iKzQJp"
        >
            <div id="ds"></div>
            <div className="sc-utixb6-1 kktnEi">
                <Link aria-current="page" className="sc-utixb6-5 kAjJqk" to="/">
                    <div className="sc-1cdjx58-0 hysLTj">
                        <img
                            className="logo"
                            style={{
                                width: "50px",
                            }}
                            src={logo}
                            alt=""
                        />
                    </div>
                    <span
                        style={{
                            color: Col ? "#000" : "#fff",
                        }}
                        className="sc-utixb6-4 YzRee"
                    >
                        FundrisePro
                    </span>
                </Link>
                <button
                    style={{
                        cursor: "pointer",
                        marginRight: "40px",
                    }}
                    onClick={MenT}
                    className="sc-la4bzi-0 icaKib sc-utixb6-3 kEvZoQ"
                >
                    {Men ? (
                        <Close
                            fontSize="large"
                            sx={{
                                transform: "scale(2)",
                                color: Col ? "#000" : "#fff",
                            }}
                        />
                    ) : (
                        <Menu
                            fontSize="large"
                            sx={{
                                transform: "scale(2)",
                                color: Col ? "#000" : "#fff",
                            }}
                        />
                    )}
                </button>
                <nav
                    aria-label="Main"
                    data-orientation="horizontal"
                    className="sc-ef0c3r-0 gcLRjG"
                >
                    <div style={{ position: "relative" }}>
                        <ul className="sc-ef0c3r-1 aOzgI">
                            <li className="sc-ef0c3r-2 expOcb">
                                <button className="sc-ef0c3r-3 iMpKNQ">
                                    <a href="/">
                                        <span
                                            style={{
                                                color: Col ? "#000" : "#fff",
                                            }}
                                        >
                                            Trading Room
                                        </span>
                                    </a>
                                </button>
                            </li>
                            {nav.map((i) => (
                                <li key={i.nav} className="sc-ef0c3r-2 expOcb">
                                    <button className="sc-ef0c3r-3 iMpKNQ">
                                        <Link to={i.to}>
                                            <span
                                                style={{
                                                    color: Col
                                                        ? "#000"
                                                        : "#fff",
                                                }}
                                            >
                                                {i.nav}
                                            </span>
                                        </Link>
                                    </button>
                                </li>
                            ))}
                            <li className="sc-ef0c3r-2 expOcb">
                                <button className="sc-ef0c3r-3 iMpKNQ">
                                    <a href="./dop_pages/suport">
                                        <span
                                            style={{
                                                color: Col ? "#000" : "#fff",
                                            }}
                                        >
                                            Suport
                                        </span>
                                    </a>
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Button
                    onClick={OPR}
                    sx={{
                        width: "110px",
                        height: "45px",
                        borderRadius: "10px",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        lineHeight: "1tem",
                    }}
                    size="large"
                    variant="contained"
                >
                    Sing up
                </Button>
                <Button
                    onClick={OPR}
                    color="secondary"
                    sx={{
                        width: "110px",
                        height: "45px",
                        borderRadius: "10px",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        lineHeight: "1tem",
                        color: Col ? "#000" : "#fff",
                    }}
                    size="large"
                    variant="contained"
                >
                    log In
                </Button>
            </div>
            <div className={("sc-1rwwc9j-0", Men ? "eZxsSm" : "kdygDC")}>
                <ul
                    style={{
                        gap: "0.8rem",
                    }}
                    role="navigation"
                    className="sc-ut0ukf-0 eUhNPq"
                >
                    <a href="/">
                        <li
                            onClick={() => setMen(false)}
                            className="sc-ut0ukf-1 liUcul lv"
                        >
                            <h3 className="sc-ut0ukf-2 dxMASy">
                                <button
                                    style={b1}
                                    className="sc-ut0ukf-3 gAltoc bv"
                                >
                                    Trading Room
                                </button>
                            </h3>
                        </li>
                    </a>
                    {nav.map((i) => (
                        <Link key={i.to} to={i.to}>
                            <li
                                onClick={() => setMen(false)}
                                className="sc-ut0ukf-1 liUcul lv"
                            >
                                <h3 className="sc-ut0ukf-2 dxMASy">
                                    <button
                                        style={b1}
                                        className="sc-ut0ukf-3 gAltoc bv"
                                    >
                                        {i.nav}
                                    </button>
                                </h3>
                            </li>
                        </Link>
                    ))}
                    <a href="./dop_pages/suport">
                        <li
                            onClick={() => setMen(false)}
                            className="sc-ut0ukf-1 liUcul lv"
                        >
                            <h3 className="sc-ut0ukf-2 dxMASy">
                                <button
                                    style={b1}
                                    className="sc-ut0ukf-3 gAltoc bv"
                                >
                                    Suport
                                </button>
                            </h3>
                        </li>
                    </a>
                </ul>
            </div>
        </header>
    );
}
