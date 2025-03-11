export interface Lead {
    _id: string
    name:string
    email:string
    status:string
    createdAt:string
    __v:number
}

export interface LeadRequest{
    name:string
    email:string
    status?:string
}

export interface LeadsResponse{
    success:boolean
    message:string
    data:Lead[]
}