import {
  RiArrowDownSLine,
  RiBarChartBoxFill,
  RiBookOpenFill,
  RiDashboardFill,
  RiFeedbackFill,
  RiGalleryUploadFill,
  RiOpenSourceFill,
  RiTableFill,
} from 'react-icons/ri'

export default {
  home: {
    text: '主页',
    color: '#ed64a6',
    icon: RiDashboardFill,
  },
  scores: {
    icon: RiBarChartBoxFill,
    text: '成绩',
    color: '#48bb78',
  },
  timetable: {
    icon: RiTableFill,
    text: '课表',
    color: '#4299e1',
  },
  courses: {
    icon: RiBookOpenFill,
    text: '课程',
    color: '#f56565',
  },
  report: {
    icon: RiGalleryUploadFill,
    text: '报备',
    color: '#ecc94b',
  },
  feedback: {
    text: '反馈',
    color: '#ed8936',
    icon: RiFeedbackFill,
  },
  'open-source': {
    text: '开源',
    color: '#48bb78',
    icon: RiOpenSourceFill,
  },
  more: {
    text: '更多',
    color: '#ed64a6',
    icon: RiArrowDownSLine,
  },
}
