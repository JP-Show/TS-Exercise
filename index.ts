//Fazer um programa para ler os valores da largura e altura de um retângulo. Em seguida, mostrar na tela o valor de sua área, perímetro e diagonal. Usar uma classe como mostrado no projeto ao lado

class retangulo {
  private widht: number
  private high: number

  constructor(widht: number, high: number) {
    this.widht = widht
    this.high = high
  }

  public execArea(): string {
    const area = this.high * this.widht
    const perimeter = this.high + this.widht
    const diagonal = this.widht ** 2 * this.high ** 2
    return `A area do tringulo é ${area} \n O perimetro é ${perimeter} \n O diagonal é ${diagonal}`
  }
}

console.log(new retangulo(2, 3).execArea())

//Fazer um programa para ler os dados de um funcionário (nome, salário bruto e imposto). Em seguida, mostrar os dados do funcionário (nome e salário líquido). Em seguida, aumentar o salário do funcionário com base em uma porcentagem dada (somente o salário bruto é afetado pela porcentagem) e mostrar novamente os dados do funcionário. Use a classe projetada abaixo.

class employee {
  name: string
  salary: number
  tax: number

  constructor(name: string, salary: number, tax: number) {
    this.name = name
    this.salary = salary
    this.tax = tax
  }

  public showSalary(): string {
    return `${this.name} seu salário atual é ${this.salary - this.tax}`
  }
  public upSalary(porceUp: number = 0) {
    const porce = porceUp * 0.01 * this.salary
    return `${this.name} seu novo salário ${this.salary + porce}`
  }
}

const ayumi = new employee('Ayumi Rin', 4000, 700)
console.log(ayumi.showSalary())
console.log(ayumi.upSalary(20))

//Fazer um programa para ler o nome de um aluno e as três notas que ele obteve nos três trimestres do ano (primeiro trimestre vale 30 e o segundo e terceiro valem 35 cada). Ao final, mostrar qual a nota final do aluno no ano. Dizer também se o aluno está aprovado (PASS) ou não (FAILED) e, em caso negativo, quantos pontos faltam para o aluno obter o mínimo para ser aprovado (que é 60% da nota). Você deve criar uma classe Student para resolver este problema.

class Student {
  private _nt1: number = 0
  private _nt2: number = 0
  private _nt3: number = 0

  set nt1(valor: number) {
    if (valor <= 30) {
      this._nt1 = valor
    } else {
      this._nt1 = 999
    }
  }
  set nt2(valor: number) {
    if (valor <= 35) {
      this._nt2 = valor
    } else {
      this._nt2 = 999
    }
  }
  set nt3(valor: number) {
    if (valor <= 35) {
      this._nt3 = valor
    } else {
      this._nt3 = 999
    }
  }
  get nt1() {
    return this._nt1
  }
  get showFinalResult(): string {
    const finalNt: number = this._nt1 + this._nt2 + this._nt3
    if (this._nt1 >= 31) {
      return `nota1 está errada, digite a nota1 menor que 30`
    } else if (this._nt2 >= 36) {
      return `nota 2 está errada, digite a nota 2 menor que 35`
    } else if (this._nt3 >= 36) {
      return `nota 3 está errada, digite a nota 3 menor que 35`
    } else if (finalNt > 60) {
      return `sua nota final foi ${finalNt}, parabéns você passou`
    } else {
      return `sua nota final foi ${finalNt}, você não passou :( ficou faltando ${
        100 - finalNt
      }) `
    }
  }
}

const ayumi2 = new Student()
ayumi2.nt1 = 20
ayumi2.nt2 = 10
ayumi2.nt3 = 20
console.log(ayumi2.showFinalResult)

//Classe Fila, tributo: fila(array), métodos: entrar, próximo, imprimir

class Fila<T extends number | string> {
  // você pode restrigir também, ou é number ou é string
  _fila: T[]

  constructor(...args: T[]) {
    this._fila = args
  }

  set add(valor: T) {
    this._fila.push(valor)
  }
  get imprimir(): T[] {
    return this._fila
  }

  public next(): T | null {
    if (this._fila.length > 0) {
      const primeiro = this._fila[0]
      this._fila.splice(0, 1)
      return primeiro
    } else {
      return null
    }
  }
}
const fila = new Fila<string>('matheus', 'Geovanna', 'Ayumi')
console.log(fila.imprimir)
fila.add = 'André'
console.log(fila.imprimir)
console.log(fila.next())
console.log(fila.next())
console.log(fila.imprimir)
fila.add = 'Lucas Henrique'
console.log(fila.imprimir)

const market = new Fila<number>(1, 2, 3, 4)
console.log(market.imprimir)
