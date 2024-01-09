import { createUploadthing } from "uploadthing/next";


const f = createUploadthing();

const ourFileRouter = {

    imageUploader: f({ image: { maxFileSize: "4MB" } })

        .onUploadComplete(async ({ metadata, file }) => {

            console.log("Upload complete for userId:", metadata.userId);
            console.log("file url", file.url);


            return {
                uploadedBy: metadata.userId
            };
        }),
};


export default ourFileRouter
