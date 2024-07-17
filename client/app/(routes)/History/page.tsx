//@ts-nocheck
"use client"

import { getUserCurrentUserID } from "@/lib/get-current-user";
import { useAvilableDetailsStore } from "@/stores/details-available";
import { auth } from "@clerk/nextjs/server";
import axios from "axios";
import { cookies } from "next/headers";
import { useEffect, useState } from "react";
import Navbar from "../_components/navbar";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Trash } from "lucide-react";
import { first50Words } from "@/lib/short-paragraph";

const History = () => {

    const [history, setHistory] = useState([]);

    const {AvailabeDetails} = useAvilableDetailsStore();

    const router = useRouter();

    useEffect( () => {

        const getHistory = async () => {
           try {

            if(!AvailabeDetails?.userId) {
                return router.push("/")
            }
            const response = await axios.get(`http://localhost:4000/api/imagedescription/get-All?userId=${AvailabeDetails?.userId}`);
            console.log(response.data.data);
            setHistory(response.data.data);
           } catch (error) {
            console.log(error);
           }
        }

        getHistory();

    },[])

    

    return ( 
        <div className="w-full h-full">
        <div className="m-6">
            <Navbar />
          <div>
            {history.length > 0 ? (
                <>
                    <div>
                        <h1 className="text-3xl font-bold text-center">History</h1>
                        <h3 className="text-xl font-semibold text-center">
                            Here you can see all the history of the text extracted from images
                        </h3>
                        <h2 className="text-lg text-center">
                            ( Click On the card to see whole details )
                        </h2>
                    </div>
                    <div className=" ">
                        {
                            history.map((item,index)=>{
                                return (
                                    <div
                                        key={index} 
                                        className="bg-gray-800 hover:bg-gray-800/60  cursor-pointer text-white/80 hover:text-white w-full rounded-lg"
                                    >
                                        <div  className="flex-col gap-x-3 mt-5 p-3">
                                            <div className="flex justify-end">
                                                <button
                                                    className="bg-red-800 hover:bg-red-600 p-2 rounded-lg"
                                                    onClick={async () => {
                                                        try {
                                                            const response = await axios.delete(`http://localhost:4000/api/imagedescription/delete?id=${item._id}`);
                                                            if(response.status === 200) {
                                                                toast.success("Deleted Successfully");
                                                                setHistory(history.filter((historyItem) => historyItem._id !== item._id));
                                                            }
                                                        } catch (error) {
                                                            console.log(error);
                                                        }
                                                    }}
                                                >
                                                    <Trash className="w-4 h-4"/>
                                                </button>
                                            </div>
                                            <div 
                                                className="flex gap-y-2 mt-2"
                                                onClick={() => {
                                                    return router.push(`/History/${item._id}`)
                                                }}
                                            >
                                                <div className="flex gap-x-5 w-full">
                                                    <div className="w-[50%]">
                                                        <img src={item.imageUrl} className="h-56 w-full" />
                                                    </div>
                                                    <div>
                                                        <h2 className="text-lg font-semibold">{first50Words(item.description)}...</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </>
            ) :(
                <div className="flex justify-center items-center h-96">
                    <div className="flex-col gap-y-4">
                        <h1 className="text-2xl font-bold text-center">No History</h1>
                        <h2 className="text-xl font-semibold text-center text-white/60"> 
                            Try extracting text from some image
                        </h2>
                        <h2 className="text-lg font-semibold text-center text-white/60"> 
                            To Extract text from images
                        </h2>
                        <div className="flex justify-center">
                            <button 
                                className="bg-red-800 hover:bg-red-600 px-6 py-4 rounded-lg mt-5"
                                onClick={() => {
                                    return router.push("/")
                                }}
                            >
                                Click Here
                            </button>
                        </div>    
                    </div>
                </div>
            ) }
          </div>
        </div>
      </div>
     );
}
 
export default History;
