"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import fetchPublicationInfo from "@/lib/hasnode/publication";
import { Publication } from "@/types/publication";
import React from "react";

const Logo = () => {
  const [pub, setPub] = React.useState<Publication | any>(null);
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      fetchPublicationInfo().then((data) => {
        setPub(data);
      });
    }
  }, []);
  return pub?.title || "GENZ IT Blogs";
};

export default Logo;
