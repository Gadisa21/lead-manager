"use client"
import { useEffect } from "react"
import { UseSelector,useDispatch, useSelector } from "react-redux"
import { setLeads
 } from "@/features/leads/leadsSlice"
import { useGetLeadsQuery } from "@/features/api/apiSlice"
import { RootState } from "../store/store"
import LeadCard from "@/components/LeadCard"


function page() {
  const dispatch = useDispatch()
  const {data:leads,error,isLoading} = useGetLeadsQuery()
  const leadsState=useSelector((state:RootState)=>state.leads)

  useEffect(()=>{
    if(leads){
      dispatch(setLeads(leads.data))
    }
  },[leads,dispatch])
  console.log("leadstate",leadsState)
  
  return (
    <div className=' min-h-screen bg-gradient-to-r from-blue-50 to-purple-50'>
      <div className="container mx-auto gap-10 px-4     pt-10 flex justify-center flex-wrap ">
      {leadsState.leads.map((lead,index) => (
          <LeadCard key={index} lead={lead}/>
        ))}

      </div>



    </div>
  )
}

export default page