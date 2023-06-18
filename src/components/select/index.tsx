import { WrapLabel } from "../wrap-label";
import ReactSelect from "react-select";
import "./style.scss";
import { ChevronLeft } from "../../svg/chevron-left";
type Props = {
  label?: string;
  options: { label: React.ReactNode; value: any }[];
};

export const Select: React.FC<Props> = ({ label, options }) => {
  return (
    <WrapLabel label={label}>
      <div className="custom-select">
        <ReactSelect
          options={options}
          styles={{
            container: (baseStyles, state) => ({
              ...baseStyles,
              background: "transparent",
            }),
            control: (baseStyles, state) => ({
              ...baseStyles,
              background: "transparent",
              border: "none",
            }),
            singleValue: (baseStyles, state) => ({
              ...baseStyles,
              color: "white",
            }),
            menu: (baseStyles, state) => ({
              ...baseStyles,
              background: "#181F30",
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              color: "white",
            }),
          }}
        />
      </div>
    </WrapLabel>
  );
};
