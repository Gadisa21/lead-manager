import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Lead } from '@/types/api'




interface LeadsState {
    leads: Lead[]
}

const initialState: LeadsState = {
    leads: []
}

const leadsSlice = createSlice({
    name:'leads',
    initialState,
    reducers:{
        addLead:(state,action:PayloadAction<Lead>)=>{
            state.leads.push(action.payload)
        },

        setLeads:(state,action:PayloadAction<Lead[]>)=>{
            state.leads=action.payload
        }
    }
})

export const {addLead,setLeads} = leadsSlice.actions
export default leadsSlice.reducer