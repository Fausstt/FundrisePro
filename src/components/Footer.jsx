import React from "react";

export default function Footer({ OPR }) {
    return (
        <footer id="footer" className="sc-10p2go7-0 jjSbwU">
            <div className="sc-10p2go7-1 gyasjp">
                <div className="sc-1lw4m5x-1 sc-10p2go7-2 iukxsw lnYfKO">
                    <div className="sc-10p2go7-3 harUhO">
                        <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                        >
                            <path
                                d="M12 24.7059C18.6274 24.7059 24 19.3333 24 12.7059C24 6.07845 18.6274 0.705872 12 0.705872C5.37258 0.705872 0 6.07845 0 12.7059C0 19.3333 5.37258 24.7059 12 24.7059Z"
                                fill="#D80027"
                            ></path>
                            <path
                                d="M18.261 10.6189H14.0871V6.44501H9.91315V10.6189H5.73926V14.7928H9.91315V18.9667H14.0871V14.7928H18.261V10.6189Z"
                                fill="#F0F0F0"
                            ></path>
                        </svg>
                        <h4 className="sc-10p2go7-4 faZcGO">
                            Proudly engineered in Switzerland
                        </h4>
                    </div>
                </div>
                <div className="sc-1lw4m5x-1 sc-10p2go7-2 iukxsw lnYfKO">
                    <div className="sc-10p2go7-6 ggwaaV">
                        <div className="sc-1qcg5fz-0 cIuUzm sc-mokacr-0 dciviI">
                            <h4 className="sc-mokacr-1 jVaGma">
                                Subscribe to our newsletter
                            </h4>
                            <p className="sc-mokacr-2 fHMcuI">
                                Receive official updates when you join our
                                mailing list
                            </p>
                            <div className="sc-6enz9e-0 hGUGZX sc-mokacr-3 bbDwog">
                                <form
                                    method="post"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        OPR();
                                    }}
                                    className="sc-6enz9e-1 jKArDe"
                                >
                                    <div className="sc-v54543-0 sc-abkl7r-0 gUWjCs">
                                        <label className="sc-abkl7r-2 frgLKx">
                                            Name
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Name (required)"
                                            className="sc-abkl7r-1 fUXGAW"
                                        />
                                    </div>
                                    <div className="sc-v54543-0 sc-abkl7r-0 fAYyxK">
                                        <label className="sc-abkl7r-2 frgLKx">
                                            Email
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="Email (required)"
                                            className="sc-abkl7r-1 fUXGAW"
                                        />
                                        <button
                                            aria-label="Submit Button"
                                            className="sc-1yw1o2j-0 cvnOOC sc-abkl7r-4 gHRvXK"
                                            type="submit"
                                        >
                                            <span className="sc-1yw1o2j-1 lcdIii">
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M6.292 2.336a.938.938 0 0 1 0-1.36 1.002 1.002 0 0 1 1.38 0l10.616 10.199c.14.135.215.313.255.452.04.142.057.281.057.373 0 .236-.054.578-.312.826L7.673 23.025a1.002 1.002 0 0 1-1.38 0 .938.938 0 0 1 0-1.36L16.35 12 6.292 2.336Z"
                                                        fill="currentColor"
                                                    ></path>
                                                </svg>
                                                <span></span>
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="sc-10p2go7-6 ggwaaV">
                        <div className="sc-1qcg5fz-0 cZdhsC sc-1ocaid0-0 fhahUc">
                            <h4 className="sc-1ocaid0-1 kvdaUW">
                                Be part of our growing global community
                            </h4>
                            <div className="sc-1ocaid0-2 kKNjmk">
                                Follow and subscribe to our channels
                            </div>
                            <div className="sc-1ocaid0-3 bDLcwr">
                                <div className="sc-lggw5w-0 brQxyI">
                                    <a
                                        href=""
                                        aria-label="twitter"
                                        className="sc-lggw5w-1 kBxbZi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div
                                            data-gatsby-image-wrapper=""
                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                                        >
                                            <div
                                                style={{
                                                    maxWidth: "36px",
                                                    display: "block",
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;36&#x27; width=&#x27;36&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                sizes="(min-width: 36px) 36px, 100vw"
                                                decoding="async"
                                                loading="lazy"
                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/eee6504b-d1cc-46d0-b8c5-f4e7ba8fc76e_icon-twitter-default.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36"
                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/eee6504b-d1cc-46d0-b8c5-f4e7ba8fc76e_icon-twitter-default.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36 36w"
                                                alt="twitter"
                                            />
                                        </div>
                                    </a>
                                    <a
                                        href=""
                                        aria-label="twitter"
                                        className="sc-lggw5w-1 sc-lggw5w-2 kBxbZi xGKbC"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div
                                            data-gatsby-image-wrapper=""
                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                                        >
                                            <div
                                                style={{
                                                    maxWidth: "36px",
                                                    display: "block",
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;36&#x27; width=&#x27;36&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                sizes="(min-width: 36px) 36px, 100vw"
                                                decoding="async"
                                                loading="lazy"
                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/4725fd57-ce23-424b-8beb-177cb078b1c1_icon-twitter-active.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36"
                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/4725fd57-ce23-424b-8beb-177cb078b1c1_icon-twitter-active.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36 36w"
                                                alt="twitter"
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div className="sc-lggw5w-0 brQxyI">
                                    <a
                                        href=""
                                        aria-label="discord"
                                        className="sc-lggw5w-1 kBxbZi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div
                                            data-gatsby-image-wrapper=""
                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                                        >
                                            <div
                                                style={{
                                                    maxWidth: "36px",
                                                    display: "block",
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;36&#x27; width=&#x27;36&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                sizes="(min-width: 36px) 36px, 100vw"
                                                decoding="async"
                                                loading="lazy"
                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/1cfc3603-5a56-45c7-b35f-2c3ccec45397_icon-discord-default.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36"
                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/1cfc3603-5a56-45c7-b35f-2c3ccec45397_icon-discord-default.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36 36w"
                                                alt="discord"
                                            />
                                        </div>
                                    </a>
                                    <a
                                        href=""
                                        aria-label="discord"
                                        className="sc-lggw5w-1 sc-lggw5w-2 kBxbZi xGKbC"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div
                                            data-gatsby-image-wrapper=""
                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                                        >
                                            <div
                                                style={{
                                                    maxWidth: "36px",
                                                    display: "block",
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;36&#x27; width=&#x27;36&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                sizes="(min-width: 36px) 36px, 100vw"
                                                decoding="async"
                                                loading="lazy"
                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/52d8f9c0-c358-4ee9-bb4f-792ae601d180_icon-discord-active.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36"
                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/52d8f9c0-c358-4ee9-bb4f-792ae601d180_icon-discord-active.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36 36w"
                                                alt="discord"
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div className="sc-lggw5w-0 brQxyI">
                                    <a
                                        href=""
                                        aria-label="youtube"
                                        className="sc-lggw5w-1 kBxbZi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div
                                            data-gatsby-image-wrapper=""
                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                                        >
                                            <div
                                                style={{
                                                    maxWidth: "36px",
                                                    display: "block",
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;36&#x27; width=&#x27;36&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                sizes="(min-width: 36px) 36px, 100vw"
                                                decoding="async"
                                                loading="lazy"
                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/ba1d2c21-c835-4056-8859-c34b5d5d77ed_icon-youtube-default.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36"
                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/ba1d2c21-c835-4056-8859-c34b5d5d77ed_icon-youtube-default.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36 36w"
                                                alt="youtube"
                                            />
                                        </div>
                                    </a>
                                    <a
                                        href=""
                                        aria-label="youtube"
                                        className="sc-lggw5w-1 sc-lggw5w-2 kBxbZi xGKbC"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div
                                            data-gatsby-image-wrapper=""
                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                                        >
                                            <div
                                                style={{
                                                    maxWidth: "36px",
                                                    display: "block",
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;36&#x27; width=&#x27;36&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                sizes="(min-width: 36px) 36px, 100vw"
                                                decoding="async"
                                                loading="lazy"
                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/0fff610c-18e7-469a-a940-a32a5b3b2e8a_icon-youtube-active.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36"
                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/0fff610c-18e7-469a-a940-a32a5b3b2e8a_icon-youtube-active.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36 36w"
                                                alt="youtube"
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div className="sc-lggw5w-0 brQxyI">
                                    <a
                                        href=""
                                        aria-label="facebook"
                                        className="sc-lggw5w-1 kBxbZi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div
                                            data-gatsby-image-wrapper=""
                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                                        >
                                            <div
                                                style={{
                                                    maxWidth: "36px",
                                                    display: "block",
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;36&#x27; width=&#x27;36&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                sizes="(min-width: 36px) 36px, 100vw"
                                                decoding="async"
                                                loading="lazy"
                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/8b7d32dc-d7ad-4836-a744-84803157f588_icon-facebook-default.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36"
                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/8b7d32dc-d7ad-4836-a744-84803157f588_icon-facebook-default.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36 36w"
                                                alt="facebook"
                                            />
                                        </div>
                                    </a>
                                    <a
                                        href=""
                                        aria-label="facebook"
                                        className="sc-lggw5w-1 sc-lggw5w-2 kBxbZi xGKbC"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div
                                            data-gatsby-image-wrapper=""
                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                                        >
                                            <div
                                                style={{
                                                    maxWidth: "36px",
                                                    display: "block",
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;36&#x27; width=&#x27;36&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                sizes="(min-width: 36px) 36px, 100vw"
                                                decoding="async"
                                                loading="lazy"
                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/5118506e-32a0-4901-bcfc-12604e02ba5c_icon-facebook-active.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36"
                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/5118506e-32a0-4901-bcfc-12604e02ba5c_icon-facebook-active.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36 36w"
                                                alt="facebook"
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div className="sc-lggw5w-0 brQxyI">
                                    <a
                                        href=""
                                        aria-label="instagram"
                                        className="sc-lggw5w-1 kBxbZi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div
                                            data-gatsby-image-wrapper=""
                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                                        >
                                            <div
                                                style={{
                                                    maxWidth: "36px",
                                                    display: "block",
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;36&#x27; width=&#x27;36&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                sizes="(min-width: 36px) 36px, 100vw"
                                                decoding="async"
                                                loading="lazy"
                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/32194d32-992f-4150-8b68-1a206e91109f_icon-instagram-default.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36"
                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/32194d32-992f-4150-8b68-1a206e91109f_icon-instagram-default.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36 36w"
                                                alt="instagra"
                                            />
                                        </div>
                                    </a>
                                    <a
                                        href=""
                                        aria-label="instagram"
                                        className="sc-lggw5w-1 sc-lggw5w-2 kBxbZi xGKbC"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div
                                            data-gatsby-image-wrapper=""
                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                                        >
                                            <div
                                                style={{
                                                    maxWidth: "36px",
                                                    display: "block",
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;36&#x27; width=&#x27;36&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                sizes="(min-width: 36px) 36px, 100vw"
                                                decoding="async"
                                                loading="lazy"
                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/23b42626-fcc6-4fb2-9481-4a40472e3fd1_icon-instagram-active.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36"
                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/23b42626-fcc6-4fb2-9481-4a40472e3fd1_icon-instagram-active.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36 36w"
                                                alt="instagra"
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div className="sc-lggw5w-0 brQxyI">
                                    <a
                                        href=""
                                        aria-label="linkedin"
                                        className="sc-lggw5w-1 kBxbZi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div
                                            data-gatsby-image-wrapper=""
                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                                        >
                                            <div
                                                style={{
                                                    maxWidth: "36px",
                                                    display: "block",
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;36&#x27; width=&#x27;36&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                sizes="(min-width: 36px) 36px, 100vw"
                                                decoding="async"
                                                loading="lazy"
                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/0fb9f709-14da-4cf4-9fc7-5ada4f70c90c_icon-linkedin-default.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36"
                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/0fb9f709-14da-4cf4-9fc7-5ada4f70c90c_icon-linkedin-default.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36 36w"
                                                alt="linkedin"
                                            />
                                        </div>
                                    </a>
                                    <a
                                        href=""
                                        aria-label="linkedin"
                                        className="sc-lggw5w-1 sc-lggw5w-2 kBxbZi xGKbC"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div
                                            data-gatsby-image-wrapper=""
                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                                        >
                                            <div
                                                style={{
                                                    maxWidth: "36px",
                                                    display: "block",
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;36&#x27; width=&#x27;36&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                sizes="(min-width: 36px) 36px, 100vw"
                                                decoding="async"
                                                loading="lazy"
                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/5d049616-22c4-44e4-9007-7ac55452d4a8_icon-linkedin-active.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36"
                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/5d049616-22c4-44e4-9007-7ac55452d4a8_icon-linkedin-active.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36 36w"
                                                alt="linkedin"
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div className="sc-lggw5w-0 brQxyI">
                                    <a
                                        href=""
                                        aria-label="telegram"
                                        className="sc-lggw5w-1 kBxbZi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div
                                            data-gatsby-image-wrapper=""
                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                                        >
                                            <div
                                                style={{
                                                    maxWidth: "36px",
                                                    display: "block",
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;36&#x27; width=&#x27;36&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                sizes="(min-width: 36px) 36px, 100vw"
                                                decoding="async"
                                                loading="lazy"
                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/271fba05-1f80-4a87-99a5-1e802c749d56_icon-telegram-default.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36"
                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/271fba05-1f80-4a87-99a5-1e802c749d56_icon-telegram-default.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36 36w"
                                                alt="telegra"
                                            />
                                        </div>
                                    </a>
                                    <a
                                        href=""
                                        aria-label="telegram"
                                        className="sc-lggw5w-1 sc-lggw5w-2 kBxbZi xGKbC"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div
                                            data-gatsby-image-wrapper=""
                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                                        >
                                            <div
                                                style={{
                                                    maxWidth: "36px",
                                                    display: "block",
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height=&#x27;36&#x27; width=&#x27;36&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27; version=&#x27;1.1&#x27;%3E%3C/svg%3E"
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
                                                sizes="(min-width: 36px) 36px, 100vw"
                                                decoding="async"
                                                loading="lazy"
                                                src="https://swissborg-website.cdn.prismic.io/swissborg-website/00c330a4-ca8d-4ce7-955d-99b6c64ae23a_icon-telegram-active.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36"
                                                srcSet="https://swissborg-website.cdn.prismic.io/swissborg-website/00c330a4-ca8d-4ce7-955d-99b6c64ae23a_icon-telegram-active.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50&amp;w=36&amp;h=36 36w"
                                                alt="telegra"
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sc-10p2go7-1 bGunQB">
                <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                    className="sc-1lw4m5x-1 sc-10p2go7-2 iukxsw lnYfKO"
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            width: "300px",
                        }}
                        className="sc-vjle4r-0 lDXrv"
                    >
                        <h5 className="sc-vjle4r-1 coKjSo">Risk Warning:</h5>
                        <p style={{ fontSize: "17px" }}>
                            Trading Foreign Exchange (Forex) and Contracts For
                            Differences (CFD’s) is highly speculative, carries a
                            high level of risk and may not be suitable for all
                            investors. You may sustain a loss of some or all of
                            your invested capital, therefore, you should not
                            speculate with capital that you cannot afford to
                            lose. You should be aware of all the risks
                            associated with trading on margin.
                        </p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <h5 className="sc-vjle4r-1 coKjSo">
                            Our Offices
                            <br />
                            Authorised and Regulated: &nbsp; Schweizerische
                            Bankiervereinigung (SwissBanking)
                        </h5>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                            }}
                        >
                            <p>
                                Company number: &nbsp;
                                <a
                                    target="_blank"
                                    href="https://www.uid.admin.ch/Detail.aspx?uid_id=CHE105814447"
                                >
                                    CHE-105.814.447
                                </a>
                            </p>
                            <p>Support email: &nbsp; support@fundrisepro.si</p>
                            <p>
                                Phone:{" "}
                                <a href="tel:+4489037465">+44 8903 7465</a>
                            </p>
                            <p>
                                Our office address: &nbsp; Aeschenplatz 7,
                                Basel, 4052
                            </p>
                            <p>Incorporated on 01.01.1995</p>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            gap: "15px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                            }}
                            className="sc-12rleeg-1 fzGwtX"
                        >
                            <a href="">Terms of Use</a>
                            <a href="">Privacy Policy</a>
                            <a href="">Cookies Policy</a>
                        </div>
                        <div className="sc-12rleeg-0 inwlpc">
                            <p>© SBorg SA. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
