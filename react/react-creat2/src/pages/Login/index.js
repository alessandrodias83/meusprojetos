import React from "react";

import { Container } from '../../styles/GlobalStyles';

import { Paragrafo, Title } from "./styled";

export default function Login() {
    return (
        <Container>
            <Title>
                Login
                <small>Oie</small>
            </Title>
            <Paragrafo>Loren Lowrem dsd ddsad
            </Paragrafo>
            <button type="button">Enviar</button>
        </Container>

    );
}