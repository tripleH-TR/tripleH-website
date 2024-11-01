"use client"
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { useWindowScroll } from "@mantine/hooks";
import AnimatedSection from "./AnimatedComponent";



const GoTopButton = () => {
    const [scroll, scrollTo] = useWindowScroll();

    return (
        <AnimatedSection
            className="fixed bottom-8 right-8 z-20"
            from="bottom"
            show={scroll.y > 400}
            duration={1000} >
            <button type="button" onClick={() => scrollTo({ y: 0 })} >
                <ChevronUpIcon className="h-12 w-12 text-secondary bg-alternatebright rounded-xl p-2 hover:scale-125 duration-500" />
            </button>
        </AnimatedSection>
    )
}

export default GoTopButton;
