import { CSSProperties, FC, useEffect, useRef, useState } from "react";
import { inputError } from "src/types/game.type";
import "./TextField.scss";

interface TextFieldProps {
  text: string;
  index: number;
  errors: inputError[];
}
export const TextField: FC<TextFieldProps> = ({ text, index, errors }) => {
  const completedText = text.slice(0, index);
  const currentChar = text[index];
  const pendingText = text.slice(index + 1, text.length);
  const [shift, setShift] = useState(0);

  const textStyles = { "--shift": shift } as CSSProperties;

  const curRef = useRef<null | HTMLSpanElement>(null);
  const textRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (curRef.current && textRef.current) {
      const offsetTop = curRef.current.offsetTop;
      console.log("offsetTop : ", offsetTop);
      if (offsetTop > 43 + shift * 39) {
        setShift((n) => n + 1);
      }
    }
  }, [index, shift]);
  return (
    <div className="text-field">
      <div className="text" ref={textRef} style={textStyles}>
        <span className="completed-text">{completedText}</span>
        <span className="current-char" ref={curRef}>
          {currentChar}
        </span>
        <span className="pending-text">{pendingText}</span>
      </div>
    </div>
  );
};
