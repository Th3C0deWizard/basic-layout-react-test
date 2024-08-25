type IconProps = {
  width: string | number | undefined;
  height: string | number | undefined;
  className: string | undefined;
  onClick?: () => void;
};

export default function CloseIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="#fff"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={`icon icon-tabler icons-tabler-outline icon-tabler-x ${props.className}`}
      onClick={props.onClick}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
