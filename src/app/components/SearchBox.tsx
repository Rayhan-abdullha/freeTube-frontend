import { FaSearch } from 'react-icons/fa';

const SearchBox = () => {
  return (
    <div className='mx-5 xl:mx-0'>
      <div className="flex items-center border border-gray-300 dark:border-gray-800 rounded-lg p-2 w-full sm:max-w-xs">
      <input
        type="text"
        className="flex-grow p-2 outline-none rounded-l-lg bg-white dark:bg-gray-800 placeholder-gray-400"
        placeholder="Search Videos..."
      />
      <button className="bg-[#5f27cd] text-white p-2 rounded-r-lg">
        <FaSearch />
      </button>
    </div>
    </div>
  );
};

export default SearchBox;
