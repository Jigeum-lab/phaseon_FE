import { forwardRef } from 'react';
import * as icons from '@/components/icon';

export interface IconProps {
  name: keyof typeof icons;
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  onClick?: () => void;
  className?: string;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ name, width, height, fill = 'none', stroke, onClick, className }, ref) => {
    const SvgIcon = icons[name];
    return width && height ? (
      <SvgIcon
        ref={ref}
        width={width}
        height={height}
        fill={fill}
        stroke={stroke}
        onClick={onClick}
        className={className}
      />
    ) : (
      <SvgIcon ref={ref} fill={fill} stroke={stroke} onClick={onClick} className={className} />
    );
  },
);
