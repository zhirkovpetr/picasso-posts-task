import React from "react";

import {useFetch} from "../../shared";
import {Loader} from "../../loader";
import {PostItem} from "../../entities";

import './styles.css';

export const PostsContainer: React.FC = () => {
  const {
    data,
    isFetching,
    isError,
    loaderRef
  } = useFetch();

  if (!data?.posts && isFetching) return <Loader />
  if (!data?.posts || !data.posts.length) return <p className="message">Посты не найдены!</p>;
  if (isError) return <p className="message">Ошибка!</p>;

  return (
    <div className={'posts-container'}>
      {data?.posts.map((post) => <PostItem key={post.id} post={post} />)}
      <p ref={loaderRef}>{isFetching ? 'зажружаем еще посты...' : ''}</p>
    </div>
  );
};
