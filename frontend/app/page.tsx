"use client"
import { useEffect ,useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { setLeads,addLead
 } from "@/features/leads/leadsSlice"
import { useGetLeadsQuery,useCreateLeadMutation } from "@/features/api/apiSlice"
import { RootState } from "../store/store"
import LeadCard from "@/components/LeadCard"
import AddLeadModal from "@/components/AddLeadModal"
import Spinner from "../components/spinner"


function Page() {

  const [AddLead] = useCreateLeadMutation()
  const dispatch = useDispatch()
  const {data:leads,isError,isLoading} = useGetLeadsQuery()
  const leadsState=useSelector((state:RootState)=>state.leads)
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleAddLead = async (lead: { name: string; email: string; status?: string }) => {
    try {
      await AddLead(lead).unwrap();
      dispatch(addLead({...lead, status: lead.status || 'New', createdAt: new Date().toISOString()}))

    } catch (error: unknown) {
      // Throw the error to be handled by the modal
      throw error;
    }
  };

  useEffect(()=>{
    if(leads){
      dispatch(setLeads(leads.data))
    }
  },[leads,dispatch])
  console.log("leadstate",leadsState)
  
  if (isLoading) return <Spinner />;
  if (isError) return <div>Error fetching leads</div>;
  return (
    <div className=' min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 '>
      <div className="container mx-auto gap-10 px-4     pt-10 flex justify-center flex-wrap ">
      {leadsState.leads.map((lead,index) => (
          <LeadCard key={index} lead={lead}/>
        ))}

      </div>
<div className="container mx-auto flex justify-center mt-10">
<button
        onClick={() => setIsModalOpen(true)}
        className="mb-8 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700  "
      >
        Add New Lead
      </button>
</div>
      

      <AddLeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddLead}
        
      />

    </div>
  )
}

export default Page