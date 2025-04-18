import { ArrowRight } from "lucide-react";
import { Facebook } from "lucide-react";
import { Link } from "react-router-dom";
export default function Home() {
    const logo = 'https://scontent.fmnl25-2.fna.fbcdn.net/v/t39.30808-6/483485344_122117009036697012_9053246276637196690_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEh8ziTox-K7RInTx4RJnX_AapksAgVwv8BqmSwCBXC_-4IknX8fEnraMCVPKxw9RR0rP1vYPVMNjNHkFRhdXSq&_nc_ohc=wim3FsPXUYQQ7kNvwFes92b&_nc_oc=AdnoozNTk2ZfxWan_0BLURTqzvr9z1W7z-XfuaQsZlGuhtjtvdmWAI3sHnuK808aU0E&_nc_zt=23&_nc_ht=scontent.fmnl25-2.fna&_nc_gid=fssNM35gtMLnPxFL9x8rtg&oh=00_AfF3_QJ1y4p87JHEwe9qeAxrU_j3dDc9UpDLGoxX0712ng&oe=6807A42A';
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