import { useMemo } from "react";
import "./style.scss";
type Props = {
  full?: boolean;
  onClick?: () => void;
} & React.PropsWithChildren;

export const Button: React.FC<Props> = ({ onClick, children, full }) => {
  const classes = useMemo<string>(() => {
    const cls = ["custom-button"];
    full && cls.push("full");
    return cls.join(" ");
  }, [full]);
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
