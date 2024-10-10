import { useNavigate } from 'react-router-dom';
import BotaoCustomizado from '../../comun/componentes/BotaoCustomizado/BotaoCustomizado';
import Principal from '../../comun/componentes/Principal/Principal';
import './PaginaInicial.css';

const PaginaInicial = () => {
    const navitagate = useNavigate();
    

    return (
        <Principal titulo="Página Inicial">
            <BotaoCustomizado
                cor="primaria"
                aoClicar={() => navitagate('/lista-produtos')}
            >
                Lista Produtos
            </BotaoCustomizado>

        </Principal>
    );
};

export default PaginaInicial;