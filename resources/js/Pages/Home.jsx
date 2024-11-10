import PublicLayout from "@/Layouts/PublicLayout";
import Problem from "@/Components/problem/Problem";
import Solutions from "@/Components/solutions/Solutions";
import Services from "@/Components/services/Services";
import Portfolios from "@/Components/portfolios/Portfolios";
import Testimonials from "@/Components/testimonial.jsx/Testimonials";
import Blog from "@/Components/blog/Blog";
import Contact from "@/Components/contact/Contact";
import CallToAction from "@/Components/callToAction/CallToAction";
import { Head } from "@inertiajs/react";

const Home = () => {
    return (
        <PublicLayout>
            {/* <Head title="Home" /> */}
            <Problem />
            <Solutions />
            <Services />
            <Portfolios />
            {/* <Testimonials /> */}
            {/* <Blog /> */}
            <Contact />
            <CallToAction />
        </PublicLayout>
    );
};

export default Home;
