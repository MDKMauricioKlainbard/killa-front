import { findAll, findOne } from "../base"
import { FindAllAreaResponse, FindAreaResponse } from "./types"

export const getAreas = () => {
    return findAll<FindAllAreaResponse>("areas", null)
}

export const getOneArea = (id: string | number) => {
    return findOne<FindAreaResponse>("areas", id, null)
}