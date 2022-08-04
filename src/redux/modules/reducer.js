//모듈페이지

//Action value
const ADD = "ADD";
const DELETE = "DELETE";
const MOVE = "MOVE";
const GET_ID = "GET_ID";

//Action Creator
export const addTodo = (pl) => {
  return {
    type: ADD,
    pl: pl,
  };
};

export const deleteTodo = (pl) => {
  return {
    type: DELETE,
    pl: pl,
  };
};

export const workingToDone = (pl) => {
  return {
    type: MOVE,
    pl: pl,
  };
};

export const getToId = (pl) => {
  return {
    type: GET_ID,
    pl: pl,
  };
};

//초기값   ////   todo를 추가한이유??????
const initialState = {
  todos: [
    {
      id: "1",
      title: "제목",
      body: "내용",
      isDone: false,
    },
  ],
  todosDetail: {
    id: "0",
    title: "",
    body: "",
    isDone: false,
  },
};

//리듀서
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state, //객체불변성때문에 펼친다. =todo: {}
        todos: [...state.todos, action.pl], ///모듈초기값의 todos에 action.pl을 넣어준다
      };
    case DELETE:
      return {
        ...state,
        todos: state.todos.filter((d) => d.id !== action.pl),
      };
    case MOVE:
      return {
        ...state,
        todos: state.todos.map((m) => {
          if (m.id === action.pl) {
            return {
              ...m,
              isDone: !m.isDone,
            };
          } else {
            return m;
          }
        }),
      };
    case GET_ID:
      return {
        ...state,
        todosDetail: state.todos.find((g) => {
          return g.id === action.pl;
        }),
      };

    default:
      return state;
  }
};

export default reducer;
