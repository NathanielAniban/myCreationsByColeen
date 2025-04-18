import { ArrowRight } from "lucide-react";


export default function About(){
    
    const profile = 'https://scontent.fmnl25-3.fna.fbcdn.net/v/t39.30808-1/480961989_1968512400221923_328449182920380237_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEwcUGoScmsbWFzgspiWAqroJQX-6l698yglBf7qXr3zNMC6Xvw9berN7bl-gc90ry6zwL0HSndFZIqyMgx4U0K&_nc_ohc=rBCoOAnLh0oQ7kNvwGVkFPI&_nc_oc=AdmWBxrzb2fHqbcb2EX1nvSJx-_VZW3NY0FIPlTZcSiQ0uyF7WTCY5yriT3fqIdyWss&_nc_zt=24&_nc_ht=scontent.fmnl25-3.fna&_nc_gid=E3qhaeeR-h1aLGdCBoYONg&oh=00_AfGDO0IlLO5x1ESCLhOYP3JfgmmnE3ObZnKxoYctSbEInQ&oe=6807ABF5';
    const imageSample = 'https://scontent.fmnl25-4.fna.fbcdn.net/v/t39.30808-6/471161140_122099300504697012_1185687175031805902_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHaENJklFBj_Ftv0EEpe4MP-eDbiImVCYv54NuIiZUJi8_UoBqcpde4BezIKWIDqjbPr5M4zXsRZBEK6ZApciA9&_nc_ohc=K2t5EcurGpoQ7kNvwFAwdat&_nc_oc=Adk1SMoB-dVRn6oOG1au0V8OPQqDJ8CPNLdeJay2TedRAverstLjcIUeU5-aEHjzvlc&_nc_zt=23&_nc_ht=scontent.fmnl25-4.fna&_nc_gid=jQOG1ICWh3cgDjjJVO8ZhQ&oh=00_AfGk3afjVE9BMog1gStS5utuNKTdDDU5N9CVgMc-zEneLQ&oe=6807CCD9';
    return(
        <section className="container mx-auto h-full py-20" id="about">
            <h1 className="text-2xl font-extrabold text-center mb-10">About</h1>
            <section className="flex flex-col md:flex-row space-x-5 items-center justify-center mb-5">
                    <section className="mb-3 mx-auto sm:mx-0 text-center md:text-start block md:hidden">
                    <h5 className="text-base/3 md:text-lg/3 font-medium">Hi! My name is <u>Mycah Coleen</u></h5>
                    <h6 className="text-base md:text-lg font-medium">Digital Artist 🌸</h6>
                    </section>
                <img src={profile} alt="profile" className="size-30 rounded-full mb-3
                border-2 border-pink-500 hover:scale-105 transition-all ease-in-out duration-150" />
                <section className="flex flex-col mx-5">
                    <section className="mb-3 mx-auto sm:mx-0 text-center hidden md:block md:text-start">
                    <h5 className="text-base/3 md:text-lg/3 font-medium">Hi! My name is <u>Mycah Coleen</u></h5>
                    <h6 className="text-base md:text-lg font-medium">Digital Artist 🌸</h6>
                    </section>
                    <p className="text-sm font-medium">
                    I'm the creator of 'My Creations by Coleen' where i specialize on creating <br className="hidden md:block"/>
                    a  beautiful, personalized digital invitations for birthdays, celebrations, and all kinds of events!.<br className="hidden md:block"/>
                    Whether you're planning a kid’s party, a milestone birthday, or any special gathering,<br className="hidden md:block"/>
                    I’ll design an invite that matches your theme and vibe perfectly.
                  </p>
                  <section className="flex mb-10">
                        <a 
                        href={'#services'} onClick={() => window.scrollTo({ behavior: 'smooth' })}
                        className="bg-black flex gap-2 hover:scale-105 text-white block items-center text-sm cursor-pointer rounded-lg px-3 py-2
                        transition-all ease-in-out duration-300 mt-5
                        ">
                            Check out my services
                            <ArrowRight className="size-5" />
                        </a>
                    </section>
                </section>
            </section>
            <section className="flex flex-col justify-enter items-center mx-5">
                    <h3 className="text-2xl font-extrabold mb-5">My Mission</h3>
                    <article>
                        <img src={imageSample} alt="Sample Image" className="md:size-60 md:float-left mr-3 mb-5 rounded" />
                        <p className="text-sm font-medium mb-3">
                        At My Creations, my mission is to bring every celebration to life through beautifully <br className="hidden md:block"/>
                        crafted digital invitations. We are dedicated to helping people connect, celebrate, and share moments by creating unique,<br className="hidden md:block"/> 
                        customized invitations for birthdays, weddings, baby showers, corporate events, and more.
                        </p>
                        <p className="text-sm font-medium">
                        We believe every event deserves a personal touch — and it all starts with the perfect invite.
                        </p>
                    </article>
            </section>
        </section>
    )
}