import React from "react";
import { shallow, configure, mount } from "enzyme";
import MenuListItem from "./menu-news-list";
import { IArticle } from "data/interfaces/news.interface";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
const menuItemsMock: IArticle[] = [
  {
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
  },
  {
    source: {
      id: "the-next-web",
      name: "The Next Web",
    },
    author: "Satoshi Nakaboto",
    title:
      "Satoshi Nakaboto: ‘Bitcoin mining consumes as much energy as the entire country of Austria’",
    description:
      "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As de Beauvoir used to say: Buy low, sell hig…",
    url: "https://thenextweb.com/hardfork/2019/10/14/satoshi-nakaboto-bitcoin-mining-consumes-as-much-energy-as-the-entire-country-of-austria/",
    urlToImage:
      "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
    publishedAt: "2019-10-14T08:35:10Z",
    content:
      "Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the past 24 hours. As de Beauvoir used to say: Buy low, sell… [+2883 chars]",
  },
];
describe("Render Menu List", () => {
  it("Verify if Menu Itens are rendered correctly", () => {
    shallow(<MenuListItem list={menuItemsMock} />);
  });
});

describe("Click On Menu Item", () => {
  it("Simulate", () => {
    const wrapper = shallow(<MenuListItem list={menuItemsMock} />);
    const mEvent = { preventDefault: jest.fn() };
    // Select all list items
    const list = wrapper.find("li");
    // Expect that renders two items
    expect(list).toHaveLength(2);
    // Select the first and simulate click
    list.at(0).simulate("click", mEvent);
    expect(mEvent.preventDefault).toBeCalledTimes(1);
  });
});
