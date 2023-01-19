import i18n from '@/i18n';
import avatar from '@/assets/images/avatar.png';
import type { Resume } from '@/types';

export const resume: Resume = {
  statement: i18n.global.t('resume.summary'),
  name: i18n.global.t('resume.name'),
  avatar,
  job: i18n.global.t('resume.job'),
  educations: [
    {
      school: i18n.global.t('resume.asu'),
      degree: i18n.global.t('resume.master'),
      major: i18n.global.t('resume.computerScience'),
      startTime: '2015',
      endTime: '2017'
    },
    {
      school: i18n.global.t('resume.gdufs'),
      degree: i18n.global.t('resume.bachelor'),
      major: [
        i18n.global.t('resume.computerScience'),
        i18n.global.t('resume.finance')
      ],
      startTime: '2011',
      endTime: '2015'
    }
  ],
  phone: '(+86) 13802720439',
  email: '504405161@qq.com',
  skills: ['html', 'css', 'JavaScript', 'TypeScript', 'React', 'Webpack'],
  socials: ['github.com/haisheng-lin', 'leetcode-cn.com/u/trafalgarlaw'],
  experience: [
    {
      company: i18n.global.t('resume.xiao.company'),
      title: i18n.global.t('resume.job'),
      startTime: '2019.04',
      endTime: i18n.global.t('now'),
      department: i18n.global.t('resume.xiao.department'),
      achievements: [
        i18n.global.t('resume.xiao.achievement1'),
        i18n.global.t('resume.xiao.achievement2'),
        i18n.global.t('resume.xiao.achievement3'),
        i18n.global.t('resume.xiao.achievement4'),
        i18n.global.t('resume.xiao.achievement5'),
        i18n.global.t('resume.xiao.achievement6')
      ]
    }
  ]
};
