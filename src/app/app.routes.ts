import { Routes } from '@angular/router';
import { AgendamentosComponent } from './components/agendamentos/agendamentos.component';
import { AdicionarServicosComponent } from './components/adicionar-servicos/adicionar-servicos.component';
import { CaixaComponent } from './components/caixa/caixa.component';
import { HomeComponent } from './components/home/home.component';
export const routes: Routes = [
    {
        path:'',
        component: AgendamentosComponent
    },
    {
        path:'agendamento',
        component: AgendamentosComponent
    },
    {
        path:'adicionarservico',
        component: AdicionarServicosComponent
    },
    {
        path:'caixa',
        component: CaixaComponent
    }
];
