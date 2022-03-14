import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import DetailedArticle from "./news-detail";
import { IArticle } from "data/interfaces/news.interface";

configure({ adapter: new Adapter() });
const articleMock: IArticle = {
  source: {
    id: "the-next-web",
    name: "The Next Web",
  },
  author: "Satoshi Nakaboto",
  title: "Satoshi Nakaboto: ‘SEC rejects another Bitcoin ETF proposal’",
  description:
    "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Nietzsche used to say: Time is money! Bitc…",
  url: "https://thenextweb.com/hardfork/2019/10/10/satoshi-nakaboto-sec-rejects-another-bitcoin-etf-proposal/",
  urlToImage:
    "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
  publishedAt: "2019-10-10T09:23:23Z",
  content:
    "Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the past 24 hours. As Nietzsche used to say: Time is money!\r… [+2895 chars]",
};

describe("Render News Article Detail", () => {
  it("Verify if News Article Detail is rendered correctly", () => {
    shallow(<DetailedArticle article={articleMock} />);
  });
});
