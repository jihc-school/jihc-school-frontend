import React from 'react'
import PhotoGallery from './PhotoGallery/PhotoGallery'
import PageBanner from '../../components/Shared/PageBanner/PageBanner'
import VideoGallery from './VideoGallery/VideoGallery'

const Gallery = () => {
  return (
    <div>
      <PageBanner></PageBanner>
      <PhotoGallery></PhotoGallery>
      <VideoGallery></VideoGallery>
    </div>
  )
}

export default Gallery
