import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900 text-white">
            
            <div className="max-w-7xl mx-auto px-6">

                <div className="h-20 flex items-center justify-around gap-30">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-xl md:text-2xl font-bold"
                    >
                        Apex Industrial
                    </Link>


                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-15">

                        <Link
                            to="/"
                            className="hover:text-orange-400 transition"
                        >
                            Home
                        </Link>

                        <Link
                            to="/#about"
                            className="hover:text-orange-400 transition"
                        >
                            About
                        </Link>

                        <Link
                            to="/#products"
                            className="hover:text-orange-400 transition"
                        >
                            Products
                        </Link>

                        <Link
                            to="/#projects"
                            className="hover:text-orange-400 transition"
                        >
                            Projects
                        </Link>

                        <Link
                            to="/#industries"
                            className="hover:text-orange-400 transition"
                        >
                            Industries
                        </Link>

                        <Link
                            to="/#whychooseus"
                            className="hover:text-orange-400 transition"
                        >
                            Why-Choose-Us
                        </Link>

                        <Link
                            to="/#contact-us"
                            className="bg-orange-500 hover:bg-orange-600 px-5 py-2.5 rounded-lg transition"
                        >
                            Contact
                        </Link>

                    </div>


                    {/* Mobile Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-2xl"
                    >
                        ☰
                    </button>

                </div>


                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden pb-5 space-y-3">

                        <Link
                            to="/#home"
                            onClick={() => setOpen(false)}
                            className="block py-2"
                        >
                            Home
                        </Link>

                        <Link
                            to="/#about"
                            onClick={() => setOpen(false)}
                            className="block py-2"
                        >
                            About
                        </Link>

                        <Link
                            to="/#products"
                            onClick={() => setOpen(false)}
                            className="block py-2"
                        >
                            Products
                        </Link>

                        <Link
                            to="/#projects"
                            onClick={() => setOpen(false)}
                            className="block py-2"
                        >
                            Projects
                        </Link>

                        <Link
                            to="/#industries"
                            onClick={() => setOpen(false)}
                            className="block py-2"
                        >
                            Industries
                        </Link>

                        <Link
                            to="/#whychooseus"
                            onClick={() => setOpen(false)}
                            className="block py-2"
                        >
                            Why-Choose-Us
                        </Link>

                        <Link
                            to="/#contact-us"
                            onClick={() => setOpen(false)}
                            className="block bg-orange-500 px-4 py-2 rounded-lg text-center"
                        >
                            Contact
                        </Link>

                    </div>
                )}

            </div>

        </nav>
    );
}

export default Navbar;