import { useEffect, useRef } from "react";

import cloudLight from "../../../assets/images/cloud_light.png";
import cloudNight from "../../../assets/images/cloud_night.png";

export default function MenuParallexLayer({
    scrollContainerRef={scrollContainerRef},
    mouseStrength = 8,
    scrollStrength = 0.03,
    scale = 1
})
{
    const lightLayerRef = useRef(null);
    const darkLayerRef = useRef(null);

    useEffect(() =>
    {
        let frameId = null;

        const state = {
            mouseX: 0,
            mouseY: 0,
            scrollY: 0
        };

        const applyTransform = () =>
        {
            const offsetX = state.mouseX * mouseStrength;
            const offsetY = state.mouseY * mouseStrength + state.scrollY * scrollStrength;
            const transformValue = `translate3d(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px), 0) scale(${scale})`;

            if (lightLayerRef.current)
            {
                lightLayerRef.current.style.transform = transformValue;
            }

            if (darkLayerRef.current)
            {
                darkLayerRef.current.style.transform = transformValue;
            }

            frameId = null;
        };

        const requestFrame = () =>
        {
            if (frameId !== null)
            {
                return;
            }

            frameId = window.requestAnimationFrame(applyTransform);
        };

        const handleMouseMove = (event) =>
        {
            state.mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
            state.mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
            requestFrame();
        };

        const handleScroll = () =>
        {
            if (!scrollContainerRef?.current)
            {
                return;
            }

            state.scrollY = scrollContainerRef.current.scrollTop;
            requestFrame();
        };

        window.addEventListener("mousemove", handleMouseMove);

        if (scrollContainerRef?.current)
        {
            scrollContainerRef.current.addEventListener("scroll", handleScroll);
            handleScroll();
        }

        requestFrame();

        return () =>
        {
            window.removeEventListener("mousemove", handleMouseMove);

            if (scrollContainerRef?.current)
            {
                scrollContainerRef.current.removeEventListener("scroll", handleScroll);
            }

            if (frameId !== null)
            {
                window.cancelAnimationFrame(frameId);
            }
        };
    }, [mouseStrength, scale, scrollContainerRef, scrollStrength]);

    return (
        <div className="menu-parallax_layer">
            <img
                ref={lightLayerRef}
                className="menu-parallax_image menu-parallax_image-light"
                src={cloudLight}
                alt="Light cloud background"
                draggable="false"
            />
            <img
                ref={darkLayerRef}
                className="menu-parallax_image menu-parallax_image-dark"
                src={cloudNight}
                alt="Dark cloud background"
                draggable="false"
            />
        </div>
    );
}