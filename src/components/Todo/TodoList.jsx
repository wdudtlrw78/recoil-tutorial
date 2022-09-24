import React, {Fragment} from 'react';
import {useRecoilValue} from "recoil";
import {filteredTodoListState, todoListState} from "./TodoStroe";
import TodoItem from "./TodoItem";
import TodoListCreator from "./TodoListCreator";
import {TodoListFilters} from "./TodoListFilters";
import {TodoListStats} from "./TodoListStats";

function TodoList({}) {
    // const todoList = useRecoilValue(todoListState);
    const todoList = useRecoilValue(filteredTodoListState);

    return (
        <Fragment>
            <TodoListStats/>
            <TodoListFilters/>
            <TodoListCreator/>
            {todoList.map(item => (
                <TodoItem key={item.id} item={item}/>
            ))}
        </Fragment>
    );
}

export default TodoList;