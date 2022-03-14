import React from "react";
import { IArticle } from "../data/interfaces/news.interface";
import { formatDate } from "../data/helpers/formatDate";

interface IDetailedArticleProps {
  article?: IArticle;
}

const DetailedArticle: React.FunctionComponent<IDetailedArticleProps> = (
  props: IDetailedArticleProps
) => {
  const { article } = props;

  return (
    <>
      {article && (
        <div className="article-container panel-fadeIn">
          <div className="article-title">{article.title}</div>
          <div className="article-description">{article.description}</div>
          <div className="article-author">
            <span className="icon fa-solid fa-quote-right"></span>
            {article.author && <span>by {article.author} </span>}
            {article.source?.name && <span> in {article.source?.name}</span>}
          </div>
          <div className="article-date">
            <span className="icon fa-regular fa-clock"></span>
            <span>{formatDate(article.publishedAt)}</span>
          </div>

          {article.urlToImage && (
            <div className="article-image-wrapper">
              <img
                src={article.urlToImage}
                className="article-image"
                alt="news thumbnail"
              />
            </div>
          )}
          <div className="article-content">{article.content}</div>
          <div className="article-url">
            <a href={article.url} target="blank">
              <span className="label">
                Read the Full article in {article.source?.name}
              </span>
              <span className="icon fa-solid fa-up-right-from-square"></span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailedArticle;
