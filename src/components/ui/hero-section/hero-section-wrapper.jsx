import React from "react";
import { headers } from "next/headers";

export async function withDeviceDetection(WrappedComponent) {
  return async function DeviceDetectionWrapper(props) {
      const headersList = await headers();
      const userAgent = headersList.get("user-agent") || '';
      const isMobile = /Mobi|Android|iPhone/i.test(userAgent);
      
      return <WrappedComponent {...props} isMobile={isMobile} />;
  };
}
