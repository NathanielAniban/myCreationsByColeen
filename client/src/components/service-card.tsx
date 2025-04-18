
class ServiceCardProps{
    title?: string;
    subtitle?: string;
    icon: any;
}

const ServiceCard : React.FunctionComponent<ServiceCardProps> = ({title, subtitle, icon}) => {
    return(
        <article className="rounded-lg p-5 shadow hover:scale-105 text-center transition ease-in-out duration-150">
            {icon}
            <h5 className="text-sm font-medium">{title}</h5>
            <p className="text-xs font-medium">{subtitle}</p>
        </article>
    )
}

export default ServiceCard;