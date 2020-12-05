import axios from 'axios'
import videoTitle from 'get-youtube-title'

export const fetchAudio = async function (url) {
  const response = await axios.get(
    `https://caret-yt-download.herokuapp.com/audio?url=${url}`,
    {
      responseType: 'blob',
    }
  )
  let link = window.URL.createObjectURL(response.data)
  let toGetTitle = url.split('=')[1] || url.split('/')[3]
  videoTitle(toGetTitle, function (err, title) {
    let a = document.createElement('a')
    a.href = link
    a.download = title + '.wav'
    document.body.appendChild(a)
    a.click()
    a.remove()
    return response
  })
}

export const fetchVideo = async function (url) {
  const response = await axios.get(
    `https://caret-yt-download.herokuapp.com/video?url=${url}`
  )
  return response
}
