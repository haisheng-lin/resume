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
      department: '销售运营部 & C 端用户产品部',
      projects: [
        {
          name: '在线报读',
          contents: [
            '项目背景：由于线上教育资源的缺失，因此成立在线报读项目组，致力于打造供家长报读选课的应用',
            '搭建前端错误日志收集上报，及对接监控追踪平台，监控脚本执行错误、接口错误、资源错误，使线上问题定位效率得到提升，通过统计数据分析错误类型的出现频率，并修复错误，使错误率从 16% 降至 11%',
            '参与制定部门 h5 hybrid sdk 方案、接口规范与开发维护，统一 sdk 接入，降低多套代码维护成本',
            '通过对应用构建分析，落实 webpack 构建工具的优化，使构建速度提升 30%，文件打包体积减少 25%',
            '编写维护通用代码的使用说明文档，降低开发成员间的沟通成本',
            '某次迭代版本出现页面白屏问题，成功定位问题原因并解决',
            '升级 TypeScript 版本，提高团队开发体验与效率',
          ],
        },
        {
          name: '流量营销',
          contents: [
            '项目背景：为吸引家长线上流量并转化为用户，故成立营销项目组',
            '开发管理后台以及部分微信公众号网页',
            '主导并落实应用构建方式从 create-react-app 转为部门内部实现的脚手架插件，使构建配置自由度更高，同时开发模式下增加模块选择编译功能，提高开发编译速度',
            '协助组内成员进行 code review 以及算法分享，提升组员对代码规范及算法认知',
            '对旧代码进行重构，将某模块代码量从 2400+ 行降至 1200+ 行，提升项目可维护性及质量',
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
          contents: [
            '独自承担公司内部管理平台的搭建与开发维护',
            '负责开发游戏 app 包内嵌 h5 webview 相关功能',
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
