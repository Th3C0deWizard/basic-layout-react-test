import type IconProps from "./IconProps";

export default function GamesIcon(props: IconProps) {
  return (
    <svg
      width={props.width}
      height={props.height}
      fill={props.fill}
      viewBox="0 0 20 20"
    >
      <g strokeWidth="0" />
      <g strokeLinecap="round" strokeLinejoin="round" />

      <g>
        <rect x="0" fill="none" width="20" height="20" />
        <g>
          <path d="M15.9 5.5C15.3 4.5 14.2 4 13 4H7c-1.2 0-2.3.5-2.9 1.5-2.3 3.5-2.8 8.8-1.2 9.9 1.6 1.1 5.2-3.7 7.1-3.7s5.4 4.8 7.1 3.7c1.6-1.1 1.1-6.4-1.2-9.9zM8 9H7v1H6V9H5V8h1V7h1v1h1v1zm5.4.5c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9zm1.9-2c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9z" />
        </g>
      </g>
    </svg>
  );
}
