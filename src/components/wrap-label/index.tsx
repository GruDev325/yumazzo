import "./style.scss";

type Props = {
  label?: string;
} & React.PropsWithChildren;

export const WrapLabel: React.FC<Props> = ({ children, label }) => {
  return (
    <div className="wrap-label">
      <div className="label">{label}</div>
      {children}
    </div>
  );
};
