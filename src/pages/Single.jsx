import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import PageBanner from '../components/PageBanner.jsx';
import Subscribe from '../components/Subscribe.jsx';
import './Single.css';

const story1 =
  'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.';
const story2 =
  'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.';
const story3 =
  'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.';
const story4 =
  'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.';
const farAway =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.';

// Comments (a comment can have "replies" inside it)
const comments = [
  { name: 'Jacob Smith', photo: '/images/person_2.jpg', text: story4 },
  {
    name: 'Chris Meyer',
    photo: '/images/person_3.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?',
    replies: [
      {
        name: 'Karen Lowe',
        photo: '/images/person_5.jpg',
        text: farAway,
        replies: [
          {
            name: 'Jean Doe',
            photo: '/images/person_1.jpg',
            text: story1,
            replies: [{ name: 'Marcus Bell', photo: '/images/person_4.jpg', text: story2 }],
          },
        ],
      },
    ],
  },
  { name: 'Helen Carter', photo: '/images/person_6.jpg', text: story2 },
];

const categories = [
  { name: 'Tax Planning', count: 12 },
  { name: 'Bookkeeping', count: 22 },
  { name: 'Payroll', count: 37 },
  { name: 'Reporting', count: 42 },
  { name: 'Advisory', count: 14 },
];

// One comment (shows its replies inside it)
function Comment({ comment }) {
  return (
    <li className="comment">
      <div className="comment-photo">
        <img src={comment.photo} alt="" />
      </div>
      <div className="comment-body">
        <h3>{comment.name}</h3>
        <div className="meta">January 9, 2018 at 2:21pm</div>
        <p>{comment.text}</p>
        <p><a href="#" className="reply">Reply</a></p>
      </div>

      {comment.replies && (
        <ul className="children">
          {comment.replies.map((reply) => (
            <Comment key={reply.name} comment={reply} />
          ))}
        </ul>
      )}
    </li>
  );
}

function Single() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [sent, setSent] = useState(false);

  // Search box: open the Blog page with the search word
  function handleSearch(event) {
    event.preventDefault();
    navigate(`/blog?q=${encodeURIComponent(search)}`);
  }

  function handleComment(event) {
    event.preventDefault();
    setSent(true);
    event.target.reset();
  }

  return (
    <>
      <PageBanner
        title="Five Records to Keep Before Tax Season"
        text="June 3, 2020, by Admin"
        image="/images/hero_1.jpg"
        button={false}
      />

      <section className="section">
        <div className="container single">
          {/* ---------- Left: the post ---------- */}
          <article className="blog-content">
            <p className="lead">{farAway}</p>
            <p>{story1}</p>
            <blockquote><p>{story2}</p></blockquote>
            <p>{story3}</p>
            <p>{story4}</p>
            <p>{story1}</p>
            <blockquote><p>{story2}</p></blockquote>
            <p>{story3}</p>
            <p>{story4}</p>

            <div className="space-top">
              <p>
                Categories: <Link to="/blog">Tax Planning</Link>, <Link to="/blog">Bookkeeping</Link>{' '}
                Tags: <Link to="/blog">#tax</Link>, <Link to="/blog">#records</Link>
              </p>
            </div>

            {/* Comments */}
            <div className="space-top">
              <h3 className="big-gap">6 Comments</h3>
              <ul className="comment-list">
                {comments.map((comment) => (
                  <Comment key={comment.name} comment={comment} />
                ))}
              </ul>
            </div>

            {/* Comment form */}
            <div className="space-top comment-form">
              <h3 className="big-gap">Leave a comment</h3>
              <form onSubmit={handleComment}>
                <div className="field">
                  <label htmlFor="c-name">Name *</label>
                  <input className="input" type="text" id="c-name" required />
                </div>
                <div className="field">
                  <label htmlFor="c-email">Email *</label>
                  <input className="input" type="email" id="c-email" required />
                </div>
                <div className="field">
                  <label htmlFor="c-website">Website</label>
                  <input className="input" type="url" id="c-website" />
                </div>
                <div className="field">
                  <label htmlFor="c-message">Message</label>
                  <textarea className="input" id="c-message" rows="10" required></textarea>
                </div>
                <div className="field">
                  <button type="submit" className="btn">Post Comment</button>
                </div>
                {sent && <p className="form-success">Thank you! Your comment is awaiting moderation.</p>}
              </form>
            </div>
          </article>

          {/* ---------- Right: sidebar ---------- */}
          <aside className="sidebar">
            <div className="sidebar-box">
              <form className="search-form" onSubmit={handleSearch} role="search">
                <FiSearch className="search-icon" />
                <label htmlFor="search-q" className="hidden-label">Search the blog</label>
                <input
                  id="search-q"
                  className="input"
                  type="search"
                  placeholder="Type a keyword and hit enter"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </form>
            </div>

            <div className="sidebar-box">
              <h3>Categories</h3>
              <ul className="categories">
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <Link to="/blog">{cat.name} <span>({cat.count})</span></Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-box">
              <img src="/images/person_1.jpg" alt="Rachel Simmons" className="author-photo" />
              <h3 className="black">About Rachel Simmons</h3>
              <p>{story2}</p>
              <p><a href="#" className="btn">Read More</a></p>
            </div>

            <div className="sidebar-box">
              <h3 className="black">Paragraph</h3>
              <p>{story4}</p>
            </div>
          </aside>
        </div>
      </section>

      <Subscribe />
    </>
  );
}

export default Single;
