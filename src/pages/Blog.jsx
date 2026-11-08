import { useSearchParams } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import NewsCard from '../components/NewsCard.jsx';
import posts from '../data/posts.js';
import './Blog.css';

function Blog() {
  // Search word from the URL, e.g. /blog?q=tax (sent by the search box on the post page)
  const [searchParams] = useSearchParams();
  const search = (searchParams.get('q') || '').toLowerCase();

  // Keep only the posts that contain the search word
  const shownPosts = posts.filter((post) =>
    `${post.title} ${post.author} ${post.category}`.toLowerCase().includes(search)
  );

  return (
    <>
      <PageBanner title="Blog" image="/images/hero_1.jpg" />

      <section className="section blog">
        <div className="container">
          {search && (
            <p className="search-note">
              {shownPosts.length
                ? `${shownPosts.length} post${shownPosts.length === 1 ? '' : 's'} matching "${search}".`
                : `No posts match "${search}".`}
            </p>
          )}

          <div className="blog-grid">
            {shownPosts.map((post) => (
              <NewsCard key={post.title} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Page numbers */}
      <div className="pagination-wrap">
        <div className="container">
          <div className="pagination">
            <a href="#">1</a> <a href="#">2</a> <a href="#">3</a> <a href="#">4</a> <a href="#">5</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
