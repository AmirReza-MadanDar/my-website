import React, { Component } from "react";
import img1 from "../../images/3.svg";
import img2 from "../../images/4.svg";
import img3 from "../../images/5.svg";
import img4 from "../../images/6.svg";
import img5 from "../../images/7.svg";
import img6 from "../../images/8.svg";
import {
  PortfolioButoonContainer,
  PortfolioCartContainer,
  PortfolioCartImg,
  PortfolioCartView,
  PortfolioContainer,
  PortfolioMenuLi,
  PortfolioMenuUl,
  PortfolioPageButoon,
  PortfolioSection,
  PortfolioTittelText,
} from "./portfolioElements";

class Portfolio extends Component {
  state = {
    num: 1,
    show: false,
  };
  upadteMenu = (id) => {
    this.setState({
      num: (this.state.num = id),
    });
  };
  handelShowPortfolio = () => {
    this.setState({
      show: !this.state.show,
    });
    console.log(this.state.show);
  };
  handelPortfolioButoon = () => {
    return alert("Coming Soon ... :) ");
  };
  render() {
    return (
      <>
        <PortfolioSection id="portfolio" onClick={this.props.toggel}>
          <PortfolioContainer>
            <PortfolioTittelText>My Portfolio</PortfolioTittelText>
            <PortfolioMenuUl>
              <PortfolioMenuLi onClick={() => this.upadteMenu(1)}>
                All
              </PortfolioMenuLi>
              <PortfolioMenuLi onClick={() => this.upadteMenu(2)}>
                Web Developer
              </PortfolioMenuLi>
              <PortfolioMenuLi onClick={() => this.upadteMenu(3)}>
                Response Web
              </PortfolioMenuLi>
              <PortfolioMenuLi onClick={() => this.upadteMenu(4)}>
                Shoping Site
              </PortfolioMenuLi>
              <PortfolioMenuLi onClick={() => this.upadteMenu(5)}>
                React JS
              </PortfolioMenuLi>
            </PortfolioMenuUl>
            <PortfolioCartContainer>
              <PortfolioCartView
                num={
                  this.state.num === 1 ||
                  this.state.num === 2 ||
                  this.state.num === 3 ||
                  this.state.num === 4 ||
                  this.state.num === 5
                }
              >
                <PortfolioCartImg src={img1} />
              </PortfolioCartView>
              <PortfolioCartView
                num={
                  this.state.num === 1 ||
                  this.state.num === 2 ||
                  this.state.num === 3 ||
                  this.state.num === 4 ||
                  this.state.num === 5
                }
              >
                <PortfolioCartImg src={img2} />
              </PortfolioCartView>
              <PortfolioCartView
                num={
                  this.state.num === 1 ||
                  this.state.num === 2 ||
                  this.state.num === 3 ||
                  this.state.num === 4
                }
              >
                <PortfolioCartImg src={img3} />
              </PortfolioCartView>
              <PortfolioCartView
                num={
                  this.state.num === 1 ||
                  this.state.num === 2 ||
                  this.state.num === 3
                }
              >
                <PortfolioCartImg src={img4} />
              </PortfolioCartView>
              <PortfolioCartView
                num={this.state.num === 1 || this.state.num === 2}
              >
                <PortfolioCartImg src={img5} />
              </PortfolioCartView>
              <PortfolioCartView num={this.state.num === 1}>
                <PortfolioCartImg src={img6} />
              </PortfolioCartView>
              <PortfolioButoonContainer>
                <PortfolioPageButoon onClick={this.handelPortfolioButoon}>
                  Portfolio Page
                </PortfolioPageButoon>
              </PortfolioButoonContainer>
            </PortfolioCartContainer>
          </PortfolioContainer>
        </PortfolioSection>
      </>
    );
  }
}

export default Portfolio;
