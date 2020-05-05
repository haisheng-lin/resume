import avatar from 'assets/images/avatar.png';

import { Resume } from '../typings';

export const resume: Resume = {
  statement:
    '两年 web 前端开发经验，目前正在晓教育科技工作，有意向寻找新的 web 前端工程师岗位',
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
  skills: ['html', 'css', 'JavaScript', 'TypeScript', 'React'],
  socials: [
    'github.com/haisheng-lin',
    'haisheng-lin.github.io',
    'leetcode-cn.com/u/trafalgarlaw',
  ],
  experience: [
    {
      company: '晓教育',
      title: '前端开发岗',
      startTime: '2019.04',
      endTime: '至今',
      department: 'C 端用户产品部',
      summary:
        '国内大型综合性 K12 教育集团，遍布国内 50+ 城市，设立校区超 300 家，拥有星火教育、晓培优、星火网校、晓双师等多个子品牌',
      projects: [
        {
          name: '流量营销',
          contents: [
            '项目背景：为吸引家长线上流量并转化为用户，故成立营销项目组',
            '开发管理后台以及部分微信公众号网页',
            '协助组内成员进行 code review 以及技术分享',
            '对旧代码进行重构，提升项目可维护性及质量',
          ],
        },
        {
          name: '在线报读',
          contents: [
            '项目背景：由于线上教育资源的缺失，因此成立在线报读项目组，致力于打造供家长报读选课的应用',
            '参与日常项目迭代功能业务开发',
            '搭建前端错误日志收集上报，及对接监控追踪平台，使线上问题定位效率得到提升，通过统计数据分析错误类型的出现频率，并修复错误，使错误率从 16% 降至 11%',
            '参与制定 h5 hybrid js sdk 方案、接口规范与开发维护，统一 sdk 接入，降低多套代码维护成本',
            '设计与开发 App 内嵌 h5 应用的鉴权处理异常方案流程',
            '编写维护通用代码的使用说明文档，降低开发成员间的沟通成本',
          ],
        },
      ],
    },
  ],
  projects: [
    {
      name: 'axios 重写',
      contents: [
        '使用 TypeScript 实现 axios',
        'https://github.com/haisheng-lin/ts-axios',
      ],
    },
  ],
};
