import UpTriangle from "../constants/svgs/uptriangle";

type feedbackItemsprops = {
    id:number,
    upvoteCount: number,
    badgeLetter: string,
    company:string,
    text:string,
    daysAgo:number
}

export default function FeedbackItem({feedbackItems}:feedbackItemsprops) {
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
