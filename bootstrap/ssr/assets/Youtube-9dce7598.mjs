import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect, Suspense, lazy } from "react";
const ReactPlayer = lazy(() => import("./index-c4c1baa7.mjs").then((n) => n.i));
function Youtube() {
  const isServer = typeof window === "undefined";
  const channelId = "UCo21YDF0Z6uBsGcOKdIJBMQ";
  const apiKey = "AIzaSyBW2YaxjooHva1c_Lhqi9M0DPVLXKxz4sA";
  const [latestVideoLink, setLatestVideoLink] = useState();
  const fetchLatestVideo = async (channelId2, apiKey2) => {
    try {
      const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey2}&channelId=${channelId2}&part=snippet,id&order=date&maxResults=1`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        const videoId = data.items[0].id.videoId;
        const videoTitle = data.items[0].snippet.title;
        console.log(`Latest video: ${videoTitle}`);
        console.log(`Link: https://www.youtube.com/watch?v=${videoId}`);
        setLatestVideoLink(
          `https://www.youtube.com/watch?v=${videoId}`
        );
      } else {
        console.log("No videos found for this channel.");
        return null;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };
  useEffect(() => {
    fetchLatestVideo(channelId, apiKey);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-5 items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-lg font-semibold", children: "Galery Vicentra" }),
      /* @__PURE__ */ jsx("p", { className: "lg:w-[60%] text-sm font-normal mt-[0.625rem] mb-4", children: "Subscribe chanel Youtube kami untuk demo mesin dan promo - promo Terbaru." }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.youtube.com/@galeryvicentra?sub_confirmation=1",
          target: "_blank",
          className: "subscribe capitalize font-medium text-md px-4 py-2 bg-[#AB0F0F] text-white rounded-full",
          children: "subscribe"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "rounded-lg overflow-hidden order-first lg:order-none", children: /* @__PURE__ */ jsx("div", { className: "h-[10rem] lg:h-[20rem]", children: !isServer ? /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { children: "Loading player..." }), children: /* @__PURE__ */ jsx(
      ReactPlayer,
      {
        url: latestVideoLink,
        width: "100%",
        height: "100%",
        controls: true,
        light: true
      }
    ) }) : /* @__PURE__ */ jsx("div", { children: "Loading..." }) }) })
  ] });
}
export {
  Youtube as default
};
