import React from "react";

const Header = () => {
  return (
    <div className="main-screen__header">
      <div className="main-screen__header__container">
        <div className="main-screen__header__container__top-logo">
          <svg
            id="prefix__a45894e7-7ccc-4a08-b7b5-034c877281cd"
            data-name="\u0421\u043B\u043E\u0439 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56 56"
          >
            <defs>
              <style>
                {".prefix__a1a1b23e-296d-44f8-adff-b4476bc1c1c0{fill:#fff}"}
              </style>
            </defs>
            <path
              className="prefix__a1a1b23e-296d-44f8-adff-b4476bc1c1c0"
              d="M53 3v50H3V3h50m3-3H0v56h56V0z"
            />
            <path
              className="prefix__a1a1b23e-296d-44f8-adff-b4476bc1c1c0"
              d="M19 10h3.13v16.23c0 6.44-3.17 8.42-7.34 8.42a10.27 10.27 0 01-3.35-.57l.47-2.56a7.51 7.51 0 002.59.48c2.8 0 4.5-1.27 4.5-6zM30 21.32a30.14 30.14 0 015.72-.51c3.14 0 5.15.54 6.66 1.77a5.07 5.07 0 012 4.28 5.77 5.77 0 01-4.1 5.33v.07a6.25 6.25 0 015 6.08 6.54 6.54 0 01-2 4.86c-1.7 1.55-4.43 2.27-8.39 2.27a35.6 35.6 0 01-4.89-.29zm3.13 9.93H36c3.31 0 5.25-1.72 5.25-4.06 0-2.85-2.16-4-5.33-4a13.53 13.53 0 00-2.77.21zm0 11.63a16.56 16.56 0 002.63.14C39 43 42 41.84 42 38.31c0-3.31-2.85-4.68-6.27-4.68h-2.61z"
            />
          </svg>
        </div>
        <div className="main-screen__header__container__links">
          <div className="main-screen__header__container__links__top-email">
            <a href="mailto:ecspetra@gmail.com" target="_blank">
              <i class="fas fa-envelope"></i>ecspetra@gmail.com
            </a>
          </div>
          <div className="main-screen__header__container__links__top-phone">
            <a href="tel:+0973088571">
              <i class="fas fa-phone-alt"></i>097 308 85 71
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
