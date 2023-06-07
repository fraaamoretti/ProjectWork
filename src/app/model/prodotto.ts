export class Prodotto
{
    constructor(public nome:string, public tipologia:string, public prezzo:number, public img:string[], public descrizione?:string)
    {
        if(this.descrizione === undefined)
        {
            this.descrizione = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum possimus, totam magni assumenda incidunt dolorem similique itaque sint beatae, inventore suscipit non excepturi esse eligendi rem nulla provident. Dignissimos, ipsa."
        }
    }
}