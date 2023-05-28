import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LivrosComponent } from './livros/livros.component';
import { PerfilUserComponent } from './perfil-user/perfil-user.component';
import { HistoricoEmprestimosComponent } from './historico-emprestimos/historico-emprestimos.component';
import { LivroAnuncioComponent } from './livro-anuncio/livro-anuncio.component';
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';
import { CadastroLivroAnuncioComponent } from './cadastro-livro-anuncio/cadastro-livro-anuncio.component';
import { SolicitarEmprestimoComponent } from './solicitar-emprestimo/solicitar-emprestimo.component';
import { RenovarEmprestimoComponent } from './renovar-emprestimo/renovar-emprestimo.component';
import { LoginUserComponent } from './login-user/login-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LivrosComponent,
    PerfilUserComponent,
    HistoricoEmprestimosComponent,
    LivroAnuncioComponent,
    CadastroUserComponent,
    CadastroLivroAnuncioComponent,
    SolicitarEmprestimoComponent,
    RenovarEmprestimoComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
