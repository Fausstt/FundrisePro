import React from "react";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import Og from "../../../img/icon13.png";
const M1 = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transitionDuration: "1s",
    },
};
const m1 = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transitionDelay: "0.1s",
        transitionDuration: "1s",
    },
};
const m2 = {
    hidden: {
        opacity: 0,
    },
    visible: {
        transitionDelay: "0.2s",
        opacity: 1,
        transitionDuration: "1s",
    },
};
const m3 = {
    hidden: {
        opacity: 0,
    },
    visible: {
        transitionDelay: "0.3s",
        opacity: 1,
        transitionDuration: "1s",
    },
};
const m4 = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transitionDelay: "0.4s",
        transitionDuration: "1s",
    },
};
const m5 = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transitionDelay: "0.5s",
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

export default function BuyChsb01() {
    const bgc01 = "#00A1EB";
    const bgc02 = "#024f76";

    return (
        <Parallax
            renderLayer={(percentage) => (
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    className="sc-1lw4m5x-0 sc-13av4cs-0 iYpozj btMzye"
                >
                    <div className="sc-v7db1l-0 GrYFY sc-1vf83gk-1 gUblmb">
                        <svg
                            width="1920"
                            height="1100"
                            viewBox="0 0 1920 1100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_737_8193)">
                                <rect
                                    width="1920"
                                    height="1100"
                                    fill="url(#paint_radial_green_primary)"
                                ></rect>

                                <g opacity="0.5" id="group-1">
                                    <path
                                        d="M970.021 -338.042L970 -338.02V315.898L1532.39 -11.0824L970.021 -338.042Z"
                                        fill="url(#paint0_linear_737_8193)"
                                    ></path>
                                    <path
                                        d="M1532.39 -11.0609L2094.78 315.898V-338.02L2094.74 -338.042L1532.39 -11.0824V-11.0609Z"
                                        fill="url(#paint1_linear_737_8193)"
                                    ></path>
                                    <path
                                        opacity="0.8"
                                        d="M1532.39 642.922L2094.78 315.941V315.919L1532.39 -11.061V642.922Z"
                                        fill="url(#paint2_linear_737_8193)"
                                    ></path>
                                    <path
                                        opacity="0.7"
                                        d="M1532.39 642.921V-11.0615V-11.083L970 315.898V315.94L1532.39 642.921Z"
                                        fill="url(#paint3_linear_737_8193)"
                                    ></path>
                                </g>
                                <g
                                    style={{
                                        transformOrigin: "0px 0px",
                                        opacity: "0.2",
                                        transform: `matrix(
                                            ${1 - (percentage - 1)},
                                            0,
                                            0,
                                            ${1 - (percentage - 1)},
                                            ${(percentage * 300 - 300) * 2},
                                            ${percentage * 1000 - 1000})
                                                 `,
                                    }}
                                    opacity="0.1"
                                    id="group-2"
                                >
                                    <path
                                        d="M965.82 319.832L494.841 45.9448V593.72L965.82 319.832Z"
                                        fill="url(#paint4_linear_737_8193)"
                                    ></path>
                                    <path
                                        d="M494.841 593.72V45.9448L23.8442 319.832L494.841 593.72Z"
                                        fill="url(#paint5_linear_737_8193)"
                                    ></path>
                                    <path
                                        d="M23.844 319.832L23.8262 319.85V867.625L494.841 593.719L23.844 319.832Z"
                                        fill="url(#paint6_linear_737_8193)"
                                    ></path>
                                    <path
                                        d="M494.841 593.737L965.855 867.625V319.85L965.819 319.832L494.841 593.719V593.737Z"
                                        fill="url(#paint7_linear_737_8193)"
                                    ></path>
                                    <path
                                        opacity="0.8"
                                        d="M494.841 1141.57L965.855 867.661V867.643L494.841 593.737V1141.57Z"
                                        fill="url(#paint8_linear_737_8193)"
                                    ></path>
                                    <path
                                        d="M494.841 1141.57V593.737V593.719L23.8262 867.624V867.66L494.841 1141.57Z"
                                        fill="url(#paint9_linear_737_8193)"
                                    ></path>
                                </g>
                                <g
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
                                    opacity="0.5"
                                    id="group-3"
                                >
                                    <path
                                        d="M2015.28 602.263V275.304L1734.56 438.783L2015.28 602.263Z"
                                        fill="url(#paint10_linear_737_8193)"
                                    ></path>
                                    <path
                                        d="M1734.56 438.783L1734.55 438.794V765.753L2015.28 602.263L1734.56 438.783Z"
                                        fill="url(#paint11_linear_737_8193)"
                                    ></path>
                                    <path
                                        d="M2015.28 929.264V602.272V602.262L1734.55 765.752V765.773L2015.28 929.264Z"
                                        fill="url(#paint12_linear_737_8193)"
                                    ></path>
                                </g>
                                <g
                                    style={{
                                        transform: `matrix(
                                            1,
                                            0,
                                            0,
                                            1,
                                            0,
                                            ${percentage * 250 - 250})
                                                 `,
                                    }}
                                    opacity="0.2"
                                    id="group-4"
                                >
                                    <path
                                        d="M1941.78 781.359L1735.49 661V901.718L1941.78 781.359Z"
                                        fill="url(#paint13_linear_737_8193)"
                                    ></path>
                                    <path
                                        d="M1735.49 901.718V661L1529.2 781.359L1735.49 901.718Z"
                                        fill="url(#paint14_linear_737_8193)"
                                    ></path>
                                    <path
                                        d="M1529.2 781.358L1529.19 781.366V1022.08L1735.49 901.717L1529.2 781.358Z"
                                        fill="url(#paint15_linear_737_8193)"
                                    ></path>
                                    <path
                                        d="M1735.49 901.725L1941.8 1022.08V781.366L1941.78 781.358L1735.49 901.717V901.725Z"
                                        fill="url(#paint16_linear_737_8193)"
                                    ></path>
                                    <path
                                        opacity="0.3"
                                        d="M1735.49 1142.47L1941.8 1022.1V1022.09L1735.49 901.726V1142.47Z"
                                        fill="url(#paint17_linear_737_8193)"
                                    ></path>
                                    <path
                                        d="M1735.49 1142.47V901.725V901.717L1529.19 1022.08V1022.1L1735.49 1142.47Z"
                                        fill="url(#paint18_linear_737_8193)"
                                    ></path>
                                </g>
                                <g
                                    style={{
                                        transform: `matrix(
                                            1,
                                            0,
                                            0,
                                            1,
                                            1,
                                            ${percentage * 250 - 250})
                                                 `,
                                    }}
                                    opacity="0.2"
                                    id="group-5"
                                >
                                    <path
                                        d="M2102.98 -10.7608L1818 -177V155.478L2102.98 -10.7608Z"
                                        fill="url(#paint19_linear_737_8193)"
                                    ></path>
                                    <path
                                        d="M1818 155.478V-177L1533.01 -10.7608L1818 155.478Z"
                                        fill="url(#paint20_linear_737_8193)"
                                    ></path>
                                    <path
                                        d="M1533.01 -10.7612L1533 -10.7503V321.728L1818 155.478L1533.01 -10.7612Z"
                                        fill="url(#paint21_linear_737_8193)"
                                    ></path>
                                    <path
                                        d="M1818 155.489L2103 321.728V-10.7503L2102.98 -10.7612L1818 155.478V155.489Z"
                                        fill="url(#paint22_linear_737_8193)"
                                    ></path>
                                    <path
                                        opacity="0.3"
                                        d="M1818 488L2103 321.75V321.739L1818 155.489V488Z"
                                        fill="url(#paint23_linear_737_8193)"
                                    ></path>
                                    <path
                                        d="M1818 488V155.488V155.478L1533 321.728V321.749L1818 488Z"
                                        fill="url(#paint24_linear_737_8193)"
                                    ></path>
                                </g>
                                <g
                                    style={{
                                        transformOrigin: "0px 0px",
                                        opacity: "0.2",
                                        transform: `matrix(
                                            ${1 - (percentage - 1)},
                                            0,
                                            0,
                                            ${1 - (percentage - 1)},
                                            ${(percentage * 500 - 500) * 2},
                                            ${percentage * 500 - 500})
                                                 `,
                                    }}
                                    opacity="0.2"
                                    id="group-6"
                                >
                                    <path
                                        d="M1234.98 330.99L969.5 176V485.98L1234.98 330.99Z"
                                        fill="url(#paint25_linear_737_8193)"
                                    ></path>
                                    <path
                                        d="M969.5 485.98V176L704.01 330.99L969.5 485.98Z"
                                        fill="url(#paint26_linear_737_8193)"
                                    ></path>
                                    <path
                                        d="M704.01 330.989L704 330.999V640.979L969.5 485.979L704.01 330.989Z"
                                        fill="url(#paint27_linear_737_8193)"
                                    ></path>
                                    <path
                                        d="M969.5 485.989L1235 640.979V330.999L1234.98 330.989L969.5 485.979V485.989Z"
                                        fill="url(#paint28_linear_737_8193)"
                                    ></path>
                                    <path
                                        opacity="0.8"
                                        d="M969.5 796L1235 641V640.989L969.5 485.989V796Z"
                                        fill="url(#paint29_linear_737_8193)"
                                    ></path>
                                    <path
                                        d="M969.5 796V485.99V485.979L704 640.98V641L969.5 796Z"
                                        fill="url(#paint30_linear_737_8193)"
                                    ></path>
                                </g>
                                <g opacity="0.2" id="group-7">
                                    <path
                                        d="M1274.96 -222.988L1274.97 -222.976V139.048L965.985 -41.9761L1274.96 -222.988Z"
                                        fill="url(#paint31_linear_737_8193)"
                                    ></path>
                                    <path
                                        d="M965.985 -41.9642L657 139.048V-222.976L657.023 -222.988L965.985 -41.9761V-41.9642Z"
                                        fill="url(#paint32_linear_737_8193)"
                                    ></path>
                                    <path
                                        opacity="0.8"
                                        d="M965.985 320.096L657 139.072V139.06L965.985 -41.9644V320.096Z"
                                        fill="url(#paint33_linear_737_8193)"
                                    ></path>
                                    <path
                                        d="M965.985 320.095V-41.9647V-41.9766L1274.97 139.047V139.071L965.985 320.095Z"
                                        fill="url(#paint34_linear_737_8193)"
                                    ></path>
                                </g>
                                <g opacity="0.2" id="group-8">
                                    <path
                                        d="M494.815 -36.9976L160.42 -232.699V158.704L494.815 -36.9976Z"
                                        fill="url(#paint35_linear_737_8193)"
                                    ></path>
                                    <path
                                        d="M160.42 158.704V-232.699L-173.987 -36.9976L160.42 158.704Z"
                                        fill="url(#paint36_linear_737_8193)"
                                    ></path>
                                    <path
                                        d="M-173.987 -36.998L-174 -36.9852V354.418L160.42 158.704L-173.987 -36.998Z"
                                        fill="url(#paint37_linear_737_8193)"
                                    ></path>
                                    <path
                                        d="M160.42 158.716L494.841 354.418V-36.9852L494.815 -36.998L160.42 158.704V158.716Z"
                                        fill="url(#paint38_linear_737_8193)"
                                    ></path>
                                    <path
                                        opacity="0.8"
                                        d="M160.42 550.158L494.841 354.444V354.431L160.42 158.716V550.158Z"
                                        fill="url(#paint39_linear_737_8193)"
                                    ></path>
                                    <path
                                        d="M160.42 550.158V158.716V158.703L-174 354.418V354.443L160.42 550.158Z"
                                        fill="url(#paint40_linear_737_8193)"
                                    ></path>
                                </g>
                                <g opacity="0.3" id="group-9">
                                    <path
                                        opacity="0.8"
                                        d="M222.594 70.5873L389.334 -27.5068V-27.5133L222.594 -125.607V70.5873Z"
                                        fill="url(#paint41_linear_737_8193)"
                                    ></path>
                                    <path
                                        d="M222.595 70.5874V-125.607V-125.614L55.8555 -27.5196V-27.5067L222.595 70.5874Z"
                                        fill="url(#paint42_linear_737_8193)"
                                    ></path>
                                </g>
                                <g style={{ mixBlendMode: "overlay" }}>
                                    <g
                                        filter="url(#filter0_f_737_8193)"
                                        id="group-10"
                                    >
                                        <path
                                            d="M1236.08 547.071L1236.1 24.2491"
                                            stroke="url(#paint43_linear_737_8193)"
                                        ></path>
                                    </g>
                                    <g
                                        filter="url(#filter1_f_737_8193)"
                                        id="group-11"
                                    >
                                        <path
                                            d="M1492.7 479.249L1136.7 273.249"
                                            stroke="url(#paint44_linear_737_8193)"
                                        ></path>
                                    </g>
                                    <g
                                        style={{ mixBlendMode: "screen" }}
                                        opacity="0.5"
                                        id="group-12"
                                    >
                                        <path
                                            d="M1236.09 609.07C1389.53 609.07 1513.91 484.685 1513.91 331.249C1513.91 177.812 1389.53 53.4277 1236.09 53.4277C1082.66 53.4277 958.271 177.812 958.271 331.249C958.271 484.685 1082.66 609.07 1236.09 609.07Z"
                                            fill="url(#paint45_radial_737_8193)"
                                        ></path>
                                    </g>
                                    <path
                                        id="circle-1"
                                        d="M1235.7 343.249C1242.32 343.249 1247.7 337.876 1247.7 331.249C1247.7 324.622 1242.32 319.249 1235.7 319.249C1229.07 319.249 1223.7 324.622 1223.7 331.249C1223.7 337.876 1229.07 343.249 1235.7 343.249Z"
                                        fill="url(#paint46_radial_737_8193)"
                                    ></path>
                                    <path
                                        id="circle-2"
                                        d=" M1235.7 343.249C1242.32 343.249 1247.7 337.876 1247.7 331.249C1247.7 324.622 1242.32 319.249 1235.7 319.249C1229.07 319.249 1223.7 324.622 1223.7 331.249C1223.7 337.876 1229.07 343.249 1235.7 343.249Z"
                                        fill="url(#paint47_radial_737_8193)"
                                    ></path>
                                </g>
                                <g
                                    style={{ mixBlendMode: "overlay" }}
                                    opacity="0.5"
                                >
                                    <g
                                        filter="url(#filter2_f_737_8193)"
                                        id="group-13"
                                    >
                                        <path
                                            d="M1735.48 826.504L1735.5 425.379"
                                            stroke="url(#paint48_linear_737_8193)"
                                        ></path>
                                    </g>
                                    <g
                                        filter="url(#filter3_f_737_8193)"
                                        id="group-14"
                                    >
                                        <path
                                            d="M1932.37 774.468L1659.23 616.419"
                                            stroke="url(#paint49_linear_737_8193)"
                                        ></path>
                                    </g>
                                    <g
                                        style={{ mixBlendMode: "screen" }}
                                        opacity="0.5"
                                        id="group-14"
                                    >
                                        <path
                                            d="M1735.49 874.072C1853.22 874.072 1948.65 778.64 1948.65 660.919C1948.65 543.197 1853.22 447.766 1735.49 447.766C1617.77 447.766 1522.34 543.197 1522.34 660.919C1522.34 778.64 1617.77 874.072 1735.49 874.072Z"
                                            fill="url(#paint50_radial_737_8193)"
                                        ></path>
                                    </g>
                                    <path
                                        d="M1735.19 670.125C1740.27 670.125 1744.4 666.003 1744.4 660.919C1744.4 655.834 1740.27 651.712 1735.19 651.712C1730.1 651.712 1725.98 655.834 1725.98 660.919C1725.98 666.003 1730.1 670.125 1735.19 670.125Z"
                                        fill="url(#paint51_radial_737_8193)"
                                    ></path>
                                    <path
                                        d="M1735.19 670.125C1740.27 670.125 1744.4 666.003 1744.4 660.919C1744.4 655.834 1740.27 651.712 1735.19 651.712C1730.1 651.712 1725.98 655.834 1725.98 660.919C1725.98 666.003 1730.1 670.125 1735.19 670.125Z"
                                        fill="url(#paint52_radial_737_8193)"
                                    ></path>
                                </g>
                                <rect
                                    width="1920"
                                    height="1100"
                                    fill="url(#paint_radial_green_secondary)"
                                ></rect>
                            </g>
                            <defs>
                                <filter
                                    id="filter0_f_737_8193"
                                    x="1234.08"
                                    y="23.249"
                                    width="4.02808"
                                    height="524.822"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix"
                                    ></feFlood>
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    ></feBlend>
                                    <feGaussianBlur
                                        stdDeviation="0.5"
                                        result="effect1_foregroundBlur_737_8193"
                                    ></feGaussianBlur>
                                </filter>
                                <filter
                                    id="filter1_f_737_8193"
                                    x="1135.19"
                                    y="271.384"
                                    width="359.001"
                                    height="209.73"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix"
                                    ></feFlood>
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    ></feBlend>
                                    <feGaussianBlur
                                        stdDeviation="0.5"
                                        result="effect1_foregroundBlur_737_8193"
                                    ></feGaussianBlur>
                                </filter>
                                <filter
                                    id="filter2_f_737_8193"
                                    x="1733.95"
                                    y="424.612"
                                    width="3.09037"
                                    height="402.66"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix"
                                    ></feFlood>
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    ></feBlend>
                                    <feGaussianBlur
                                        stdDeviation="0.383615"
                                        result="effect1_foregroundBlur_737_8193"
                                    ></feGaussianBlur>
                                </filter>
                                <filter
                                    id="filter3_f_737_8193"
                                    x="1658.08"
                                    y="614.988"
                                    width="275.437"
                                    height="160.912"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix"
                                    ></feFlood>
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    ></feBlend>
                                    <feGaussianBlur
                                        stdDeviation="0.383615"
                                        result="effect1_foregroundBlur_737_8193"
                                    ></feGaussianBlur>
                                </filter>
                                <linearGradient
                                    id="paint0_linear_737_8193"
                                    x1="1251.2"
                                    y1="-338.042"
                                    x2="1251.2"
                                    y2="315.898"
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
                                    id="paint1_linear_737_8193"
                                    x1="1813.59"
                                    y1="-338.042"
                                    x2="1813.59"
                                    y2="315.898"
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
                                    id="paint2_linear_737_8193"
                                    x1="1922.71"
                                    y1="-11.061"
                                    x2="1922.71"
                                    y2="641.976"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop
                                        offset="0.223947"
                                        stopColor="#FFFFFF"
                                        stopOpacity="0.46"
                                    ></stop>
                                    <stop
                                        offset="1"
                                        stopColor="#FFFFFF"
                                        stopOpacity="0.2"
                                    ></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint3_linear_737_8193"
                                    x1="1251.2"
                                    y1="-11.083"
                                    x2="1251.2"
                                    y2="642.921"
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
                                    id="paint4_linear_737_8193"
                                    x1="730.33"
                                    y1="45.9448"
                                    x2="730.33"
                                    y2="593.72"
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
                                    id="paint5_linear_737_8193"
                                    x1="350.734"
                                    y1="45.9448"
                                    x2="350.734"
                                    y2="592.928"
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
                                    id="paint6_linear_737_8193"
                                    x1="259.333"
                                    y1="319.832"
                                    x2="259.333"
                                    y2="867.625"
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
                                    id="paint7_linear_737_8193"
                                    x1="730.348"
                                    y1="319.832"
                                    x2="730.348"
                                    y2="867.625"
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
                                    id="paint8_linear_737_8193"
                                    x1="821.743"
                                    y1="593.737"
                                    x2="821.743"
                                    y2="1140.77"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop
                                        offset="0.223947"
                                        stopColor="#EDEFF1"
                                        stopOpacity="0.2"
                                    ></stop>
                                    <stop offset="1" stopColor="#EDEFF1"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint9_linear_737_8193"
                                    x1="259.333"
                                    y1="593.719"
                                    x2="259.333"
                                    y2="1141.57"
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
                                    id="paint10_linear_737_8193"
                                    x1="1929.39"
                                    y1="275.304"
                                    x2="1929.39"
                                    y2="601.79"
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
                                    id="paint11_linear_737_8193"
                                    x1="1874.91"
                                    y1="438.783"
                                    x2="1874.91"
                                    y2="765.753"
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
                                    id="paint12_linear_737_8193"
                                    x1="1874.91"
                                    y1="602.262"
                                    x2="1874.91"
                                    y2="929.264"
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
                                    id="paint13_linear_737_8193"
                                    x1="1838.64"
                                    y1="661"
                                    x2="1838.64"
                                    y2="901.718"
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
                                    id="paint14_linear_737_8193"
                                    x1="1672.38"
                                    y1="661"
                                    x2="1672.38"
                                    y2="901.37"
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
                                    id="paint15_linear_737_8193"
                                    x1="1632.34"
                                    y1="781.358"
                                    x2="1632.34"
                                    y2="1022.08"
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
                                    id="paint16_linear_737_8193"
                                    x1="1838.65"
                                    y1="781.358"
                                    x2="1838.65"
                                    y2="1022.08"
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
                                    id="paint17_linear_737_8193"
                                    x1="1878.68"
                                    y1="901.726"
                                    x2="1878.68"
                                    y2="1142.12"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop
                                        offset="0.223947"
                                        stopColor="#EDEFF1"
                                        stopOpacity="0.2"
                                    ></stop>
                                    <stop offset="1" stopColor="#EDEFF1"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint18_linear_737_8193"
                                    x1="1632.34"
                                    y1="901.717"
                                    x2="1632.34"
                                    y2="1142.47"
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
                                    id="paint19_linear_737_8193"
                                    x1="1960.49"
                                    y1="-177"
                                    x2="1960.49"
                                    y2="155.478"
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
                                    id="paint20_linear_737_8193"
                                    x1="1730.8"
                                    y1="-177"
                                    x2="1730.8"
                                    y2="154.998"
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
                                    id="paint21_linear_737_8193"
                                    x1="1675.5"
                                    y1="-10.7612"
                                    x2="1675.5"
                                    y2="321.728"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop
                                        stopColor="#FFFFFF"
                                        stopOpacity="0.6"
                                    ></stop>
                                    <stop
                                        offset="1"
                                        stopColor="#FFFFFF"
                                        stopOpacity="0.19"
                                    ></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint22_linear_737_8193"
                                    x1="1960.5"
                                    y1="-10.7612"
                                    x2="1960.5"
                                    y2="321.728"
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
                                    id="paint23_linear_737_8193"
                                    x1="2015.8"
                                    y1="155.489"
                                    x2="2015.8"
                                    y2="487.519"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop
                                        offset="0.223947"
                                        stopColor="#EDEFF1"
                                        stopOpacity="0.2"
                                    ></stop>
                                    <stop offset="1" stopColor="#EDEFF1"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint24_linear_737_8193"
                                    x1="1675.5"
                                    y1="155.478"
                                    x2="1675.5"
                                    y2="488"
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
                                    id="paint25_linear_737_8193"
                                    x1="1102.24"
                                    y1="176"
                                    x2="1102.24"
                                    y2="485.98"
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
                                    id="paint26_linear_737_8193"
                                    x1="888.27"
                                    y1="176"
                                    x2="888.27"
                                    y2="485.532"
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
                                    id="paint27_linear_737_8193"
                                    x1="836.75"
                                    y1="330.989"
                                    x2="836.75"
                                    y2="640.979"
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
                                    id="paint28_linear_737_8193"
                                    x1="1102.25"
                                    y1="330.989"
                                    x2="1102.25"
                                    y2="640.979"
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
                                    id="paint29_linear_737_8193"
                                    x1="1153.77"
                                    y1="485.989"
                                    x2="1153.77"
                                    y2="795.552"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop
                                        offset="0.223947"
                                        stopColor="#EDEFF1"
                                        stopOpacity="0.2"
                                    ></stop>
                                    <stop offset="1" stopColor="#EDEFF1"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint30_linear_737_8193"
                                    x1="836.75"
                                    y1="485.979"
                                    x2="836.75"
                                    y2="796"
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
                                    id="paint31_linear_737_8193"
                                    x1="1120.48"
                                    y1="-222.988"
                                    x2="1120.48"
                                    y2="139.048"
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
                                    id="paint32_linear_737_8193"
                                    x1="811.493"
                                    y1="-222.988"
                                    x2="811.493"
                                    y2="139.048"
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
                                    id="paint33_linear_737_8193"
                                    x1="751.537"
                                    y1="-41.9644"
                                    x2="751.537"
                                    y2="319.572"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop
                                        offset="0.223947"
                                        stopColor="#EDEFF1"
                                        stopOpacity="0.2"
                                    ></stop>
                                    <stop offset="1" stopColor="#EDEFF1"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint34_linear_737_8193"
                                    x1="1120.48"
                                    y1="-41.9766"
                                    x2="1120.48"
                                    y2="320.095"
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
                                    id="paint35_linear_737_8193"
                                    x1="327.618"
                                    y1="-232.699"
                                    x2="327.618"
                                    y2="158.704"
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
                                    id="paint36_linear_737_8193"
                                    x1="58.1046"
                                    y1="-232.699"
                                    x2="58.1046"
                                    y2="158.138"
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
                                    id="paint37_linear_737_8193"
                                    x1="-6.78981"
                                    y1="-36.998"
                                    x2="-6.78981"
                                    y2="354.418"
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
                                    id="paint38_linear_737_8193"
                                    x1="327.63"
                                    y1="-36.998"
                                    x2="327.63"
                                    y2="354.418"
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
                                    id="paint39_linear_737_8193"
                                    x1="392.521"
                                    y1="158.716"
                                    x2="392.521"
                                    y2="549.592"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop
                                        offset="0.223947"
                                        stopColor="#EDEFF1"
                                        stopOpacity="0.2"
                                    ></stop>
                                    <stop offset="1" stopColor="#EDEFF1"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint40_linear_737_8193"
                                    x1="-6.78981"
                                    y1="158.703"
                                    x2="-6.78981"
                                    y2="550.158"
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
                                    id="paint41_linear_737_8193"
                                    x1="338.318"
                                    y1="-125.607"
                                    x2="338.318"
                                    y2="70.3038"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop
                                        offset="0.223947"
                                        stopColor="#EDEFF1"
                                        stopOpacity="0.2"
                                    ></stop>
                                    <stop offset="1" stopColor="#EDEFF1"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint42_linear_737_8193"
                                    x1="139.225"
                                    y1="-125.614"
                                    x2="139.225"
                                    y2="70.5874"
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
                                    id="paint43_linear_737_8193"
                                    x1="1235.97"
                                    y1="28.1258"
                                    x2="1235.3"
                                    y2="527.948"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop
                                        stopColor="#FFFFFF"
                                        stopOpacity="0"
                                    ></stop>
                                    <stop
                                        offset="0.260417"
                                        stopColor="#FFFFFF"
                                    ></stop>
                                    <stop
                                        offset="0.765625"
                                        stopColor="#FFFFFF"
                                    ></stop>
                                    <stop
                                        offset="0.989583"
                                        stopColor="#FFFFFF"
                                        stopOpacity="0"
                                    ></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint44_linear_737_8193"
                                    x1="1139.28"
                                    y1="274.869"
                                    x2="1479.73"
                                    y2="471.615"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop
                                        stopColor="#FFFFFF"
                                        stopOpacity="0"
                                    ></stop>
                                    <stop
                                        offset="0.260417"
                                        stopColor="#FFFFFF"
                                    ></stop>
                                    <stop
                                        offset="0.765625"
                                        stopColor="#FFFFFF"
                                    ></stop>
                                    <stop
                                        offset="0.989583"
                                        stopColor="#FFFFFF"
                                        stopOpacity="0"
                                    ></stop>
                                </linearGradient>
                                <radialGradient
                                    id="paint45_radial_737_8193"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(1235.98 331.14) scale(277.915)"
                                >
                                    <stop stopColor="#FFFFFF"></stop>
                                    <stop
                                        offset="0.364583"
                                        stopColor="#F8FFFE"
                                        stopOpacity="0.36"
                                    ></stop>
                                    <stop
                                        offset="0.755208"
                                        stopColor="#FFFFFF"
                                        stopOpacity="0.05"
                                    ></stop>
                                    <stop
                                        offset="1"
                                        stopColor="#FFFFFF"
                                        stopOpacity="0"
                                    ></stop>
                                </radialGradient>
                                <radialGradient
                                    id="paint46_radial_737_8193"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(1235.69 331.244) scale(12.004)"
                                >
                                    <stop stopColor="#FFFFFF"></stop>
                                    <stop
                                        offset="0.0729167"
                                        stopColor="#F8FFFE"
                                        stopOpacity="0.596522"
                                    ></stop>
                                    <stop
                                        offset="0.411458"
                                        stopColor="#FFFFFF"
                                        stopOpacity="0.2"
                                    ></stop>
                                    <stop
                                        offset="0.729167"
                                        stopColor="#FFFFFF"
                                        stopOpacity="0.05"
                                    ></stop>
                                    <stop
                                        offset="1"
                                        stopColor="#FFFFFF"
                                        stopOpacity="0"
                                    ></stop>
                                </radialGradient>
                                <radialGradient
                                    id="paint47_radial_737_8193"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(1235.69 331.244) scale(12.004)"
                                >
                                    <stop stopColor="#FFFFFF"></stop>
                                    <stop
                                        offset="0.0729167"
                                        stopColor="#F8FFFE"
                                        stopOpacity="0.596522"
                                    ></stop>
                                    <stop
                                        offset="0.411458"
                                        stopColor="#FFFFFF"
                                        stopOpacity="0.2"
                                    ></stop>
                                    <stop
                                        offset="0.729167"
                                        stopColor="#FFFFFF"
                                        stopOpacity="0.05"
                                    ></stop>
                                    <stop
                                        offset="1"
                                        stopColor="#FFFFFF"
                                        stopOpacity="0"
                                    ></stop>
                                </radialGradient>
                                <linearGradient
                                    id="paint48_linear_737_8193"
                                    x1="1735.4"
                                    y1="428.354"
                                    x2="1734.89"
                                    y2="811.832"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop
                                        stopColor="#FFFFFF"
                                        stopOpacity="0"
                                    ></stop>
                                    <stop
                                        offset="0.260417"
                                        stopColor="#FFFFFF"
                                    ></stop>
                                    <stop
                                        offset="0.765625"
                                        stopColor="#FFFFFF"
                                    ></stop>
                                    <stop
                                        offset="0.989583"
                                        stopColor="#FFFFFF"
                                        stopOpacity="0"
                                    ></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint49_linear_737_8193"
                                    x1="1661.22"
                                    y1="617.661"
                                    x2="1922.42"
                                    y2="768.612"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop
                                        stopColor="#FFFFFF"
                                        stopOpacity="0"
                                    ></stop>
                                    <stop
                                        offset="0.260417"
                                        stopColor="#FFFFFF"
                                    ></stop>
                                    <stop
                                        offset="0.765625"
                                        stopColor="#FFFFFF"
                                    ></stop>
                                    <stop
                                        offset="0.989583"
                                        stopColor="#FFFFFF"
                                        stopOpacity="0"
                                    ></stop>
                                </linearGradient>
                                <radialGradient
                                    id="paint50_radial_737_8193"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(1735.41 660.835) scale(213.225)"
                                >
                                    <stop stopColor="#FFFFFF"></stop>
                                    <stop
                                        offset="0.364583"
                                        stopColor="#F8FFFE"
                                        stopOpacity="0.36"
                                    ></stop>
                                    <stop
                                        offset="0.755208"
                                        stopColor="#FFFFFF"
                                        stopOpacity="0.05"
                                    ></stop>
                                    <stop
                                        offset="1"
                                        stopColor="#FFFFFF"
                                        stopOpacity="0"
                                    ></stop>
                                </radialGradient>
                                <radialGradient
                                    id="paint51_radial_737_8193"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(1735.19 660.915) scale(9.20986)"
                                >
                                    <stop stopColor="#FFFFFF"></stop>
                                    <stop
                                        offset="0.0729167"
                                        stopColor="#F8FFFE"
                                        stopOpacity="0.596522"
                                    ></stop>
                                    <stop
                                        offset="0.411458"
                                        stopColor="#FFFFFF"
                                        stopOpacity="0.2"
                                    ></stop>
                                    <stop
                                        offset="0.729167"
                                        stopColor="#FFFFFF"
                                        stopOpacity="0.05"
                                    ></stop>
                                    <stop
                                        offset="1"
                                        stopColor="#FFFFFF"
                                        stopOpacity="0"
                                    ></stop>
                                </radialGradient>
                                <radialGradient
                                    id="paint52_radial_737_8193"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(1735.19 660.915) scale(9.20986)"
                                >
                                    <stop stopColor="#FFFFFF"></stop>
                                    <stop
                                        offset="0.0729167"
                                        stopColor="#F8FFFE"
                                        stopOpacity="0.596522"
                                    ></stop>
                                    <stop
                                        offset="0.411458"
                                        stopColor="#FFFFFF"
                                        stopOpacity="0.2"
                                    ></stop>
                                    <stop
                                        offset="0.729167"
                                        stopColor="#FFFFFF"
                                        stopOpacity="0.05"
                                    ></stop>
                                    <stop
                                        offset="1"
                                        stopColor="#FFFFFF"
                                        stopOpacity="0"
                                    ></stop>
                                </radialGradient>
                                <linearGradient
                                    id="paint_linear_blue_primary"
                                    x1="-248"
                                    y1="-89"
                                    x2="1451.84"
                                    y2="651.36"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#2D95FF"></stop>
                                    <stop
                                        offset="0.347165"
                                        stopColor="#2D95FF"
                                        stopOpacity="0.3"
                                    ></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint_linear_orange_primary"
                                    x1="-248"
                                    y1="-89"
                                    x2="1451.84"
                                    y2="651.36"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#FF8D00"></stop>
                                    <stop
                                        offset="0.347165"
                                        stopColor="#FF8D00"
                                        stopOpacity="0.3"
                                    ></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint_linear_purple_primary"
                                    x1="-248"
                                    y1="-89"
                                    x2="1451.84"
                                    y2="651.36"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#7869ff"></stop>
                                    <stop
                                        offset="0.347165"
                                        stopColor="#7869ff"
                                        stopOpacity="0.3"
                                    ></stop>
                                </linearGradient>
                                <radialGradient
                                    id="paint_radial_green_primary"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(1425 454) rotate(169.398) scale(888.67 1551.13)"
                                >
                                    <stop stopColor={bgc01}></stop>
                                    <stop offset="1" stopColor={bgc02}></stop>
                                </radialGradient>
                                <linearGradient
                                    id="paint_radial_white"
                                    x1="-248"
                                    y1="-89"
                                    x2="1451.84"
                                    y2="651.36"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#FFFFFF"></stop>
                                    <stop
                                        offset="0.347165"
                                        stopColor="#FFFFFF"
                                        stopOpacity="0.3"
                                    ></stop>
                                </linearGradient>
                                <radialGradient
                                    id="paint_radial_green_secondary"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(2180 550) rotate(-168.206) scale(2284.74 3536.62)"
                                >
                                    <stop
                                        offset="0.10273"
                                        stopColor="#191E29"
                                        stopOpacity="0.642456"
                                    ></stop>
                                    <stop
                                        offset="0.412792"
                                        stopColor="#116D54"
                                        stopOpacity="0.2"
                                    ></stop>
                                    <stop
                                        offset="0.792672"
                                        stopColor="#191E29"
                                        stopOpacity="0.6"
                                    ></stop>
                                    <stop
                                        offset="0.88834"
                                        stopColor="#191E29"
                                    ></stop>
                                </radialGradient>
                                <clipPath id="clip0_737_8193">
                                    <rect
                                        width="1920"
                                        height="1100"
                                        fill="#FFFFFF"
                                    ></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="sc-1lw4m5x-1 sc-13av4cs-1 iukxsw bkcmUT">
                        <div className="sc-qw28ml-0 joqWyy sc-13av4cs-4 gPSOLf chsb-flower-container">
                            <div className="sc-qw28ml-1 iKGBqP">
                                <motion.div
                                    variants={M1}
                                    data-gatsby-image-wrapper=""
                                    className="gatsby-image-wrapper sc-qw28ml-2 cmjMPy"
                                >
                                    <div
                                        aria-hidden="true"
                                        style={{
                                            paddingTop: "100.20618556701031%",
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
                                        sizes="(maxWidth: 768px) 175px, 400px"
                                        decoding="async"
                                        loading="lazy"
                                        src="https://images.prismic.io/swissborg-website/a546cb04-3519-4578-beab-fa7cc6f86f1e_burn-hero-icon.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=308&amp;h=308"
                                        alt="CHSB"
                                    />
                                </motion.div>
                                <motion.div
                                    variants={m1}
                                    className="sc-qw28ml-3 fWcOtI leaf--0"
                                >
                                    <div className="sc-qw28ml-4 bVpkUO leaf-line--0"></div>
                                    <div
                                        data-gatsby-image-wrapper=""
                                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                                    >
                                        <div
                                            style={{
                                                maxWidth: "450px",
                                                display: "block",
                                            }}
                                        >
                                            <img
                                                alt=""
                                                role="presentation"
                                                aria-hidden="true"
                                                src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;450&#x27; width=&#x27;450&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                transition:
                                                    "opacity 500ms linear",
                                            }}
                                        ></div>
                                        <img
                                            data-gatsby-image-ssr=""
                                            data-main-image=""
                                            style={{ opacity: "1" }}
                                            sizes="(maxWidth: 768px) 50px, 150px"
                                            decoding="async"
                                            loading="lazy"
                                            src={Og}
                                            alt="Burn"
                                        />
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={m2}
                                    className="sc-qw28ml-3 fWcOtI leaf--1"
                                >
                                    <div className="sc-qw28ml-4 bVpkUO leaf-line--1"></div>
                                    <div
                                        data-gatsby-image-wrapper=""
                                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                                    >
                                        <div
                                            style={{
                                                maxWidth: "450px",
                                                display: "block",
                                            }}
                                        >
                                            <img
                                                alt=""
                                                role="presentation"
                                                aria-hidden="true"
                                                src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;450&#x27; width=&#x27;450&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                transition:
                                                    "opacity 500ms linear",
                                            }}
                                        ></div>
                                        <img
                                            data-gatsby-image-ssr=""
                                            data-main-image=""
                                            style={{ opacity: "1" }}
                                            sizes="(maxWidth: 768px) 50px, 150px"
                                            decoding="async"
                                            loading="lazy"
                                            src="https://images.prismic.io/swissborg-website/c283c233-9563-4932-935b-76793d24d896_community-premium-icon-cirlce.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=325&amp;h=325"
                                            alt="Community"
                                        />
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={m3}
                                    className="sc-qw28ml-3 fWcOtI leaf--2"
                                >
                                    <div className="sc-qw28ml-4 bVpkUO leaf-line--2"></div>
                                    <div
                                        data-gatsby-image-wrapper=""
                                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                                    >
                                        <div
                                            style={{
                                                maxWidth: "450px",
                                                display: "block",
                                            }}
                                        >
                                            <img
                                                alt=""
                                                role="presentation"
                                                aria-hidden="true"
                                                src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;450&#x27; width=&#x27;450&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                transition:
                                                    "opacity 500ms linear",
                                            }}
                                        ></div>
                                        <img
                                            data-gatsby-image-ssr=""
                                            data-main-image=""
                                            style={{ opacity: "1" }}
                                            sizes="(maxWidth: 768px) 50px, 150px"
                                            decoding="async"
                                            loading="lazy"
                                            src="https://images.prismic.io/swissborg-website/ae453b6f-d270-49a1-8459-d62b0d8cb967_premium-hero-icon-circle.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=248&amp;h=248"
                                            alt="Premium"
                                        />
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={m4}
                                    className="sc-qw28ml-3 fWcOtI leaf--3"
                                >
                                    <div className="sc-qw28ml-4 bVpkUO leaf-line--3"></div>
                                    <div
                                        data-gatsby-image-wrapper=""
                                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                                    >
                                        <div
                                            style={{
                                                maxWidth: "450px",
                                                display: "block",
                                            }}
                                        >
                                            <img
                                                alt=""
                                                role="presentation"
                                                aria-hidden="true"
                                                src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;449&#x27; width=&#x27;450&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                transition:
                                                    "opacity 500ms linear",
                                            }}
                                        ></div>
                                        <img
                                            data-gatsby-image-ssr=""
                                            data-main-image=""
                                            style={{ opacity: "1" }}
                                            sizes="(maxWidth: 768px) 50px, 150px"
                                            decoding="async"
                                            loading="lazy"
                                            src="https://images.prismic.io/swissborg-website/d4472938-ee4c-4899-bed8-1a81fc103dfd_yield-hero-icon-circle.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=405&amp;h=404"
                                            alt="Yield"
                                        />
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={m5}
                                    className="sc-qw28ml-3 fWcOtI leaf--4"
                                >
                                    <div className="sc-qw28ml-4 bVpkUO leaf-line--4"></div>
                                    <div
                                        data-gatsby-image-wrapper=""
                                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                                    >
                                        <div
                                            style={{
                                                maxWidth: "450px",
                                                display: "block",
                                            }}
                                        >
                                            <img
                                                alt=""
                                                role="presentation"
                                                aria-hidden="true"
                                                src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;461&#x27; width=&#x27;450&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                transition:
                                                    "opacity 500ms linear",
                                            }}
                                        ></div>
                                        <img
                                            data-gatsby-image-ssr=""
                                            data-main-image=""
                                            style={{ opacity: "1" }}
                                            sizes="(maxWidth: 768px) 50px, 150px"
                                            decoding="async"
                                            loading="lazy"
                                            src="https://images.prismic.io/swissborg-website/13d16ac5-e75b-444c-af98-1aa5aadd2c8b_voting-hero-icon-circle.png?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=285&amp;h=292"
                                            alt="Voting"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        <div className="sc-1lw4m5x-3 sc-13av4cs-3 kGWgrY kEUdrn">
                            <motion.h1 variants={H1}>
                                The FundrisePro Token (CHSB)
                            </motion.h1>
                            <motion.p variants={H2}>
                                With FundrisePro, you have the opportunity not
                                only to be a user but to become a real
                                contributor by holding CHSB tokens and
                                benefiting from the growth of the ecosystem.
                            </motion.p>
                        </div>
                    </div>
                </motion.section>
            )}
        />
    );
}
