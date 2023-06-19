import ReactSelect, { components } from "react-select";
import { WrapLabel } from "../wrap-label";
import "./style.scss";
import { SearchIcon } from "../../svg/icon-search";

type Props = {
  label?: string;
  isSearchable?: boolean;
  hideIndicator?: boolean;
  onChange?: (value: any) => void;
  options: {
    label: React.ReactNode;
    chipLabel?: React.ReactNode;
    value: any;
    search?: any;
  }[];
};

const MultiValue = (props: any) => (
  <components.MultiValue {...props}>
    {props.data.chipLabel}
  </components.MultiValue>
);

const DropdownIndicator = (props: any) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}></components.DropdownIndicator>
    )
  );
};

const DropdownIndicatorSearch = (props: any) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <SearchIcon />
      </components.DropdownIndicator>
    )
  );
};

const CrossIcon = (props: any) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <SearchIcon />
      </components.DropdownIndicator>
    )
  );
};

export const Select: React.FC<Props> = ({
  label,
  options,
  isSearchable,
  hideIndicator,
  onChange,
}) => {
  return (
    <WrapLabel label={label}>
      <div className="custom-select">
        <ReactSelect
          onChange={onChange}
          options={options}
          components={{
            MultiValue,
            DropdownIndicator: hideIndicator
              ? null
              : isSearchable
              ? DropdownIndicatorSearch
              : DropdownIndicator,
            CrossIcon,
            IndicatorSeparator: () => null,
          }}
          isSearchable={isSearchable}
          getOptionLabel={(option) => option.search}
          formatOptionLabel={(option, { context }) => {
            return context === "menu"
              ? option.label
              : option.chipLabel || option.label;
          }}
          styles={{
            container: (baseStyles, state) => ({
              ...baseStyles,
              background: "transparent",
            }),
            control: (baseStyles, state) => ({
              ...baseStyles,
              background: "transparent",
              boxShadow: state.isFocused
                ? "0px 0px 0px 4px #B89FFF, inset 0px 0px 0px 1px #663CDD;"
                : "0px 0px 0px 1px #5B6178",
              flexDirection: isSearchable ? "row-reverse" : "row",
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
              "&:hover": {
                background: "#181F30",
              },
            }),
          }}
        />
      </div>
    </WrapLabel>
  );
};
