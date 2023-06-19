import { useState, useEffect } from "react";
import { WrapLabel } from "../wrap-label";
import "./style.scss";
type Props = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export const TextArea: React.FC<Props> = ({ label, placeholder, ...props }) => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    props.value && setValue(props.value);
  }, [props.value]);

  useEffect(() => {
    props.onChange && props.onChange(value);
  }, [value]);

  return (
    <WrapLabel label={label}>
      <div className="custom-select-container">
        <div className="custom-textarea">
          <textarea
            placeholder={placeholder}
            value={value}
            onChange={(evt) => setValue(evt.target.value)}
            maxLength={200}
          />
        </div>
        <div className="helper">{`${value?.length}/200 Characters`}</div>
      </div>
    </WrapLabel>
  );
};
