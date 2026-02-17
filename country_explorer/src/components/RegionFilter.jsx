export default function Filter({region, setRegion}){
    return(
<>
<div className="region">
    <select className="select"  value={region}   onChange={(e)=>setRegion(e.target.value)}>
    <option value="all"> All</option>
    <option value="Africa"> Africa</option>
    <option value="Asia"> Asia</option>
    <option value="Europe"> Europe</option>
    <option value="America"> America</option>
    <option value="Oceania"> Oceania</option>
    </select>
</div>
</>
    )
}