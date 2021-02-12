const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));
//                ^ making this an array allows us to use `.find()`

function handleTabClick(event) {
  const clickedButton = event.currentTarget;

  // Hide all tab panels
  tabPanels.forEach((tabPanel) => {
    tabPanel.hidden = true;
  });

  // Mark all tabs as unselected
  tabButtons.forEach((tabButton) => {
    tabButton.setAttribute('aria-selected', false);
  });

  // Mark the clicked tab as selected
  clickedButton.setAttribute('aria-selected', true);

  // Find the associated tabPanel and show it!
  const { id } = clickedButton;
  // METHOD #1 - query selector
  // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"`);

  // METHOD #2 - find in the tabpanels array
  const tabPanel = tabPanels.find(
    (panel) => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;
}

tabButtons.forEach((button) =>
  button.addEventListener('click', handleTabClick)
);
