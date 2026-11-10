
import { useState } from "react";

function Filter({ filters, setFilters, posts }) {
  const [isOpen, setIsOpen] = useState(false);

  const filterGroups = [
    {
      key: "league",
      label: "League",
      icon: "🏆"
    },
    {
      key: "competition",
      label: "Competition",
      icon: "🌍"
    }
  ];

  const getOptions = (key) => {
    return [
      ...new Set(
        posts
          .map((post) => post[key])
          .filter(Boolean)
      )
    ].sort();
  };

  const activeCount = filterGroups.filter(
    (group) => filters[group.key] !== "All"
  ).length;

  const handleChange = (key, value) => {
    setFilters((previous) => ({
      ...previous,
      [key]: value
    }));
  };

  const resetFilters = () => {
    setFilters((previous) => ({
      ...previous,
      league: "All",
      competition: "All"
    }));
  };

  return (
    <div className="filter-wrapper">

      <button
        className={`main-filter-button ${isOpen ? "filter-active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="filter-icon">☷</span>

        FILTER

        {activeCount > 0 && (
          <span className="filter-count">
            {activeCount}
          </span>
        )}

        <span className="filter-arrow">
          {isOpen ? "▲" : "▼"}
        </span>
      </button>

      {isOpen && (
        <div className="filter-dropdown">

          <div className="filter-dropdown-header">

            <div>
              <p className="filter-heading">
                REFINE STORIES
              </p>

              <span className="filter-subheading">
                Choose your football preferences
              </span>
            </div>

            <button
              className="filter-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close filters"
            >
              ✕
            </button>

          </div>

          <div className="filter-options">

            {filterGroups.map((group) => (

              <div className="filter-group" key={group.key}>

                <label htmlFor={`filter-${group.key}`}>
                  <span>{group.icon}</span>
                  {group.label}
                </label>

                <select
                  id={`filter-${group.key}`}
                  value={filters[group.key]}
                  onChange={(e) =>
                    handleChange(group.key, e.target.value)
                  }
                >

                  <option value="All">
                    All {group.label}s
                  </option>

                  {getOptions(group.key).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}

                </select>

              </div>

            ))}

          </div>

          <div className="filter-footer">

            <button
              className="reset-filter-button"
              onClick={resetFilters}
            >
              RESET FILTERS
            </button>

            <button
              className="apply-filter-button"
              onClick={() => setIsOpen(false)}
            >
              DONE →
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default Filter;
