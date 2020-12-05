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
    const input = url.split('-')
    const resourceType = input[0]
    try {
      if (resourceType === 'A') {
        await fetchAudio(input[1])
      }
      if (resourceType === 'V') {
        await fetchVideo(input[1])
      }
    } catch {
      setIsLoading(false)
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
