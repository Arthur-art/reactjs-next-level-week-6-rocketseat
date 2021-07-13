import './styles.scss';


type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    }
}

export const Questions = ({ content, author }: QuestionProps) => {
    return (
        <div className="questions">
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt="" />
                    <span>{author.name}</span>
                </div>
            </footer>
        </div>
    )
}