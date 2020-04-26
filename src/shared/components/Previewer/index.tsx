import React from 'react';
import classNames from 'classnames';

import Aside from './Aside';
import Main from './Main';

import { Resume } from 'shared/typings';

import styles from './index.module.scss';

interface PreviewerProps {
  className?: string;
  data: Resume;
}

const Previewer: React.FC<PreviewerProps> = props => {
  const { className = '', data } = props;

  return (
    <div
      className={classNames({
        [styles.container]: true,
        [className]: true,
      })}
    >
      <Aside
        className={styles.basic}
        name={data.name}
        avatar={data.avatar}
        job={data.job}
        educations={data.educations}
        phone={data.phone}
        email={data.email}
        skills={data.skills}
        github={data.github}
        blog={data.blog}
      />
      <Main
        className={styles.main}
        statement={data.statement}
        experienceList={data.experienceList}
        projectList={data.projectList}
      />
    </div>
  );
};

export default Previewer;
