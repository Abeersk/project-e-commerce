/* eslint-disable @typescript-eslint/no-unused-vars */

import Hero from "@/components/Hero";   // Assuming @ is configured as base path in tsconfig.json or jsconfig.json
import Brand from "@/components/Brand"; 
import Ceramics from "@/components/Ceramics";
import Product from "@/components/Product";
import Benefit from "@/components/Benefit";
import Touch from "@/components/Touch";
import ProductListing from "@/app/productlistning/page";  // Assuming ProductListing is a page component

export default function Home() {
  return (
    <>
      <Hero />
      <Brand />
      <Ceramics />
      <Product />
      <Benefit />
      <Touch />
      <ProductListing />
    </>
  );
}
