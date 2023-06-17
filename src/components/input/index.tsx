import { WrapLabel } from "../wrap-label";
import "./style.scss";
type Props = {
  label?: string;
};

export const Input: React.FC<Props> = ({ label }) => {
  return (
    <WrapLabel label={label}>
      <div className="custom-input">
        <input />
      </div>
    </WrapLabel>
  );
};
