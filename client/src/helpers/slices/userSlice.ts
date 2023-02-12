import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../types/user.type";

type UserStateType = {
  user: UserType | null;
}

const initialState: UserStateType = {
    user: null,
};

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserType | null>) => {
          state.user = action.payload;
        }
    }
})

export const { setUser } = userSlice.actions;