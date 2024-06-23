import HeroImg from '../hero.png';
import { AiOutlineGithub, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'Im a MERN-stack developer and Designer',
        social: {
            Github: 'https://github.com/kishore9251',
            facebook: 'https://www.facebook.com/kishore.kanna.92?mibextid=ZbWKwL target=_blank',
            linkedin: 'https://www.linkedin.com/in/kishoremanivel'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> I am Kishore Manivel
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.Github} className='pr-5 hover:text-white'><AiOutlineGithub size={50} /></a>
                <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={50}/></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={50}/></a>
            </div>
       </div>
       <img className='md:w-1/3' src={HeroImg} />
    </section>
}