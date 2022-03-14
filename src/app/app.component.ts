import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula27-ciclo-vida';

  mostrar: boolean = true

  valorNome: string = 'Gabriel'
  valorIdade: number = 22

  alterarValores(vNome: string, vIdade: number): void{
    this.valorNome = vNome
    this.valorIdade = vIdade
  }

  parseInt(n: string): number{ /* Estamos convertendo a String em Number */
    return parseInt(n)
  }
}
