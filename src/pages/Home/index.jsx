import { FiPlus } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";
import { Brand, Container, Content, Menu, NewNote, Search } from "./styles";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Node" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "rocketseat" },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
