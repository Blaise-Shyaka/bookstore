import progressImage from '../assets/progress.png';
import * as bookStyles from '../styles/Book.module.css';

const {
  displayFlex, completionPercentage, alignCenter, completed,
} = bookStyles;

export default function Progress() {
  return (
    <div className={`${displayFlex} ${alignCenter}`}>
      <div>
        <img alt="book reading progress" src={progressImage} />
      </div>
      <ul>
        <li className={completionPercentage}>
          {Math.floor(Math.random() * 100)}
          %
        </li>
        <li className={completed}>Completed</li>
      </ul>
    </div>
  );
}
