// src/context/ImageContext.jsx
import { createContext, useContext, useState } from 'react'

// 1. Create context with default value
const ImageContext = createContext({
  imagesLoaded: false,
  setImagesLoaded: () => {}
})

// 2. Create provider component
export const ImageProvider = ({ children }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  
  return (
    <ImageContext.Provider value={{ imagesLoaded, setImagesLoaded }}>
      {children}
    </ImageContext.Provider>
  )
}

// 3. Create custom hook
export const useImageContext = () => {
  const context = useContext(ImageContext)
  if (context === undefined) {
    throw new Error('useImageContext must be used within an ImageProvider')
  }
  return context
}