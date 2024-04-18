import React from "react";
import {Route, Routes} from 'react-router-dom';

import {ROUTERS} from "../../shared";
import { Layout } from "../../layout";
import {PostPage, PostsContainer } from "../../pages";


export const App: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTERS.MAIN} element={<Layout/>}>
        <Route index element={<PostsContainer/>}/>
        <Route path={ROUTERS.POST} element={<PostPage/>}/>
      </Route>
    </Routes>
  )
}
