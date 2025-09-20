// Define a interface 'Produto' com as propriedades necessárias
interface Produto {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
}

// Array de produtos com nomes mais descritivos
const produtos: Produto[] = [
  { id: 1, nome: "Notebook HP", preco: 2500, categoria: "Eletrônicos" },
  { id: 2, nome: "Mouse Positivo", preco: 150, categoria: "Periféricos" },
  { id: 3, nome: "Teclado Mecânico", preco: 400, categoria: "Periféricos" },
  { id: 4, nome: "Monitor Ultrawide", preco: 1800, categoria: "Monitores" },
];

// Função para adicionar um novo produto
function adicionarProduto(produto: Produto): void {
  produtos.push(produto);
}

// Exemplo de uso: Adiciona um novo produto
const novoProduto = { id: 5, nome: "Webcam Full HD", preco: 2550, categoria: "Acessórios" };
adicionarProduto(novoProduto);

console.log(produtos);