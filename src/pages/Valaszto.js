import MondatokModel from "../model/mondatokModel"
import mondat from "../model/mondat"

export default function Valaszto(){
    let Mondatok = new MondatokModel()
    let mondat = Mondatok.mondatOsszeallit(3)
    return(
        <div>
            <p>{Mondatok.getCim()}</p>
            <p></p>
        </div>
    )
}