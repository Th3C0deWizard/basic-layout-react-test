import { useState, type ReactNode } from "react";
import "../styles/Collapsable.css";

type CollapsableProps = {
  label?: string;
  collapsed?: boolean;
  children: ReactNode;
  className?: string;
};
export default function Collapsable(props: CollapsableProps) {
  const [collapsed, setCollapsed] = useState(props.collapsed ?? false);
  return (
    <div className="collapsable-container">
      <button
        type="button"
        className={props.className}
        onClick={() => setCollapsed(!collapsed)}
      >
        &gt; {props.label}
      </button>
      <div hidden={!collapsed}>{props.children}</div>
    </div>
  );
}
