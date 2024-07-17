import { auth } from "@clerk/nextjs/server";
import { error } from "console";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
 
const f = createUploadthing();
 
const handleAuth = () => {
    const {userId} = auth();

    if(!userId){
        throw new Error("Not authenticated");
    }

    return {userId};
}
 

export const ourFileRouter = {
  ImageUpload: f({image :{maxFileCount:1}}).middleware(() => handleAuth()).onUploadComplete(() =>{}),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;