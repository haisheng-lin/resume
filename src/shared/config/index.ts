import avatar from 'assets/images/avatar.png';

import { Resume } from '../typings';

export const resume: Resume = {
  statement: '目前正在晓教育工作，有意向寻找新的 web 前端工程师岗位',
  name: '林海晟',
  avatar,
  job: '前端工程师',
  educations: [
    {
      school: '亚利桑那州立大学',
      degree: '硕士',
      major: '计算机科学',
      startTime: '2015',
      endTime: '2017',
    },
    {
      school: '广东外语外贸大学',
      degree: '学士',
      major: ['计算机科学', '金融学'],
      startTime: '2011',
      endTime: '2015',
    },
  ],
  phone: '(+86) 13802720439',
  email: '504405161@qq.com',
  skills: ['html', 'css', 'JavaScript', 'TypeScript', 'React', 'Webpack'],
  socials: ['github.com/haisheng-lin', 'leetcode-cn.com/u/trafalgarlaw'],
  experience: [
    {
      company: '晓教育',
      title: '前端开发岗',
      startTime: '2019.04',
      endTime: '至今',
      department: '销售运营部 & C 端用户产品部',
      projects: [
        {
          name: '在线报读',
          points: [
            { category: '项目角色', description: '前端工程化主导，业务前端' },
            {
              category: '错误监控',
              description:
                '搭建前端错误日志收集上报，及对接监控追踪平台，监控脚本执行错误、接口错误、资源错误，使线上问题定位效率得到提升，通过统计数据分析错误类型的出现频率，并修复错误，使错误率从 16% 降至 11%',
            },
            {
              category: '通用业务',
              description:
                '参与制定部门 js bridge 方案、接口规范与开发维护，统一 sdk 接入，降低多套代码维护成本',
            },
            {
              category: '工程架构',
              description:
                '参与部门前端工程化架构方案制定并开发脚手架，提高业务项目构建脚本复用性，同时保留定制化构建需求的自由度以及极强的扩展性',
            },
            {
              category: '性能优化',
              description:
                '使用多种方案优化项目性能，提高开发环境与构建时的编译速度 25%，降低首屏加载时间 50%',
            },
            {
              category: '其他',
              description:
                '维护代码使用说明文档，降低开发成员间的沟通成本；成功定位某次迭代版本的页面白屏问题原因并解决；升级 TypeScript 版本，提高开发体验与效率',
            },
          ],
        },
        {
          name: '流量营销',
          points: [
            { category: '项目角色', description: '前端工程化主导，业务前端' },
            {
              category: '业务功能',
              description: '开发管理后台及微信公众号 h5',
            },
            {
              category: '工程架构',
              description:
                '落实应用构建方式从 create-react-app 转为自己实现的脚手架插件，使构建配置自由度更高，同时开发模式下增加模块选择编译功能，提高开发编译速度',
            },
            {
              category: '其他',
              description:
                '协助组内成员进行 code review 以及算法分享，提升组员对代码规范及算法认知；对旧代码进行重构，将某模块代码量从 2400+ 行降至 1200+ 行，提升项目可维护性及质量',
            },
          ],
        },
      ],
    },
    {
      company: '图灵游戏',
      title: '前端开发岗',
      startTime: '2018.04',
      endTime: '2019.04',
      department: '技术部',
      projects: [
        {
          name: '渠道投放',
          points: [
            { category: '项目角色', description: '前端主程' },
            {
              category: '业务功能',
              description:
                '独自承担公司内部管理平台的搭建与开发维护，开发游戏 app 包内嵌 h5 webview 相关功能',
            },
          ],
        },
      ],
    },
  ],
  projects: [
    {
      name: 'ts-axios',
      points: [
        { category: '描述', description: '使用 TypeScript 实现 axios' },
        {
          category: '地址',
          description: 'https://github.com/haisheng-lin/ts-axios',
        },
      ],
    },
  ],
};
