import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

const index = () => {
  return (
    <section className="overflow-x-hidden min-h-screen bg-neutral-950 p-4 md:p-8">
      <div className="mx-auto max-w-5xl ">
        <Link
          heading="About"
          subheading="Learn what we do here"
          imgSrc="https://plus.unsplash.com/premium_photo-1700081739665-40b74df3789e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          href="#"
        />
        <Link
          heading="Clients"
          subheading="We work with great people"
          imgSrc="https://images.unsplash.com/photo-1560250056-07ba64664864?q=80&w=1451&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          href="#"
        />
        <Link
          heading="Portfolio"
          subheading="Our work speaks for itself"
          imgSrc="https://images.unsplash.com/photo-1700049749697-63beefb4915e?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          href="#"
        />
        <Link
          heading="Careers"
          subheading="We want cool people"
          imgSrc="https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          href="#"
        />
        <Link
          heading="Fun"
          subheading="Incase you're bored"
          imgSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          href="#"
        />
      </div>
    </section>
  );
};

const Link = ({ heading, subheading, imgSrc, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const top = useTransform(xSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(ySpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      ref={ref}
      initial="initial"
      whileHover="whileHover"
      onMouseMove={handleMouseMove}
      href={href}
      className="group relative  flex items-center justify-between  border-b-2 border-neutral-700 py-4 transition-colors duration-500 md:py-8 hover:border-neutral-50"
    >
      <div>
        <motion.span
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 md:text-6xl group-hover:text-neutral-50"
          variants={{
            initial: {
              x: 0,
            },

            whileHover: {
              x: -16,
            },
          }}
          transition={{
            type: "spring",
            delayChildren: 0.25,
            staggerChildren: 0.075,
          }}
        >
          {heading.split("").map((l, i) => {
            return (
              <motion.span
                className="inline-block"
                key={i}
                variants={{
                  initial: {
                    x: 0,
                  },

                  whileHover: {
                    x: 16,
                    rotateY: 360,
                  },
                }}
                transition={{ type: "spring" }}
              >
                {l}
              </motion.span>
            );
          })}
        </motion.span>
        <span className="relative z-10 block mt-2 font-medium text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 ">
          {subheading}
        </span>
      </div>

      {/* img */}

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        src={imgSrc}
        className="absolute z-0 h-20 w-28 rounded-lg object-cover md:h-32 md:w-48 "
        variants={{
          initial: {
            scale: 0,
            rotate: "-10.5deg",
          },

          whileHover: {
            scale: 1,
            rotate: "10.5deg",
          },
        }}
        transition={{ type: "spring" }}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },

          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};

export default index;
