
import { TypeAnimation } from "react-type-animation";
const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Meet your new AI chat companion!",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Chat smarter, Elevate your conversations with MERN-GPT",
        1000,
        "Your virtual assistant, ready to assist. Built with OPEN AI !",
        1000,
        "Unlock the power of AI in every message.",
        1000,
        "Try our chatbot for a smarter chat experience!",
        1000,
      ]}
      wrapper="span"
      speed={40}
      style={{
        fontSize: "50px",
        color: "white",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;
