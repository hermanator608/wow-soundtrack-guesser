import React from "react";
import { Icon, IconProps } from "./Icon";

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text?: string
  tooltip?: string
  icon?: IconProps['icon']
  highlighted?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  style,
  className,
  tooltip,
  icon,
  text,
  highlighted,
  disabled
}) => {
  return (
    <>
      <button
        data-tip={tooltip}
        onClick={onClick}
        type="button"
        style={{
          display: "flex",
          alignItems: "center",
          ...style,
          ...(text ? {} : { lineHeight: 0 }),
          ...(highlighted ? { filter: 'var(--yellow-glow-drop-shadow)' } : {}),
        }}
        className={className}
        title={tooltip}
        disabled={disabled}
      >
        {icon && <Icon icon={icon} />}
        {text && <span style={{ marginLeft: 8 }}>{text}</span>}
      </button>
    </>
  );
}

export default Button;
