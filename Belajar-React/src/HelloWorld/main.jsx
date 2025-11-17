import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import Container from "./Container";
import TodoList from "../todoList/TodoList";
import Table from "../Table/Table";
import AlertButton from "../Button/AlertButton";
import Mybutton from "../Button/MyButton";
import Toolbar from "../Button/Toolbar";
import SearchForm from "../Form/SearchFom";
import SayHeelloForm from "../Form/SayHelloForm";
import Counter from "../Form/Counter";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
                <HelloWorld/>
                <TodoList/>
                <Table/>
                <AlertButton text="Click Me" message="button di Click" />
                <Mybutton text="Shams Me" OnSmash={() => alert("you smash me")}/>
                <Toolbar onClick={(e) => {
                    e.stopPropagation()
                    alert("button di click")
                }} />
                <SearchForm/>
                <SayHeelloForm/>
                <Counter/>
                <Counter/>
            </Container>
        </StrictMode>
    )