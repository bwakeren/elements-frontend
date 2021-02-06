import { useSpring, animated } from "react-spring";
import classes from "./TeamItem.module.scss";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const TeamItem = ({ name, job, illustration, socialMedia }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      className="flex flex-col items-center w-72 bg-white py-8 rounded-3xl relative hover:shadow-product"
      style={{
        height: 340,
        width: 278,
        transform: props.xys.interpolate(trans),
      }}
    >
      {illustration}
      <h5 className="font-bold text-2xl mt-3 text-primary mb-2">{name}</h5>
      <p className="text-sm text-secondary">{job}</p>
      <div className="w-full absolute py-6 bg-blue left-0 bottom-0 rounded-bl-3xl rounded-br-3xl flex items-center justify-center">
        {socialMedia.map((social) => (
          <a
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className={
              social.title === "Tiktok" ? classes.tiktok : classes.socialmedia
            }
            key={social.title}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </animated.div>
  );
};
