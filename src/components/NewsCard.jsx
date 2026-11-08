import { Link } from 'react-router-dom';
import './NewsCard.css';

// One blog post card (used on Home and Blog pages)
function NewsCard({ post }) {
  return (
    <div className="news-item">
      <Link to="/single" className="news-image">
        <img src={post.image} alt="" />
        <div className="date">
          <span>{post.day}</span>
          <span>{post.month}</span>
        </div>
      </Link>
      <h3><Link to="/single">{post.title}</Link></h3>
      <div className="news-meta">
        by <Link to="/about">{post.author}</Link> in {post.category}
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio minus maiores, neque
        repellendus molestias! Odio voluptas, et fuga. Quae, animi.
      </p>
    </div>
  );
}

export default NewsCard;
