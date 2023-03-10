import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "./slices/userSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    }
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

// hooks
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector