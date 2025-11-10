import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import Container from "./Container";
import TodoList from "../todoList/TodoList";
import Table from "../Table/Table";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
                <HelloWorld/>
                <TodoList/>
                <Table/>
            </Container>
        </StrictMode>
    )