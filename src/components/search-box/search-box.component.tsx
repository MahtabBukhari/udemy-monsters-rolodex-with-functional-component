import { ChangeEvent } from "react";
import "./search-box.styles.css";


type SearchBox = {
  className:string;
  placeholder?:string;
  onEventHandler:  (event: ChangeEvent<HTMLInputElement>)=>void
}


const SearchBox = (props : SearchBox) => {
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
