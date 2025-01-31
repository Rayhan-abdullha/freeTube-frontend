import SearchBox from "../components/SearchBox";
import VideoList from "./components/VideoList";
const page = async () => {
    return (
        <div className="mx-auto max-w-7xl">
            <SearchBox/>
            <VideoList/>
        </div>
    );
};

export default page;
