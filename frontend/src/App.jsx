// frontend/src/App.jsx

import ImageParent from './ImageTagger'
import FindCharacters from './FindCharacters'

function App() {
  return (
    <>
      <h1>Image Tagger</h1>
      <div className="card">
        <FindCharacters />
        <ImageParent />
      </div>
    </>
  )
}

export default App
