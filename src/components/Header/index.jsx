import { RiShutDownLine } from "react-icons/ri";
import { Container, Logout, Profile } from "./styles";

export function Header() {
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/vitor-henridias.png" alt="Foto do usuário" />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Vitor Henrique</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>

        </Container>
    );
}