import React, { Component } from "react"
import axios from 'axios'
const { Provider, Consumer } = React.createContext()

class DataProvider extends Component {
  constructor() {
    super()
    this.state = {
      news: [],
    }
  }
  getNews = () => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_KEY}`).then(res => {
      this.setState({
        news: res.data
      })
    })
  }
  render() {
    return (
      <Provider value={{
        getNews: this.getNews,
        ...this.state
      }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export default DataProvider

export function withData(C) {
  return props => <Consumer>{value => <C {...value}{...props} />}</Consumer>
}