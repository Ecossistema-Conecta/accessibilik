import { FC } from "react";
import styled from "./AccessibilityButton.module.scss";
import AccessibleOpenArmsIcon from "../../../assets/icons/accessibleOpenArmsIcon.svg?react";
import classNames from "classnames";

interface AccessibilityButtonProps {
  onShow?: () => void;
  showSpinner?:boolean;
}

const AccessibilityButton: FC<AccessibilityButtonProps> = ({onShow,showSpinner}) => {
  return (
    <a
      onClick={onShow}
      role="button"
      title="Open Accessibility Menu"
      className={classNames(styled.AccessibilityIcon,{
        [styled.showSpinner]: showSpinner,
      })}
    >
      <AccessibleOpenArmsIcon />
    </a>
  );
};

export default AccessibilityButton;
