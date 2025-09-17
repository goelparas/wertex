import React from "react";
import { ServicesPageConst } from "@/utils/constants/services";
import Container from "@/components/common/Container/Container";

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
  return (
    <Container className="w-full overflow-hidden  mt-14 lg:mt-40">
      {React.createElement(component)}
    </Container>
  );
};

export default Page;

export function generateStaticParams() {
  return ServicesPageConst.map((service) => ({
    service: service.title,
  }));
}
