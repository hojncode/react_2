<form>
    {todos.map((t) => {
        if (!t.isDone) {
            return (
                <div1 key={t.id}>
                    <div2 to={`/${t.id}`} key={t.id}>
                        <div>상세보기</div>
                    </div2>
                    <div>
                        <h2 className="todo-title">{t.title}</h2>
                        <div>{t.body}</div>
                    </div>
                    <div3>
                        <StButton
                            borderColor="red"
                            onClick={() => onDeleteTodo(t.id)}
                        >
                            삭제하기
                        </StButton>
                        <StButton
                            borderColor="green"
                            onClick={() => onToggleStatusTodo(t.id)}
                        >
                            {t.isDone ? "취소!" : "완료!"}
                        </StButton>
                    </div3>
                </div1>
            );
        } else {
            return null;
        }
    })}
</form>