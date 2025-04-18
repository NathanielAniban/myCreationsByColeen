import { MapPin, Facebook, Mail, Phone } from "lucide-react"
import { Link } from "react-router-dom"
export default function Contact() {
    const facebookURL = 'https://www.facebook.com/profile.php?id=61570910369214';
    const logo = 'https://scontent.fmnl25-2.fna.fbcdn.net/v/t39.30808-6/483485344_122117009036697012_9053246276637196690_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEh8ziTox-K7RInTx4RJnX_AapksAgVwv8BqmSwCBXC_-4IknX8fEnraMCVPKxw9RR0rP1vYPVMNjNHkFRhdXSq&_nc_ohc=wim3FsPXUYQQ7kNvwFes92b&_nc_oc=AdnoozNTk2ZfxWan_0BLURTqzvr9z1W7z-XfuaQsZlGuhtjtvdmWAI3sHnuK808aU0E&_nc_zt=23&_nc_ht=scontent.fmnl25-2.fna&_nc_gid=fssNM35gtMLnPxFL9x8rtg&oh=00_AfF3_QJ1y4p87JHEwe9qeAxrU_j3dDc9UpDLGoxX0712ng&oe=6807A42A';
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