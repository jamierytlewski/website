import styles from './index.module.css';
import * as React from 'react';
import { classNames } from '@lib/classNames';

type Steps = {
  normalStep?: number;
  hoverStep?: number;
  activeStep?: number;
};

const getColorScale = (color: string): React.CSSProperties => {
  const scales = [...Array(12)];
  return scales.reduce((obj, _, i) => {
    obj[`--color-${i + 1}`] = `var(--${color}-${i + 1})`;
    return obj;
  }, {});
};

type ButtonProps = Steps & {
  variant: 'soft' | 'outline' | 'solid' | 'ghost';
  color: string;
  active?: boolean;
  invertText?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

export const Button = ({
  icon,
  variant = 'soft',
  invertText,
  color,
  active,
  children,
  ...steps
}: ButtonProps) => (
  <button
    className={classNames(
      styles.BaseButton,
      variant === 'soft' && styles.SoftButton,
      variant === 'outline' && styles.OutlineButton,
      variant === 'solid' && styles.SolidButton,
      variant === 'ghost' && styles.GhostButton,
      invertText && styles.invertText,
      icon && styles.IconButton
    )}
    style={getColorScale(color)}
  >
    {icon || children}
  </button>
);

export const MenuItemButton = ({
  color,
  active = false,
  children,
  ...props
}: React.PropsWithChildren<ButtonProps>) => (
  <button
    className={classNames(styles.BaseButton, styles.MenuItemButton)}
    style={getColorScale(color)}
    {...props}
  >
    {children}
  </button>
);

export const ToggleSwitch = () => <div className={styles.ToggleSwitch} />;

export const Slider = () => <div className={styles.Slider} />;
