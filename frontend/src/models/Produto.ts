import Categoria from './Categoria'

interface Produto {
    id: number;
    nome: string;
    imagemUrl: string;
    descricao: string;
    preco: number;
    categoria?: Categoria| null

}

export default Produto;