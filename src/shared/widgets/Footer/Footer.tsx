import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "src/app/slices/ThemeSlice";
import { RootState } from "src/app/store";

export const Footer: FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <>
      <div className="footer">
        <button
          className="btn"
          onClick={() =>
            dispatch(changeTheme(theme === "dino" ? "vscode" : "dino"))
          }
        >
          {theme}
        </button>
      </div>
    </>
  );
};
