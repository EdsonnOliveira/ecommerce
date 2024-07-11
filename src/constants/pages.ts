import { NextRouter } from "next/router";
import { PageType, RouteParamsType } from "@/types/variables";

export const navigateTo = ({ page, route, params }: { page: PageType, route: NextRouter, params?: RouteParamsType}) => {
    route.push({
        pathname: page,
        ...(params && { query: params })
    })
}