import { Component } from 'react'
import NewsItems from '../NewsItems/NewsItems'
export class News extends Component {
  constructor(){
    super();
    this.state = {
      articles : [],
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e317e4c34ccf4c5c9b287922236d33d8";
    let data =  await fetch(url)
    let parseData = await data.json()
    this.setState({articles : parseData.articles })
  } 
  render() {
    return (
    <>
      {this.state.articles.map((elements)=>{
        return(
          <>
          <NewsItems title={elements.title} description={elements.description}  imageUrl={elements.urlToImage}/>
          </>
        )
      })}
    </>
    )
  }
}

export default News