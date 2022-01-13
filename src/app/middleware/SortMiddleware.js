module.exports = function SortMiddleware(req, res, next) {
  // res.locals:
  // is used to pass data to the views rendered during
  // that request / response cycle
  // This property is useful for exposing request-level info
  // such as request path name, authenticated user, etc
  res.locals._sort = {
    enabled: false,
    type: 'default',
    column: 'default',
  }
  // check if req has "_sort" property (on the URL)
  if (req.query.hasOwnProperty('_sort')) {
    res.locals._sort.enabled = true
    res.locals._sort.column = req.query.column
    res.locals._sort.type = req.query.type
  }
  next()
}
