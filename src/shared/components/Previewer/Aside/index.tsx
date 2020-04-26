import React from 'react';
import classNames from 'classnames';

import { Education } from 'shared/typings';

import styles from './index.module.scss';

interface AsideProps {
  className?: string;
  name: string; // 名称
  avatar: string; // 头像
  job: string; // 职业
  educations: Education[]; // 教育经历
  phone: string; // 电话
  email: string; // 邮箱
  skills: string[]; // 技能
  github?: string;
  blog?: string;
}

const Aside: React.FC<AsideProps> = props => {
  const {
    className = '',
    name,
    avatar,
    job,
    educations,
    phone,
    email,
    skills,
    github,
    blog,
  } = props;

  const renderMajorDesc = (major: string | string[]) => {
    if (typeof major === 'string') {
      return major;
    } else {
      return major.join(', ');
    }
  };

  return (
    <aside
      className={classNames({
        [styles.container]: true,
        [className]: true,
      })}
    >
      <div className={styles.person}>
        <img className={styles.avatar} src={avatar} alt="avatar" />
        <h1 className={styles.name}>{name}</h1>
        <span>{job}</span>
      </div>
      <ol className={styles.list}>
        <li className={styles.item}>
          <div className={styles.header}>
            <i
              className={classNames(
                'fa',
                'fa-graduation-cap',
                styles.largeIcon
              )}
            />
            <h2 className={styles.title}>个人学历</h2>
          </div>
          <ol className={styles.detailList}>
            {educations.map(education => (
              <li key={education.school} className={styles.educationItem}>
                <h3 className={styles.school}>
                  {education.school} ({education.degree})
                </h3>
                <span className={styles.description}>
                  {renderMajorDesc(education.major)}
                </span>
                <span className={styles.description}>
                  {education.startTime} ~ {education.endTime}
                </span>
              </li>
            ))}
          </ol>
        </li>
        <li className={styles.item}>
          <div className={styles.header}>
            <i
              className={classNames(
                'fa',
                'fa-envelope-square',
                styles.largeIcon
              )}
            />
            <h2 className={styles.title}>联系方式</h2>
          </div>
          <ol className={styles.detailList}>
            <li className={styles.contactItem}>
              <i className={classNames('fa', 'fa-phone', styles.middleIcon)} />
              <span className={styles.contact}>{phone}</span>
            </li>
            <li className={styles.contactItem}>
              <i
                className={classNames('fa', 'fa-envelope', styles.middleIcon)}
              />
              <span className={styles.contact}>{email}</span>
            </li>
          </ol>
        </li>
        <li className={styles.item}>
          <div className={styles.header}>
            <i className={classNames('fa', 'fa-book', styles.largeIcon)} />
            <h2 className={styles.title}>个人技能</h2>
          </div>
          <ol className={styles.detailList}>
            {skills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ol>
        </li>
        <li className={styles.item}>
          <div className={styles.header}>
            <i className={classNames('fa', 'fa-link', styles.largeIcon)} />
            <h2 className={styles.title}>其他链接</h2>
          </div>
          <ol className={styles.detailList}>
            {github && <li>{github}</li>}
            {blog && <li>{blog}</li>}
          </ol>
        </li>
      </ol>
    </aside>
  );
};

export default Aside;
