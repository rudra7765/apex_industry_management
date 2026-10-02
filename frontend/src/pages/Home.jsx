import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ProductsSection from "../components/ProductsSection";
import IndustriesSection from "../components/IndustriesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";
import ContactSection from "../components/ContactSection";

function Home() {
    return (
        <>
            <Hero />

            <section id="about" className="bg-slate-100">
                <AboutSection />
            </section>

            <section id="products" >
                <ProductsSection />
            </section>

            <section id="projects">

                <CTA />

            </section>

           
            <section id="industries" >
                <IndustriesSection />
            </section>


            <section id="whychooseus">
                <WhyChooseUs />
                </section>


            <section id="contact-us">

                <ContactSection />
            </section>            

        </>
    );
}

export default Home;