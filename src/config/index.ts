import i18n from '@/i18n';
import type { Resume } from '@/types';

export const resume: Resume = {
  summary: i18n.global.t('resume.summary'),
  profile: {
    name: i18n.global.t('resume.name'),
    gender: 'male',
    age: 29,
    phone: '13802720439',
    email: '504405161@qq.com'
  },
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
      major: i18n.global.t('resume.computerScience'),
      startTime: '2011',
      endTime: '2015'
    },
    {
      school: i18n.global.t('resume.gdufs'),
      degree: i18n.global.t('resume.bachelor'),
      major: i18n.global.t('resume.finance'),
      startTime: '2011',
      endTime: '2015'
    }
  ],
  experience: [
    {
      company: i18n.global.t('resume.kingsoft.company'),
      title: i18n.global.t('resume.job'),
      startTime: '2020.08',
      endTime: i18n.global.t('now'),
      department: i18n.global.t('resume.kingsoft.department'),
      achievements: [
        i18n.global.t('resume.kingsoft.achievement1'),
        i18n.global.t('resume.kingsoft.achievement2'),
        i18n.global.t('resume.kingsoft.achievement3'),
        i18n.global.t('resume.kingsoft.achievement4')
      ]
    },
    {
      company: i18n.global.t('resume.xiao.company'),
      title: i18n.global.t('resume.job'),
      startTime: '2019.04',
      endTime: '2020.06',
      department: i18n.global.t('resume.xiao.department'),
      achievements: [
        i18n.global.t('resume.xiao.achievement1'),
        i18n.global.t('resume.xiao.achievement2'),
        i18n.global.t('resume.xiao.achievement3'),
        i18n.global.t('resume.xiao.achievement4'),
        i18n.global.t('resume.xiao.achievement5')
      ]
    }
  ],
  skills: ['git', 'html', 'css', 'JavaScript', 'TypeScript', 'webpack'],
  links: ['https://github.com/haisheng-lin']
};
