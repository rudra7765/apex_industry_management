function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300">

            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid md:grid-cols-3 gap-10">

                    <div>

                        <h2 className="text-xl font-bold text-white">
                            Apex Industrial
                        </h2>

                        <p className="mt-4 leading-6">
                            Reliable industrial engineering and
                            manufacturing solutions.
                        </p>

                    </div>


                    <div>

                        <h3 className="text-white font-semibold">
                            Quick Links
                        </h3>

                        <div className="mt-4 space-y-2">

                            <p>About</p>
                            <p>Products</p>
                            <p>Services</p>
                            <p>Projects</p>

                        </div>

                    </div>


                    <div>

                        <h3 className="text-white font-semibold">
                            Contact
                        </h3>

                        <div className="mt-4 space-y-2">

                            <p>Prayagraj, Uttar Pradesh</p>
                            <p>+91 98765 43210</p>
                            <p>info@apexindustrial.com</p>

                        </div>

                    </div>

                </div>


                <div className="border-t border-slate-800 mt-10 pt-6 text-sm">
                    © 2026 Apex Industrial Solutions. All rights reserved.
                </div>

            </div>

        </footer>
    );
}

export default Footer;