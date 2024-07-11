import { PageType, RouteParamsType } from "@/types/variables"

export type SetString = (value: string) => void;
export type SetBoolean = (state: boolean) => void;
export type SetVoid = () => void;
export type SetIndex = (index: number) => void;
export type SetPage = (page: PageType, params?: RouteParamsType) => void
export type SetFile = (file: File | null) => void;