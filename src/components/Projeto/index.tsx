
import Paragrafo from "../Paragrafo";
import Title from "../Title";

import { Card, LinkBotao } from "./styles";

const projeto = () => {
    return (
        <Card>
            <Title>Projeto lista de projetos</Title>
            <Paragrafo tipo="secundario">Lista de tarefas</Paragrafo>
            <LinkBotao href="#">Acessar projeto</LinkBotao>
        </Card>
    );
};

export default projeto;