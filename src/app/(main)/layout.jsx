import Haders from "@/components/Haders";
import Navbar from "@/components/Navbar";


const MainLayout = ({ children }) => {
    return (
        <div>
            <Haders />
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    );
};

export default MainLayout;