function carregarDadosMercado() {
    const dados = [
        { cliente: "João", produto: "Arroz", venda: "R$ 20", atendente: "Carlos" },
        { cliente: "Maria", produto: "Feijão", venda: "R$ 15", atendente: "Ana" }
    ];

    const tabela = document.getElementById("tabelaMercado");

    tabela.innerHTML = `
    <tr>
        <th>Cliente</th>
        <th>Produto</th>
        <th>Venda</th>
        <th>Atendente</th>
    </tr>`;

    dados.forEach(d => {
        let linha = tabela.insertRow();

        linha.insertCell(0).innerText = d.cliente;
        linha.insertCell(1).innerText = d.produto;
        linha.insertCell(2).innerText = d.venda;
        linha.insertCell(3).innerText = d.atendente;
    });
}