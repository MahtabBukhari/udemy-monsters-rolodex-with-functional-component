import "./search-box.styles.css";

const SearchBox = (props) => {
  const { onEventHandler, className, placeholder } = props;
  return (
    <div>
      <input
        type="search"
        className={`search-box ${className}`}
        placeholder={placeholder}
        onChange={onEventHandler}
      />
    </div>
  );
};

export default SearchBox;
