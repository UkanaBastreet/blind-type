import {
  type CSSProperties,
  type FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import "./TextField.scss";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import type { RootState } from "@app/store";
import { keyPressed } from "@features/game/GameSlice";

export const TextField: FC = () => {
  const text = useSelector((state: RootState) => state.game.text);
  const index = useSelector((state: RootState) => state.game.index);
  const { pendingText, currentChar, completedText } = useText(text, index);
  const [shift, setShift] = useState(0);
  const textStyles = { "--shift": shift } as CSSProperties;

  const dispatch = useDispatch();

  const curRef = useRef<null | HTMLSpanElement>(null);
  const textRef = useRef<null | HTMLDivElement>(null);
  const keydownHandler = useCallback(
    (e: KeyboardEvent) => {
      e.preventDefault();
      dispatch(keyPressed(e.key));
    },
    [dispatch]
  );
  useEffect(() => {
    if (curRef.current && textRef.current) {
      const offsetTop = curRef.current.offsetTop;
      if (offsetTop > 43 + shift * 39) {
        setShift((n) => n + 1);
      }
    }
  }, [shift, currentChar]);

  useEffect(() => {
    window.addEventListener("keypress", keydownHandler);
    return () => {
      window.removeEventListener("keypress", keydownHandler);
    };
  }, [keydownHandler]);

  return (
    <motion.div
      className="text-field"
      key={text}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="text" ref={textRef} style={textStyles}>
        <span className="completed-text">{completedText}</span>
        <span className="current-char" ref={curRef}>
          {currentChar}
        </span>
        <span className="pending-text">{pendingText}</span>
      </div>
    </motion.div>
  );
};

const useText = (text: string, index: number) => {
  const completedText = text.slice(0, index);
  const currentChar = text[index];
  const pendingText = text.slice(index + 1, text.length);
  return { completedText, currentChar, pendingText };
};
