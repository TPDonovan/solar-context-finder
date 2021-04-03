const PANEL_MENU_ID = "searchSolar";
const INVERTER_MENU_ID = "searchInverter";

function searchPanel(info,tab) {
  if (info.menuItemId !== PANEL_MENU_ID) {
    return;
  }
  chrome.tabs.create({  
    url:"https://www.energysage.com/solar-panels/?noidx=true&q=" + info.selectionText
  });
}

function searchInverter(info,tab){
  if (info.menuItemId !== INVERTER_MENU_ID) {
    return;
  }
  chrome.tabs.create({  
    url:"https://www.energysage.com/solar-inverters/?noidx=true&q=" + info.selectionText
  });
}

chrome.contextMenus.create({
  title: "Search Panel Model", 
  contexts:["selection"], 
  id: PANEL_MENU_ID
});
chrome.contextMenus.create({
  title: "Search Inverter Model", 
  contexts:["selection"], 
  id: INVERTER_MENU_ID
});
chrome.contextMenus.onClicked.addListener(searchPanel);
chrome.contextMenus.onClicked.addListener(searchInverter);