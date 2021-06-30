import copyImg from "../assets/images/copy.svg"
import "../styles/room-code.scss"
import toast, { Toaster } from "react-hot-toast"

type RoomCodeProps = {
    code: string;
}

export const RoomCode = ({ code }: RoomCodeProps) => {

    const notfy = () => toast.success("Código copiado!")

    const copyRoomCodeToClipboard = () => {
        //Ao clicar o codigo é copiado automaticamente
        navigator.clipboard.writeText(code)
        notfy()
    }

    return (
        <>
            <Toaster />
            <button className="room-code" onClick={copyRoomCodeToClipboard}>
                <div>
                    <img src={copyImg} alt="Copy Image" />
                </div>
                <span>{code}</span>
            </button>
        </>
    )
}