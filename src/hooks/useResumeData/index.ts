import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import type { Resume } from '@/types';

const age = new Date().getFullYear() - 1993;
const cet6Score = 515;
const tofelScore = 91;

function useResumeData() {
  const { t } = useI18n();

  const resume = computed<Resume>(() => ({
    url: 'https://haisheng-lin.github.io/resume',
    summary: t('resume.summary'),
    profile: {
      name: t('resume.name'),
      gender: 'male',
      age,
      phone: '13802720439',
      email: '504405161@qq.com',
      languages: [
        t('mandarin'),
        t('resume.englishRemark', { cet6Score, tofelScore })
      ]
    },
    educations: [
      {
        school: {
          name: t('asu'),
          introduction: t('asuIntro')
        },
        degree: t('master'),
        major: t('computerScience'),
        startTime: '2015',
        endTime: '2017'
      },
      {
        school: {
          name: t('gdufs')
        },
        degree: t('bachelor'),
        major: t('computerScience'),
        startTime: '2011',
        endTime: '2015'
      },
      {
        school: {
          name: t('gdufs')
        },
        degree: t('bachelor'),
        major: t('finance'),
        startTime: '2011',
        endTime: '2015'
      }
    ],
    experience: [
      {
        company: t('resume.experience.kingsoft.company'),
        title: t('resume.job'),
        startTime: '2020.08',
        endTime: '2023.02',
        department: t('resume.experience.kingsoft.department'),
        introduction: t('resume.experience.kingsoft.introduction'),
        resignationReason: t('resume.experience.kingsoft.resignationReason')
      },
      {
        company: t('resume.experience.xiao.company'),
        title: t('resume.job'),
        startTime: '2019.04',
        endTime: '2020.06',
        department: t('resume.experience.xiao.department'),
        introduction: t('resume.experience.xiao.introduction'),
        resignationReason: t('resume.experience.xiao.resignationReason')
      },
      {
        company: t('resume.experience.tuling.company'),
        title: t('resume.job'),
        startTime: '2018.07',
        endTime: '2019.04',
        department: t('resume.experience.tuling.department'),
        resignationReason: t('resume.experience.tuling.resignationReason')
      }
    ],
    projects: [
      {
        name: t('resume.projects.notion.name'),
        introduction: t('resume.projects.notion.introduction'),
        responsibilities: [
          t('resume.projects.notion.responsibility1'),
          t('resume.projects.notion.responsibility2')
        ],
        achievements: [
          t('resume.projects.notion.achievement1'),
          t('resume.projects.notion.achievement2'),
          t('resume.projects.notion.achievement3'),
          t('resume.projects.notion.achievement4')
        ],
        challenges: [
          t('resume.projects.notion.challenge1'),
          t('resume.projects.notion.challenge2'),
          t('resume.projects.notion.challenge3')
        ]
      },
      {
        name: t('resume.projects.admin.name'),
        introduction: t('resume.projects.admin.introduction'),
        responsibilities: [
          t('resume.projects.admin.responsibility1'),
          t('resume.projects.admin.responsibility2')
        ],
        achievements: [
          t('resume.projects.admin.achievement1'),
          t('resume.projects.admin.achievement2'),
          t('resume.projects.admin.achievement3'),
          t('resume.projects.admin.achievement4'),
          t('resume.projects.admin.achievement5'),
          t('resume.projects.admin.achievement6'),
          t('resume.projects.admin.achievement7')
        ],
        challenges: [
          t('resume.projects.admin.challenge1'),
          t('resume.projects.admin.challenge2'),
          t('resume.projects.admin.challenge3'),
          t('resume.projects.admin.challenge4')
        ]
      },
      {
        name: t('resume.projects.course.name'),
        introduction: t('resume.projects.course.introduction'),
        responsibilities: [
          t('resume.projects.course.responsibility1'),
          t('resume.projects.course.responsibility2'),
          t('resume.projects.course.responsibility3')
        ],
        achievements: [
          t('resume.projects.course.achievement1'),
          t('resume.projects.course.achievement2')
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
  }));

  return resume;
}

export default useResumeData;
