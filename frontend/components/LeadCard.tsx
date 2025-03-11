import React from 'react';
import { Lead } from '@/types/api';



interface LeadCardProps {
  lead: Lead;
}

const LeadCard: React.FC<LeadCardProps> = ({ lead }) => {
  // Define status colors based on the lead's status
   

  return (
    <div className="w-[384px] rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 mb-10">
      <div className="px-6 py-4">
        <div className='flex justify-between items-center'>
        <div className="font-bold text-xl mb-2 text-gray-800">{lead.name}</div>
        <p className="text-gray-600 text-base mb-2">{lead.email}</p>
        </div>
        <div>
        <div className="flex justify-between items-center mt-5">
          <div
            className={`inline-block px-2 py-1 text-sm font-semibold rounded-full }`}
          >
            {lead.status}
          </div>

           
        <div className="px-6 py-4">
          <p className="text-gray-500 text-sm">
            Created: {new Date(lead.createdAt).toLocaleDateString()}
          </p>
        </div>
      
        </div>
        </div>
        

      </div>

    </div>
  );
};

export default LeadCard;