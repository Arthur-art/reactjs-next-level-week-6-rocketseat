import copyImg from "../assets/images/copy.svg"
import "../styles/room-code.scss"

export const RoomCode = () => {

    return (
       <button className="room-code">
           <div>
               <img src={copyImg} alt="Copy Image" />
           </div>
           <span>Sala #1291u2n9d38fb8f0</span>
       </button>
    )
}