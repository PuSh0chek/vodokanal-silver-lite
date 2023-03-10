import {
  getHtmlTableBody
} from './views/row-table-body';
import {
  getHtmlTableTh
} from './views/th-table-body';
import {
  getHtmlPopupOfArchiveChangeDocument
} from './views/work-with-the-file-popup';
import {
  date
} from './arrays/arrayOfArchive';
import {
  getHtmlPopupNewDocument
} from './views/work-width-the-file-popup-create-element';
import {
  getHtmlPopupDeleteElementInDocument
} from './views/work-width-the-file__delete-element-wrapper-popup';
import {
  getHtmlRowTalbeOfDocumentArchive
} from './views/row-doc-element-popup';
import {
  arrayDocumentsOfArchive
} from './arrays/arrayDocumentsOfArchive';
import {
  folderThree
} from './arrays/arrayOfFolderTree';
import {
  getHtmlRowOfWorkFolderInTheTalbe
} from './views/work-width-the-folder-row';

// const ez = fetch('http://172.201.234.149:5000/d', {
//   mode: 'no-cors',
//   method: 'post',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(ob),
// });
// console.log(ez);
// Переменнные //
const archivePage = document.querySelector('.archive');
const archivePagePopup = document.querySelector('.work-width-the-file__popup');
const buttonOpenPopupForCreateElementInArray = document.querySelector('.work-with-the-file__button-append-file');
const buttonDeleteElementOfArrayArchive = document.querySelector('.work-with-the-file__button-remove');
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
const version = 0.556;
const adminMainMenu = document.querySelector('.admin__container');
const workersPopup = document.querySelector('.admin__structure-of-the-enterprise');
const groupAccessPopup = document.querySelector('.admin__group-access');
const structureFolder = document.querySelector('.admin__structure-folder');
const dictionaries = document.querySelector('.admin__dictionaries');
const fileStorage = document.querySelector('.admin__file-storage');
const systemCondiguration = document.querySelector('.admin__system-configuration');
const protocols = document.querySelector('.admin__protocols');
const license = document.querySelector('.admin__license');
const settingsUser = document.querySelector('.settings__popup-of-user-settings');
const generalisSettings = document.querySelector('.settings__popup-of-generalis-settings');
const scanningSettings = document.querySelector('.settings__popup-of-scanning-settings');
const buttonSettingsUser = document.querySelector('.settings__user-button');
const buttonSettingsGeneralis = document.querySelector('.settings__generalis-button');
const buttonScanning = document.querySelector('.settings__scanning');
const tableOfFolderThree = document.querySelector('.work-with-the-folder__table');
let filtredArrayOfArchiveDocument = [];

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
  // Работа с таблицей для вывода древа папок //
  const getTalbeOfFaldersThree = () => {
    for(let i = 0; i < folderThree.length; i++) {
      
      tableOfFolderThree.innerHTML += getHtmlRowOfWorkFolderInTheTalbe(id, name, number);
    }
    const rowTableFoldersThree = document.querySelector('.work-with-the-folder__row-table');
    Array.from(rowTableFoldersThree.children).forEach((item) => console.log("🚀 ~ file: main.js:106 ~ getTalbeOfFaldersThree ~ item:", item))
  };
  getTalbeOfFaldersThree();
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
    if (Number(item.path[1].children[0].textContent) === Number(date[i].id)) {
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
    }
  }
};

// функция для разблокировки input's в popup //
const changeRigthsforWorkWithElements = () => {
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
  const tableDocumentsOfArchive = document.querySelector('.work-width-the-file__table-popup');
  inputDate.disabled = false;
  inputNumberRegister.disabled = false;
  inputIdElement.disabled = false;
  inputNaming.disabled = false;
  inputSity.disabled = false;
  inputStreet.disabled = false;
  inputNumberArgreement.disabled = false;
  inputNumberHome.disabled = false;
  inputNumberBody.disabled = false;
  inputNumberFlat.disabled = false;
  inputTypeDocument.disabled = false;
  inputApplication.disabled = false;
  tableDocumentsOfArchive.style = 'user-select: all';
};

// функция для блокировки и соханение input's в popup //
const changeRigthsOnBlocked = () => {
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
  const tableDocumentsOfArchive = document.querySelector('.work-width-the-file__table-popup');
  date[0].type_document = inputTypeDocument.value;
  date[0].date_registration = inputDate.value;
  date[0].number_register = inputNumberRegister.value;
  date[0].id_element = inputIdElement.value;
  date[0].name_object = inputNaming.value;
  date[0].name_sity = inputSity.value;
  date[0].name_street = inputStreet.value;
  date[0].number__agreement = inputNumberArgreement.value;
  date[0].number_home = inputNumberHome.value;
  date[0].number_body = inputNumberBody.value;
  date[0].number_flat = inputNumberFlat.value;
  inputDate.disabled = true;
  inputNumberRegister.disabled = true;
  inputIdElement.disabled = true;
  inputNaming.disabled = true;
  inputSity.disabled = true;
  inputStreet.disabled = true;
  inputNumberArgreement.disabled = true;
  inputNumberHome.disabled = true;
  inputNumberBody.disabled = true;
  inputNumberFlat.disabled = true;
  inputTypeDocument.disabled = true;
  inputApplication.disabled = true;
  tableDocumentsOfArchive.style = 'user-select: none';
};

// Прорисоки pop и заполение его данными //
const getLoadInformationInPopup = (item) => {
  archivePagePopup.innerHTML += getHtmlPopupOfArchiveChangeDocument(getInformationFromElement(item)[0], getInformationFromElement(item)[4]);
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
  const tableDocumentsOfArchive = document.querySelector('.work-width-the-file__table-popup');
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
  inputDate.disabled = true;
  inputNumberRegister.disabled = true;
  inputIdElement.disabled = true;
  inputNaming.disabled = true;
  inputSity.disabled = true;
  inputStreet.disabled = true;
  inputNumberArgreement.disabled = true;
  inputNumberHome.disabled = true;
  inputNumberBody.disabled = true;
  inputNumberFlat.disabled = true;
  inputTypeDocument.disabled = true;
  inputApplication.disabled = true;
  tableDocumentsOfArchive.style = 'user-select: none';
};

// Обновить, залить новый контент //
const getNewContent = () => {
  tableBody.innerHTML = getHtmlTableTh();
  // Проходимся по массиву //
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
};

// Загрузка документов в таблицу popup'a //
const getDocuments = (item) => {
  const tableDocumentPopup = document.querySelector('.work-width-the-file__body-table-popup');
  // Проходимся циколом по массиву объектов //
  if(item.path[1].children[0].textContent !== undefined && item.path[1].children[0].textContent !== null && arrayDocumentsOfArchive.length !== 0) {
    for(let i = 0; i < arrayDocumentsOfArchive.length; i++) {
      const idDocument = arrayDocumentsOfArchive[i].idDocument;
      const parent = arrayDocumentsOfArchive[i].idParent;
      const nameDocument = arrayDocumentsOfArchive[i].name;
      const typeDocument = arrayDocumentsOfArchive[i].typeOfDocument;
      const weight = arrayDocumentsOfArchive[i].sizeOfDocument;
      const author = arrayDocumentsOfArchive[i].authorsName;
      const dateCreated = arrayDocumentsOfArchive[i].dateOfSublication;
      const way = arrayDocumentsOfArchive[i].way;
      // Проходимся по массиву присвоенных документов //
      for(let n = 0; n < date[n].id_documents.length; n++) {
        // Проверка по условию привязанного документа по id родителя //
        if(Number(item.path[1].children[0].textContent) === Number(parent)) {
          // Загрузка документа в таблицу //
          tableDocumentPopup.innerHTML += getHtmlRowTalbeOfDocumentArchive(nameDocument, typeDocument, weight, author, dateCreated);
        } else {
          // tableDocumentPopup.innerHTML = 'Привязанная документация отсутствует';
          // break;
        };
      };
    };
  } else if(item.path[1].children[0].textContent === undefined || item.path[1].children[0].textContent === null) {
    tableDocumentPopup.innerHTML += 'При выводе документации произошла ошибка.';
  }
};

// СлушательgetDocuments события для создания таблицы //
archiveButtonOpen.addEventListener('click', () => {
  // Функция для загрузки дынных в таблицу //
  getNewContent();
  const rowOnTalbe = document.querySelectorAll('.work-with-the-file__table-row');
  // Слушаель события для вывода popup of archive //
  Array.from(rowOnTalbe).forEach((element) => {
    element.addEventListener('click', (item) => {
      getLoadInformationInPopup(item);
      const buttonClosePopupArchive = document.querySelector('.work-width-the-file__button-close-up-info-popup');
      const buttonChangeRigths = document.getElementById('buttonChangeRigths');
      const buttonSaveChange = document.getElementById('buttonSaveChange');
      // Заполнить таблицу документами //
      getDocuments(item);
      // Слушатель события для закрытия popup //
      buttonClosePopupArchive.addEventListener('click', () => {
        archivePagePopup.innerHTML = '';
      });
      buttonChangeRigths.addEventListener('click', () => {
        changeRigthsforWorkWithElements();
      });
      buttonSaveChange.addEventListener('click', () => {
        changeRigthsOnBlocked();
      });
    });
  });
});

// Добавить новый объект в массив(date) //
const createNewObjInArray = () => {
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
  const newObj = {
    'id': date[date.length - 1].id + 1,
    'id_element': inputIdElement.value,
    'number_register': inputNumberRegister.value,
    'type_document': inputTypeDocument.value,
    'comments': inputApplication.value,
    'number__agreement': inputNumberArgreement.value,
    'name_object': inputNaming.value,
    'date_registration': inputDate.value,
    'name_sity': inputSity.value,
    'name_street': inputStreet.value,
    'number_home': inputNumberHome.value,
    'number_body': inputNumberBody.value,
    'number_flat': inputNumberFlat.value,
    'id_documents': [],
  };
  date.push(newObj);
};

// Вывод POPUP 'Удалить объект из массива(Archive)' //
buttonDeleteElementOfArrayArchive.addEventListener('click', () => {
  archivePagePopup.innerHTML = getHtmlPopupDeleteElementInDocument();
  const allRowOnTalbe = document.querySelectorAll('.work-with-the-file__table-row');
  const buttonDeleteElementOfArray = document.querySelector('.work-width-the-file__button-delete-delete-element-popup');
  const buttonClosePopup = document.querySelector('.work-width-the-file__button-close-delete-element-popup');
  const inputDeleteElementOfArray = document.querySelector('.work-width-the-file__input-delete-element-popup');
  // Закрыть popup delete element of archive //
  buttonClosePopup.addEventListener('click', () => {
    archivePagePopup.innerHTML = '';
  });
  // Удалить объект из массива(Archive) //
  buttonDeleteElementOfArray.addEventListener('click', () => {
    Array.from(allRowOnTalbe).forEach((item) => {
      // Проходимся по массиву и фильтруем элементы //
      for (let i = 0; i < date.length; i++) {
        if (Number(item.children[0].textContent) === Number(inputDeleteElementOfArray.value)) {
          // фильтрация массива //
          filtredArrayOfArchiveDocument = date.filter((element) => element.id !== Number(inputDeleteElementOfArray.value));
          // Очистка старого массива //
          date.length = 0;
          // Заливаем фильтрованный массив в отчищенный старый //
          for (let n = 0; n < filtredArrayOfArchiveDocument.length; n++) {
            date.push(filtredArrayOfArchiveDocument[n]);
          }
          break;
        }
      }
      // Закрытие popup //
      archivePagePopup.innerHTML = '';
      // Обновит таблицу //
      getNewContent();
    });
  });
});

// Вызвать popup для создания нового объекта массива //
buttonOpenPopupForCreateElementInArray.addEventListener('click', () => {
  const idNewElement = date[date.length - 1].id + 1;
  archivePagePopup.innerHTML = getHtmlPopupNewDocument(idNewElement);
  const buttonClowPopup = document.querySelector('.work-width-the-file-popup-create-element__button-close-up-info-popup');
  const buttonSaveElement = document.querySelector('.work-width-the-file-popup-create-element__button-popup');
  // Слушатель события для закрытия popup //
  buttonClowPopup.addEventListener('click', () => {
    archivePagePopup.innerHTML = '';
  });
  // Слушатель событий для сохванения изменений //
  buttonSaveElement.addEventListener('click', () => {
    // Загркзит новый объект в массив //
    createNewObjInArray();
    // Обновит контент //
    getNewContent();
    // Закроет popup //
    archivePagePopup.innerHTML = '';
  });
});

// Архив  //
// Блок вызова функций //
getCountLicen();
getVersionThisProgramm();
