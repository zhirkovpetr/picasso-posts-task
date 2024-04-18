import React from "react";
import {useNavigate} from "react-router-dom";

import {IPost} from "../../shared/api/posts-api.ts";
import {Button} from "../../shared";

import './styles.css';

interface IPostItemProps {
  post: IPost
}

export const PostItem: React.FC<IPostItemProps> = ({post}) => {
  const navigate = useNavigate();

  const abbreviateText = (text: string) => {
    if (text.length <= 90) return text;
    return text.slice(0, 90) + "...";
  };

  const onClickHandler = () => {
    navigate(`/posts/${post.id}`)
  }

  return (
    <div className={'post-item-container'}>
      <h3>№{post.id} - {post.title[0].toUpperCase() + post.title.slice(1)}</h3>
      <p>{abbreviateText(post.body[0].toUpperCase() + post.body.slice(1))}</p>
      <Button text={'more'} onClick={onClickHandler}/>
    </div>
  );
};
