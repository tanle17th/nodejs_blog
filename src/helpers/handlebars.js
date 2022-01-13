const handleBars = require('handlebars')

module.exports = {
  // express-handlebars function to start index at template engine at 1
  sum: (a, b) => a + b,
  sortable: (field, sort) => {
    // if field passed by view matches URL type (ex: name === name)
    // returns sortType for that field.
    // Otherwise, ignore sortType and return 'default'
    const sortType = field === sort.column ? sort.type : 'default'

    // icon always match type of URL (sort.type)
    const icons = {
      default: 'oi oi-elevator',
      asc: 'oi oi-sort-ascending',
      desc: 'oi oi-sort-descending',
    }

    // type in <a> always opposite type of URL (sort.type)
    // cuz click on <a> has to send the opposite type
    // of current type to the URL
    const types = {
      default: 'asc',
      asc: 'desc',
      desc: 'asc',
    }

    // sort.type returns default | asc | desc
    // icons[sort.type] equals to icons.sort.type
    // dung key (sort.type) de choc vao icons va lay value tuong ung:
    const icon = icons[sortType]
    const type = types[sortType]

    const href = handleBars.escapeExpression(
      `?_sort&column=${field}&type=${type}`,
    )
    const output = `
    <a href="${href}">
      <span class="${icon}"></span>
    </a>`

    return new handleBars.SafeString(output)
  },
}
