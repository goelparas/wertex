import { ServicesPageConst } from "@/utils/constants/services";
import { headers } from "next/headers";

const Page = async () => {
  const headersList = await headers();
  const fullUrl = headersList.get("referer") || "";
  const component = ServicesPageConst.find(
    (item) => item.title === fullUrl.toString().split("/").pop()
  )?.page;
  return component;
};

export default Page;
