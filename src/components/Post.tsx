import { useEffect, useState } from "react";

const Post = () => {
  const [id, setId] = useState(1);

  return (
    <div>
      <button onClick={() => setId(id + 1)}>Next Post</button>
      <PostBody id={id} />
    </div>
  );
};

const PostBody = ({ id }: { id: number }) => {
  const [text, setText] = useState("");

  // 문제점 : 여러번 클릭 시 계속해서 요청을 보내게 됨
  //   useEffect(() => {
  //     fetch(`https://dummyjson.com/posts/${id}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setText(data.body);
  //       });
  //   }, [id]);

  // 해결 : fetching을 하기 전에 이전에 요청한 것을 취소/경쟁 상태 발생 가능
  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://dummyjson.com/posts/${id}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setText(data.body);
      });

    return () => {
      controller.abort();
    };
  }, [id]);

  return <p>{text}</p>;
};
