"use client"
import { UploadDropzone } from "@/lib/uploadthing";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import toast from "react-hot-toast";
import { createWorker } from 'tesseract.js';
import { useImageDetailsStore } from "@/stores/image-details";
import { useAvilableDetailsStore } from "@/stores/details-available";
import axios from "axios";



interface ImageUploadProps {
    endPoints: keyof typeof ourFileRouter;
    userId: string;
}

const ImageUpload = ({
    endPoints,
    userId
}: ImageUploadProps) => {

    const { imageDetail, update} = useImageDetailsStore();
    const {AvailabeDetails, updateDetails} = useAvilableDetailsStore()

    return (
        <>
        <UploadDropzone
            endpoint="ImageUpload"
            onClientUploadComplete={(res) =>{
                console.log(res?.[0].url);
                (async () => {
                    updateDetails({isLoading: true, isDeatailsAvailable: false});
                    const worker = await createWorker('eng');
                    const ret = await worker.recognize(res?.[0].url)
                    const details = {
                        imageUrl: res?.[0].url,
                        text: ret.data.text,
                    }
                    update(details);

                    const data = {
                        userId,
                        imageUrl: res?.[0].url,
                        description: ret.data.text
                    }

                    const response = await axios.post('http://localhost:4000/api/imagedescription/add', data).then(() => {
                        toast.success("Image details extracted successfully");
                    });

                    await worker.terminate();
                    updateDetails({isLoading: false, isDeatailsAvailable: true});
                })();
            }}
            onUploadError={(err: Error) => {
                toast.error(`${err.message}`);
            }}
        />
        {
            AvailabeDetails?.isDeatailsAvailable && (
                <div>
                    <img src={imageDetail?.imageUrl} alt="uploaded image"/>
                    <p>{imageDetail?.text}</p>
                </div>
            )
        }

        </>
        
    );
}
 
export default ImageUpload;