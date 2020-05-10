import onOpen from './onOpen';

function showSidebar() {
  const html = HtmlService.createTemplateFromFile('index').evaluate().setTitle('Vospel_V1');
  DocumentApp.getUi().showSidebar(html);
}

global.onOpen = onOpen;
global.showSidebar = showSidebar;
