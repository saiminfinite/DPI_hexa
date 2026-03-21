import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Splits text into individual characters (including periods).
 * Manual split - achieves same result as GSAP SplitText without premium plugin.
 * For SplitText plugin (Club GreenSock), see: https://gsap.com/docs/v3/Plugins/SplitText/
 */
const splitIntoChars = (text) => {
  return text.split("");
};

const LINES = ["Secure.", "Scalable.", "Unstoppable."];

const HeroHeadline = () => {
  const containerRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Gather all char elements (data attribute for reliable selection)
    const charEls = container.querySelectorAll("[data-char]");
    if (!charEls.length) return;

    // Safety check for GSAP
    if (typeof gsap === "undefined") {
      console.warn("HeroHeadline: GSAP not loaded, skipping animation");
      charEls.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.filter = "none";
      });
      return;
    }

    const runAnimation = () => {
      const tl = gsap.timeline({
        defaults: { ease: "back.out(1.7)", duration: 1 },
      });

      let charIndex = 0;
      const staggerAmount = 0.04;
      const lineOffset = 0.15;

      LINES.forEach((line, lineIndex) => {
        const lineChars = Array.from(charEls).slice(
          charIndex,
          charIndex + line.length
        );
        charIndex += line.length;

        const lineStagger = lineIndex * lineOffset;
        tl.fromTo(
          lineChars,
          {
            y: 100,
            opacity: 0,
            filter: "blur(8px)",
            rotateX: -20,
            scale: 0.8,
          },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            rotateX: 0,
            scale: 1,
            stagger: { each: staggerAmount, from: "start" },
            duration: 1,
            ease: "back.out(1.7)",
          },
          lineStagger
        );
      });
    };

    const ctx = gsap.context(() => {
      gsap.set(charEls, {
        y: 100,
        opacity: 0,
        filter: "blur(8px)",
        rotateX: -20,
        scale: 0.8,
        transformOrigin: "center bottom",
      });

      const rect = container.getBoundingClientRect();
      const isInView =
        rect.top < window.innerHeight * 0.9 && rect.bottom > 0;

      if (isInView) {
        hasAnimated.current = true;
        runAnimation();
      } else {
        ScrollTrigger.create({
          trigger: container,
          start: "top 88%",
          once: true,
          onEnter: () => {
            if (!hasAnimated.current) {
              hasAnimated.current = true;
              runAnimation();
            }
          },
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <h1
      ref={containerRef}
      className="hero-headline text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6 text-center lg:text-left overflow-visible"
      style={{
        fontFamily: "'Montserrat', 'Outfit', sans-serif",
        perspective: "600px",
      }}
      aria-label="Secure. Scalable. Unstoppable."
    >
      {LINES.map((line, lineIndex) => (
        <div key={lineIndex} className="hero-line block">
          {splitIntoChars(line).map((char, charIndex) => (
            <span
              key={`${lineIndex}-${charIndex}`}
              data-char
              data-line={lineIndex}
              className={`inline-block hero-char ${
                lineIndex === 2 ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-200" : ""
              }`}
              style={{ willChange: "transform, opacity, filter" }}
              aria-hidden="true"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
          {lineIndex < LINES.length - 1 && <br aria-hidden="true" />}
        </div>
      ))}
    </h1>
  );
};

export default HeroHeadline;
