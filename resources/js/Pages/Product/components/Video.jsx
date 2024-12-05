import ReactPlayer from "react-player/lazy";

export default function Video() {
    return (
        <div>
            <h1 className="text-base font-semibold text-gray-800">
                Video Mesin
            </h1>
            <div className="w-[50%] rounded-lg overflow-hidden mt-4">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=XnqEhpgT2Gk"
                    width={"100%"}
                    controls={true}
                />
            </div>
        </div>
    );
}
