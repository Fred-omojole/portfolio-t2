"use client";
import { useEffect } from "react";
import { initialBlobityOptions } from "./utils/BlobityConfig";
import useBlobity from "blobity/lib/react/useBlobity";
import Navbar from "./(Home)/navbar/Navbar";
import Hero from "./(Home)/hero/Hero";

export default function Home() {
  const blobityInstance = useBlobity(initialBlobityOptions);

  useEffect(() => {
    if (blobityInstance.current) {
      //  @ts-ignore for debugging purposes or playing around
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <main className="min-h-screen   mx-auto flex flex-col items-center">
        <div className=" relative h-screen w-full">
          {" "}
          <div className=" mx-auto flex flex-col items-center">
            <Hero />
          </div>
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center   [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
      </main>
    </>
  );
}
