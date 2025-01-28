import VideoList from "@/app/home/components/VideoList";

const page = async () => {
    return (
        <div className="mx-auto max-w-7xl">
            <VideoList title="Video Feed"/>
        </div>
    );
};

export default page;
