import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Client } from '../../models/clients.models';
import { ClientService } from '../../services/clients.service';

@Component({
  selector: 'app-agendamentos',
  imports: [CommonModule, FormsModule],
  templateUrl: './agendamentos.component.html',
  styleUrl: './agendamentos.component.css'
})
export class AgendamentosComponent {

  clientes$ = new Observable<Client[]>()
  name = ''
  date = ''
  tel = ''
  service = ''
  constructor(private clientService: ClientService){
    this.obterClientesCadastrados()
    
  }
 
  obterClientesCadastrados(){
    this.clientes$ =  this.clientService.obterCliente()

  }


  editarCliente(cliente: Client){
    this.name = cliente.nome
    this.date = cliente.horario
    this.tel = cliente.celular
    this.service = cliente.servico
  }

  remover(id: number){
    return this.clientService.removerCliente(id)
    .subscribe(() => this.obterClientesCadastrados())
  }

}
