import { ArrowRight } from "lucide-react";
import { Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../assets/image-logo-icon.jpg';

export default function Home() {
    const facebookURL = 'https://www.facebook.com/profile.php?id=61570910369214';
    const tikTokURL = 'https://www.tiktok.com/@mycreationsbycoleen?fbclid=IwY2xjawJuw8BleHRuA2FlbQIxMAABHkBojhLBQYM3Q1beQf5zkqACbq8bU1Zhe9vx7gLriXlk2CB9krcymwyob3Wq_aem_KdKWqoV_oELm6bQAVDug3Q';
    const tiktokIcon = 'https://www.svgrepo.com/show/333611/tiktok.svg';
    return (
        <section className="relative grid sm:grid-cols-2 h-full">
            <article className="flex flex-col mt-10 ms-10 md:mt-20 md:ms-20 lg:mt-50 2xl:mt-60 xl:ms-30 mx-5">
                <h1 className="text-2xl md:text-5xl font-extrabold mb-5">Tired of making traditional invitations?</h1>
                <p className="text-base font-medium font-mono mr-10 mb-6">
                    Here in My Creations we offer you to make a high-quality digital videos and
                    Affordable invitations 🎥✨
                </p>
                <a href={'#about'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block text-white font-medium mb-16">
                    <button className="bg-black flex gap-2 hover:scale-105 items-center text-sm cursor-pointer rounded-lg px-3 py-2
                    transition-all ease-in-out duration-300
                    ">
                        Learn more
                        <ArrowRight className="size-5" />
                    </button>
                </a>

                <ol className="lg:absolute lg:bottom-20 flex flex-row gap-6 mb-5">
                    <li>
                        <Link to={facebookURL} target="_blank">
                        <Facebook className="cursor-pointer"/>
                        </Link>
                    </li>
                    <li>
                        <Link to={tikTokURL} target="_blank">
                        <img src={tiktokIcon} alt="Tiktok Icon" className="size-6" />
                        </Link>
                    </li>
                </ol>

            </article>
            <img src={logo} alt="Logo" className="lg:h-[90vh] 2xl:h-[91.5vh] w-full order-first sm:order-none" />
        </section>
    )
}