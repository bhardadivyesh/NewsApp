import { useEffect,useState } from "react";
import NewsItems from "../NewsItems/NewsItems";
import Loading from "../Loading/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const [articles,setArticles] = useState([])
  const [page,setPage] = useState(1)
  const [loading,setLoading] = useState(true)

 const updateNews= async () =>{
    // eslint-disable-next-line react/prop-types
    let { category } = props;
    document.title = `${category} - News`;
    setLoading(true)
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=de51be97d627488194f92290aa61c1b5&page=${page}&pageSize=12`;
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(parseData.articles)
    setLoading(false)
  }
  useEffect(()=>{
    updateNews()
  },[])
 const fetchMoreData = async() =>{
    // eslint-disable-next-line react/prop-types
    let { category } = props;
    document.title = `${category} - News`;
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=de51be97d627488194f92290aa61c1b5&page=${page+1}&pageSize=12`;
    setPage(page + 1)
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(parseData.articles.concat(parseData.articles))
  }
    return (
      <>
      {!loading &&  <h1 className="grid justify-items-center mt-20 text-4xl font-extrabold dark:text-white">Top Headlines</h1>}
        {loading && <Loading />}
        <InfiniteScroll
          dataLength={articles?.length}
          next={fetchMoreData}
          hasMore={true}
        >
          <div className="grid grid-cols-4 gap-4">
            {articles.map((elements) => {
              return (
                <>
                  <NewsItems
                    title={elements.title ? elements.title.slice(0, 45) : ""}
                    description={
                      elements.description ? elements.description : ""
                    }
                    imageUrl={elements.urlToImage ? elements.urlToImage : ""}
                    url={elements.url}
                    author={elements.author}
                    publishedAt={elements.publishedAt}
                  />
                </>
              );
            })}
          </div>
        </InfiniteScroll>
       
      </>
    );
  }

export default News;
