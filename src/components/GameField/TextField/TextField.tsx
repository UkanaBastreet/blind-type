import {
  CSSProperties,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import "./TextField.scss";
import { RootState } from "src/store/store";
import { useDispatch, useSelector } from "react-redux";
import { keyPressed } from "src/store/slices/GameSlice";

interface TextFieldProps {}
export const TextField: FC<TextFieldProps> = () => {
  const { pendingText, currentChar, completedText } = useText();
  const [shift, setShift] = useState(0);
  const textStyles = { "--shift": shift } as CSSProperties;

  const dispatch = useDispatch();

  const curRef = useRef<null | HTMLSpanElement>(null);
  const textRef = useRef<null | HTMLDivElement>(null);
  const keydownHandler = useCallback(
    (e: KeyboardEvent) => {
      dispatch(keyPressed(e.key));
    },
    [dispatch]
  );
  useEffect(() => {
    if (curRef.current && textRef.current) {
      const offsetTop = curRef.current.offsetTop;
      console.log("offsetTop : ", offsetTop);
      if (offsetTop > 43 + shift * 39) {
        setShift((n) => n + 1);
      }
    }
  }, [shift]);

  useEffect(() => {
    window.addEventListener("keypress", keydownHandler);
    return () => {
      window.removeEventListener("keypress", keydownHandler);
    };
  }, [keydownHandler]);

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

const useText = () => {
  const text = useSelector((state: RootState) => state.game.text);
  const index = useSelector((state: RootState) => state.game.index);
  const completedText = text.slice(0, index);
  const currentChar = text[index];
  const pendingText = text.slice(index + 1, text.length);
  return { completedText, currentChar, pendingText };
};
