import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Client } from "../models/clients.models";

@Injectable({
    providedIn: 'root'
})

export class ClientService {

    private url = `${environment.api}/clients`

    constructor(private httpClient: HttpClient){
    }


    obterCliente(){
        return this.httpClient.get<Client[]>(this.url)
    }

    

    deletarCliente(id: Client){
        return this.httpClient.delete<Client>(this.url + `/${id}`)
    }
    editarCliente(cliente: Client){
        return this.httpClient.put<Client>(`${this.url}/${cliente.id}`, cliente)
    }

    removerCliente(id: number){
        return this.httpClient.delete<void>(`${this.url}/${id}`)
    }
}