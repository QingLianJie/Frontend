import _ from 'lodash'

export const calcTermScore = (data: IScoreAPI): IScoreList => {
  if (data?.result && Array.isArray(data.result)) {
    const arr = data.result.map((item, index) => ({
      index: index,
      id: item[0],
      term: item[1],
      course_id: item[2],
      name: item[3],
      grade: item[4],
      credit: item[5],
      total_time: item[6],
      assessment_method: item[7],
      assessment_type: item[8],
      attributes: item[9],
      kind: item[10],
      general_category: item[11],
      grade_mark: item[12],
    }))

    return {
      heu_username: data.heu_username,
      created: data.created,
      status: data.status,
      scores: _.groupBy(arr, a => a.term),
    }
  }

  return {
    heu_username: '',
    created: 0,
    status: 'Fail',
    scores: {},
  }
}
