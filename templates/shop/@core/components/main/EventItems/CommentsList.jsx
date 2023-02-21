import Image from "next/image";
import { digitsEnToFa } from "@persian-tools/persian-tools";


const CommentsList = ({comments}) => {

    const commentList = comments.map(comment => (
        <li className="flex w-full flex-col items-end" key={comment.id}>
            <div className="flex w-full items-center">
            <Image height={70} width={70} alt='name' src={comment.image} className = 'rounded-full'/>
            <div className="flex flex-col p-4 w-fit">
                <h6 className="whitespace-nowrap">{comment.name}</h6>
                <p className="text-xs flex-shrink-0 whitespace-nowrap text-skin-muted">{digitsEnToFa(comment.date)}</p>
            </div>
            <p className="text-sm text-skin-muted">{comment.text}</p>
            </div>
            <button className="self-end px-5 py-1 rounded-md my-4 text-skin-primary text-sm">پاسخ</button>
        </li>
    ))
    return (
    <ul className="w-full  my-8">
        {commentList}
    </ul>
    );
  };
  export default CommentsList;