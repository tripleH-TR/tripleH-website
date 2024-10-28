"use client"
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { useWindowScroll } from "@mantine/hooks";
import AnimatedSection from "./AnimatedComponent";



const GoTopButton = () => {
    const [scroll, scrollTo] = useWindowScroll();

    return (
        <AnimatedSection
            className="fixed bottom-8 right-8 z-10 bg-alternatebright rounded-xl p-2"
            from="bottom"
            show={scroll.y > 400}
            duration={1000} >
            <button onClick={() => scrollTo({ y: 0 })} >
                <ChevronUpIcon className="h-8 w-8 text-secondary" />
            </button>
        </AnimatedSection>
    )
}

export default GoTopButton;
