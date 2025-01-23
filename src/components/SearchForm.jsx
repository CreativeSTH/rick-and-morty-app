import { useRef, useState } from "react";
import "../components/searchForm.css"

function SearchForm({setSearch}) {
  const inputRef = useRef()
  const [errorInput, setErrorInput] = useState(null)  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = inputRef.current.value.trim()
    
    if(!isNaN(searchValue) && searchValue.trim() !== ''){
      setErrorInput(null)
      setSearch(searchValue) 
    }else if(searchValue){
      setErrorInput('Solo se permiten números y no puede estar vacío el campo')
    }  
  }

 
  return (
    <div className="search__form__container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchInput">
          <input type="text" ref={inputRef} id="searchInput" placeholder="Enter a number between 1 and 126 to load a location and its characters."/>
        </label>
        <button type="submit">Buscar</button>
      </form>
    </div>
  )
}
export default SearchForm;