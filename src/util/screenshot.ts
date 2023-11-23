import html2canvas from "html2canvas";
import supabase from "./supabase.ts";
import { MutableRefObject } from "react";

export async function generateScreenshot(
  keyboardRef: MutableRefObject<null>,
): Promise<Blob> {
  if (!keyboardRef.current) {
    throw new Error("Keyboard component not found");
  }

  const canvas = await html2canvas(keyboardRef.current, {
    scale: 2,
    backgroundColor: null,
  });
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob: Blob | null) => {
      if (blob) {
        resolve(blob);
      } else {
        reject("Failed to generate screenshot");
      }
    }, "image/png");
  });
}

// Function to upload the screenshot to Supabase and return the file name
export async function uploadScreenshot(
  title: string,
  blob: Blob,
): Promise<string> {
  const fileName = `${title}.png`;
  const { error: uploadError } = await supabase.storage
    .from("keyboards")
    .upload(fileName, blob, { contentType: "image/png", upsert: true });

  if (uploadError) {
    console.error("Upload error message:", uploadError.message);
    throw new Error("Failed to upload image");
  }

  return fileName;
}
