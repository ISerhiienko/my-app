var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { userActions } from "entities/User";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";
export var App = function () {
    var theme = useTheme().theme;
    var dispatch = useDispatch();
    useEffect(function () {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    return (_jsx("div", __assign({ className: classNames("app", {}, [theme]) }, { children: _jsxs(Suspense, __assign({ fallback: "..." }, { children: [_jsx(Navbar, {}), _jsxs("div", __assign({ className: "content-page" }, { children: [_jsx(Sidebar, {}), _jsx(AppRouter, {})] }))] })) })));
};
