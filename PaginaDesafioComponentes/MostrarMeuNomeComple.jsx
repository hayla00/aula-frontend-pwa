
const MostrarMeuNomeCompleto = (props) => {

    const  nome = props.nome;
    const sobrenome = props.sobrenome;
  
      return(
          <>
          <div> O meu nome completo é: {nome} {sobrenome} !</div>
          </>
      );
  };
  
  export default MostrarMeuNomeCompleto;