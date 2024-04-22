import {Component} from 'react'
import './index.css'

DestinationObject = props => {
  const destinationsList = props
  const {id, name, imgUrl} = destinationsList
  return (
    <div className="destination-container">
      <img className="image" src={imgUrl} alt={name} />
      <h1 className="heading">{name}</h1>
    </div>
  )
}

class DestinationSearch extends Component{
  state = {
    
  }

  render() {
  DestinationObject
  }
}
export default DestinationSearch
