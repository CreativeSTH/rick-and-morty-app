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
      <form className="search__form" onSubmit={handleSubmit}>
          <input className="search__input" type="text" ref={inputRef} id="searchInput"/>
          <div className="search__input__label">Enter a number between 1 and 126</div>
          <button className="search__button" type="submit">Buscar</button>
      </form>
    </div>
  )
}
export default SearchForm;