function CTA() {
    return (
        <section
            id="contact"
            className="relative py-20 md:py-24 px-6 bg-orange-500 overflow-hidden"
        >

            {/* Decorative Background Elements */}
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10"></div>
            <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-orange-700/20"></div>

            <div className="relative max-w-6xl mx-auto">

                <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-3xl px-7 py-12 md:px-12 md:py-14">

                    <div className="grid lg:grid-cols-3 gap-10 items-center">

                        {/* Main Content */}
                        <div className="lg:col-span-2">

                            <p className="text-orange-100 font-bold tracking-widest text-sm uppercase">
                                Let's Work Together
                            </p>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mt-3">
                                Ready to Discuss
                                <br className="hidden md:block" />
                                Your Project?
                            </h2>

                            <p className="mt-5 text-orange-50 text-lg leading-8 max-w-2xl">
                                Have an industrial requirement or a complex
                                engineering challenge? Talk to our team and
                                discover a solution designed around your
                                specific needs.
                            </p>


                            {/* Contact Highlights */}
                            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-7 text-sm text-orange-50">

                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-white"></span>
                                    Customized Solutions
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-white"></span>
                                    Technical Expertise
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-white"></span>
                                    Reliable Support
                                </div>

                            </div>

                        </div>


                        {/* CTA Actions */}
                        <div className="lg:text-right">

                            <a
                                href="mailto:info@apexindustrial.com"
                                className="inline-flex items-center justify-center gap-2 w-full lg:w-auto bg-white text-slate-900 px-7 py-3.5 rounded-lg font-bold hover:bg-slate-100 hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
                            >
                                Get a Quote
                                <span>→</span>
                            </a>

                            <a
                                href="mailto:info@apexindustrial.com"
                                className="inline-flex items-center justify-center w-full lg:w-auto mt-3 px-7 py-3.5 rounded-lg border border-white/50 text-white font-semibold hover:bg-white/10 transition-all duration-300"
                            >
                                Contact Our Team
                            </a>

                            <p className="text-orange-100 text-sm mt-5">
                                Typically responds within 1 business day.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default CTA;