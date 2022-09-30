import React,{ useState } from 'react';
import styles from '../SearchMovies/Searchbar.module.css';
import { toast } from 'react-toastify';

export const SearchMovies = ({ onSubmit }: {onSubmit: (arg: string) => void}): JSX.Element => {
  const [query, setQuery] = useState('');
  const handleChanger = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value.toLowerCase());
  };
  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter search query');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={styles.searchbar}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <button type="submit" className={styles.searchButton}>
          <span className={styles.searchButtonLabel}>Search</span>
        </button>
        <input
          className={styles.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films "
          onChange={handleChanger}
        />
      </form>
    </header>
  );
};

// SearchMovies.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
