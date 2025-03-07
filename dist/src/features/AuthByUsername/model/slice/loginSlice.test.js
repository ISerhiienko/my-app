import { loginActions, loginReducer } from "./loginSlice";
describe("loginSlice.test", function () {
    test("test set username", function () {
        var state = { username: "admin" };
        expect(loginReducer(state, loginActions.setUsername("admin"))).toEqual({ username: "admin" });
    });
    test("test set password", function () {
        var state = { password: "123" };
        expect(loginReducer(state, loginActions.setPassword("123123"))).toEqual({ password: "123123" });
    });
});
