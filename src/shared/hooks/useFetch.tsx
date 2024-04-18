import {useEffect, useRef, useState} from "react";

import {useGetPostsQuery} from "../api";

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

export const useFetch = () => {
  const [page, setPage] = useState(0);
  const {data, isFetching, isError} = useGetPostsQuery(page);
  const loaderRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = loaderRef.current;
    if (element) {
      const onScroll = ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting && !isFetching) {
          if (page >= 100) return;
          setPage(prev => (prev + 10));
        }
      };
      const observer = new IntersectionObserver(onScroll, options);
      observer.observe(element);
      return () => {
        observer.unobserve(element);
      };
    }
  }, [page, isFetching]);

  return {data, isFetching, isError, loaderRef}
}
