export default function Footer(){

    const facebookURL = 'https://www.facebook.com/profile.php?id=61570910369214';
    const tikTokURL = 'https://www.tiktok.com/@mycreationsbycoleen?fbclid=IwY2xjawJuw8BleHRuA2FlbQIxMAABHkBojhLBQYM3Q1beQf5zkqACbq8bU1Zhe9vx7gLriXlk2CB9krcymwyob3Wq_aem_KdKWqoV_oELm6bQAVDug3Q';


    return(
        <footer className="bg-rose-100 text-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center text-center 
        md:text-left gap-4">
          <div>
            <section className="mb-3 uppercase">
                <h2 className="text-sm font-semibold">My Creations</h2>
                <p className="text-xs/1 font-semibold">by Coleen</p>
            </section>
            <p className="text-sm">Beautiful custom invitations for every occasion.</p>
          </div>
  
          <div className="flex gap-4">
            <a href={facebookURL} target="_blank" className="hover:text-pink-500 transition">Facebook</a>
            <a href={tikTokURL} target="_blank" className="hover:text-pink-500 transition">Tiktok</a>
            <a href="#contact" className="hover:text-pink-500 transition">Contact</a>
          </div>
        </div>
  
        <div className="text-center text-sm text-gray-500 border-t border-gray-200 py-4">
          © {new Date().getFullYear()} My Creations by Coleen. All rights reserved.
        </div>
      </footer>
    );
}