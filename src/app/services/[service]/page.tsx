import React from "react";
import { ServicesPageConst } from "@/utils/constants/services";
 
interface PageProps {
  params: Promise<{ service: string }>; // Adjusted to be a Promise
}

const Page = async ({ params }: PageProps) => {
  const { service } = await params;

  const component = ServicesPageConst.find(
    (item) => item.title === service
  )?.page;
  if (!component) {
    return <div>Service not found</div>;
  }
  return React.createElement(component);
};

export default Page;

export function generateStaticParams() {
  return ServicesPageConst.map((service) => ({
    service: service.title,
  }));
}
