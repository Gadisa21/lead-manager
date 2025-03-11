import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LeadsResponse,LeadRequest } from '@/types/api'
import build from 'next/dist/build'

export const leadsApi = createApi({
    reducerPath: 'leadsApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),

    endpoints:(build)=>({
        createLead:build.mutation<void,LeadRequest>({
            query:(body)=>({
                url:'/leads',
                method:'POST',
                body
            })
        }),
        getLeads:build.query<LeadsResponse, void>({
            query:()=>'/leads'
        })
    })

})

export const {useCreateLeadMutation,useGetLeadsQuery} = leadsApi