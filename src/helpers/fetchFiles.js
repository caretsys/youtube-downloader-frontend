import axios from 'axios'
import videoTitle from 'get-youtube-title'

export const fetchMedia = async function (url, type) {
  const response = await axios.get(
    `https://caret-yt-download.herokuapp.com/${type}?url=${url}`,
    {
      responseType: 'blob',
    }
  )
  let link = window.URL.createObjectURL(response.data)
  let toGetTitle = url.split('=')[1] || url.split('/')[3]
  videoTitle(toGetTitle, function (err, title) {
    let a = document.createElement('a')
    a.href = link
    let extension = type === 'video' ? '.mp4' : '.mp3'
    a.download = title + extension
    document.body.appendChild(a)
    a.click()
    a.remove()
    return response
  })
}
