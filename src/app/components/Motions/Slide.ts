import {Motion} from "@/app/components/Motions/type";

const slide = (direction: {enter: 'top' | 'left' | 'right' | 'bottom',
               exit?: 'top' | 'left' | 'right' | 'bottom'},
               additionalAnimations?: Partial<Motion>): Motion => {
    const getVariant = (): Motion => {
        switch (direction.enter) {
            case 'top':
                return {
                    initial: {y: '-100%'},
                    animate: {y: '0%'}
                }
            case 'bottom':
                return {
                    initial: {y: '100%'},
                    animate: {y: '0%'}
                }
            case 'left':
                return {
                    initial: {x: '-100%'},
                    animate: {x: '0%'}
                }
            case 'right':
                return {
                    initial: {x: '100%'},
                    animate: {x: '0%'}
                }
        }

    }
    const addExit = (variant: Motion): Motion => {
        switch (direction.exit) {
            case 'top':
                return {
                    ...variant,
                    exit: {y: '-100%'}
                }
            case 'bottom':
                return {
                    ...variant,
                    exit: {y: '100%'}
                }
            case 'left':
                return {
                    ...variant,
                    exit: {x: '-100%'}
                }
            case 'right':
                return {
                    ...variant,
                    exit: {x: '100%'}
                }
            default:
                return {...variant}
        }
    }
    let variant = getVariant()
    if (direction.exit) {
        variant = addExit(variant)
    }
    variant.initial = {...variant.initial, opacity: 0}
    variant.animate = {...variant.animate, opacity: 1}
    variant.exit = {...variant.exit, opacity: 0}
    if(additionalAnimations){
        if(additionalAnimations.initial){
            variant.initial = {...variant.initial, ...additionalAnimations.initial}
        }
        if(additionalAnimations.animate){
            variant.animate = {...variant.animate, ...additionalAnimations.animate}
        }
        if(additionalAnimations.exit){
            variant.exit = {...variant.exit, ...additionalAnimations.exit}
        }
    }
    return variant
}

export default slide;