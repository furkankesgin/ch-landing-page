import React from 'react'
import firstImage from "@/assets/images/learnmore-first.svg";

export interface LearnMoreCardImageProps {
    title: string;
    description: string;
    image: React.ReactNode;
}
const cardDefinitions: LearnMoreCardImageProps[] = [
    {
        title: "Web Development",
        description: "We build web applications using the latest technologies",
        image: firstImage.src
    },
    {
        title: "Mobile Development",
        description: "We build mobile applications using the latest technologies",
        image: firstImage.src
    },
    {
        title: "Desktop Development",
        description: "We build desktop applications using the latest technologies",
        image: firstImage.src
    },
    {
        title: "DevOps",
        description: "We build CI/CD pipelines using the latest technologies",
        image: firstImage.src
    },
    {
        title: "Cloud",
        description: "We build cloud applications using the latest technologies",
        image: firstImage.src
    },
    {
        title: "Machine Learning",
        description: "We build machine learning models using the latest technologies",
        image: firstImage.src
    }
    
]

export default cardDefinitions