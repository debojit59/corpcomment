import { useState } from "react";
import UpTriangle from "../../constants/svgs/uptriangle";
import type { TFeedbackItems } from "../../lib/type";


type FeedbackItemProps = {
   feedbackItems: TFeedbackItems
}

export default function FeedbackItem({feedbackItems}:FeedbackItemProps) {
  const [isopen,setIsOpen]=useState<boolean>(false)
  const [vote , setVote] =useState(feedbackItems.upvoteCount)
  
  const handleUpVote = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setVote((prev) => prev + 1)
    e.currentTarget.disabled = true;
    e.stopPropagation()
  }

  return (
  <li onClick={()=>setIsOpen(!isopen)} className={`feedback ${isopen? "feedback--expand" : ""} `}>
    <button onClick={handleUpVote}>
      <UpTriangle/>
      <span>{vote}</span>

    </button>
    <div>
      <p>{feedbackItems.badgeLetter}</p>
    </div>
    <div>
      <p>{feedbackItems.company}</p>
      <p>{feedbackItems.text}</p>
    </div>
    <p>{feedbackItems.daysAgo===0? `new` : `${feedbackItems.daysAgo}d`}</p>

  </li>

  )
}
