/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import {useLocation} from "react-router";
import {NavLink} from "react-router-dom";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl, checkIsActive} from "../../../../_helpers";

export function AsideMenuList({layoutProps}) {
    const location = useLocation();
    const getMenuItemActive = (url, hasSubmenu = false) => {
        return checkIsActive(location, url)
            ? ` ${!hasSubmenu &&
            "menu-item-active"} menu-item-open menu-item-not-hightlighted`
            : "";
    };

    return (
        <>
            {/* begin::Menu Nav */}
            <ul className={`menu-nav ${layoutProps.ulClasses}`}>
                {/*begin::1 Level*/}
                {/*<li*/}
                {/*  className={`menu-item ${getMenuItemActive("/dashboard", false)}`}*/}
                {/*  aria-haspopup="true"*/}
                {/*>*/}
                {/*  <NavLink className="menu-link" to="/dashboard">*/}
                {/*    <span className="svg-icon menu-icon">*/}
                {/*      <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />*/}
                {/*    </span>*/}
                {/*    <span className="menu-text">Dashboard</span>*/}
                {/*  </NavLink>*/}
                {/*</li>*/}

                <li
                    className={`menu-item menu-item-submenu ${getMenuItemActive(
                        "/product-list",
                        true
                    )}`}
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                >
                    <NavLink className="menu-link menu-toggle" to="/product-list">
            <span className="svg-icon menu-icon">
              <SVG
                  src={toAbsoluteUrl("/media/svg/icons/Communication/Add-user.svg")}
              />
            </span>
                        <span className="menu-text">Product Pages</span>
                        <i className="menu-arrow"/>
                    </NavLink>
                    <div className="menu-submenu ">
                        <i className="menu-arrow"/>
                        <ul className="menu-subnav">
                            <li className="menu-item  menu-item-parent" aria-haspopup="true">
                                <span className="menu-link">
                                  <span className="menu-text">Product Pages</span>
                                </span>
                            </li>

                            {/*begin::2 Level*/}
                            <li className={`menu-item ${getMenuItemActive("/product-add")}`} aria-haspopup="true" >
                                <NavLink className="menu-link" to="/product-add">
                                    <i className="menu-bullet menu-bullet-dot"><span/></i>
                                    <span className="menu-text">Add Product</span>
                                </NavLink>
                            </li>
                            {/*end::2 Level*/}

                            {/*begin::2 Level*/}
                            {/*<li*/}
                            {/*    className={`menu-item ${getMenuItemActive("/user-edit")}`}*/}
                            {/*    aria-haspopup="true"*/}
                            {/*>*/}
                            {/*    <NavLink className="menu-link" to="/user-edit">*/}
                            {/*        <i className="menu-bullet menu-bullet-dot">*/}
                            {/*            <span />*/}
                            {/*        </i>*/}
                            {/*        <span className="menu-text">User Edit</span>*/}
                            {/*    </NavLink>*/}
                            {/*</li>*/}
                            {/*end::2 Level*/}

                            {/*begin::2 Level*/}
                            <li className={`menu-item ${getMenuItemActive("/product-list")}`} aria-haspopup="true" >
                                <NavLink className="menu-link" to="/product-list">
                                    <i className="menu-bullet menu-bullet-dot"> <span/> </i>
                                    <span className="menu-text">Product List</span>
                                </NavLink>
                            </li>
                            {/*end::2 Level*/}


                            {/*begin::2 Level*/}
                            {/*<li*/}
                            {/*    className={`menu-item ${getMenuItemActive("/error/error-v3")}`}*/}
                            {/*    aria-haspopup="true"*/}
                            {/*>*/}
                            {/*    <NavLink className="menu-link" to="/error/error-v3">*/}
                            {/*        <i className="menu-bullet menu-bullet-dot">*/}
                            {/*            <span />*/}
                            {/*        </i>*/}
                            {/*        <span className="menu-text">Error Page - 3</span>*/}
                            {/*    </NavLink>*/}
                            {/*</li>*/}
                            {/*end::2 Level*/}


                        </ul>
                    </div>
                </li>


            </ul>

            {/* end::Menu Nav */}
        </>
    );
}
