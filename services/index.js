let rows = []

export const getRowsUnused = async () => {
  return rows
}

export const setDoneRow = async queue => {
  rows = rows.filter(item => item.queue !== queue)
}

export const createRow = async data => {
  rows.push(data)
}
