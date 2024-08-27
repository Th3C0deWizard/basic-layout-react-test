import IconProps from "./IconProps";

export default function ClearFiltersIcon(props: IconProps) {
  return (
    <svg width={props.width} height={props.height} viewBox="0 0 512 512">
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="clear-filter"
          fill={props.fill}
          transform="translate(42.666667, 85.333333)"
        >
          <path
            d="M320,170.666667 C348.289759,170.666667 375.420843,181.90473 395.424723,201.90861 C415.428604,221.91249 426.666667,249.043574 426.666667,277.333333 C426.666667,336.243707 378.910373,384 320,384 C261.089627,384 213.333333,336.243707 213.333333,277.333333 C213.333333,218.42296 261.089627,170.666667 320,170.666667 Z M320,192 C272.871701,192 234.666667,230.205035 234.666667,277.333333 C234.666667,324.461632 272.871701,362.666667 320,362.666667 C367.128299,362.666667 405.333333,324.461632 405.333333,277.333333 C405.333333,230.205035 367.128299,192 320,192 Z M356.543147,225.705237 L371.628096,240.790187 L335.083904,277.333237 L371.628096,313.87648 L356.543147,328.961429 L319.999904,292.417237 L283.456853,328.961429 L268.371904,313.87648 L304.914904,277.333237 L268.371904,240.790187 L283.456853,225.705237 L319.999904,262.248237 L356.543147,225.705237 Z M341.333333,1.42108547e-14 L192,181.999 L192,304 L149.333333,304 L149.333,182 L7.10542736e-15,1.42108547e-14 L341.333333,1.42108547e-14 Z"
            id="Combined-Shape"
          ></path>
        </g>
      </g>
    </svg>
  );
}
