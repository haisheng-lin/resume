import React from 'react';
import classNames from 'classnames';

import { Experience, Project } from 'shared/typings';

import styles from './index.module.scss';

interface MainProps {
  className?: string;
  statement: string;
  experienceList: Experience[];
  projects: Project[];
}

const Main: React.FC<MainProps> = props => {
  const { className = '', statement, experienceList, projects } = props;

  return (
    <article
      className={classNames({
        [styles.container]: true,
        [className]: true,
      })}
    >
      <section className={styles.section}>
        <div className={styles.header}>
          <i className={classNames('fa', 'fa-user', styles.icon)} />
          <h2 className={styles.title}>概要</h2>
        </div>
        <span>{statement}</span>
      </section>
      <section className={styles.section}>
        <div className={styles.header}>
          <i className={classNames('fa', 'fa-bug', styles.icon)} />
          <h2 className={styles.title}>工作经历 / 项目经验</h2>
        </div>
        <ol>
          {experienceList.map(experience => (
            <li key={experience.company} className={styles.experienceItem}>
              <h3 className={styles.company}>
                {experience.company} ({experience.startTime} ~{' '}
                {experience.endTime})
              </h3>
              <h4>
                {experience.title} - {experience.department}
              </h4>
              {experience.summary && (
                <span className={styles.summary}>
                  公司简介：{experience.summary}
                </span>
              )}
              <ul className={styles.projectList}>
                {experience.projects.map(project => (
                  <li key={project.name} className={styles.projectItem}>
                    <h5 className={styles.projectName}>{project.name}</h5>
                    <ul className={styles.contentList}>
                      {project.points.map(point => (
                        <li key={point.category} className={styles.content}>
                          <span className={styles.dot} />
                          <strong className={styles.highlight}>
                            {point.category}:{' '}
                          </strong>
                          <span>{point.description}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
      <section className={styles.section}>
        <div className={styles.header}>
          <i className={classNames('fa', 'fa-briefcase', styles.icon)} />
          <h2 className={styles.title}>个人项目</h2>
        </div>
        <ul className={styles.projectList}>
          {projects.map(project => (
            <li key={project.name} className={styles.projectItem}>
              <h5 className={styles.projectName}>{project.name}</h5>
              <ul className={styles.contentList}>
                {project.points.map(point => (
                  <li key={point.category} className={styles.content}>
                    <span className={styles.dot} />
                    <strong className={styles.highlight}>
                      {point.category}：
                    </strong>
                    <span>{point.description}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Main;
