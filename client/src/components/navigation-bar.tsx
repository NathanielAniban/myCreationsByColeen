import { Menu } from 'lucide-react'
import { useState } from 'react'
export default function NavigationBar(){
    
    const [toggleButton, setToggleButton] = useState <boolean> (false);
    const logo = 'https://scontent.fmnl25-2.fna.fbcdn.net/v/t39.30808-6/483485344_122117009036697012_9053246276637196690_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEh8ziTox-K7RInTx4RJnX_AapksAgVwv8BqmSwCBXC_-4IknX8fEnraMCVPKxw9RR0rP1vYPVMNjNHkFRhdXSq&_nc_ohc=wim3FsPXUYQQ7kNvwFes92b&_nc_oc=AdnoozNTk2ZfxWan_0BLURTqzvr9z1W7z-XfuaQsZlGuhtjtvdmWAI3sHnuK808aU0E&_nc_zt=23&_nc_ht=scontent.fmnl25-2.fna&_nc_gid=fssNM35gtMLnPxFL9x8rtg&oh=00_AfF3_QJ1y4p87JHEwe9qeAxrU_j3dDc9UpDLGoxX0712ng&oe=6807A42A';
    return(
        <header className="sticky top-0 max-w-full p-5 bg-rose-100 flex justify-between items-center z-50">
            <button onClick={() => window.scrollTo({top:0, behavior: 'smooth' })} 
            className="flex flex-row items-center md:ms-10 space-x-1 cursor-pointer">
                <img src={logo} alt="Logo" className='size-10 rounded-full' />
                <p className='flex flex-col justify-center text-start uppercase'>
                    <span className="text-sm/2 text-pink-600 font-medium tracking-tight">My Creations</span>
                    <span className='text-[10px] text-pink-600 font-medium tracking-tight'>By Coleen</span>
                </p>
            </button>
            <nav className='flex flex-col md:flex-row justify-between mx-5 z-50'>
                <Menu size={18} 
                onClick={() => setToggleButton(!toggleButton)}
                className='md:hidden'/>
                <ol className={`${toggleButton ? 'top-15 md:top-none visible' : '-top-50 md:top-none invisible md:visible'} 
                absolute left-0 md:static 
                flex flex-col md:flex-row gap-5
                list-none text-base font-medium
                transition-all ease-in-out duration-300
                bg-rose-100 md:bg-transparent w-full px-5 py-5 md:px-0 md:py-0
                text-pink-500
                `}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ol>
            </nav>
        </header>
    )
}