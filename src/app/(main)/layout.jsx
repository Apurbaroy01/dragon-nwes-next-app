import BrackingNews from "@/components/Shared.jsx/BrackingNews";
import Haders from "@/components/Shared.jsx/Haders";
import Navbar from "@/components/Shared.jsx/Navbar";


const MainLayout = ({ children }) => {
    return (
        <div>
            <Haders />
            <BrackingNews />
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    );
};

export default MainLayout;