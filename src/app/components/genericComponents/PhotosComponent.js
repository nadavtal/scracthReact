import React from 'react'


const PhotosComponent = (props) => {
    // console.log(props)
    var photos = props.photos
    // console.log(photos)
    photos = photos.map(function(photo, index){
      // console.log(index, photo)
      return(
          <div key={index} className="col-4">
              <img id={"photo" + index} className="d-block img-fluid" src={photo} alt="header1" />

          </div>

      )
  })
  return (
    <div className="row">
      {photos}
    </div>
  )
}

export default PhotosComponent
