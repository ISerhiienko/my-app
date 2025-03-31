import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { ArticleSortField, ArticleType, ArticleView } from "entities/Article";
import { fetchNextArticlesPage } from "./fetchNextArticlesPage";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

jest.mock("../fetchArticlesList/fetchArticlesList");

describe("fetchNextArticlesPage.test", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                view: ArticleView.BIG,
                isLoading: false,
                hasMore: true,
                order: "asc",
                sort: ArticleSortField.CREATED,
                _inited: false,
                search: "",
                type: ArticleType.ALL,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
    });
    test("fetchArticleList not called", async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                view: ArticleView.BIG,
                isLoading: false,
                hasMore: false,
                order: "asc",
                sort: ArticleSortField.CREATED,
                _inited: false,
                search: "",
                type: ArticleType.ALL,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
