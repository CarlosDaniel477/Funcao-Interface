// Array de produtos com nomes mais descritivos
var produtos = [
    { id: 1, nome: "Notebook HP", preco: 2500, categoria: "Eletrônicos" },
    { id: 2, nome: "Mouse Positivo", preco: 150, categoria: "Periféricos" },
    { id: 3, nome: "Teclado Mecânico", preco: 400, categoria: "Periféricos" },
    { id: 4, nome: "Monitor Ultrawide", preco: 1800, categoria: "Monitores" },
];
// Função para adicionar um novo produto
function adicionarProduto(produto) {
    produtos.push(produto);
}
// Exemplo de uso: Adiciona um novo produto
var novoProduto = { id: 5, nome: "Webcam Full HD", preco: 2550, categoria: "Acessórios" };
adicionarProduto(novoProduto);
console.log(produtos);
