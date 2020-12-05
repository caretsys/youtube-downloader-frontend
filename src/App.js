import { useState } from 'react'
import { Alert, notification } from 'antd'
import TextLoop from 'react-text-loop'
import SearchFile from './components/SearchFile'
import Result from './components/Result'
import 'antd/dist/antd.css'
import './styles/app.css'

import { fetchAudio, fetchVideo } from './helpers/fetchFiles'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const onSearch = async (url) => {
    setIsLoading(true)
    const refinedURL = url.split('-')
    const resourceType = refinedURL[0]
    try {
      switch (true) {
        case resourceType === 'A':
          await fetchAudio(refinedURL[1])
          break
        case resourceType === 'V':
          await fetchVideo(refinedURL[1])
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
        message={
          <TextLoop mask>
            <div>For video download: V-https://youtu.be/45Ckhnmuw2o</div>
            <div>For audio download: A-https://youtu.be/45Ckhnmuw2o</div>
          </TextLoop>
        }
        type="info"
        showIcon
      />
      <SearchFile onSearch={onSearch} isLoading={isLoading} />
      <Result />
    </div>
  )
}

export default App
