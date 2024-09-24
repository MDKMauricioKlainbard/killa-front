import { AxiosResponse } from "axios";
import api from "..";

export const findAll = async <R>(entity_name: string, token: string | null): Promise<AxiosResponse<R>> => {
    return api.get(entity_name, {
        "headers": {
            "Content-Type": "application/json",
            "Authorization": token ? `Bearer ${token}` : ""
        }
    })
}

export const findOne = async <R>(entity_name: string, entity_param: number | string, token: string | null): Promise<AxiosResponse<R>> => {
    return api.get(`${entity_name}/${entity_param}`, {
        "headers": {
            "Content-Type": "application/json",
            "Authorization": token ? `Bearer ${token}` : ""
        }
    })
}

export const create = async <B, R>(entity_name: string, token: string | null, body: B): Promise<AxiosResponse<R>> => {
    return api.post(entity_name, body, {
        "headers": {
            "Content-Type": "application/json",
            "Authorization": token ? `Bearer ${token}` : ""
        }
    })
}

export const deleteFile = async <R>(entity_name: string, entity_param: string | number, token: string | null): Promise<AxiosResponse<R>> => {
    return api.delete(`${entity_name}/${entity_param}`, {
        "headers": {
            "Content-Type": "application/json",
            "Authorization": token ? `Bearer ${token}` : ""
        }
    })
}

export const editFile = async <B, R>(entity_name: string, entity_param: string | number, token: string | null, body: B): Promise<AxiosResponse<R>> => {
    return api.put(`${entity_name}/${entity_param}`, body, {
        "headers": {
            "Content-Type": "application/json",
            "Authorization": token ? `Bearer ${token}` : ""
        }
    })
}



