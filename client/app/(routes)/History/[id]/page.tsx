//@ts-nocheck
"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../_components/navbar";

const ImageDescriptionIdPage = (
    {params}: {params: {id: string}}
) => {

    const router = useRouter();

    const [ImageData, setTmageData] = useState(null);

    useEffect(() => {

        const getData = async () =>{
            try {
                const response = await axios.get(`https://digital-domi-backend.vercel.app/api/imagedescription/getbyId?id=${params.id}`).catch(
                    () =>{
                        return router.push('/');
                    }
                );
                setTmageData(response.data?.data);
                

            } catch (error) {
                console.log(error);
            }
        }

        getData();
        
    }, []);


    return ( 
        <div className="m-6">
            <div>
                <Navbar />
            </div>
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
                    <div className=" w-full gap-x-2">
                        <div className="w-full flex justify-center">
                            <div className=" flex flex-col">
                                <div>
                                    <h2 className="text-3xl text-center font-extrabold">Image</h2>
                                </div>
                                <div className="mt-3">
                                    <img className="h-[300px]" src={ImageData?.imageUrl} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-5 text-sm  md:text-lg ">
                            <div className=" flex flex-col">
                                <div>
                                    <h2 className="text-3xl text-center font-extrabold">Description</h2>
                                </div>
                                <div className=" mt-3 text-xl">
                                    {ImageData?.description}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
        </div>
     );
}
 
export default ImageDescriptionIdPage;