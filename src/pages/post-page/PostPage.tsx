import React from "react";
import {useNavigate, useParams} from "react-router-dom";

import {Button, useFetchPostByIdQuery} from "../../shared";
import { Loader } from "../../loader";

import './styles.css';

export const PostPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: post, isSuccess, isLoading } = useFetchPostByIdQuery(id);

  const buttonHandler = () => navigate(-1);

  if (isLoading) return <Loader />;
  if (!isSuccess) return <h1>Страница не существует</h1>;

  return (
    <div className={'post-page-container'}>
      <h1>№{post.id} - {post.title[0].toUpperCase() + post.title.slice(1)}</h1>
      <p>{post.body[0].toUpperCase() + post.body.slice(1)}</p>
      <Button text={'back'} onClick={buttonHandler} />
    </div>
  );
}
