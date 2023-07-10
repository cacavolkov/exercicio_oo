function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz olá")
    } 
    this.dizCargo = function() {
        console.log(this.cargo);
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    // this.salario = salario;
    let _salario = salario;

    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }

    Pessoa.call(this, nome);
}

function Estagiario(nome) {
    Funcionario.call(this, nome, "Estagiário", 2000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);
    }
}

function Gerente(nome) {
    Funcionario.call(this, nome, "Gerente", 10000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario);
    }
}

function Programador(nome) {
    Funcionario.call(this, nome, "Programador", 12000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.20;
        this.setSalario(novoSalario);
    }
}

function Engenheiro(nome) {
    Funcionario.call(this, nome, "Engenheiro", 9000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.10;
        this.setSalario(novoSalario);
    }
}

function Analista(nome) {
    Funcionario.call(this, nome, "Analista", 4000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.10;
        this.setSalario(novoSalario);
    }
}

const funcionario1 = new Funcionario("Maria", "dev front-end", 5000);
const funcionario2 = new Estagiario("Pedro");
const funcionario3 = new Gerente("Paula");
const funcionario4 = new Programador("Carlos");
const funcionario5 = new Engenheiro("Alberto");
const funcionario6 = new Analista("Gonçalves");


funcionario1.aumento();
console.log(funcionario1.getSalario())

funcionario2.aumento();
console.log(funcionario2.getSalario())

funcionario3.aumento();
console.log(funcionario3.getSalario())

funcionario4.aumento();
console.log(funcionario4.getSalario())

funcionario5.aumento();
console.log(funcionario5.getSalario())

funcionario6.aumento();
console.log(funcionario6.getSalario())