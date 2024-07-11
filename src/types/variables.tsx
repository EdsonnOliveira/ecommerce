import { ParsedUrlQueryInput } from "querystring";
import { ReactNode } from "react";

export type ChildrenType = ReactNode | ReactNode[] | undefined
export type PageType = '/'
                        | '/cart'
                        undefined
export type RouteParamsType = string | null | ParsedUrlQueryInput | undefined 