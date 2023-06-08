export enum Categorie{Fantasy, Giallo, Romanzo, Science, SelfDevelopment}

export class Prodotto
{
    path = '../../assets/img/';
    preferito = false;

    constructor(public id:number ,public titolo:string, public autore:string, public categoria:Categorie, public prezzo:number, public img:string[], public descrizione?:string)
    {
        if(this.descrizione === undefined)
        {
            this.descrizione = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum possimus, totam magni assumenda incidunt dolorem similique itaque sint beatae, inventore suscipit non excepturi esse eligendi rem nulla provident. Dignissimos, ipsa."
        }

        for(let i = 0; i < img.length; i++)
        {
            img[i] = this.path + img[i];
        }
    }
}