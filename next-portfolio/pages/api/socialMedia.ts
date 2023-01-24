import { ISocialMedia } from "@/interfaces/ISocialMedia";

export const socialMediaList: Array<ISocialMedia> = [
    {
        id: "1",
        ariaLabel: "Github",
        image: {
            filePath: "/github.svg",
            alt: "Github Logo",
            width: 100,
            height: 30,
        },
        url: "https://github.com/Gabriel-Barbosa-de-Oliveira"
    },
    {
        id: "2",
        ariaLabel: "Instagram",
        image: {
            filePath: "/instagram.svg",
            alt: "Instagram Logo",
            width: 100,
            height: 30,
        },
        url: "https://www.instagram.com/gab_barbosa_",
    },
    {
        id: "3",
        ariaLabel: "LinkedIn",
        image: {
            filePath: "/linkedin.svg",
            alt: "LinkedIn Logo",
            width: 100,
            height: 30,
        },
        url: "https://www.linkedin.com/in/gabriel-barbosa-de-oliveira/",
    },
    {
        id: "4",
        ariaLabel: "Twitter",
        image: {
            filePath: "/twitter.svg",
            alt: "Twitter Logo",
            width: 100,
            height: 30,
        },
        url: "https://twitter.com/gab_barbosa_dev",
    },
    {
        id: "5",
        ariaLabel: "Medium",
        image: {
            filePath: "/medium.svg",
            alt: "Medium Logo",
            width: 100,
            height: 30,
        },
        url: "https://medium.com/@gabriel-barbosa-de-oliveira",
    }
];