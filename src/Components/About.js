
import AboutImg from '../about.png';

export default function About () {
    const config  = {
        line1: 'Hi, My Name is Kishore Manivel, I am a BE(Mechanical Engineering) graduate and i am passionate about web developement I started learning Mern-stack developement and improving my skills through online courses and personal projects,I am eager to start my as a web developer and contribute to meaningful projects.',
        line2: 'I am proficient in front-end skills like HTML5, Css, Bootstrap, Javascript, React.js and many more',
        line3: 'I am proficient in back-end skills like Node.js, Mongodb, Express.js, sql and many more'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}









