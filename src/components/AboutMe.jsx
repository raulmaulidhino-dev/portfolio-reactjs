import DoCard from './DoCard.jsx';

import DeveloperPicture_webp from '../assets/developer-picture.webp';
import DeveloperPicture_jpg from '../assets/developer-picture.jpg';


import { TbDragDrop as Design, TbCode as Code, TbTex as Prompt} from 'react-icons/tb';

export default function AboutMe() {

    const myDo = [
        {icon: <Design size="72" />, title: "DESIGN", description: "I design clean and user-friendly web layouts that are easy to navigate"},
        {icon: <Code size="72" />, title: "CODE", description: "I code responsive and interactives website!"},
        {icon: <Prompt size="72" />, title: "PROMPT", description: "I write prompts that help AI tools generate great and relevant ideas"},
    ];

    return (
        <section id="about_me" className="px-10 py-[6rem]">
            <h2 className="text-neon-magenta font-extrabold text-center text-5xl font-special md:text-6xl mb-10">ABOUT ME</h2>
            <section className="flex flex-col gap-8">
                <section className="flex flex-wrap justify-center gap-6">
                    <picture className="max-w-[300px] w-full inline-block">
                        <source srcset={ DeveloperPicture_webp } type="image/webp" />
                        <img src= { DeveloperPicture_jpg } alt="Picture of the Developer" className="w-full h-full rounded-t-lg object-cover" />
                    </picture>
                    <div className="max-w-[500px]">
                        <h2 className="text-xl md:text-3xl font-semibold mb-[1em]">I&apos;m <span className="font-extrabold">Raul Ahmad Maulidhino</span>, Junior FE Developer / AI Enthusiast</h2>
                        <p>
                            I&apos;m a <span>17</span>-year old student passionate about <strong className="text-neon-cyan">Coding, AI, Robotics, and Web Development</strong>.
                            I&apos;m always exploring new technologies, dedicating my time to learn and experiment with <strong className="text-neon-magenta">Machine Learning, Automation, and Web Technologies</strong>.
                            Continuously, updating my skills, I stay on top of industry trends through self-study and hands-on projects.
                            I&apos;m excited to apply my knowledge in real-world scenarios and keep growing within these fields.
                        </p>
                    </div>
                </section>
                <hr />
                <section>
                    <h3 className="text-3xl text-center mb-[2em] font-semibold">What I Do?</h3>
                    <section className="flex flex-row flex-wrap gap-y-[7rem] lg:gap-y-6 justify-center items-center">
                    {myDo.map((doItem, index) => (
                        <DoCard key={ index } Icon={ doItem.icon } title={ doItem.title } description={ doItem.description } />
                    ))}
                    </section>
                </section>
            </section>
        </section>
    )
}