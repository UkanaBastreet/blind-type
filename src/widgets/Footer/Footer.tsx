import { changeTheme } from "@app/slices/ThemeSlice";
import type { RootState } from "@app/store";
import { Button } from "@shared/ui/Button/Button";
import { type FC } from "react";
import { useDispatch, useSelector } from "react-redux";

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
