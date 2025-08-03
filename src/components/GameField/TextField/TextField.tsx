import { CSSProperties, FC, useEffect, useRef, useState } from "react";
import "./TextField.scss";
import { RootState } from "src/store/store";
import { useSelector } from "react-redux";

interface TextFieldProps {}
export const TextField: FC<TextFieldProps> = () => {
  const text = useSelector((state: RootState) => state.game.text);
  const index = useSelector((state: RootState) => state.game.index);

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
