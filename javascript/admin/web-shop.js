const newItemPanel = document.querySelector("#new-item-panel");

function openNewItemPanel() {
  console.log("nesto");
  newItemPanel.style.visibility = "visible";
}

function closeNewItemPanel() {
  newItemPanel.style.visibility = "hidden";
}
