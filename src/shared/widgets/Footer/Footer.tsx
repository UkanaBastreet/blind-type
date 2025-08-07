import { type FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../app/store";
import { changeTheme } from "../../../app/slices/ThemeSlice";
import { Button } from "../../ui/Button/Button";

export const Footer: FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <>
      <div className="footer">
        <Button
          className="btn"
          onClick={() =>
            dispatch(changeTheme(theme === "dino" ? "vscode" : "dino"))
          }
        >
          {theme}
        </Button>
      </div>
    </>
  );
};
