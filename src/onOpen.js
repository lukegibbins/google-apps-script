const onOpen = () => {
  DocumentApp.getUi().createAddonMenu().addItem('Start', 'showSidebar').addToUi();
};

export default onOpen;
