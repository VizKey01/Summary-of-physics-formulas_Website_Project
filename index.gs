function doGet(e) {
  return HtmlService.createTemplateFromFile('main').evaluate()
  .addMetaTag('viewport','width=device-width,initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}

function getUrl(){
  var url=ScriptApp.getService().getUrl()
  return url
}