import React, {useState,useEffect} from 'react';
import NewsItem from './NewsItem';
const NewsBoard = ({category}) => {

    const [articles,setArticles] = useState([]);

    useEffect(()=>{
      let url = `https://newsapi.org/v2/everything?q=india&apiKey=ecfaf9eaaa8d40a5b5d769210f5ee616`;
      fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));

  },[])

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=ecfaf9eaaa8d40a5b5d769210f5ee616`;
        fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));

    },[category])

  return (
    <div>
        <h2 className='text-center'>LATEST<span className='badge bg-danger'>NEWS</span></h2>
        {articles.map((news,index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        })}
    </div>
  )
}

export default NewsBoard;
