"use client"


import { useAvilableDetailsStore } from "@/stores/details-available";
import ImageUpload from "./image-upload";
import { useImageDetailsStore } from "@/stores/image-details";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { cookies } from "next/headers";

interface HomePageProps {
    firstName?: string | null;
    userId: string;
}

const HomePage = ({
    firstName,
    userId
}: HomePageProps) => {

    const { imageDetail, update} = useImageDetailsStore();
    const {AvailabeDetails, updateDetails} = useAvilableDetailsStore()

    useEffect(() => {
        updateDetails({...AvailabeDetails,userId: userId});

    },[]);

    return ( 
        <div className=" mt-16 ">
            {
                AvailabeDetails?.isLoading && 
                 (
                    <div>
                        <div className=" flex flex-wrap justify-center">
                        <div className=" flex flex-col gap-y-2">
                            <div className=" flex justify-center">
                                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-800"></div>
                            </div>
                            <div className="text-lg text-center">
                                Loading...
                            </div>
                        </div>
                        </div>
                    </div>
                )
            }
            {!AvailabeDetails?.isDeatailsAvailable && !AvailabeDetails?.isLoading &&  (
                <>
                    <div className="flex justify-center">
                        <div className="flex flex-col text-center gap-y-3">
                            {firstName && <h2 className="text-3xl font-bold">Hi {firstName},</h2>}
                            <h2 className="text-2xl font-bold">Welcome to Text Extractor</h2>
                            <p className="mt-2 text-lg">
                                Here You can upload an image and extract text from it.
                            </p>
                        </div>
                    </div>
                    <div className="mt-3 flex justify-center cursor-pointer">
                        <div className=" bg-slate-400/20 p-3">
                            <ImageUpload 
                                endPoints="ImageUpload" 
                                userId = {userId}
                            />
                        </div>
                    </div>
                </>
            )}
            {AvailabeDetails?.isDeatailsAvailable && !AvailabeDetails?.isLoading && (
                <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
                >
                    <div className=" flex justify-end gap-x-4">
                        <div>
                            <button 
                                className="bg-red-800 hover:bg-red-600 px-6 py-4 rounded-lg"
                                onClick={() => {
                                    updateDetails({isLoading: false, isDeatailsAvailable: false});
                                }}
                            >
                                Try another image
                            </button>
                        </div>
                    </div>
                    <div className=" w-full gap-x-2">
                        <div className="w-full flex justify-center">
                            <div className=" flex flex-col">
                                <div>
                                    <h2 className="text-3xl text-center font-extrabold">Image</h2>
                                </div>
                                <div className="mt-3">
                                    <img className="h-[300px]" src={imageDetail?.imageUrl} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-5 text-sm  md:text-lg ">
                            <div className=" flex flex-col">
                                <div>
                                    <h2 className="text-3xl text-center font-extrabold">Description</h2>
                                </div>
                                <div className=" mt-3 text-xl">
                                    {imageDetail?.text}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
     );
}
 
export default HomePage;