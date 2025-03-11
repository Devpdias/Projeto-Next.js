import Produto from "../model/produto";

const produtos: Produto[] = [
    {
        id: 1,
        nome: "Notebook Gamer",
        preco: 5899.99,
        descricao: "Eletrônicos",
        imagem: "https://images.unsplash.com/photo-1640955014216-75201056c829?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        estoque: 76
    },
    {
        id: 2,
        nome: "Smartphone Android",
        preco: 2999.90,
        descricao: "Eletrônicos",
        imagem:"https://images.unsplash.com/photo-1723310181273-da4c41f7cb10?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        estoque: 54
    },
    {
        id: 3,
        nome: "Teclado Mecânico RGB",
        preco: 349.99,
        descricao: "Eletrônicos",
        imagem:"https://images.unsplash.com/photo-1664813398559-b76572ee59d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVjbGFkbyUyMG1lY2FuaWNvJTIwcmdifGVufDB8fDB8fHww",
        estoque: 23
    },
    {
        id: 4,
        nome: "Mouse Gamer",
        preco: 199.90,
        descricao: "Eletrônicos",
        imagem:"https://images.unsplash.com/photo-1613141412501-9012977f1969?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91c2UlMjBnYW1lcnxlbnwwfHwwfHx8MA%3D%3D",
        estoque: 87
    },
    {
        id: 5,
        nome: "Monitor 27'' 144Hz",
        preco: 1799.99,
        descricao: "Eletrônicos",
        imagem:"https://plus.unsplash.com/premium_photo-1669380425564-6e1a281a4d30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9uaXRvciUyMDI3JTIwcG9sZWdhZGFzfGVufDB8fDB8fHww",
        estoque: 65
      },
    {
        id: 6,
        nome: "Cadeira Gamer",
        preco: 999.90,
        descricao: "Eletrônicos",
        imagem:"https://images.unsplash.com/photo-1612011213721-3936d387f318?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNhZGVpcmElMjBnYW1lcnxlbnwwfHwwfHx8MA%3D%3D",
        estoque: 37
    },
    {
        id: 7,
        nome: "Fone de Ouvido Bluetooth",
        preco: 279.99,
        descricao: "Eletrônicos",
        imagem:"https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9uZSUyMGRlJTIwb3V2aWRvJTIwYmx1ZXRvb3RofGVufDB8fDB8fHww",
        estoque: 56
    },
    {
        id: 8,
        nome: "Caixa de Som Portátil",
        preco: 499.90,
        descricao: "Eletrônicos",
        imagem:"https://images.unsplash.com/photo-1529359744902-86b2ab9edaea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FpeGElMjBkZSUyMHNvbSUyMHBvcnRhdGlsfGVufDB8fDB8fHww",
        estoque: 98
    },
    {
        id: 9,
        nome: "Câmera de Segurança Wi-Fi",
        preco: 349.90,
        descricao: "Eletrônicos",
        imagem:"https://plus.unsplash.com/premium_photo-1675016457613-2291390d1bf6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhbWVyYSUyMGRlJTIwc2VndXJhbiVDMyVBN2ElMjB3aWZpfGVufDB8fDB8fHww",
        estoque: 12
    },
    {
        id: 10,
        nome: "Controle Sem Fio",
        preco: 299.90,
        descricao: "Eletrônicos",
        imagem:"https://images.unsplash.com/photo-1683137813518-07d0d3f68921?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbnRyb2xlJTIwc2VtJTIwZmlvfGVufDB8fDB8fHww",
        estoque: 54
    },
    {
        id: 11,
        nome: "Roteador Wi-Fi 6",
        preco: 699.90,
        descricao: "Eletrônicos",
        imagem:"https://images.unsplash.com/photo-1621685634155-dcb444e2ec98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJvdGVhZG9yJTIwd2lmaXxlbnwwfHwwfHx8MA%3D%3D",
        estoque: 20
    },
    {
        id: 12,
        nome: "HD Externo 2TB",
        preco: 499.90,
        descricao: "Disco rígido externo com grande capacidade de armazenamento e conexão USB 3.0.",
        imagem:"https://plus.unsplash.com/premium_photo-1725527114624-29f41666a314?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGQlMjBleHRlcm5vJTIwMiUyMHRifGVufDB8fDB8fHww",
        estoque: 30
    }
]