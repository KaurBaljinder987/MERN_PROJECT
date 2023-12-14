import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import api from "api";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const Store = configureStore({
    reducer: persistedReducer,
    middleware: (defaultMiddleware) => [
        ...defaultMiddleware({
            serializableCheck: false,
        }),
        api.middleware,
    ],
});
const persistor = persistStore(Store);
export { Store, persistor };
