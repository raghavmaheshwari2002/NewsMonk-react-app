import React, { useEffect } from "react";

import all from "../JSON/all.json";
import bussiness from "../JSON/bussiness.json";
import health from "../JSON/health.json";
import entertainment from "../JSON/entertainment.json";
import science from "../JSON/science.json";
import technology from "../JSON/technology.json";
import sports from "../JSON/sports.json";

import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

const News = (props) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonk`;
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {props.category === "all" ? (
        <h1 className="text-center m-3 mb-3 text-4xl font-bold">
          NewsMonk - Top Headlines
        </h1>
      ) : (
        <h1 className="text-center m-3 mb-3 text-4xl font-bold">
          NewsMonk - Top {capitalizeFirstLetter(props.category)} Headlines
        </h1>
      )}

      {props.category === "all" && (
        <div className="container max-w-screen-lg">
          <div className="row">
            {all.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage ? element.urlToImage : ""}
                    newsUrl={element.url}
                    author={element.author ? element.author : ""}
                    date={element.publishedAt ? element.publishedAt : ""}
                    source={element.source.name ? element.source.name : ""}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {props.category === "health" && (
        <div className="container max-w-screen-lg">
          <div className="row">
            {health.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage ? element.urlToImage : ""}
                    newsUrl={element.url}
                    author={element.author ? element.author : ""}
                    date={element.publishedAt ? element.publishedAt : ""}
                    source={element.source.name ? element.source.name : ""}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {props.category === "technology" && (
        <div className="container max-w-screen-lg">
          <div className="row">
            {technology.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage ? element.urlToImage : ""}
                    newsUrl={element.url}
                    author={element.author ? element.author : ""}
                    date={element.publishedAt ? element.publishedAt : ""}
                    source={element.source.name ? element.source.name : ""}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {props.category === "sports" && (
        <div className="container max-w-screen-lg">
          <div className="row">
            {sports.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage ? element.urlToImage : ""}
                    newsUrl={element.url}
                    author={element.author ? element.author : ""}
                    date={element.publishedAt ? element.publishedAt : ""}
                    source={element.source.name ? element.source.name : ""}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {props.category === "bussiness" && (
        <div className="container max-w-screen-lg">
          <div className="row">
            {bussiness.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage ? element.urlToImage : ""}
                    newsUrl={element.url}
                    author={element.author ? element.author : ""}
                    date={element.publishedAt ? element.publishedAt : ""}
                    source={element.source.name ? element.source.name : ""}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {props.category === "science" && (
        <div className="container max-w-screen-lg">
          <div className="row">
            {science.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage ? element.urlToImage : ""}
                    newsUrl={element.url}
                    author={element.author ? element.author : ""}
                    date={element.publishedAt ? element.publishedAt : ""}
                    source={element.source.name ? element.source.name : ""}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {props.category === "entertainment" && (
        <div className="container max-w-screen-lg">
          <div className="row">
            {entertainment.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage ? element.urlToImage : ""}
                    newsUrl={element.url}
                    author={element.author ? element.author : ""}
                    date={element.publishedAt ? element.publishedAt : ""}
                    source={element.source.name ? element.source.name : ""}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

News.defaultProps = {
  country: "in",
  category: "all",
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
