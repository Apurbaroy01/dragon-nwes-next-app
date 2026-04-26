import { FaGithub, FaGoogle } from "react-icons/fa";


const RightSidebar = () => {
    return (
        <div>
            <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg mb-2">
                <FaGoogle />
                <p>Login with Google</p>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                <FaGithub />
                <p>Login with GitHub</p>
            </div>
        </div>
    );
};

export default RightSidebar;