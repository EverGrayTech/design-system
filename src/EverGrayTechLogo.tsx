import * as React from 'react';

export type EverGrayTechLogoProps = Omit<React.SVGProps<SVGSVGElement>, 'children'> & {
  title?: string;
};

const DEFAULT_LABEL = 'EverGray Tech Logo';

export function EverGrayTechLogo({
  title,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  role,
  width = '1em',
  height = '1em',
  ...restProps
}: EverGrayTechLogoProps) {
  const generatedTitleId = React.useId();
  const titleId = title ? generatedTitleId : undefined;
  const resolvedAriaHidden = ariaHidden ?? (!title && !ariaLabel ? true : undefined);
  const resolvedRole = role ?? (resolvedAriaHidden ? undefined : 'img');
  const resolvedAriaLabel = resolvedAriaHidden ? undefined : ariaLabel ?? (!title ? DEFAULT_LABEL : undefined);

  return (
    <svg
      version="1.1"
      viewBox="-3 -3 1530 1530"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={resolvedAriaHidden}
      aria-label={resolvedAriaLabel}
      aria-labelledby={titleId}
      role={resolvedRole}
      {...restProps}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <linearGradient id={generatedTitleId + '-gradient-color'}>
          <stop offset="0%" stopColor="#A21534" />
          <stop offset="50%" stopColor="#0F263D" />
          <stop offset="100%" stopColor="#3A7ABB" />
        </linearGradient>
        <linearGradient
          id={generatedTitleId + '-gradient-position'}
          href={`#${generatedTitleId}-gradient-color`}
          x1="260"
          y1="0"
          x2="1260"
          y2="1530"
          gradientUnits="userSpaceOnUse"
          spreadMethod="pad"
        />
      </defs>
      <g fill={`url(#${generatedTitleId}-gradient-position)`} stroke="none">
        <path d="M 330.0022 1389.578 C 320.7131 1383.167 311.574 1376.556 302.5891 1369.75 C 118.8289 1230.553 0.0012315 1010.005 0.0012207 761.9999 C 0.0012023 341.5405 341.5432 -0.000061 762.0007 -0.000061 C 893.3942 -0.000061 1017.081 33.35352 1125.046 92.04602 L 1126.408 92.79187 L 894.7756 324.4247 L 891.2497 323.3668 C 850.2568 311.2846 806.8781 304.8 762.0016 304.8 C 563.9262 304.8 395.0411 431.1296 331.6158 607.5198 L 330.8761 609.5993 L 609.6002 609.5993 L 609.6008 914.3998 L 330.8762 914.3998 L 331.616 916.48 C 377.6982 1044.638 479.4524 1146.37 607.6252 1192.423 L 609.6018 1193.122 L 609.6018 1508.717 L 608.5774 1508.51 C 506.9016 1487.679 412.5681 1446.56 330.0022 1389.578 Z" />
        <path d="M 1193.128 914.3996 L 914.3996 914.3996 L 914.3996 914.3996 L 914.3996 914.3996 L 914.3996 609.5991 L 1193.128 609.5991 L 1193.128 609.5991 L 1508.717 609.5991 L 1509.441 613.1928 C 1518.992 661.327 1524 711.0848 1524 761.9998 C 1524 1129.902 1262.508 1437.382 915.4597 1508.503 L 914.3999 1508.717 L 914.3998 1193.122 L 916.3779 1192.423 C 1044.551 1146.37 1146.305 1044.638 1192.386 916.4798 L 1193.128 914.3996 Z M 1219.2 761.9998 L 1219.2 761.7778 L 1219.199 762.2204 L 1219.2 761.9998 Z" />
      </g>
    </svg>
  );
}

export default EverGrayTechLogo;
