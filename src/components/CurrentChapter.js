import * as bookStyles from '../styles/Book.module.css';

const { chapter, chapterTitle, updateProgress } = bookStyles;

export default function CurrentChapter() {
  return (
    <div>
      <ul className={chapter}>
        <li className={chapterTitle}>CURRENT CHAPTER</li>
        <li>
          Chapter
          {Math.floor(Math.random() * 10)}
        </li>
      </ul>
      <button type="button" className={updateProgress}>UPDATE PROGRESS</button>
    </div>
  );
}
