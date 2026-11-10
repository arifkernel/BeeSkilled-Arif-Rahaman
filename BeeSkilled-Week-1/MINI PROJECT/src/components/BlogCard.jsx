
function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <div className="card-image">
        <img
          src={post.image}
          alt={`${post.player} football photograph`}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        <div className="image-overlay"></div>

        <div className="league-logo">
          {post.logo ? (
            <img
              src={post.logo}
              alt={`${post.category} logo`}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <span>{post.logoText}</span>
          )}
        </div>

        <span className="image-category">
          {post.category}
        </span>

        <span className="player-name">
          {post.player}
        </span>
      </div>

      <div className="card-body">
        <div className="card-top">
          <span className="category">
            {post.category}
          </span>

          <span className="read-time">
            {post.readTime}
          </span>
        </div>

        <div className="card-content">
          <span className="article-tag">
            {post.tag}
          </span>

          <h2>{post.title}</h2>

          <p className="description">
            {post.description}
          </p>
        </div>

        <div className="card-bottom">
          <div>
            <p className="author">
              {post.author}
            </p>

            <p className="date">
              {post.date}
            </p>
          </div>

          
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
