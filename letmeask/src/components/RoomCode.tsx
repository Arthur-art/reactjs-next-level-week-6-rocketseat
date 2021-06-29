import copyImg from "../assets/images/copy.svg"
import "../styles/room-code.scss"

type RoomCodeProps = {
    code: string;
}

export const RoomCode = ({ code }: RoomCodeProps) => {

    const copyRoomCodeToClipboard = () => {
        //Ao clicar o codigo é copiado automaticamente
        navigator.clipboard.writeText(code)
    }

    return (
        <button className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Copy Image" />
            </div>
            <span>Sala {code}</span>
        </button>
    )
}