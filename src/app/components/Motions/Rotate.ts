import {Motion} from "@/app/components/Motions/type";

export const rotate = (direction: 'horizontal' | 'vertical', additionalAnimations?: Partial<Motion>): Motion=>(
    {
        initial: {rotateY: 180, ...additionalAnimations?.initial},
        animate: {rotateY: 0, ...additionalAnimations?.animate},
        exit: {rotateY: 180, ...additionalAnimations?.exit}
    }
)
