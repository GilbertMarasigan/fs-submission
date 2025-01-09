const Filter = ({ setSearch }) => {

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase()
    setSearch(searchTerm)
  }

  return (<div>filter shown with <input type='text' id='input-search' onChange={handleSearch} /></div>)
}

export default Filter