interface Area {
    id: number,
    attributes: {
        name: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string
    }
}

export interface FindAllAreaResponse {
    data: Area[]
}

export interface FindAreaResponse {
    data: Area
}
