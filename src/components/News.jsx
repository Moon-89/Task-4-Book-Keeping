import NewsCard from './NewsCard.jsx';
import posts from '../data/posts.js';
import './News.css';

// "Latest News & Updates" on the Home page (first 3 posts)
function News() {
  return (
    <section className="section" id="news">
      <div className="container">
        <div className="news-heading">
          <span className="caption">News</span>
          <h2 className="title-with-line">Latest News &amp; Updates</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia</p>
        </div>

        <div className="news-grid">
          {posts.slice(0, 3).map((post) => (
            <NewsCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;
