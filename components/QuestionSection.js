import useQuestions from '../hooks/useQuestions';
import styles from '../styles/QuestionSection.module.css';

const QuestionSection = ({ apiEndpoint, title, isAdmin }) => {
  const {
    name,
    setName,
    email,
    setEmail,
    question,
    setQuestion,
    questions,
    handleSubmit,
    handleDelete,
    handleAnswer,
  } = useQuestions(apiEndpoint);

  return (
    <div className={styles.questionSection}>
      <h2 className={styles.questionSectionTitle}>{title}</h2>

      {/* Форма для отправки вопроса */}
      <form onSubmit={handleSubmit} className={styles.askQuestionForm}>
        <div className={styles.inputContainer}>
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={25}
            className={styles.nameInput}
          />
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={25}
            className={styles.emailInput}
          />
        </div>
        <textarea
          placeholder='Question'
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          maxLength={150}
          className={styles.questionInput}
        />
        <button type='submit' className={styles.sendButton}>
          Send
        </button>
      </form>

      {/* Список вопросов */}
      <div className={styles.questionsList}>
        <h3>List of Questions</h3>
        <div className={styles.questionsHeader}>
          <span>Name</span>
          <span>Question</span>
          {isAdmin && <span>Action</span>}
          {isAdmin && <span>Answer</span>}
        </div>
        <div className={styles.questionsContent}>
          {questions.map((q) => (
            <div key={q._id} className={styles.questionItem}>
              <span>{q.name}</span>
              <span className={styles.questionText}>{q.question}</span>
              <span>
                {isAdmin && (
                  <button
                    onClick={() => handleDelete(q._id)}
                    className={styles.deleteButton}
                  >
                    Delete
                  </button>
                )}
              </span>
              <span>
                {isAdmin && (
                  <button
                    onClick={() => handleAnswer(q.email)}
                    className={styles.answerButton}
                  >
                    Answer
                  </button>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
