import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./userApi";
import { projectApi } from "./projectApi";


const reduxStore = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [projectApi.reducerPath]: projectApi.reducer,
    },
    middleware: def => [...def(), userApi.middleware, projectApi.middleware]
})

export default reduxStore