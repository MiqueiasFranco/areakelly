import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Servico } from "../models/servicos.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class servicosService {

    private url = `${environment.api}/servicos`

    constructor(private httpClient: HttpClient){

    }

    obterServico(){
        return this.httpClient.get<Servico[]>(this.url)
    }

    criarServico(servico: Servico){
        return this.httpClient.post<Servico>(this.url, servico)
    }

    deletarCliente(id: Servico){
            return this.httpClient.delete<Servico>(this.url + `/${id}`)
    }
    
    editarCliente(servico: Servico){
        return this.httpClient.put<Servico>(`${this.url}/${servico.id}`, servico)
    }

    removerCliente(id: number){
        return this.httpClient.delete<void>(`${this.url}/${id}`)
    }

}