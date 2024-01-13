import React, { useEffect, useState } from "react";

type Blog = {
  title: string;
  desc: string;
};

const Blog = () => {
  //   const [post, setPost] = useState();
  //   useEffect(() => {
  //     fetch("https://dummyjson.com/posts/1")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setPost(data);
  //       });
  //   }, []);

  const [post, setPost] = useState<Blog | null>(null); // null로 초기화
  const [loading, setLoading] = useState<boolean>(true);
  // 로딩 추가
  useEffect(() => {
    fetch("https://dummyjson.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* 옵셔널 체이닝 사용 */}
      <h1>{post?.title}</h1>
      <p>{post?.desc}</p>

      {/* or 로딩 추가 */}
      {loading ? (
        "loading..."
      ) : (
        <>
          <h1>{post?.title}</h1>
          <p>{post?.desc}</p>
        </>
      )}
    </div>
  );
};

export default Blog;
