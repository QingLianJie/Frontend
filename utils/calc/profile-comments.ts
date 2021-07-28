type CourseList = { course: ICourse; count: number }

export const calcCourseList = (comments: ICourseComment[]) => {
  const map = new Map()

  const courses = comments.map(comment => comment.course)
  courses.map(course => {
    const id = course?.course_id
    if (map.has(id)) {
      const t = map.get(id)
      map.set(id, { ...t, count: t.count + 1 })
    } else {
      map.set(id, { course, count: 1 })
    }
  })

  const arr: CourseList[] = []
  map.forEach(course => arr.push(course))
  return arr.sort((a, b) => b.count - a.count)
}
