import React from "react";
import { ServicesPageConst } from "@/utils/constants/services";
const Page = ({
  params,
}: {
  params: { service: (typeof ServicesPageConst)[number]["title"] };
}) => {
  const { service } = params;

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
