import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero({ name, roles }) {
  const gridRef = useRef(null);
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // === Background Grid Animation ===
  useEffect(() => {
    const gridCanvas = gridRef.current;
    const container = containerRef.current;
    if (!gridCanvas || !container) return;

    const dpr = window.devicePixelRatio || 1;

    function resize() {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      gridCanvas.width = Math.floor(rect.width * dpr);
      gridCanvas.height = Math.floor(rect.height * dpr);
      gridCanvas.style.width = rect.width + "px";
      gridCanvas.style.height = rect.height + "px";
    }

    resize();
    window.addEventListener("resize", resize);

    const gCtx = gridCanvas.getContext("2d");

    function drawGrid(time) {
      const w = gridCanvas.width;
      const h = gridCanvas.height;
      gCtx.clearRect(0, 0, w, h);

      const grad = gCtx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, "rgba(5,10,25,0.9)");
      grad.addColorStop(1, "rgba(0,0,0,1)");
      gCtx.fillStyle = grad;
      gCtx.fillRect(0, 0, w, h);

      gCtx.save();
      gCtx.translate(w / 2, h * 0.6);
      gCtx.strokeStyle = "rgba(0,255,255,0.15)";
      gCtx.lineWidth = 1 * dpr;

      const perspective = 250;
      const gridDepth = 30;
      const gridWidth = 20;
      const gridSize = 60 * dpr;
      const wave = Math.sin(time / 1000) * 5;

      for (let z = 1; z < gridDepth; z++) {
        const zPos = z * gridSize;
        const scale = perspective / (perspective + zPos);
        const y = zPos * scale + wave;
        const halfWidth = (w / 2) * scale * 2.5;
        gCtx.beginPath();
        gCtx.moveTo(-halfWidth, y);
        gCtx.lineTo(halfWidth, y);
        gCtx.stroke();
      }

      for (let x = -gridWidth; x <= gridWidth; x++) {
        const xPos = x * gridSize;
        gCtx.beginPath();
        gCtx.moveTo(xPos * 0.1, 0);
        gCtx.lineTo(xPos * 10, h * 0.8);
        gCtx.stroke();
      }

      gCtx.restore();

      const radial = gCtx.createRadialGradient(
        w / 2,
        h * 0.5,
        0,
        w / 2,
        h * 0.5,
        Math.max(w, h)
      );
      radial.addColorStop(0, "rgba(0,255,255,0.08)");
      radial.addColorStop(0.5, "rgba(255,0,255,0.05)");
      radial.addColorStop(1, "rgba(0,0,0,0)");
      gCtx.fillStyle = radial;
      gCtx.fillRect(0, 0, w, h);
    }

    let gridId;
    const gridLoop = (time) => {
      drawGrid(time);
      gridId = requestAnimationFrame(gridLoop);
    };
    gridLoop(performance.now());

    return () => {
      cancelAnimationFrame(gridId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // === Mouse Parallax Effect ===
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 8;
      const y = (e.clientY / innerHeight - 0.5) * 8;
      setTilt({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="overview"
      ref={containerRef}
      className="relative flex flex-col-reverse justify-center items-center lg:flex-row text-special-white bg-dark-blue py-12 min-h-screen overflow-hidden"
      style={{
        transform: `rotateY(${tilt.x}deg) rotateX(${-tilt.y}deg)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {/* Grid Canvas */}
      <canvas
        ref={gridRef}
        className="absolute inset-0 w-full h-full z-0"
        aria-hidden="true"
      />

      {/* Content */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col justify-center items-center lg:px-[5rem] px-8 py-12 mx-auto"
      >
        <motion.h2
          className="text-xl md:text-4xl mb-[0.5em]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          AHOY THERE!
        </motion.h2>

        <motion.h1
          className="text-6xl md:text-7xl mb-[0.25em] font-special font-extrabold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          I'M{" "}
          <span className="my__name bg-gradient-to-r from-neon-blue via-neon-magenta to-neon-cyan bg-clip-text text-transparent animate-gradientMove">
            {name}
          </span>
        </motion.h1>

        {/* Typewriter Effect */}
        <div className="text-lg md:text-2xl mt-4 text-neon-cyan font-bold uppercase">
          <TypeAnimation
            sequence={roles.flatMap((role) => [role, 2000])}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
        </div>

        <motion.p
          className="text-center mt-8 mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Passionate polytechnic student exploring Web Development, AI, IoT, and
          Robotics. A curious learner dedicated to creating innovative,
          impactful solutions.
        </motion.p>

        <motion.section
          data-aos="zoom-in-down"
          className="my-4 flex flex-wrap justify-center gap-4 w-full max-w-lg mx-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a
            href="#about_me"
            className="w-full sm:w-auto text-center bg-dark-blue text-neon-magenta border-2 border-neon-magenta text-xs md:text-lg font-extrabold py-3 px-4 rounded-full hover:bg-neon-magenta hover:text-dark-blue hover:scale-105 transform transition-all duration-300"
          >
            MORE ABOUT ME
          </a>

          <a
            href="#portfolio"
            className="w-full sm:w-auto text-center bg-dark-blue text-neon-cyan border-2 border-neon-cyan text-xs md:text-lg font-extrabold py-3 px-4 rounded-full hover:bg-neon-cyan hover:text-dark-blue hover:scale-105 transform transition-all duration-300"
          >
            VIEW MY WORKS
          </a>
        </motion.section>
      </motion.section>

      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientMove {
          background-size: 300% 300%;
          animation: gradientMove 6s ease infinite;
        }
      `}</style>
    </section>
  );
}
