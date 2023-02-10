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
      company: i18n.global.t('resume.kingsoft.company'),
      title: i18n.global.t('resume.job'),
      startTime: '2020.08',
      endTime: i18n.global.t('now'),
      department: i18n.global.t('resume.kingsoft.department'),
      introductions: [
        i18n.global.t('resume.kingsoft.introduction1'),
        i18n.global.t('resume.kingsoft.introduction2')
      ],
      responsibilities: [
        i18n.global.t('resume.kingsoft.responsibility1'),
        i18n.global.t('resume.kingsoft.responsibility2'),
        i18n.global.t('resume.kingsoft.responsibility3')
      ],
      achievements: [
        i18n.global.t('resume.kingsoft.achievement1'),
        i18n.global.t('resume.kingsoft.achievement2'),
        i18n.global.t('resume.kingsoft.achievement3'),
        i18n.global.t('resume.kingsoft.achievement4'),
        i18n.global.t('resume.kingsoft.achievement5'),
        i18n.global.t('resume.kingsoft.achievement6'),
        i18n.global.t('resume.kingsoft.achievement7')
      ],
      dimissionReason: i18n.global.t('resume.kingsoft.dimissionReason')
    },
    {
      company: i18n.global.t('resume.xiao.company'),
      title: i18n.global.t('resume.job'),
      startTime: '2019.04',
      endTime: '2020.06',
      department: i18n.global.t('resume.xiao.department'),
      introductions: [i18n.global.t('resume.xiao.introduction1')],
      responsibilities: [
        i18n.global.t('resume.xiao.responsibility1'),
        i18n.global.t('resume.xiao.responsibility2'),
        i18n.global.t('resume.xiao.responsibility3')
      ],
      achievements: [
        i18n.global.t('resume.xiao.achievement1'),
        i18n.global.t('resume.xiao.achievement2')
      ],
      dimissionReason: i18n.global.t('resume.xiao.dimissionReason')
    },
    {
      company: i18n.global.t('resume.tuling.company'),
      title: i18n.global.t('resume.job'),
      startTime: '2018.07',
      endTime: '2019.04',
      department: i18n.global.t('resume.tuling.department'),
      dimissionReason: i18n.global.t('resume.tuling.dimissionReason')
    }
  ],
  skills: ['git', 'html', 'css', 'JavaScript', 'TypeScript', 'vue', 'webpack'],
  links: ['https://github.com/haisheng-lin']
};
