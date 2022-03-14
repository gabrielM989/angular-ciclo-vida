import { AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cnp',
  templateUrl: './cnp.component.html',
  styleUrls: ['./cnp.component.css']
})
export class CnpComponent implements OnChanges, OnInit, AfterContentInit, AfterViewInit, OnDestroy{


  @Input()
  nome: string = ''

  @Input()
  idade: number = 0

  /* variáveis para o DoCheck */
  nomeP: string = ''
  nomeC: string = ''


  constructor( /* SnackBar */
    private snack: MatSnackBar
  ){ }

 
  ngOnInit(): void { /* para fazer o ngOnlnit, se usar apenas no constructor, vem zerado, para iniciar corretamente, usar o ngOnint
  assim os valores dos Inputs já estarão prontos */
    console.log(this.nome, this.idade)
   
  }


  ngOnChanges(changes: SimpleChanges): void {

    if (changes.hasOwnProperty('idade')) {
      console.log('IDADE ALTERADA')
      console.log(`Valor atual: ${changes['idade'].currentValue }`) /* currentValue -- O valor que alterou */
      console.log(`Valor anterior: ${changes['idade'].previousValue }`) /* previousValue -- O valor anterior à alteração */
      console.log(`Primeira alteração: ${changes['idade'].firstChange }`) /* firstChange -- Valor da primeira idade */
    }

    if(changes.hasOwnProperty('nome')){
      console.log('NOME ALTERADO')
      console.log(`Valor atual: ${changes['nome'].currentValue }`) /* currentValue -- O valor que alterou */
      console.log(`Valor anterior: ${changes['nome'].previousValue }`) /* previousValue -- O valor anterior à alteração */
      console.log(`Primeira alteração: ${changes['nome'].firstChange }`) /* firstChange -- Valor da primeira idade */
      
    }

    /* Conteúdo DoCkeck --> Deixei tudo comentado no final, pq estava dando problema*/
    this.nomeP = changes['nome'].previousValue /* previousValue -- O valor anterior à alteração */
    this.nomeC = changes['nome'].currentValue /* currentValue -- O valor que alterou */
  }


  /* Conteúdo AfterContentlnit */

  @ViewChild(CnpComponent)
  cpm!: CnpComponent

  ngAfterContentInit(): void {
  console.log(this.cpm)
  }

  /* Conteúdo ngAfterViewInit */

  ngAfterViewInit(): void {
   console.log('ngAfterViewIni')
  }

  /* Conteúdo ngOnDestoy */

  ngOnDestroy(): void {
    console.log('Fui destruído')
  }

}

/* import { AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cnp',
  templateUrl: './cnp.component.html',
  styleUrls: ['./cnp.component.css']
})
export class CnpComponent implements OnChanges, OnInit, DoCheck, AfterContentInit{


  @Input()
  nome: string = ''

  @Input()
  idade: number = 0

  
  nomeP: string = ''
  nomeC: string = ''


  constructor( 
    private snack: MatSnackBar
  ){ }
 
 
  ngOnInit(): void { 
    console.log(this.nome, this.idade)
   
  }


  ngOnChanges(changes: SimpleChanges): void {

    if (changes.hasOwnProperty('idade')) {
      console.log('IDADE ALTERADA')
      console.log(`Valor atual: ${changes['idade'].currentValue }`) 
      console.log(`Valor anterior: ${changes['idade'].previousValue }`)
      console.log(`Primeira alteração: ${changes['idade'].firstChange }`) 
    }

    if(changes.hasOwnProperty('nome')){
      console.log('NOME ALTERADO')
      console.log(`Valor atual: ${changes['nome'].currentValue }`) 
      console.log(`Valor anterior: ${changes['nome'].previousValue }`) 
      console.log(`Primeira alteração: ${changes['nome'].firstChange }`) /
      
    }

    
    this.nomeP = changes['nome'].previousValue 
    this.nomeC = changes['nome'].currentValue 
  }

  ngDoCheck(): void {
    
    if (this.nomeC.length < 6){
      this.snack.open('O nome precisa ter no mínimo 6 caracteres', 'Close', {
        duration: 3000 

      this.nome = this.nomeP
    }
  }

 

  @ViewChild(CnpComponent)
  cpm!: CnpComponent

  ngAfterContentInit(): void {
  console.log(this.cpm)
  }


} */


