import React from "react";
import { useState } from "react";
import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/reducer";
import nextId from "react-id-generator";

const Form = () => {
  const id = nextId();

  const dispatch = useDispatch();

  // const reducer = useSelector((state) => {
  //     console.log(state)
  //     return state
  // })

  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });

  //input태그 안에서 작동
  const onChangeHandler = (event) => {
    // const aaa = event.target.value
    // const bbb = event.target.value
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value }); //[name] 은 아래 input박스의 name을 칭함(input박스가 2개여서 []로 묶음-구조분해할당)
    // console.log(todo)
  };

  //form태그 안에서 작동
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title === "" || todo.body === "") return null; //공백입력을 방지.

    dispatch(addTodo({ ...todo, id })); ////  id????????
    setTodo({
      id: 0,
      title: "",
      body: "",
      isDone: false,
    });
    console.log("hi"); ///작동이 되는지 확인해볼것 ,중요!!
  };

  //
  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        제목
        <input
          type="text"
          name="title" //value값
          value={todo.title}
          onChange={onChangeHandler}
        />
      </div>

      <div>
        내용
        <input
          type="text"
          name="body"
          value={todo.body}
          onChange={onChangeHandler}
        />
      </div>

      <button>추가하기</button>
    </form>
  );
};

export default Form;
