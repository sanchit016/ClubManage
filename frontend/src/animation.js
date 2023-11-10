export const homeAnimation = {
    hidden: { x: -400, opacity: 0 },
    show: { x: 0, opacity: 1 },
};

export const homeInfoAnimation = {
    hidden: { x: 100, opacity: 0 },
    show: { x: 0, opacity: 1 },
};

export const navAnimation = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 1, opacity: 1 },
}

export const servicesAnimations = {
    hidden: { y: 200, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

export const portfolioAnimations = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1 },
};

export const milestonesAnimations = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1 },
};

export const blogsAnimation = {
    hidden: { y: 200, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

export const videoAnimations = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1 },
};

export const pricingAnimation = {
    hidden: { y: 200, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

export const testimonialsAnimations = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1 },
};

export const skillsBarAnimation = {
    hidden: { y: 0, opacity: 0 },
    show: { y: 1, opacity: 1 },
};

export const contactAnimation = {
    hidden: { y: 200, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

export const footerTextAnimation = {
    hidden: { x: -200, opacity: 0 },
    show: { x: 1, opacity: 1 },
};

export const cardAnimation = {
    hidden: { x: -400, opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 0.5,
        },
    },
};

export const cardListAnimation = {
    show: {
        transition: {
            staggerChildren: 0.2, // Adjust this value for your desired stagger effect.
        },
    },
};
