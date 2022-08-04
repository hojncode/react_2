import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getToId } from "../redux/modules/reducer.js";
import styled from "styled-components";

const Detail = () => {
  const dispatch = useDispatch();

  const toodoo = useSelector((state) => state.reducer.todosDetail);
  const { id } = useParams();
  console.log({ id });

  dispatch(getToId(id));
  const navi = useNavigate();

  return (
    <DeContainer>
      {/* <h1>
        스토어에서 특정 아이디값의 todo스테이트를 가져와서 보여줘야하는데.....
      </h1> */}
      <OutCome>
        <Headline>
          <div>ID:{toodoo.id}</div>
          <StButton
            onClick={() => {
              navi("/");
            }}
          >
            이전페이지로
          </StButton>
        </Headline>
        <TitleLine>{toodoo.title}</TitleLine>
        <TitleBody>{toodoo.body}</TitleBody>
      </OutCome>
    </DeContainer>
  );
};

const DeContainer = styled.div`
  border: 2px solid black;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OutCome = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Headline = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const TitleLine = styled.h1`
  padding: 0 24px;
`;

const TitleBody = styled.main`
  padding: 0 24px;
`;

const StButton = styled.button`
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;

export default Detail;
