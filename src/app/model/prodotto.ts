export enum Categorie{Fantasy, Giallo, Romanzo, Science, SelfDevelopment}

export class Prodotto
{
    path = '../../assets/img/';
    preferito = false;

    constructor(public id:number ,public titolo:string, public autore:string, public categoria:Categorie, public prezzo:number, public img:string[], public descrizione?:string)
    {
        if(this.descrizione === undefined)
        {
            this.descrizione = ` "${this.titolo}", un libro di ${this.autore}.`;
        }

        for(let i = 0; i < img.length; i++)
        {
            img[i] = this.path + img[i];
        }
    }
}