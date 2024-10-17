"use client";


import { useAuthKit } from "@integrationos/authkit";
import { useEffect, useState } from "react";

export const useOpenAuthKit = () => {
    const [title, setTitle] = useState<string | null>(null);
  
    const { open } = useAuthKit({
      selectedConnection: title || "",
      token: {
        url: process.env.NEXT_PUBLIC_URL as string,
      },
    });
  
    useEffect(() => {
      if (title) {
        open();
      }
    }, [title, open]);
  
    const trigger = (title: string) => {
      if (!title) {
        throw new Error("Title is required to trigger the AuthKit modal");
      }
      setTitle(title);
    };
  
    return {
      trigger,
    };
  };