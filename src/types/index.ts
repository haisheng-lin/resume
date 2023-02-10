/**
 * 基本信息
 */
export interface Profile {
  name: string; // 名字
  gender: 'male' | 'female'; // 性别
  age: number; // 年龄
  phone: string; // 电话
  email: string; // 邮箱
  languages?: string[]; // 语言
}

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
  achievements: string[];
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
  introductions?: string[]; // 项目介绍
  responsibilities?: string[]; // 工作内容
  achievements?: string[]; // 业绩成就
  dimissionReason?: string; // 离职原因
}

/**
 * 简历信息
 */
export interface Resume {
  url?: string; // 在线简历链接
  summary: string; // 概述
  profile: Profile; // 基本信息
  educations: Education[]; // 学历
  experience: Experience[]; // 工作经历
  projects?: Project[]; // 个人项目
  skills?: string[]; // 专业技能
  links?: string[]; // 其他链接
}
