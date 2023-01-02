import {Component} from 'react'
import "./StickyNote.css"
class StickyNote extends Component{
  eventHandler = (e, data) => {
        console.log('Event Type', e.type);
        console.log({e, data});
      }
render(){
  console.log("sticky",this.props.state)
    return(<>

   <div className="sticky-note-container">
    <div className="sticky-note-heading">Sticky Note</div>
    <div className="sticky-note-buttons">
        <div className="sticky-note-edit">edit</div>
        <div className="sticky-note-delete">delete</div>
    </div>
   </div>
    
    
    
    </>)
}
}
export default StickyNote;