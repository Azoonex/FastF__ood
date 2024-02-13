import { useState } from "react"
import { BsSearch } from "react-icons/bs"

function SearchBar({ searchItem }) {
    const [value,setValue] = useState('');

    const onSubmit = (event:Event) => {
        event.preventDefault()
        searchItem(value)
    }
  return (
    <form onSubmit={onSubmit} className="seatch flex-fill d-flex align-items-center ">
        <div className="input-group ">
            <input type="text"
            className="form-control rounded-end pe-5 border-success" 
            placeholder="سرچ فست فود"
            value={value}
            onChange={e => setValue(e.target.value)}
            />
            <BsSearch className="position-absolute top-50 translate-middle-y text-muted 
            me-3 " />
        </div>
    </form>
  )
}

export default SearchBar
