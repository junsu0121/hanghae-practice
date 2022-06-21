import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataDB } from "./redux/modules/postSlice";

function App() {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.list);
  const subjectRef = useRef();
  const contentRef = useRef();

  // const addData = async () => {
  //   const data = {
  //     subject: subjectRef.current.value,
  //     content: contentRef.current.value
  //   }
  //   try {
  //     const response = await instance.post("/post", data);
  //     setData((current) => [...current, response.data]);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   addData();
  //   subjectRef.current.value = "";
  //   contentRef.current.value = "";
  // }

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
          </div>
        )
      })}
      {/* <form onSubmit={onSubmit}>
        <input type="text" ref={subjectRef}/>
        <input type="text" ref={contentRef}/>
        <button>추가</button>
      </form> */}
    </div>
  );
}

export default App;
