import Categoria from './Categoria'

interface Produto {
    id: number;
    nome: string;
    imageUrl: string;
    descricao: string;
    preco: number;
    categoria?: Categoria| null

}

export default Produto;