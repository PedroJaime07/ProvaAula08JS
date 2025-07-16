const aluno = {
    nome: 'Pedro Jaime',
    notas: [10, 10, 10, 10],
    calcularMedia(){
        let soma = 0
        this.notas.forEach(e => soma += e )
        let media = soma / this.notas.length
        return media
    }
}

const {nome} = aluno
const novasNotas = [...aluno.notas, 9] // eu usaria o push() para isso
const mediaNovaNota = function media() {
    let soma = 0
    novasNotas.forEach(e => soma += e)
    return media = soma / novasNotas.length
}

console.log(nome);
console.log(aluno.calcularMedia());
console.log(novasNotas);
console.log(mediaNovaNota());





