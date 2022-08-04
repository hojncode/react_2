import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"; //redux 붙이자..........
import { deleteTodo, workingToDone } from "../redux/modules/reducer";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = () => {
  const dispatch = useDispatch();

  const todoInfo = useSelector((state) => state.reducer.todos); //state는 reducer안에서의 todos값을 가져온다.

  const onDeleteWorking = (xxx) => {
    dispatch(deleteTodo(xxx));
  };

  const onMoveDone = (mmm) => {
    dispatch(workingToDone(mmm));
  };

  return (
    <Outline>
      <h2>Working.. 🔥</h2>
      <Listline>
        {todoInfo.map((td) => {
          if (!td.isDone) {
            console.log(td.isDone);
            return (
              <WorkingContainer key={td.id}>
                <Div1>
                  <Link to={`/${td.id}`} key={td.id}>
                    더보기
                  </Link>
                </Div1>
                <Div2>{td.title}</Div2>
                <Div3>{td.body}</Div3>
                <BtnOutline>
                  <Btn onClick={() => onDeleteWorking(td.id)}>삭제</Btn>
                  <div>
                    <Btn onClick={() => onMoveDone(td.id)}>
                      {!td.isDone ? "Done" : ""}
                    </Btn>
                  </div>
                </BtnOutline>
              </WorkingContainer>
            );
          } else {
            return null;
          }
        })}
      </Listline>

      <h2>Done...</h2>
      <Listline>
        {todoInfo.map((tdd) => {
          if (tdd.isDone) {
            return (
              <WorkingContainer key={tdd.id}>
                <Div1>
                  <Link to={`/${tdd.id}`} key={tdd.id}>
                    자세한 내용 확인하기
                  </Link>
                </Div1>
                <Div2>{tdd.title}</Div2>
                <Div3>{tdd.body}</Div3>
                <BtnOutline>
                  <Btn onClick={() => onMoveDone(tdd.id)}>
                    {tdd.isDone ? "다시하기" : ""}
                  </Btn>
                  <Btn onClick={() => onDeleteWorking(tdd.id)}>완료</Btn>
                </BtnOutline>
              </WorkingContainer>
            );
          } else {
            return null;
          }
        })}
      </Listline>
    </Outline>
  );
};

const Outline = styled.div`
  width: 1200px;
  height: 800px;
  border: solid 10px;
  border-radius: 15px;
  border-color: bisque;
  background-color: beige;
`;

const Listline = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const WorkingContainer = styled.div`
  width: 250px;
  height: 200px;
  background-color: tan;
  border: 5px;
  border-radius: 10px;
  border-color: beige;
  padding: 20px;
  margin: auto 10px;
  display: block;
  flex-wrap: wrap;
  gap: 12px;
`;

const Div1 = styled.div`
  margin-bottom: 10px;
`;

const Div2 = styled(Div1)`
  color: beige;
  font-size: 30px;
`;

const Div3 = styled(Div2)`
  color: black;
  font-size: 20px;
`;
const BtnOutline = styled.div`
  display: inline-flex;
  justify-content: center;
`;

const Btn = styled.button`
  height: 60px;
  width: 60px;
  background-color: tomato;
  border-radius: 30px;
  border-color: tomato;
  cursor: pointer;
  margin-right: 5px;
  margin-top: 15px;
`;

export default List;
