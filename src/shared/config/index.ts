import avatar from 'assets/images/avatar.png';

import { Resume } from '../typings';

export const resume: Resume = {
  statement:
    '两年 web 前端开发经验，目前正在晓教育科技有限公司工作，有意向寻找新的 web 前端工程师岗位',
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
  github: 'www.github.com/haisheng-lin',
  blog: 'haisheng-lin.github.io',
  experienceList: [
    {
      company: '广东世纪晓教育科技有限公司',
      title: '前端工程师',
      startTime: '2019.04',
      endTime: '',
      department: 'C 端用户产品部',
      summary:
        '国内大型综合性  K12 教育集团，遍布国内 50+ 城市，设立校区超 300 家，拥有星火教育、晓培优、星火网校、晓双师等多个子品牌',
      projects: [
        {
          name: '流量营销平台',
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
            '搭建前端错误日志收集上报，及对接监控追踪平台，使线上问题定位效率得到提升，通过统计数据分析错误类型的出现频率，并采取相应措施减少错误率，提升项目质量',
            '参与制定 h5 hybrid js sdk 方案、接口规范与开发维护，统一 sdk 接入，降低多套代码维护成本',
          ],
        },
      ],
    },
  ],
  projectList: [
    {
      name: '音乐播放器',
      contents: [
        '一款拥有排行榜、推荐歌单、歌手列表等功能的小型音乐播放器',
        'https://haisheng-lin.github.io/music-mweb',
      ],
    },
    {
      name: '在线简历',
      contents: ['我的在线简历', 'https://haisheng-lin.github.io/resume'],
    },
    {
      name: 'axios 重写',
      contents: [
        '使用 TypeScript 实现 axios',
        'https://github.com/haisheng-lin/ts-axios',
      ],
    },
  ],
};
