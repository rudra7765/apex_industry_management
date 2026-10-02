function Hero() {
    return (
        <section className="bg-slate-800 text-white">

            <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">

                <div className="max-w-3xl">

                    <p className="text-orange-400 font-semibold mb-4">
                        INDUSTRIAL ENGINEERING SOLUTIONS
                    </p>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Building Reliable Solutions
                        for Modern Industry
                    </h1>

                    <p className="mt-6 text-lg text-slate-300">
                        We provide reliable industrial machinery,
                        engineering solutions and technical services
                        for businesses across multiple industries.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">

                        <a
                            href="#products"
                            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold text-center"
                        >
                            Explore Products
                        </a>

                        <a
                            href="#contact"
                            className="border border-white hover:bg-white hover:text-slate-900 px-6 py-3 rounded-lg font-semibold text-center"
                        >
                            Get a Quote
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;