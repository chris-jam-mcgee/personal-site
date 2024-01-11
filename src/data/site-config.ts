export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    resume?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    hero: {
        title: "Hi, I'm Chris",
        text: "I'm **Chris McGee**, a DevOps Engineer. Feel free to drop me an email at [chris.jam.mcgee@gmail.com](mailto:chris.jam.mcgee@gmail.com), Find me on [LinkedIn](https://www.linkedin.com/in/christopher-mcgee-29044ba8/).",
        resume: '/chris_mcgee_resume.pdf',
        image: {
            src: '/black_and_white_profile.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        }
    },
    projectsPerPage: 8
};

export default siteConfig;
