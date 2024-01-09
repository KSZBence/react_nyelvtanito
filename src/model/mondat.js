export default function mondat(props){
    return(
        <select className="form-select">
        {props.valaszthatok.valasztas.map((val, key) => {
            return(
            <option key = {key}>{val}</option>
            )
        })}
        </select>
    )
}