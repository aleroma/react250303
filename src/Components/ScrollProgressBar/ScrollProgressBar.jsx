import React, { useState, useEffect } from "react";

export const ScrollProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (scrollTop / docHeight) * 100;
        setScrollProgress(scrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "4px", backgroundColor: "#eee", zIndex: 9999 }}>
            <div
                style={{
                    width: `${scrollProgress}%`,
                    height: "100%",
                    backgroundColor: "#3498db",
                    transition: "width 0.1s ease-out",
                }}
            />
        </div>
    );
};

