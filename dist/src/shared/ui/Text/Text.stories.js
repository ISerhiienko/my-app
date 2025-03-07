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
import { Text, TextTheme } from "shared/ui/Text/Text";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
export default {
    title: "shared/Text",
    component: Text,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};
var Template = function (args) { return _jsx(Text, __assign({}, args)); };
export var Primary = Template.bind({});
Primary.args = {
    title: "Title lorem ipsun",
    text: "Description Description Description Description",
};
export var Error = Template.bind({});
Error.args = {
    title: "Title lorem ipsun",
    text: "Description Description Description Description",
    theme: TextTheme.ERROR,
};
export var OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: "Title lorem ipsun",
};
export var OnlyText = Template.bind({});
OnlyText.args = {
    text: "Description Description Description Description",
};
export var PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: "Title lorem ipsun",
    text: "Description Description Description Description",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export var OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: "Title lorem ipsun",
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
export var OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: "Description Description Description Description",
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
