

export default function SearchBar({search,setSearch}){

    return(
      <input type="text"
      placeholder="search a country"
      value={search}
      onChange={(e)=> setSearch(e.target.value)}
        />
      
    )

}
