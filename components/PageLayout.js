import styles from '../styles/CommonPage.module.css';

const PageLayout = ({ leftContent, rightContent, backgroundColor }) => (
  <div className={styles.pageContainer}>
    <div
      className={styles.leftSection}
      style={{ '--left-section-bg-color': backgroundColor }}
    >
      {leftContent}
    </div>
    <div className={styles.rightSection}>{rightContent}</div>
  </div>
);

export default PageLayout;
