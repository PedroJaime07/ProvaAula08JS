const aluno = {
    nome: 'Pedro Jaime',
    notas: [10, 10, 10, 10],
    calcularMedia(){
        let soma = 0
        this.notas.forEach(e => soma += e )
        media = soma / this.notas.length
        return media
    }
}

const {nome} = aluno
const novasNotas = [...aluno.notas, 9] // eu usaria o push() para isso

console.log(nome);
console.log(aluno.calcularMedia());
console.log(novasNotas);



