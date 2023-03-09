import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import logo from "../../../img/icon15.png";
const M1 = {
    hidden: {
        transform: "scale(0.8)",
        opacity: 0,
    },
    visible: {
        transform: "scale(1)",
        opacity: 1,
        transitionDuration: "1s",
    },
};
const H1 = {
    hidden: {
        y: +100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transitionDuration: "1s",
        transitionDelay: "0.2s",
    },
};
const H2 = {
    hidden: {
        y: +100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transitionDuration: "1s",
        transitionDelay: "0.4s",
    },
};
export default function AiAssetAnalysis01() {
    return (
        <Parallax
            renderLayer={(percentage) => (
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    className="sc-1lw4m5x-0 sc-1hu6ba9-0 iYpozj ehMrLc"
                >
                    <div className="sc-1lw4m5x-1 sc-1hu6ba9-1 iukxsw eYZLRR">
                        <motion.div
                            variants={M1}
                            className="sc-1lw4m5x-3 sc-1hu6ba9-2 kGWgrY fxYlzf"
                        >
                            <img
                                src={logo}
                                alt="Smart Engine Icon"
                                className="sc-1hu6ba9-3 lfavei"
                            />
                            <div
                                style={{
                                    transform: `matrix(
                                            1,
                                            0,
                                            0,
                                            1,
                                            0,
                                            ${percentage * 500 - 500})
                                                 `,
                                }}
                                className="sc-1hu6ba9-6 dNBeTF hexagonLeft"
                            >
                                <svg
                                    width="844"
                                    height="980"
                                    viewBox="0 0 844 980"
                                    fill="none"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0.0319824 244.922L421.501 0V489.844L0.0319824 244.922Z"
                                        fill="url(#hexagon_paint_0)"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M421.5 489.844V0L842.985 244.922L421.5 489.844Z"
                                        fill="url(#hexagon_paint_1)"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M842.985 244.922L843.001 244.938V734.782L421.501 489.844L842.985 244.922Z"
                                        fill="url(#hexagon_paint_2)"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M421.501 489.86L6.10352e-05 734.782V244.938L0.032074 244.922L421.501 489.844V489.86Z"
                                        fill="url(#hexagon_paint_3)"
                                    ></path>
                                    <path
                                        opacity="0.8"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M421.501 979.752L6.10352e-05 734.814V734.798L421.501 489.86V979.752Z"
                                        fill="url(#hexagon_paint_4)"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M421.501 979.752V489.859V489.843L843.001 734.781V734.814L421.501 979.752Z"
                                        fill="url(#hexagon_paint_5)"
                                    ></path>
                                    <defs>
                                        <linearGradient
                                            id="hexagon_paint_0"
                                            x1="210.766"
                                            y1="0"
                                            x2="210.766"
                                            y2="489.844"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#EDEFF1"></stop>
                                            <stop
                                                offset="1"
                                                stopColor="#EDEFF1"
                                                stopOpacity="0"
                                            ></stop>
                                        </linearGradient>
                                        <linearGradient
                                            id="hexagon_paint_1"
                                            x1="550.458"
                                            y1="0"
                                            x2="550.458"
                                            y2="489.136"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#EDEFF1"></stop>
                                            <stop
                                                offset="1"
                                                stopColor="#EDEFF1"
                                                stopOpacity="0.2"
                                            ></stop>
                                        </linearGradient>
                                        <linearGradient
                                            id="hexagon_paint_2"
                                            x1="632.251"
                                            y1="244.922"
                                            x2="632.251"
                                            y2="734.782"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#EDEFF1"></stop>
                                            <stop
                                                offset="1"
                                                stopColor="#EDEFF1"
                                                stopOpacity="0"
                                            ></stop>
                                        </linearGradient>
                                        <linearGradient
                                            id="hexagon_paint_3"
                                            x1="210.75"
                                            y1="244.922"
                                            x2="210.75"
                                            y2="734.782"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#EDEFF1"></stop>
                                            <stop
                                                offset="1"
                                                stopColor="#EDEFF1"
                                                stopOpacity="0"
                                            ></stop>
                                        </linearGradient>
                                        <linearGradient
                                            id="hexagon_paint_4"
                                            x1="128.963"
                                            y1="489.86"
                                            x2="128.963"
                                            y2="979.044"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop
                                                offset="0.223947"
                                                stopColor="#EDEFF1"
                                                stopOpacity="0.2"
                                            ></stop>
                                            <stop
                                                offset="1"
                                                stopColor="#EDEFF1"
                                            ></stop>
                                        </linearGradient>
                                        <linearGradient
                                            id="hexagon_paint_5"
                                            x1="632.251"
                                            y1="489.843"
                                            x2="632.251"
                                            y2="979.752"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#EDEFF1"></stop>
                                            <stop
                                                offset="1"
                                                stopColor="#EDEFF1"
                                                stopOpacity="0"
                                            ></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div
                                style={{
                                    transform: `matrix(
                                            1,
                                            0,
                                            0,
                                            1,
                                            0,
                                            ${percentage * 500 - 500})
                                                 `,
                                }}
                                className="sc-1hu6ba9-6 dNBeTF hexagonCenter"
                            >
                                <svg
                                    width="844"
                                    height="980"
                                    viewBox="0 0 844 980"
                                    fill="none"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0.0319824 244.922L421.501 0V489.844L0.0319824 244.922Z"
                                        fill="url(#hexagon_paint_0)"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M421.5 489.844V0L842.985 244.922L421.5 489.844Z"
                                        fill="url(#hexagon_paint_1)"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M842.985 244.922L843.001 244.938V734.782L421.501 489.844L842.985 244.922Z"
                                        fill="url(#hexagon_paint_2)"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M421.501 489.86L6.10352e-05 734.782V244.938L0.032074 244.922L421.501 489.844V489.86Z"
                                        fill="url(#hexagon_paint_3)"
                                    ></path>
                                    <path
                                        opacity="0.8"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M421.501 979.752L6.10352e-05 734.814V734.798L421.501 489.86V979.752Z"
                                        fill="url(#hexagon_paint_4)"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M421.501 979.752V489.859V489.843L843.001 734.781V734.814L421.501 979.752Z"
                                        fill="url(#hexagon_paint_5)"
                                    ></path>
                                    <defs>
                                        <linearGradient
                                            id="hexagon_paint_0"
                                            x1="210.766"
                                            y1="0"
                                            x2="210.766"
                                            y2="489.844"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#EDEFF1"></stop>
                                            <stop
                                                offset="1"
                                                stopColor="#EDEFF1"
                                                stopOpacity="0"
                                            ></stop>
                                        </linearGradient>
                                        <linearGradient
                                            id="hexagon_paint_1"
                                            x1="550.458"
                                            y1="0"
                                            x2="550.458"
                                            y2="489.136"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#EDEFF1"></stop>
                                            <stop
                                                offset="1"
                                                stopColor="#EDEFF1"
                                                stopOpacity="0.2"
                                            ></stop>
                                        </linearGradient>
                                        <linearGradient
                                            id="hexagon_paint_2"
                                            x1="632.251"
                                            y1="244.922"
                                            x2="632.251"
                                            y2="734.782"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#EDEFF1"></stop>
                                            <stop
                                                offset="1"
                                                stopColor="#EDEFF1"
                                                stopOpacity="0"
                                            ></stop>
                                        </linearGradient>
                                        <linearGradient
                                            id="hexagon_paint_3"
                                            x1="210.75"
                                            y1="244.922"
                                            x2="210.75"
                                            y2="734.782"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#EDEFF1"></stop>
                                            <stop
                                                offset="1"
                                                stopColor="#EDEFF1"
                                                stopOpacity="0"
                                            ></stop>
                                        </linearGradient>
                                        <linearGradient
                                            id="hexagon_paint_4"
                                            x1="128.963"
                                            y1="489.86"
                                            x2="128.963"
                                            y2="979.044"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop
                                                offset="0.223947"
                                                stopColor="#EDEFF1"
                                                stopOpacity="0.2"
                                            ></stop>
                                            <stop
                                                offset="1"
                                                stopColor="#EDEFF1"
                                            ></stop>
                                        </linearGradient>
                                        <linearGradient
                                            id="hexagon_paint_5"
                                            x1="632.251"
                                            y1="489.843"
                                            x2="632.251"
                                            y2="979.752"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#EDEFF1"></stop>
                                            <stop
                                                offset="1"
                                                stopColor="#EDEFF1"
                                                stopOpacity="0"
                                            ></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div
                                style={{
                                    transform: `matrix(
                                            1,
                                            0,
                                            0,
                                            1,
                                            0,
                                            ${percentage * 500 - 500})
                                                 `,
                                }}
                                className="sc-1hu6ba9-6 dNBeTF hexagonTop"
                            >
                                <svg
                                    width="844"
                                    height="980"
                                    viewBox="0 0 844 980"
                                    fill="none"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0.0319824 244.922L421.501 0V489.844L0.0319824 244.922Z"
                                        fill="url(#hexagon_paint_0)"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M421.5 489.844V0L842.985 244.922L421.5 489.844Z"
                                        fill="url(#hexagon_paint_1)"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M842.985 244.922L843.001 244.938V734.782L421.501 489.844L842.985 244.922Z"
                                        fill="url(#hexagon_paint_2)"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M421.501 489.86L6.10352e-05 734.782V244.938L0.032074 244.922L421.501 489.844V489.86Z"
                                        fill="url(#hexagon_paint_3)"
                                    ></path>
                                    <path
                                        opacity="0.8"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M421.501 979.752L6.10352e-05 734.814V734.798L421.501 489.86V979.752Z"
                                        fill="url(#hexagon_paint_4)"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M421.501 979.752V489.859V489.843L843.001 734.781V734.814L421.501 979.752Z"
                                        fill="url(#hexagon_paint_5)"
                                    ></path>
                                    <defs>
                                        <linearGradient
                                            id="hexagon_paint_0"
                                            x1="210.766"
                                            y1="0"
                                            x2="210.766"
                                            y2="489.844"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#EDEFF1"></stop>
                                            <stop
                                                offset="1"
                                                stopColor="#EDEFF1"
                                                stopOpacity="0"
                                            ></stop>
                                        </linearGradient>
                                        <linearGradient
                                            id="hexagon_paint_1"
                                            x1="550.458"
                                            y1="0"
                                            x2="550.458"
                                            y2="489.136"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#EDEFF1"></stop>
                                            <stop
                                                offset="1"
                                                stopColor="#EDEFF1"
                                                stopOpacity="0.2"
                                            ></stop>
                                        </linearGradient>
                                        <linearGradient
                                            id="hexagon_paint_2"
                                            x1="632.251"
                                            y1="244.922"
                                            x2="632.251"
                                            y2="734.782"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#EDEFF1"></stop>
                                            <stop
                                                offset="1"
                                                stopColor="#EDEFF1"
                                                stopOpacity="0"
                                            ></stop>
                                        </linearGradient>
                                        <linearGradient
                                            id="hexagon_paint_3"
                                            x1="210.75"
                                            y1="244.922"
                                            x2="210.75"
                                            y2="734.782"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#EDEFF1"></stop>
                                            <stop
                                                offset="1"
                                                stopColor="#EDEFF1"
                                                stopOpacity="0"
                                            ></stop>
                                        </linearGradient>
                                        <linearGradient
                                            id="hexagon_paint_4"
                                            x1="128.963"
                                            y1="489.86"
                                            x2="128.963"
                                            y2="979.044"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop
                                                offset="0.223947"
                                                stopColor="#EDEFF1"
                                                stopOpacity="0.2"
                                            ></stop>
                                            <stop
                                                offset="1"
                                                stopColor="#EDEFF1"
                                            ></stop>
                                        </linearGradient>
                                        <linearGradient
                                            id="hexagon_paint_5"
                                            x1="632.251"
                                            y1="489.843"
                                            x2="632.251"
                                            y2="979.752"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#EDEFF1"></stop>
                                            <stop
                                                offset="1"
                                                stopColor="#EDEFF1"
                                                stopOpacity="0"
                                            ></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={H1}
                            className="sc-1lw4m5x-3 sc-1hu6ba9-4 kGWgrY cdrpUP"
                        >
                            <h1>Don’t get lost in the numbers</h1>
                        </motion.div>
                        <motion.div
                            variants={H2}
                            className="sc-1lw4m5x-3 sc-1hu6ba9-5 kGWgrY dHMiWg"
                        >
                            <p>
                                Make smart investment decisions with automated
                                crypto asset analysis, powered by AI.
                            </p>
                        </motion.div>
                    </div>
                </motion.section>
            )}
        />
    );
}
