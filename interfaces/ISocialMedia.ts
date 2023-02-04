import { IImage } from "./IImage"

export interface ISocialMedia {
    id: string,
    image: IImage,
    class?: string,
    url: string,
    ariaLabel: string
}