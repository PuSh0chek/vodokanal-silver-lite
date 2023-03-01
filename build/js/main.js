"use strict";

const getHtmlTableBody = (idElement, registrationNumber, numberSubscriptionCasing, typeDocument, comment, numberAgreement, naming) => `<tr class="work-with-the-file__table-row">
<td class="work-with-the-file__table-element">${idElement}</td>
<td class="work-with-the-file__table-element">${registrationNumber}</td>
<td class="work-with-the-file__table-element">${numberSubscriptionCasing}</td>
<td class="work-with-the-file__table-element">${typeDocument}</td>
<td class="work-with-the-file__table-element">${comment}</td>
<td class="work-with-the-file__table-element">${numberAgreement}</td>
<td class="work-with-the-file__table-element">${naming}</td>
</tr>`;
const getHtmlTableTh = () => `<tr class="work-with-the-file__table-head">
<td class="work-with-the-file__table-head-element">ID документа</td>
<td class="work-with-the-file__table-head-element">Регистрационный номер</td>
<td class="work-with-the-file__table-head-element">№ Абонентского дела</td>
<td class="work-with-the-file__table-head-element">Тип документа</td>
<td class="work-with-the-file__table-head-element">Комментарий</td>
<td class="work-with-the-file__table-head-element">Номер договора</td>
<td class="work-with-the-file__table-head-element">Наименование(ФИО)</td>
</tr>`;
const getHtmlPopupOfArchiveChangeDocument = (nameDocument, application) => `
<div class="work-width-the-file__up-info-container-popup">
  <div class="work-width-the-file__container-preview-up-info-popup">
    <span class="work-width-the-file__preview-up-info-popup">Документ:</span>
    <span class="work-width-the-file__up-info-popup">${nameDocument}</span>
  </div>
  <button class="work-width-the-file__button-close-up-info-popup">X</button>
</div>
<div class="work-width-the-file__wrapper-button-popup">
  <button class="work-width-the-file__button-popup" id="qq">Взять на редактирование</button>
  <button class="work-width-the-file__button-popup" id="dd">Сохранить</button>
  <button class="work-width-the-file__button-popup">Печать</button>
  <button class="work-width-the-file__button-popup">Взять на сканирование</button>
  <button class="work-width-the-file__button-popup">Протоколы печати</button>
</div>
<div class="work-width-the-file__information-document-popup">
  <input class="work-width-the-file__indormaion-input-popup" id="id_element" type="number" placeholder="Регистрационный номер">
  <input class="work-width-the-file__indormaion-input-popup" id="date" type="date">
  <input class="work-width-the-file__indormaion-input-popup" id="number-register" type="text" placeholder="Номер абонентского дела">
  <input class="work-width-the-file__indormaion-input-popup" id="type-document" type="text" placeholder="Тип документа">
</div>
<div class="work-width-the-file__wrapper-content-popup">
  <input class="work-width-the-file__input-contentpopup" id="naming" type="text" placeholder="ФИО">
  <input class="work-width-the-file__input-contentpopup" id="sity" type="text" placeholder="Город">
  <input class="work-width-the-file__input-contentpopup" id="street" type="text" placeholder="Удица">
  <input class="work-width-the-file__input-contentpopup" id="number-agreement" type="text" placeholder="Номер договара">
  <input class="work-width-the-file__input-contentpopup" id="number-home" type="text" placeholder="Дом">
  <input class="work-width-the-file__input-contentpopup" id="doby" type="text" placeholder="Корпус">
  <input class="work-width-the-file__input-contentpopup" id="flat" type="text" placeholder="Квартира">
  <textarea class="work-width-the-file__text-area-content-popup" name="" id="application" cols="30" rows="10" placeholder="Заявление на опломбировку водомера">${application}</textarea>
</div>
<div class="work-width-the-file__documents-and-controlls-container-popup">
  <table class="work-width-the-file__table-popup">
    <tbody class="work-width-the-file__body-table-popup">
      <tr class="work-width-the-file__head-table-popup">
        <th class="work-width-the-file__element-head-popup">Имя файла</th>
        <th class="work-width-the-file__element-head-popup">Тип</th>
        <th class="work-width-the-file__element-head-popup">Размер</th>
        <th class="work-width-the-file__element-head-popup">Автор</th>
        <th class="work-width-the-file__element-head-popup">Дата публикации</th>
      </tr>
      <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
    </tbody>
  </table>
  <div class="work-width-the-file__button-container-documents-and-controlls-container-popup">
    <button class="work-width-the-file__button-documents-and-controlls-container-popup">Присоединить</button>
    <button class="work-width-the-file__button-documents-and-controlls-container-popup">Показать</button>
    <button class="work-width-the-file__button-documents-and-controlls-container-popup">Удалить</button>
    <button class="work-width-the-file__button-documents-and-controlls-container-popup">Печать</button>
  </div>
</div>
<div class="work-width-the-file__low-indormations-container-popup">
  <div class="work-width-the-file__registrator-container-popup">
    <span class="work-width-the-file__registrator-popup">Регистратор:</span>
    <span class="work-width-the-file__content-registrator-popup"></span>
  </div>
  <div class="work-width-the-file__date-last-reg-of-container-popup">
    <span class="work-width-the-file__preview-date-last-reg-popup">Дата последнего заполнения:</span>
    <span class="work-width-the-file__date-lst-reg-popup"></span>
  </div>
  <div class="work-width-the-file__position-container-of-popup">
    <span class="work-width-the-file__preview-position-popup">Папка:</span>
    <span class="work-width-the-file__position-popup"></span>
  </div>
</div>`;

// JSON как объект //
const date = [{
  'id': 341,
  'id_element': 3556456,
  'number_register': 1,
  'type_document': 'Доп.соглашение и документы об изменении преамбулы',
  'comments': 'Заявление на опломбирование ',
  'number__agreement': 12,
  'name_object': 'Силенко И.П',
  'date_registration': '01.02.2025',
  'name_sity': 'Ростов-На-Дону',
  'name_street': 'Льва Толстого',
  'number_home': 5,
  'number_body': 5,
  'number_flat': 5,
  'id_documents': [1, 2, 3]
}];

// Переменнные //
const archivePage = document.querySelector('.archive');
const archivePagePopup = document.querySelector('.work-width-the-file__popup');
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
const version = 0.555;
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
Array.from(adminMainMenu.children).forEach(item => {
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
const getInformationFromElement = item => {
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

// функция для блокировки и разблокировки input's в popup //
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
};

// функция сохранающая изменения в объект //
const getChangeWithInputInArray = item => {
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
};

// Прорисоки pop и заполение его данными //
const getLoadInformationInPopup = item => {
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
  inputTypeDocument.value += getInformationFromElement(item)[3];
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
};

// Слушатель события для создания таблицы //
archiveButtonOpen.addEventListener('click', () => {
  // Функция для загрузки дынных в таблицу //
  tableBody.innerHTML = getHtmlTableTh();
  for (let i = 0; i < date.length; i++) {
    const elementOfArrayArchive = Object.values(date[i]);
    const [idElement, registrationNumber, numberSubscriptionCasing, typeDocument, comment, numberAgreement, naming] = elementOfArrayArchive;
    for (let t = 0; t < elementOfArrayArchive.length; t++) {
      t = 'error idElement';
      t = 'error registrationNumber';
      t = elementOfArrayArchive[2] = numberSubscriptionCasing;
      t = elementOfArrayArchive[3] = typeDocument;
      t = elementOfArrayArchive[4] = comment;
      t = elementOfArrayArchive[5] = numberAgreement;
      t = elementOfArrayArchive[6] = naming;
    }
    // Создание строк //
    // Заливаем контент //
    tableBody.innerHTML += getHtmlTableBody(idElement, registrationNumber, numberSubscriptionCasing, typeDocument, comment, numberAgreement, naming);
  }
  const rowOnTalbe = document.querySelectorAll('.work-with-the-file__table-row');
  // Слушаель события для вывода popup of archive //
  Array.from(rowOnTalbe).forEach(item => {
    item.addEventListener('click', () => {
      getLoadInformationInPopup(item);
      const buttonClosePopupArchive = document.querySelector('.work-width-the-file__button-close-up-info-popup');
      const buttonChangeRigths = document.getElementById('qq');
      const buttonSaveChange = document.getElementById('dd');
      // Слушатель события для закрытия popup //
      buttonClosePopupArchive.addEventListener('click', () => {
        archivePagePopup.innerHTML = '';
      });
      buttonChangeRigths.addEventListener('click', () => {
        changeRigthsforWorkWithElements();
      });
      buttonSaveChange.addEventListener('click', () => {
        getChangeWithInputInArray(item);
      });
    });
  });
});

// Архив  //
// Блок вызова функций //
getCountLicen();
getVersionThisProgramm();