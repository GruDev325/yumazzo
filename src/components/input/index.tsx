import { WrapLabel } from "../wrap-label";
import "./style.scss";
type Props = {
  label?: string;
  value: string;
  type?: "number" | "text";
  onChange: (v: string) => void;
};

export const Input: React.FC<Props> = ({
  label,
  value,
  onChange,
  type = "text",
}) => {
  const onChangeInput = (e: any) => {
    onChange(e.target?.value);
  };
  return (
    <WrapLabel label={label}>
      <div className="custom-input">
        <input
          value={value}
          type={type}
          onChange={(e) => {
            onChangeInput(e);
          }}
        />
      </div>
    </WrapLabel>
  );
};
