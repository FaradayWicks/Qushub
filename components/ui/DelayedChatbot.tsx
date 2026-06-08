"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ChatbotWidget = dynamic(() => import("@/components/ui/ChatbotWidget"), { ssr: false });

export default function DelayedChatbot() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      const timer = setTimeout(() => {
        setShouldLoad(true);
      }, 2000); // 2 seconds delay after load event
      return () => clearTimeout(timer);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!shouldLoad) return null;
  return <ChatbotWidget />;
}
