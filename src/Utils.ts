function include(filename, params = {}) {
  const template = HtmlService.createTemplateFromFile(filename)
  Object.entries(params).forEach(([key, value]) => (template[key] = value))

  return template.evaluate().getContent()
}
