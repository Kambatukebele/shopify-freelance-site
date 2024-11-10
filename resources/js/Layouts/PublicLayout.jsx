import Header from "@/Components/HeroNavigation/Header";
import Footer from "@/Components/footer/Footer";

const PublicLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    );
};

export default PublicLayout;
