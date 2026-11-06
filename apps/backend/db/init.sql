USE padaria1;

CREATE TABLE fornecedor (
 id INT AUTO_INCREMENT PRIMARY KEY,
 nome VARCHAR(100),
 telefone VARCHAR(20)
);

CREATE TABLE produto (
 id INT AUTO_INCREMENT PRIMARY KEY,
 nome VARCHAR(100),
 preco DECIMAL(10,2),
 quantidade INT,
 fornecedor_id INT,
 FOREIGN KEY (fornecedor_id)
 REFERENCES fornecedor(id)
);


INSERT INTO fornecedor (nome, telefone)
VALUES
('Distribuidora São Paulo', '11999999999'),
('Alimentos Brasil', '11888888888');


INSERT INTO produto
(nome, preco, quantidade, fornecedor_id)
VALUES
('Farinha', 8.50, 30, 1),
('Açúcar', 5.50, 20, 1),
('Leite', 6.00, 50, 2);