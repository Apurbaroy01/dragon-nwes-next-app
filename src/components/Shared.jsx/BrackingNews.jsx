import Marquee from "react-fast-marquee";


const BrackingNews = () => {
    return (
        <div className=" flex justify-between gap-4 py-2 px-4 bg-gray-100 items-center max-w-5xl mx-auto ">
            <div>
                <p className="btn bg-red-400">Latest</p>
            </div>
            <Marquee pauseOnHover speed={50}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BrackingNews;