import React, { useEffect, useState } from "react";
import FetchNews from "./data/services/news.service";
import { IArticle } from "./data/interfaces/news.interface";
import { MenuListItem, DetailedArticle, Spinner } from "./components";

function App() {
  // Select Right Panel Div
  const rightPanelRef = document.getElementById("right-panel");

  // Get Data from the Service
  const [data, isLoading, hasError] = FetchNews();

  // State to Set Articles Items List
  const [items, setItems] = useState<IArticle[]>(data);
  useEffect(() => {
    setItems(data);
  }, [data]);

  // State to Set Article Detail
  const [articleDetail, setArticleDetail] = useState<IArticle>();

  // Handler to pass the item to the DetailedArticle component
  const onClickNews = (item: IArticle, index: number) => {
    // Set Article Selected index
    addSelectedToList(index);
    // Set Article to Detail View
    setArticleDetail(item);
    // @TODO - Improve this - Scroll Div to Top
    rightPanelRef?.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to add "Selected" property to each array item clicked
  const addSelectedToList = (index: number) => {
    setItems((arrayArranged) => {
      const updatedArray = [...arrayArranged];
      updatedArray[index] = {
        ...updatedArray[index],
        selected: true,
      };
      return updatedArray;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title-font">News Articles</h1>
      </header>
      <div className="content-body">
        <div className="inner-content">
          {isLoading && <Spinner />}
          {!isLoading && !hasError.error && (
            <>
              <div className="left-panel thin-scroolbar">
                <MenuListItem list={items} onClickItemHandler={onClickNews} />
              </div>
              <div id="right-panel" className="right-panel thin-scroolbar">
                <DetailedArticle article={articleDetail} />
              </div>
            </>
          )}
          {!isLoading && hasError.error && (
            <div className="error-container">
              <div className="error-inner">
                <span className="icon-error fa-solid fa-circle-exclamation"></span>
                <span className="error-message">{hasError.message}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <footer className="fixed-footer">
        <span className="inner-text">
          Made By Diogo Paiva - info@diogopaiva.com
        </span>
      </footer>
    </div>
  );
}

export default App;
