import i18n from '@/i18n';
import type { Resume } from '@/types';

const age = new Date().getFullYear() - 1993;
const cet6Score = 515;
const tofelScore = 91;

export const resume: Resume = {
  url: 'https://haisheng-lin.github.io/resume',
  summary: i18n.global.t('resume.summary'),
  profile: {
    name: i18n.global.t('resume.name'),
    gender: 'male',
    age,
    phone: '13802720439',
    email: '504405161@qq.com',
    languages: [
      i18n.global.t('mandarin'),
      i18n.global.t('resume.englishRemark', { cet6Score, tofelScore })
    ]
  },
  educations: [
    {
      school: i18n.global.t('asu'),
      degree: i18n.global.t('master'),
      major: i18n.global.t('computerScience'),
      startTime: '2015',
      endTime: '2017'
    },
    {
      school: i18n.global.t('gdufs'),
      degree: i18n.global.t('bachelor'),
      major: i18n.global.t('computerScience'),
      startTime: '2011',
      endTime: '2015'
    },
    {
      school: i18n.global.t('gdufs'),
      degree: i18n.global.t('bachelor'),
      major: i18n.global.t('finance'),
      startTime: '2011',
      endTime: '2015'
    }
  ],
  experience: [
    {
      company: i18n.global.t('resume.experience.kingsoft.company'),
      title: i18n.global.t('resume.job'),
      startTime: '2020.08',
      endTime: i18n.global.t('now'),
      department: i18n.global.t('resume.experience.kingsoft.department'),
      introduction: i18n.global.t('resume.experience.kingsoft.introduction'),
      dimissionReason: i18n.global.t(
        'resume.experience.kingsoft.dimissionReason'
      )
    },
    {
      company: i18n.global.t('resume.experience.xiao.company'),
      title: i18n.global.t('resume.job'),
      startTime: '2019.04',
      endTime: '2020.06',
      department: i18n.global.t('resume.experience.xiao.department'),
      introduction: i18n.global.t('resume.experience.xiao.introduction'),
      dimissionReason: i18n.global.t('resume.experience.xiao.dimissionReason')
    },
    {
      company: i18n.global.t('resume.experience.tuling.company'),
      title: i18n.global.t('resume.job'),
      startTime: '2018.07',
      endTime: '2019.04',
      department: i18n.global.t('resume.experience.tuling.department'),
      dimissionReason: i18n.global.t('resume.experience.tuling.dimissionReason')
    }
  ],
  projects: [
    {
      name: i18n.global.t('resume.projects.notion.name'),
      introduction: i18n.global.t('resume.projects.notion.introduction'),
      responsibilities: [
        i18n.global.t('resume.projects.notion.responsibility1'),
        i18n.global.t('resume.projects.notion.responsibility2')
      ],
      achievements: [
        i18n.global.t('resume.projects.notion.achievement1'),
        i18n.global.t('resume.projects.notion.achievement2'),
        i18n.global.t('resume.projects.notion.achievement3')
      ]
    },
    {
      name: i18n.global.t('resume.projects.admin.name'),
      introduction: i18n.global.t('resume.projects.admin.introduction'),
      responsibilities: [
        i18n.global.t('resume.projects.admin.responsibility1'),
        i18n.global.t('resume.projects.admin.responsibility2')
      ],
      achievements: [
        i18n.global.t('resume.projects.admin.achievement1'),
        i18n.global.t('resume.projects.admin.achievement2'),
        i18n.global.t('resume.projects.admin.achievement3'),
        i18n.global.t('resume.projects.admin.achievement4'),
        i18n.global.t('resume.projects.admin.achievement5'),
        i18n.global.t('resume.projects.admin.achievement6'),
        i18n.global.t('resume.projects.admin.achievement7')
      ]
    },
    {
      name: i18n.global.t('resume.projects.course.name'),
      introduction: i18n.global.t('resume.projects.course.introduction'),
      responsibilities: [
        i18n.global.t('resume.projects.course.responsibility1'),
        i18n.global.t('resume.projects.course.responsibility2'),
        i18n.global.t('resume.projects.course.responsibility3')
      ],
      achievements: [
        i18n.global.t('resume.projects.course.achievement1'),
        i18n.global.t('resume.projects.course.achievement2')
      ]
    }
  ],
  skills: [
    'git',
    'html',
    'css',
    'JavaScript',
    'TypeScript',
    'Vue',
    'React',
    'webpack'
  ],
  links: ['https://github.com/haisheng-lin']
};
