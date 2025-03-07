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
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchProfileData, ProfileCard, profileReducer } from "entities/Profile";
var reducers = {
    profile: profileReducer,
};
var ProfilePage = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var dispatch = useAppDispatch();
    useEffect(function () {
        dispatch(fetchProfileData());
    }, [dispatch]);
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: true }, { children: _jsx("div", __assign({ className: classNames("", {}, [className]) }, { children: _jsx(ProfileCard, {}) })) })));
};
export default ProfilePage;
