interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const inventory: Product[] = [];
let nextId = 1;

function addProduct(name: string, price: number, quantity: number): Product {
  // 1. Deve criar um novo produto com um ID único (usando a variável global `nextId`),
  // adicioná-lo ao array `inventory`, incrementar o `nextId` e retornar o produto recém-criado.
  const newProduct: Product = {
    id: nextId,
    name: name,
    price: price,
    quantity: quantity,
  };

  inventory.push(newProduct);
  nextId++;
  return newProduct;
}

function listInventory(): Product[] {
  // 2. Deve retornar todos os produtos cadastrados no inventário.
  return inventory;
}

function updateProductQuantity(id: number, newQuantity: number): void {
  // 3. Deve buscar o produto pelo ID. Se encontrar, atualizar a quantidade (`quantity`)
  // para o valor passado no parâmetro `newQuantity` e encerrar.
  // Se não encontrar, retorne uma mensagem de aviso ou alerta.

  const productToUpdateQuantity = inventory.find(
    (product) => product.id === id,
  );

  if (productToUpdateQuantity) {
    productToUpdateQuantity.quantity = newQuantity;
    return;
  }
  throw new Error("Nenhum produto encontrado verifique o id");
}

function removeProduct(id: number) {
  // 4. Deve encontrar o produto pelo ID e removê-lo do array `inventory`.
  // Se encontrar e remover com sucesso, encerre.
  // Se não encontrar, retorne uma mensagem informando que o produto não existe.
  const productToBeRemoved = inventory.findIndex(
    (product) => product.id === id,
  );

  if (productToBeRemoved != -1) {
    inventory.splice(productToBeRemoved, 1);
  }
}

function calculateTotalInventoryValue(): number {
  // 5. Desafio extra: Deve calcular e retornar o valor total do inventário
  // (multiplicando o preço pela quantidade de cada produto e somando todos eles).
  // Dica: Você pode usar um loop ou o método `.reduce()` do JavaScript!
  const inventoryTotalPrice = inventory.reduce(
    (totalPrice, currentProduct) =>
      (totalPrice += currentProduct.price * currentProduct.quantity),
    0,
  );

  return inventoryTotalPrice;
}
