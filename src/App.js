import React, { Component } from 'react';
import { withData } from './DataProvider';
import "./App.css"

class App extends Component {
  componentWillMount(){
    this.props.getNews()
  }
  render() {

    const mappedNews = this.props.news.articles && this.props.news.articles.map(article => {
      let emptyArray = []
      let cut = article.content === null ? null : article.content.split(" ")
      emptyArray.push(cut)
      let lol = cut === null ? null : cut.splice(-2)
      let rejoin = cut === null ? null : cut.join(" ")
      if(article.urlToImage === null || article.content === null){
        return null
      }else{
        return(
          <div key={article.url} style={{height: "auto", padding: 5, border: "solid black", backgroundColor: "#cbcbcb"}}>
            <a style={{textDecoration:'none'}} href={article.url}><h2 style={{margin: 0}}>{article.title}</h2></a>
            <div style={{margin: 5}}>
              <p style={{}}>Updated: {article.publishedAt}</p>
            </div>
            <a href={article.urlToImage}><img style={{ width: "90%", display: "block", margin: 'auto', }} src={article.urlToImage} alt=""/></a>
            <p>{rejoin}<a target="_blank" rel="noopener noreferrer" href={article.url} style={{ color: "green" }}> Read More</a></p>
          </div>
        )
      }
    })
    return (
      <div>
        <h1 style={{fontSize: 65, textAlign: 'center', margin: 0, color: 'red'}}>Headlines</h1>
        <div style={{display:"grid", gridTemplateColumns: "repeat(auto-fill,minmax(310px, 1fr))", padding: 5, gridGap: 5}}>
          {mappedNews}
        </div>
      </div>
    );
  }
}

export default withData(App);