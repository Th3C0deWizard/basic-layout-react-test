import Collapsable from "./Collapsable";

type FilterBoxProps = {
  filters: Array<string>;
  label: string;
};

export default function FilterBox(props: FilterBoxProps) {
  return (
    <Collapsable className="collapsable-btn" label={props.label}>
      <div className="filter-container">
        {props.filters.map((filter, index) => (
          <div key={index} className="checkbox-input">
            <input name={filter} type="checkbox" />
            <label htmlFor={filter}>{filter}</label>
          </div>
        ))}
      </div>
    </Collapsable>
  );
}
