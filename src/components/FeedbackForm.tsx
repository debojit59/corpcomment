
export default function FeedbackForm() {
  return (
    <form className="form">
      <textarea id="feedback-form" placeholder="bla bla"/>
      <label htmlFor="feedback-form"> 
        Share your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">150</p>
        <button>
          <span>
            submit
          </span>
        </button>
      </div>
      
    </form>
  )
}
