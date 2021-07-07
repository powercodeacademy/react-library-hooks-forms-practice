import React from "react"

const Filter = ({ onGenreChange }) => {
  return (
    <div className="Filter">
      <input
          name="search"
          placeholder="Search by title or author..."
          type="text"
      />
      <select
          name="filter"
          onChange={onGenreChange}
      >
        <option value="All">Filter by genre</option>
        <option value="Business">Business</option>
        <option value="Fiction">Fiction</option>
        <option value="History">History</option>
        <option value="Nonfiction">Nonfiction</option>
      </select>
    </div>
  )
}

export default Filter