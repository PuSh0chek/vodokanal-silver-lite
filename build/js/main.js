"use strict";

// Генератор табличек //
// const generatOfTable = () => {
//   let table = new Tabulator('.work-with-the-folder__table', {
//     //
//   });
// };

// Переменнные //
const archivePage = document.querySelector('.archive');
const adminPage = document.querySelector('.admin');
const settingsPage = document.querySelector('.settings');
const aboutProgrammPage = document.querySelector('.about-programm');
const buttonArchive = document.querySelector('.header__button-of-archive-page');
const buttonAdmin = document.querySelector('.header__button-of-admin-page');
const buttonSettings = document.querySelector('.header__button-of-settings-page');
const buttonAbout = document.querySelector('.header__button-of-about-the-program-page');
const displayGrid = 'grid';
const displayNone = 'none';
const counterLicen = document.querySelector('.about-programm__count-licence-of-programm');
const countLicen = 0;
const versionContainer = document.querySelector('.about-programm__number-version-of-programm');
const version = 0.376;

// Универсальные функции //
const getRequiredWindow = (showElement, removeElementOne, removeElementTwo, removeElementThree, displayShow, displayRemove) => {
  showElement.style = `display: ${displayShow}`;
  removeElementOne.style = `display: ${displayRemove}`;
  removeElementTwo.style = `display: ${displayRemove}`;
  removeElementThree.style = `display: ${displayRemove}`;
};

// Количество лицензий на данный момент //
const getCountLicen = () => {
  counterLicen.innerHTML = countLicen;
};

// Указать текущую версию //
const getVersionThisProgramm = () => {
  versionContainer.innerHTML = version;
};

// Блок кода появление POPUP'S //
// Вызов архива //
buttonArchive.addEventListener('click', () => {
  getRequiredWindow(archivePage, adminPage, settingsPage, aboutProgrammPage, displayGrid, displayNone);
});
// Вызов окна администрирование //
buttonAdmin.addEventListener('click', () => {
  getRequiredWindow(adminPage, archivePage, settingsPage, aboutProgrammPage, displayGrid, displayNone);
});
// Вызов окна настроек //
buttonSettings.addEventListener('click', () => {
  getRequiredWindow(settingsPage, adminPage, archivePage, aboutProgrammPage, displayGrid, displayNone);
});
// Вызов окна о программе //
buttonAbout.addEventListener('click', () => {
  getRequiredWindow(aboutProgrammPage, adminPage, settingsPage, archivePage, displayGrid, displayNone);
});

// Блок кода появления popup's admin //
const structure = document.querySelector('.admin__structure-of-the-enterprise');
const structureWorkingEmloyees = document.querySelector('.admin__working-employees');
const structureSettingsUsers = document.querySelector('.admin__settings-users');
const buttonsAdminMainMenu = document.querySelectorAll('.admin__button-of-container');
const adminMainMenu = document.querySelector('.admin__container');
const workersPopup = document.querySelector('.admin__structure-of-the-enterprise');
Array.from(adminMainMenu.children).forEach(item => {
  item.addEventListener('click', () => {
    console.log(1);
    workersPopup.style = 'display: block';
  });
});
// Блок вызова функций //
getCountLicen();
getVersionThisProgramm();