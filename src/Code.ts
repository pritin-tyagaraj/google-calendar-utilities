function doGet() {
  const form = HtmlService.createTemplateFromFile("src/view")
  form.calendars = CalendarApp.getAllCalendars()

  const userProperties = PropertiesService.getUserProperties()
  form.selectedCalendar = userProperties.getProperty("selectedCalendar")
  return form.evaluate()
}

function handleFormSubmit(form) {
  var calendarId = form.calendar
  var userProperties = PropertiesService.getUserProperties()
  userProperties.setProperty("selectedCalendar", calendarId)
  var calendar = CalendarApp.getCalendarById(calendarId)
  var events = calendar.getEvents(
    new Date(),
    new Date(new Date().setDate(new Date().getDate() + 7))
  )
  var result = ""
  for (var i = 0; i < events.length; i++) {
    var event = events[i]
    result += event.getTitle() + "<br />"
  }
  return result
}
