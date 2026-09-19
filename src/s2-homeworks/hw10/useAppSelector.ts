import { useSelector } from "react-redux";
import type {AppStoreType} from "./bll/store";

export const useAppSelector = <T>(selector: (state: AppStoreType) => T) => useSelector(selector);