import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Servico } from '../../models/servicos.model';
import { servicosService } from '../../services/servicos.service';

@Component({
  selector: 'app-adicionar-servicos',
  imports: [CommonModule, FormsModule,NgFor],
  templateUrl: './adicionar-servicos.component.html',
  styleUrl: './adicionar-servicos.component.css'
})
export class AdicionarServicosComponent {

  servicos$ = new Observable<Servico[]>()

  // form

  nome =''
  duracao = ''
  valor = ''

  
  constructor(private servicosService: servicosService){
    this.obterServicosCadastrados()
  }

  obterServicosCadastrados(){
    this.servicos$ = this.servicosService.obterServico()
  }

  cadastrarServico(){
    if (!this.nome || !this.duracao || !this.valor)
      return

    this.servicosService.criarServico({nome: this.nome, duracao: this.duracao, valor: Number(this.valor)})
    .subscribe(_ => this.obterServicosCadastrados())
    
  }


}
