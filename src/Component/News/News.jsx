import { Component } from "react";
import NewsItems from "../NewsItems/NewsItems";
import Loading from "../Loading/Loading";
export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalNews: 1,
      newsPerPage: 12,
      loading: false,
    };
  }
  async updateNews() {
    // eslint-disable-next-line react/prop-types
    let { category } = this.props;
    document.title = `${category} - News`
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=984b6e945105498a818b3183ec413972&page=${this.state.page}&pageSize=12`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalNews: parseData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.updateNews();
  }
  handlePrevBtn = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  handleNextBtn = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  
  render() {
    // console.log(this.props);
    return (
      <>
        {this.state.loading && <Loading />}

        <div className="grid grid-cols-4 gap-4">
          {this.state.articles.map((elements) => {
            return (
              <>
                <NewsItems
                  title={elements.title ? elements.title.slice(0, 45) : ""}
                  description={elements.description ? elements.description : ""}
                  imageUrl={elements.urlToImage ? elements.urlToImage : ""}
                  url={elements.url}
                  author={elements.author}
                  publishedAt={elements.publishedAt}
                />
              </>
            );
          })}
        </div>
        <div className="grid justify-items-start">
          <button
            type="button"
            disabled={this.state.page == 1}
            onClick={this.handlePrevBtn}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Previous
          </button>
        </div>
        <div className="grid justify-items-end">
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalNews / this.state.newsPerPage)
            }
            onClick={this.handleNextBtn}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Next
          </button>
        </div>
      </>
    );
  }
}
export default News;
