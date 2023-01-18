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
        { category: '项目角色', description: '前端工程化主导，业务前端' },
        {
          category: '错误监控',
          description:
            '搭建前端错误日志收集上报，及对接监控追踪平台，监控脚本执行错误、接口错误、资源错误，使线上问题定位效率得到提升，通过统计数据分析错误类型的出现频率，并修复错误，使错误率从 16% 降至 11%'
        },
        {
          category: '通用业务',
          description:
            '参与制定部门 js bridge 方案、接口规范与开发维护，统一 sdk 接入，降低多套代码维护成本'
        },
        {
          category: '工程架构',
          description:
            '参与部门前端工程化架构方案制定并开发脚手架，提高业务项目构建脚本复用性，同时保留定制化构建需求的自由度以及极强的扩展性；落实应用构建方式从 create-react-app 转为自己实现的脚手架插件，使构建配置自由度更高，同时开发模式下增加模块选择编译功能，提高开发编译速度'
        },
        {
          category: '性能优化',
          description:
            '使用多种方案优化项目性能，提高开发环境与构建时的编译速度 25%，降低首屏加载时间 50%'
        },
        {
          category: '分享协同',
          description:
            '维护代码使用说明文档，降低开发成员间的沟通成本；协助组内同事进行 code review 与算法分享，建立团队的代码规范及提高算法认知'
        }
      ]
    }
  ]
};
