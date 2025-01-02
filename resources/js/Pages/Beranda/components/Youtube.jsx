import { useEffect, useState, lazy, Suspense } from "react";
const ReactPlayer = lazy(() => import("react-player"));

export default function Youtube() {
    const channelId = "UCo21YDF0Z6uBsGcOKdIJBMQ";
    const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
    const [latestVideoLink, setLatestVideoLink] = useState();

    const fetchLatestVideo = async (channelId, apiKey) => {
        try {
            // Endpoint untuk mengambil daftar video dari channel
            const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1`;

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
                    className="capitalize font-medium text-md px-4 py-2 bg-[#AB0F0F] text-white rounded-full"
                >
                    subscribe
                </a>
            </div>
            <div className="rounded-lg overflow-hidden order-first lg:order-none">
                <div className="h-[10rem] lg:h-[20rem]">
                    <Suspense fallback={<div>Loading player...</div>}>
                        <ReactPlayer
                            url={latestVideoLink}
                            width={"100%"}
                            height={"100%"}
                            controls
                            light
                        />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
