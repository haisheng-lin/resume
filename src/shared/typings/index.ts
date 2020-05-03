/**
 * 教育经历
 */
export interface Education {
  school: string; // 学校
  degree: string; // 学历
  major: string | string[]; // 专业
  startTime: string; // 时间
  endTime: string;
}

/**
 * 项目经历
 */
export interface Project {
  name: string; // 项目名
  contents: string[]; // 项目描述
}

/**
 * 工作经历
 */
export interface Experience {
  company: string; // 公司名
  title: string; // 职位
  startTime: string; // 开始工作时间
  endTime: string; // 结束工作时间
  department: string; // 部门
  summary?: string; // 公司简介
  projects: Project[]; // 负责项目
}

/**
 * 简历信息
 */
export interface Resume {
  statement: string; // 个人陈述
  name: string; // 名字
  avatar: string; // 头像地址
  job: string; // 求职岗位
  phone: string; // 电话
  email: string; // 邮箱
  github?: string; // 同性交友账号
  blog?: string; // 个人博客
  skills: string[]; // 专业技能
  educations: Education[]; // 学历
  experience: Experience[]; // 工作经历
  projects: Project[]; // 个人项目
}
