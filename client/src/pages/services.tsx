import { Image, FileUser, ClipboardList, IdCard } from "lucide-react";
import ServiceCard from "../components/service-card";
export default function Service(){
    const imageSample = 'https://scontent.fmnl25-4.fna.fbcdn.net/v/t39.30808-6/471161140_122099300504697012_1185687175031805902_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHaENJklFBj_Ftv0EEpe4MP-eDbiImVCYv54NuIiZUJi8_UoBqcpde4BezIKWIDqjbPr5M4zXsRZBEK6ZApciA9&_nc_ohc=K2t5EcurGpoQ7kNvwFAwdat&_nc_oc=Adk1SMoB-dVRn6oOG1au0V8OPQqDJ8CPNLdeJay2TedRAverstLjcIUeU5-aEHjzvlc&_nc_zt=23&_nc_ht=scontent.fmnl25-4.fna&_nc_gid=jQOG1ICWh3cgDjjJVO8ZhQ&oh=00_AfGk3afjVE9BMog1gStS5utuNKTdDDU5N9CVgMc-zEneLQ&oe=6807CCD9';
    return(
        <section className="container mx-auto py-20" id="services">
            <h1 className="text-2xl font-extrabold text-center">My Services</h1>
            <p className="text-base/4 font-medium text-center mb-10">As you craft cherished moments our design becomes timeless reflection of your story.</p>
            <section className="grid lg:grid-cols-2 gap-5 mx-5">
                <img src={imageSample} alt="Sample Photo" className="mb-5 sm:order-last lg:order-first" />
                <section className="grid grid-cols-2 sm:grid-cols-3 gap-3 items-center justify-center mx-auto self-center mb-10">
                    <ServiceCard title="Photo and Video Invitation" subtitle="(for any occations)" 
                    icon={<Image className="w-full h-10 sm:h-30"/>}/>
                    <ServiceCard title="Resume Maker" 
                    icon={<FileUser className="w-full h-10 sm:h-30"/>}/>
                    <ServiceCard title="Menu Price list Layout" 
                    icon={<ClipboardList className="w-full h-10 sm:h-30"/>}/>
                    <ServiceCard title="Flyers and Logo Layout"
                    icon={<Image className="w-full h-10 sm:h-30"/>}/>
                    <ServiceCard title="Certificate and Business Card Layout"
                    icon={<IdCard className="w-full h-10 sm:h-30"/>}/>
                    <ServiceCard title="Social Media Poster"
                    icon={<Image className="w-full h-10 sm:h-30"/>}/>
                </section>
            </section>
        </section>
    );
}