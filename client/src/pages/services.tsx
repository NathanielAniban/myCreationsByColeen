import { Image, FileUser, ClipboardList, IdCard } from "lucide-react";
import ServiceCard from "../components/service-card";
import imageSample from '../assets/baby-shower-invitation-picture.jpg'
export default function Service(){
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