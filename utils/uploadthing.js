import { generateComponents } from "@uploadthing/react";
import ourFileRouter from "@/app/api/uploadthing/core";
 

export const { UploadButton, UploadDropzone, Uploader } = generateComponents(ourFileRouter);

