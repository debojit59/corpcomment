import UpTriangle from "../constants/svgs/uptriangle";

export default function FeedbackItem() {
  return (
  <li className="feedback">
    <button>
      <UpTriangle/>
      <span>593</span>

    </button>
    <div>
      <p>B</p>
    </div>
    <div>
      <p>ByteGrade</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi hic saepe, sed aliquid molestias impedit!</p>
    </div>
    <p>4d</p>

  </li>

  )
}
