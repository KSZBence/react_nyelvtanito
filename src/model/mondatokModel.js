import { szenvedoMondatok } from './angol';
class MoondatokModel {
    #angol = []
    
    constructor() {
        this.#angol = szenvedoMondatok
    }

    mondatOsszeallit(index){
        let mondat = this.#angol[index].mondat
        let valasztas = this.#angol[index].valasztas
        let felbontott = mondat.split("_")
        const mondatlista = {eleje:felbontott[0], vege:felbontott[1], valaszthatok:valasztas}
        return mondatlista
    }    
    

    getCim(){
        return this.#angol[0]
    }

    getSugoSzoveg(){
        return this.#angol[1]
    }
    
    getHossz(){
        return this.#angol.length - 2
    }
}

export default MoondatokModel