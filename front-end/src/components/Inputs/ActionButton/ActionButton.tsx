import React from "react";

interface Props {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
  id?: string;
  cb?: Function;
  disabled?: boolean;
}

const ActionButton: React.FC<Props> = props => {
  const { title, type, id, cb, disabled } = props;

  return (
    <React.Fragment>
      <button
        type={!type ? undefined : type}
        disabled={!disabled ? undefined : disabled}
        id={!id ? undefined : id}
        onClick={!cb ? undefined : e => cb(e)}
      >
        {title}
      </button>
    </React.Fragment>
  );
};

export default ActionButton;
