
import { useState } from "react";

import Header from "./components/Header";
import BlogCard from "./components/BlogCard";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";

import posts from "./data/posts.json";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const [filters, setFilters] = useState({
    league: "All",
    competition: "All",
    topic: "All",
    player: "All"
  });

  const filteredPosts = posts.filter((post) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      post.title.toLowerCase().includes(searchText) ||
      post.description.toLowerCase().includes(searchText) ||
      post.author.toLowerCase().includes(searchText) ||
      post.category.toLowerCase().includes(searchText) ||
      post.player.toLowerCase().includes(searchText);

    const matchesLeague =
      filters.league === "All" ||
      post.league === filters.league;

    const matchesCompetition =
      filters.competition === "All" ||
      post.competition === filters.competition;

    const matchesTopic =
      filters.topic === "All" ||
      post.topic === filters.topic;

    const matchesPlayer =
      filters.player === "All" ||
      post.player === filters.player;

    return (
      matchesSearch &&
      matchesLeague &&
      matchesCompetition &&
      matchesTopic &&
      matchesPlayer
    );
  });

  const resetAll = () => {
    setSearch("");

    setFilters({
      league: "All",
      competition: "All",
      topic: "All",
      player: "All"
    });
  };

  return (
    <div className="app" id="home">

      <Header />

      <main className="container">

        {/* HERO SECTION */}

        <section className="hero">

          <div className="hero-content">

            <p className="eyebrow">
              THE WORLD OF FOOTBALL
            </p>

            <h1>
              THE GAME.
              <br />
              <span>THE PASSION.</span>
            </h1>

            <p className="hero-description">
              Your destination for football stories,
              tactical analysis, league coverage and
              everything happening in the beautiful game.
            </p>

            <a href="#articles" className="hero-button">
              EXPLORE STORIES ↓
            </a>

            <div className="hero-stats">

              <div>
                <h3>90'</h3>
                <p>MINUTES</p>
              </div>

              <div>
                <h3>1</h3>
                <p>PASSION</p>
              </div>

              <div>
                <h3>∞</h3>
                <p>MEMORIES</p>
              </div>

            </div>

          </div>

          <div className="hero-side">

            <img
              src="/player-hero.png"
              alt="Football player"
              className="football-hero-image"
            />

          </div>

        </section>

        {/* ARTICLES SECTION */}

        <section id="articles" className="articles-section">

          <div className="section-heading">

            <div>
              <p className="eyebrow">
                LATEST COVERAGE
              </p>

              <h2>Football Stories</h2>
            </div>

            <span className="post-count">
              {filteredPosts.length} STORIES FOUND
            </span>

          </div>

          <div className="article-controls">

            <SearchBar
              search={search}
              setSearch={setSearch}
            />

            <Filter
              filters={filters}
              setFilters={setFilters}
              posts={posts}
            />

          </div>

          <div className="active-filters">

            {Object.entries(filters)
              .filter(([key, value]) => value !== "All")
              .map(([key, value]) => (

                <button
                  key={key}
                  className="active-filter-chip"
                  onClick={() =>
                    setFilters((previous) => ({
                      ...previous,
                      [key]: "All"
                    }))
                  }
                >
                  {value} ×
                </button>

              ))}

            {(search || Object.values(filters).some(
              (value) => value !== "All"
            )) && (

              <button
                className="clear-all-filters"
                onClick={resetAll}
              >
                CLEAR ALL
              </button>

            )}

          </div>

          {/* DYNAMIC BLOG CARDS */}

          <div className="blog-grid">

            {filteredPosts.length > 0 ? (

              filteredPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                />
              ))

            ) : (

              <div className="no-results">

                <h3>No football stories found.</h3>

                <p>
                  Try changing your search or filter options.
                </p>

                <button onClick={resetAll}>
                  RESET ALL
                </button>

              </div>

            )}

          </div>

        </section>

        {/* ABOUT SECTION */}

        <section id="about" className="about-section">

          <p className="eyebrow">
            OUR STORY
          </p>

          <h2>
            Football is more than a game.
          </h2>

          <p>
            Football Hub is a platform dedicated to the
            beautiful game. From European leagues to
            international tournaments, we bring together
            stories, analysis and the culture of football.
          </p>

        </section>

      </main>

      {/* FOOTER */}

      <footer className="footer">

        <h2>
          FOOTBALL HUB<span>.</span>
        </h2>

        <p>
          THE GAME. THE STORIES. THE PASSION.
        </p>

        <p>
          © 2026 FOOTBALL HUB. ALL RIGHTS RESERVED.
        </p>

      </footer>

    </div>
  );
}

export default App;
