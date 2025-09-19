'use client';
import UploadIcon from "@/components/UploadIcon";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UploadForm() {

  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  async function upload(ev) {
    ev.preventDefault();
    const files = ev.target.files;
    if (files.length > 0) {
      const file = files[0];
      setIsUploading(true);
      
      try {
        // Step 1: Get presigned URL
        const presignedResponse = await axios.post('/api/presigned-url', {
          filename: file.name,
          contentType: file.type
        });
        
        const { presignedUrl, newName } = presignedResponse.data;
        
        // Step 2: Upload directly to S3 using presigned URL
        await axios.put(presignedUrl, file, {
          headers: {
            'Content-Type': file.type
          }
        });
        
        setIsUploading(false);
        router.push('/' + newName);
      } catch (error) {
        console.error('Upload failed:', error);
        setIsUploading(false);
        alert('Upload failed. Please try again.');
      }
    }
  }

  return (
    <>
      {isUploading && (
        <div className="bg-black/90 text-white fixed inset-0 flex items-center">
          <div className="w-full text-center">
            <h2 className="text-4xl mb-4">Uploading</h2>
            <h3 className="text-xl">Please wait...</h3>
          </div>
        </div>
      )}
      <label className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2 border-2 border-teal-700/50 cursor-pointer">
        <UploadIcon />
        <span>Choose file</span>
        <input onChange={upload} type="file" className="hidden" />
      </label>
    </>
  );
}