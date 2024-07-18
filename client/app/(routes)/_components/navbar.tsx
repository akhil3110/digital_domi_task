"use client";

import { useAvilableDetailsStore } from "@/stores/details-available";
import { UserButton } from "@clerk/nextjs";
import { History } from "lucide-react";
import { redirect, useRouter } from "next/navigation";

const Navbar = () => {

    const router = useRouter();

    const {AvailabeDetails, updateDetails} = useAvilableDetailsStore()


    const userButtonAppearance = {
      elements: {
        userButtonAvatarBox: "w-10 h-10", 
        userButtonPopoverCard: "bg-blue-100", 
        userButtonPopoverActionButton: "text-red-600",
      },
    };

    return ( 
        <>
          <div className="flex justify-between">
            <div>
              <h1 
                className=" text-lg font-bold cursor-pointer"
                onClick={() =>{
                  updateDetails({isLoading: false, isDeatailsAvailable: false});
                  return router.push("/")
                }}
              >
                Digital Domi Task
              </h1>
            </div>
            <div className="flex gap-x-3">
            <div
                className="flex gap-x-1 hover:bg-slate-300/20 p-1 py-2 rounded-lg cursor-pointer"
                onClick={() =>{
                    return router.push("/History")
                }}
              >
                <h3 className="text-xl font-bold">History</h3>
              </div>
              <div className="flex gap-x-1">
                <UserButton appearance={userButtonAppearance} />
                <div className="text-xl">
                </div>
                
              </div>
            </div>
          </div>
        </>
     );
}
 
export default Navbar;