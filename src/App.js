import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDataDB, getDataDB, modifyDataDB, removeDataDB } from "./redux/modules/postSlice";

function App() {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.list);
  const subjectRef = useRef();
  const contentRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      subject: subjectRef.current.value,
      content: contentRef.current.value
    }

    dispatch(addDataDB(data));
    subjectRef.current.value = "";
    contentRef.current.value = "";
  }

  const removePost = (id) => {
    dispatch(removeDataDB(id));
  }

  const modifyPost = (id) => {
    const data = {
      subject: subjectRef.current.value,
      content: contentRef.current.value
    }

    dispatch(modifyDataDB(id, data));
  }

  useEffect(() => {
    dispatch(getDataDB());
  }, []);

  return (
    <div>
      {postList.map((v, index) => {
        return (
          <div key={index}>
            <div>{v.subject}</div>
            <div>{v.content}</div>
            <button onClick={() => {modifyPost(v.id)}}>수정</button>
            <button onClick={() => {removePost(v.id)}}>삭제</button>
          </div>
        )
      })}
      <form onSubmit={onSubmit}>
        <input type="text" ref={subjectRef}/>
        <input type="text" ref={contentRef}/>
        <button>추가</button>
      </form>
    </div>
  );
}

export default App;
