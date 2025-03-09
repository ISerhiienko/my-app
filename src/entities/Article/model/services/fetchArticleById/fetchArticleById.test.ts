import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchArticleById } from "entities/Article/model/services/fetchArticleById/fetchArticleById";

const data = {
    id: "1",
    title: "Test Article",
    content: "Test content",
};

describe("fetchArticleById.test", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk("1");

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("error fetch article", async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk("1");

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("error");
    });
});
