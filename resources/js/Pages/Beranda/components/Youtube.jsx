import { useEffect, useState, lazy, Suspense } from "react";
const ReactPlayer = lazy(() => import("react-player"));

export default function Youtube() {
    const isServer = typeof window === "undefined";
    const [latestVideoLink, setLatestVideoLink] = useState();

    const fetchLatestVideoRSS = async () => {
        try {
            const res = await fetch("/youtube/rss");
            const text = await res.text();

            const parser = new DOMParser();
            const xml = parser.parseFromString(text, "text/xml");

            const entry = xml.querySelector("entry");
            const videoId = entry.getElementsByTagNameNS("*", "videoId")[0]
                .textContent;

            setLatestVideoLink(`https://www.youtube.com/watch?v=${videoId}`);
        } catch (err) {
            console.error("Gagal ambil data RSS:", err);
        }
    };

    useEffect(() => {
        if (!isServer) fetchLatestVideoRSS();
    }, []);

    return (
        <div className="grid lg:grid-cols-2 gap-5 items-center">
            <div>
                <h1 className="text-lg font-semibold">Galery Vicentra</h1>
                <p className="lg:w-[60%] text-sm font-normal mt-[0.625rem] mb-4">
                    Subscribe chanel Youtube kami untuk demo mesin dan promo -
                    promo Terbaru.
                </p>
                <a
                    href="https://www.youtube.com/@galeryvicentra?sub_confirmation=1"
                    target="_blank"
                    className="subscribe capitalize font-medium text-md px-4 py-2 bg-[#AB0F0F] text-white rounded-full"
                >
                    subscribe
                </a>
            </div>
            <div className="rounded-lg overflow-hidden order-first lg:order-none">
                <div className="h-[10rem] lg:h-[20rem]">
                    {!isServer ? (
                        <Suspense fallback={<div>Loading player...</div>}>
                            <ReactPlayer
                                url={latestVideoLink}
                                width={"100%"}
                                height={"100%"}
                                controls
                                light
                            />
                        </Suspense>
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </div>
        </div>
    );
}
