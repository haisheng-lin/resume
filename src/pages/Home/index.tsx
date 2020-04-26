import React, { useState } from 'react';

import Previewer from 'shared/components/Previewer';

import { resume } from 'shared/config';

import styles from './index.module.scss';

const Home: React.FC = () => {
  const [isPreview, setIsPreview] = useState(false);

  const onConfirm = () => {
    setIsPreview(false);
    window.print();
  };

  return (
    <main className={styles.container}>
      {!isPreview && (
        <section className={styles.left}>TODO: 以后有编辑栏</section>
      )}
      <section className={styles.right}>
        <Previewer data={resume} />
      </section>
      <ul className={styles.btnList}>
        {!isPreview && (
          <li className={styles.btn} onClick={() => setIsPreview(true)}>
            打印预览
          </li>
        )}
        {isPreview && (
          <>
            <li className={styles.btn} onClick={onConfirm}>
              确定
            </li>
            <li className={styles.btn} onClick={() => setIsPreview(false)}>
              取消
            </li>
          </>
        )}
      </ul>
    </main>
  );
};

export default Home;
