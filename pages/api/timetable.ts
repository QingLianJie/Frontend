import { NextApiRequest, NextApiResponse } from 'next'

const weeks = []
const temp = {
  week: 1,
  days: [
    {
      day: 1,
      courses: [
        {},
        {
          section: 2,
          duration: 3,
          title: '信息系统安全',
          location: '11#152大',
          teacher: '郭方方',
        },
        {},
        {
          section: 4,
          duration: 3,
          title: '软件需求与项目管理',
          location: '11#5036小',
          teacher: '张海涛',
        },
        {
          section: 5,
          duration: 3,
          title: '计算机图形学',
          location: '11#0123中',
          teacher: '李智慧',
        },
      ],
    },
    {
      day: 2,
      courses: [
        {
          section: 1,
          duration: 2,
          title: '软件需求与项目管理',
          location: '11#5036小',
          teacher: '张海涛',
        },
        {
          section: 2,
          duration: 2,
          title: '毛泽东思想与中国特色社会主义理论体系概论',
          location: '1#N201',
          teacher: '裴然',
        },
        {},
        {},
        {
          section: 5,
          duration: 3,
          title: '逆向工程',
          location: '计算中心478室',
          teacher: '李柏松',
        },
      ],
    },
    {
      day: 3,
      courses: [
        {
          section: 1,
          duration: 2,
          title: '软件需求与项目管理',
          location: '11#133大',
          teacher: '张海涛',
        },
        {
          section: 2,
          duration: 3,
          title: '信息系统安全',
          location: '11#0124中',
          teacher: '郭方方',
        },
        {
          section: 3,
          duration: 2,
          title: '软件代码开发技术',
          location: '11#0129中',
          teacher: '张万松',
        },
        {},
        {
          section: 5,
          duration: 3,
          title: '计算机图形学',
          location: '11#0123中',
          teacher: '李智慧',
        },
      ],
    },
    {
      day: 4,
      courses: [
        {},
        {
          section: 2,
          duration: 2,
          title: '毛泽东思想与中国特色社会主义理论体系概论',
          location: '1#N201',
          teacher: '裴然',
        },
        {},
        {
          section: 4,
          duration: 2,
          title: '软件代码开发技术',
          location: '11#0129中',
          teacher: '张万松',
        },
        {
          section: 5,
          duration: 3,
          title: '逆向工程',
          location: '计算中心478室',
          teacher: '李柏松',
        },
      ],
    },
    {
      day: 5,
      courses: [
        {},
        {
          section: 2,
          duration: 2,
          title: '大学英语（六）',
          location: '41#252',
          teacher: '李林',
        },
        {
          section: 3,
          duration: 2,
          title: '管理学B',
          location: '21B 015中',
          teacher: '曹霞',
        },
        {
          section: 4,
          duration: 3,
          title: '软件设计与体系结构',
          location: '11#141大',
          teacher: '张万松',
        },
        {},
      ],
    },
    {
      day: 6,
      courses: [
        {},
        {},
        {},
        {
          section: 4,
          duration: 3,
          title: '软件设计与体系结构',
          location: '11#154大',
          teacher: '张万松',
        },
        {},
      ],
    },
    {
      day: 7,
      courses: [{}, {}, {}, {}, {}],
    },
  ],
}

for (let i = 1; i <= 18; i++) {
  temp.week = i
  weeks.push({ ...temp })
}

const table = {
  week_count: 18,
  weeks: [...weeks],
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(table)
}
