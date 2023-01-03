import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  title = 'Sesion 09';
  valoruno: number = 0;
  valordos: number = 0;
  resultado: number = 0;
  operacion: string = 'defecto';

  onSumar(): void {
    this.resultado = this.valoruno + this.valordos;
  }
  onRestar(): void {
    this.resultado = this.valoruno - this.valordos;
  }
  onMultiplicar(): void {
    this.resultado = this.valoruno * this.valordos;
  }
  onDividir(): void {
    this.resultado = this.valoruno / this.valordos;
  }


  calcular(): number {
    if (this.operacion === 'sumar') {
      this.onSumar();
      return this.resultado;
    } else if (this.operacion === 'restar') {
      this.onRestar();
      return this.resultado;
    } else if (this.operacion === 'multiplicar') {
      this.onMultiplicar();
      return this.resultado;
    } else if (this.operacion === 'dividir') {
      this.onDividir();
      return this.resultado;
    }

    return 0;
  }

}
