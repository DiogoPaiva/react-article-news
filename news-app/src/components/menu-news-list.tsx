import React from "react";
import { IArticle } from "../data/interfaces/news.interface";
import { formatDate } from "../data/helpers/formatDate";

interface IMenuListItemProps {
  list: IArticle[];
  onClickItemHandler?(item: IArticle, index: number): void;
}

const MenuListItem: React.FunctionComponent<IMenuListItemProps> = (props) => {
  const { list, onClickItemHandler } = props;

  const renderList = () => {
    return (
      list &&
      list.map((item: IArticle, index: number) => {
        const key = `item-${index}`;
        return (
          <li
            className="menu-list-item"
            key={key}
            onClick={(e) => {
              e.preventDefault();
              onClickItemHandler && onClickItemHandler(item, index);
            }}
          >
            {item.urlToImage && (
              <div className="thumbnail-wrapper">
                <img
                  src={item.urlToImage}
                  className="thumbnail-img"
                  alt="news thumbnail"
                  onError={(e) => {
                    e.currentTarget.src = require("../assets/img/logo512.png");
                  }}
                />
              </div>
            )}
            <div className="content-news">
              <h3 className="title-font">{item.title}</h3>
              <div className="date">
                <span className="icon fa-regular fa-clock"></span>
                <span>{formatDate(item.publishedAt)}</span>
              </div>
              <div
                className={`viewed-article ${
                  item.selected ? "selected" : "not-selected"
                } `}
              >
                {item.selected ? (
                  <>
                    <span
                      title="Viewed Article"
                      className="icon fa-solid fa-eye"
                    />
                    <span className="label">Viewed</span>
                  </>
                ) : (
                  <>
                    <span
                      title="Not Viewed Article"
                      className="icon fa-solid fa-eye-slash"
                    />
                    <span className="label">Not Viewed</span>
                  </>
                )}
              </div>
              <div className="read-more">
                <span className="label">Read more</span>
                <span className="icon fa-solid fa-angle-right" />
              </div>
            </div>
          </li>
        );
      })
    );
  };

  return <ul className="menu-list">{renderList()}</ul>;
};

export default MenuListItem;
