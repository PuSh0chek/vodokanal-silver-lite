import {
  getHtmlTableBody
} from './views/row-table-body.js';
import {
  getHtmlTableTh
} from './views/th-table-body.js';
import {
  getHtmlPopupOfArchiveChangeDocument
} from './views/work-with-the-file-popup.js';
import {
  date
} from './arrayOfArchive.js';
import {
  archivePage,
  archivePagePopup,
  adminPage,
  settingsPage,
  aboutProgrammPage,
  buttonArchive,
  buttonAdmin,
  buttonSettings,
  buttonAbout,
  displayGrid,
  displayNone,
  counterLicen,
  countLicen,
  versionContainer,
  version,
  adminMainMenu,
  workersPopup,
  groupAccessPopup,
  structureFolder,
  dictionaries,
  fileStorage,
  systemCondiguration,
  protocols,
  license,
  settingsUser,
  generalisSettings,
  scanningSettings,
  buttonSettingsUser,
  buttonSettingsGeneralis,
  buttonScanning
} from './variables.js';

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

// Блок кода появления popup's admin //
Array.from(adminMainMenu.children).forEach((item) => {
  item.addEventListener('click', () => {
    if (item === Array.from(adminMainMenu.children)[0]) {
      workersPopup.style = 'display: block';
      groupAccessPopup.style = 'display: none';
      structureFolder.style = 'display: none';
      dictionaries.style = 'display: none';
      fileStorage.style = 'display: none';
      systemCondiguration.style = 'display: none';
      protocols.style = 'display: none';
      license.style = 'display: none';
    } else if (item === Array.from(adminMainMenu.children)[1]) {
      workersPopup.style = 'display: none';
      groupAccessPopup.style = 'display: block';
      structureFolder.style = 'display: none';
      dictionaries.style = 'display: none';
      fileStorage.style = 'display: none';
      systemCondiguration.style = 'display: none';
      protocols.style = 'display: none';
      license.style = 'display: none';
    } else if (item === Array.from(adminMainMenu.children)[2]) {
      workersPopup.style = 'display: none';
      groupAccessPopup.style = 'display: none';
      structureFolder.style = 'display: block';
      dictionaries.style = 'display: none';
      fileStorage.style = 'display: none';
      systemCondiguration.style = 'display: none';
      protocols.style = 'display: none';
      license.style = 'display: none';
    } else if (item === Array.from(adminMainMenu.children)[3]) {
      workersPopup.style = 'display: none';
      groupAccessPopup.style = 'display: none';
      structureFolder.style = 'display: none';
      dictionaries.style = 'display: block';
      fileStorage.style = 'display: none';
      systemCondiguration.style = 'display: none';
      protocols.style = 'display: none';
      license.style = 'display: none';
    } else if (item === Array.from(adminMainMenu.children)[4]) {
      workersPopup.style = 'display: none';
      groupAccessPopup.style = 'display: none';
      structureFolder.style = 'display: none';
      dictionaries.style = 'display: none';
      fileStorage.style = 'display: block';
      systemCondiguration.style = 'display: none';
      protocols.style = 'display: none';
      license.style = 'display: none';
    } else if (item === Array.from(adminMainMenu.children)[5]) {
      workersPopup.style = 'display: none';
      groupAccessPopup.style = 'display: none';
      structureFolder.style = 'display: none';
      dictionaries.style = 'display: none';
      fileStorage.style = 'display: none';
      systemCondiguration.style = 'display: block';
      protocols.style = 'display: none';
      license.style = 'display: none';
    } else if (item === Array.from(adminMainMenu.children)[6]) {
      workersPopup.style = 'display: block';
      groupAccessPopup.style = 'display: none';
      structureFolder.style = 'display: none';
      dictionaries.style = 'display: none';
      fileStorage.style = 'display: none';
      systemCondiguration.style = 'display: none';
      protocols.style = 'display: block';
      license.style = 'display: none';
    } else if (item === Array.from(adminMainMenu.children)[7]) {
      workersPopup.style = 'display: none';
      groupAccessPopup.style = 'display: none';
      structureFolder.style = 'display: none';
      dictionaries.style = 'display: none';
      fileStorage.style = 'display: none';
      systemCondiguration.style = 'display: none';
      protocols.style = 'display: none';
      license.style = 'display: block';
    }
  });
});
// Вызов окна настроек //
buttonSettings.addEventListener('click', () => {
  getRequiredWindow(settingsPage, adminPage, archivePage, aboutProgrammPage, displayGrid, displayNone);
});
// Вывод popup's settings //
buttonSettingsUser.addEventListener('click', () => {
  settingsUser.style = 'display: block';
  generalisSettings.style = 'display: none';
  scanningSettings.style = 'display: none';
});
buttonSettingsGeneralis.addEventListener('click', () => {
  settingsUser.style = 'display: none';
  generalisSettings.style = 'display: block';
  scanningSettings.style = 'display: none';
});
buttonScanning.addEventListener('click', () => {
  settingsUser.style = 'display: none';
  generalisSettings.style = 'display: none';
  scanningSettings.style = 'display: flex';
});

// Вызов окна о программе //
buttonAbout.addEventListener('click', () => {
  getRequiredWindow(aboutProgrammPage, adminPage, settingsPage, archivePage, displayGrid, displayNone);
});

// Работа с таблицей archive //
const tableBody = document.querySelector('.work-with-the-file__table-body');
const archiveButtonOpen = document.querySelector('.header__button-of-archive-page');

// Выгрузка информации из строки для помещения в popup //
const getInformationFromElement = (item) => {
  for (let i = 0; i < date.length; i++) {
    if (item.children[0].innerHTML = date[0].id) {
      const idDocument = date[i].id;
      const registrationNumber = date[i].id_element;
      const numberSubscriptionCasing = date[i].number_register;
      const typeDocument = date[i].type_document;
      const application = date[i].comments;
      const numberAgreement = date[i].number__agreement;
      const nameObj = date[i].name_object;
      const nameSity = date[i].name_sity;
      const nameStreet = date[i].name_street;
      const numberHome = date[i].number_home;
      const numberBody = date[i].number_body;
      const numberFlat = date[i].number_flat;
      const documents = date[i].id_documents;
      return [idDocument, registrationNumber, numberSubscriptionCasing, typeDocument, application, numberAgreement, nameObj, nameSity, nameStreet, numberHome, numberBody, numberFlat, documents];
    } else {
      continue;
    }
  }
};

// Запрет на редактирование документа (input) //
const getBlockEditingOfDocument = (array) => {
  for(let i = 0; i < array.length; i++) {
    array[i].disabled = true;
  }
};
// Универсальная функция для разрешения и запрета редактирования документа //
const getEditingRights = (array, listener, rights) => {
  listener.addEventListener('click', () => {
    for(let i = 0; i < array.length; i++) {
      array[i].disabled = rights;
    }
  });
};

// Элементы popup //
const getElementOfPopupDocumentArchive = () => {
  const inputTypeDocument = document.getElementById('type-document');
  const inputNumberRegister = document.getElementById('number-register');
  const inputIdElement = document.getElementById('id_element');
  const inputDate = document.getElementById('date');
  const inputNaming = document.getElementById('naming');
  const inputSity = document.getElementById('sity');
  const inputStreet = document.getElementById('street');
  const inputNumberArgreement = document.getElementById('number-agreement');
  const inputNumberHome = document.getElementById('number-home');
  const inputNumberBody = document.getElementById('doby');
  const inputNumberFlat = document.getElementById('flat');
  const inputApplication = document.getElementById('application');
  return [inputTypeDocument, inputNumberRegister, inputIdElement, inputDate, inputNaming, inputSity, inputStreet, inputNumberArgreement, inputNumberHome, inputNumberBody, inputNumberFlat, inputApplication];
};

// Прорисоки pop и заполение его данными //
const getLoadInformationInPopup = (item) => {
  const array = getElementOfPopupDocumentArchive();
  console.log(array);
  archivePagePopup.innerHTML += getHtmlPopupOfArchiveChangeDocument(getInformationFromElement(item)[0], getInformationFromElement(item)[4]);
  inputTypeDocument.value = getInformationFromElement(item)[3];
  inputDate.value = getInformationFromElement(item)[7];
  inputNumberRegister.value = getInformationFromElement(item)[2];
  inputIdElement.value = getInformationFromElement(item)[1];
  inputNaming.value = getInformationFromElement(item)[6];
  inputSity.value = getInformationFromElement(item)[7];
  inputStreet.value = getInformationFromElement(item)[8];
  inputNumberArgreement.value = getInformationFromElement(item)[2];
  inputNumberHome.value = getInformationFromElement(item)[9];
  inputNumberBody.value = getInformationFromElement(item)[10];
  inputNumberFlat.value = getInformationFromElement(item)[11];
  inputTypeDocument.value = getInformationFromElement(item)[3];
  getBlockEditingOfDocument([inputDate, inputNumberRegister, inputIdElement, inputNaming, inputSity, inputStreet, inputNumberArgreement, inputNumberHome, inputNumberBody, inputNumberBody, inputNumberFlat, inputTypeDocument, inputApplication]);
};

// Слушатель события для создания таблицы //
archiveButtonOpen.addEventListener('click', () => {
  // Функция для загрузки дынных в таблицу //
  tableBody.innerHTML = getHtmlTableTh();
  for (let i = 0; i < date.length; i++) {
    const elementOfArrayArchive = Object.values(date[i]);
    const [idElement, registrationNumber, numberSubscriptionCasing, typeDocument, comment, numberAgreement, naming] = elementOfArrayArchive;
    for (let t = 0; t < elementOfArrayArchive.length; t++) {
      t = 0 ? elementOfArrayArchive[0] = idElement : 'error idElement';
      t = 0 ? elementOfArrayArchive[1] = registrationNumber : 'error registrationNumber';
      t = 1 ? elementOfArrayArchive[2] = numberSubscriptionCasing : 'error numberSubscriptionCasing';
      t = 2 ? elementOfArrayArchive[3] = typeDocument : 'error typeDocument';
      t = 3 ? elementOfArrayArchive[4] = comment : 'error comment';
      t = 4 ? elementOfArrayArchive[5] = numberAgreement : 'error numberAgreement';
      t = 5 ? elementOfArrayArchive[6] = naming : 'error naming';
    };
    // Создание строк //
    // Заливаем контент //
    tableBody.innerHTML += getHtmlTableBody(idElement, registrationNumber, numberSubscriptionCasing, typeDocument, comment, numberAgreement, naming);
  };
  const rowOnTalbe = document.querySelectorAll('.work-with-the-file__table-row');
  // Слушаель события для вывода popup of archive //
  Array.from(rowOnTalbe).forEach((item) => {
    item.addEventListener('click', () => {
      const buttonAllowEditingOfDocument = document.querySelector('.work-width-the-file__button-popup');
      const buttonClosePopupArchive = document.querySelector('.work-width-the-file__button-close-up-info-popup');
      const buttonSavePopupArchive = document.querySelector('.work-width-the-file__button-popup');
      getLoadInformationInPopup(item);
      getEditingRights(getElementOfPopupDocumentArchive(), buttonAllowEditingOfDocument, false);
      getEditingRights(getElementOfPopupDocumentArchive(), buttonSavePopupArchive, true);
      // Слушатель события для закрытия popup //
      buttonClosePopupArchive.addEventListener('click', () => {
        archivePagePopup.innerHTML = '';
      });
    });
  });
});

// Архив  //
// Блок вызова функций //
getCountLicen();
getVersionThisProgramm();
