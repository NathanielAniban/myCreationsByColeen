import { MapPin, Facebook, Mail, Phone } from "lucide-react"
import { Link } from "react-router-dom"
import logo from '../assets/image-logo-icon.jpg';

export default function Contact() {
    const facebookURL = 'https://www.facebook.com/profile.php?id=61570910369214';
    return (
        <section className="mx-auto h-full grid md:grid-cols-2 pt-20" id="contact">
            <article className="flex flex-col mt-10 ms-10 md:mt-20 md:ms-20 lg:mt-50 2xl:mt-60 xl:ms-30 mx-5">
                <p className="text-base/5 font-medium">Hi There! Do you like our offers?</p>
                <h1 className="text-2xl md:text-5xl font-extrabold mb-5 tracking-tight">Contact Us</h1>
                <p className="text-base font-medium font-mono mr-10 mb-10">
                    Here in My Creations we offer you to make a high-quality digital videos and
                    Affordable invitations 🎥✨
                </p>
                <ol className="flex flex-col space-y-4 mb-10">
                    <li>
                        <p className="flex text-base font-medium gap-2"><MapPin /> 211 R. Tatco St. Kalawaan, 1600</p>
                    </li>
                    <li>
                        <Link to={facebookURL} target="_blank">
                            <p className="flex text-base font-medium gap-2 underline"><Facebook />My Creations by Coleen</p>
                        </Link>
                    </li>
                    <li>
                        <p className="flex text-base font-medium gap-2"><Mail />mycreationsbycoleen@gmail.com</p>
                    </li>
                    <li>
                        <p className="flex text-base font-medium gap-2"><Phone />+63 906 232 5049</p>
                    </li>
                </ol>
            </article>
            <img src={logo} alt="Logo" className="lg:h-[90vh] 2xl:h-[91.5vh] w-full" />
        </section>
    )
};