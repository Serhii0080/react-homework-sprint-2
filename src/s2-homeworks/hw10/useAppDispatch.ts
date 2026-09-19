import {useDispatch} from "react-redux";
import type {AppDispatch} from "./bll/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();