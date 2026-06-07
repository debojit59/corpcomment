import UpTriangle from "../constants/svgs/uptriangle";
import type { TFeedbackItems } from "../lib/type";


type FeedbackItemProps = {
   feedbackItems: TFeedbackItems
}

export default function FeedbackItem({feedbackItems}:FeedbackItemProps) {
  return (
  <li className="feedback">
    <button>
      <UpTriangle/>
      <span>{feedbackItems.upvoteCount}</span>

    </button>
    <div>
      <p>{feedbackItems.badgeLetter}</p>
    </div>
    <div>
      <p>{feedbackItems.company}</p>
      <p>{feedbackItems.text}</p>
    </div>
    <p>{feedbackItems.daysAgo}d</p>

  </li>

  )
}
