import { Input } from 'antd'
const { Search } = Input

const SearchFile = ({ onSearch, isLoading }) => {
  return (
    <Search
      size="large"
      placeholder="Enter the appropriate youtube link.."
      onSearch={onSearch}
      loading={isLoading}
    />
  )
}

export default SearchFile
