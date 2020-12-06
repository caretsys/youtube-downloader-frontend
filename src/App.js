import { useState } from 'react'
import { Alert, notification } from 'antd'
import SearchFile from './components/SearchFile'
import Result from './components/Result'
import 'antd/dist/antd.css'
import './styles/app.css'

import { fetchMedia } from './helpers/fetchFiles'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const onSearch = async (searchParams) => {
    setIsLoading(true)
    const { prefix, url } = searchParams
    try {
      switch (true) {
        case prefix === 'A':
          await fetchMedia(url, 'audio')
          break
        case prefix === 'V':
          await fetchMedia(url, 'video')
          break
        default:
          setIsLoading(false)
          notification.error({
            message: 'You ought to request for a valid youtube link.',
          })
          return
      }
    } catch {
      setIsLoading(false)
      notification.error({
        message: 'Server could not resolve the file you requested',
      })
      return
    }
    setIsLoading(false)
    notification.success({
      message: 'Your file has been prepared and is ready to download',
    })
  }
  return (
    <div className="App">
      <Alert
        banner
        message="YT-Downloader: A Caret Systems Product!"
        type="info"
        showIcon
      />
      <SearchFile onSearch={onSearch} isLoading={isLoading} />
      <Result />
    </div>
  )
}

export default App
