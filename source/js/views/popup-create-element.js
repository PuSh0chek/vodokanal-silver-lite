export const getHtmlPopupNewDocument = (idNewElement) => `
<div class="work-width-the-file-popup-create-element__up-info-container-popup">
  <div class="work-width-the-file-popup-create-element__container-preview-up-info-popup">
    <span class="work-width-the-file-popup-create-element__preview-up-info-popup">Документ:</span>
    <span class="work-width-the-file-popup-create-element__up-info-popup">${idNewElement}</span>
  </div>
  <button class="work-width-the-file-popup-create-element__button-close-up-info-popup">X</button>
</div>
<div class="work-width-the-file-popup-create-element__wrapper-button-popup">
  <button class="work-width-the-file-popup-create-element__button-popup" id="buttonSaveChange">Сохранить</button>
</div>
<div class="work-width-the-file-popup-create-element__information-document-popup">
  <input class="work-width-the-file-popup-create-element__indormaion-input-popup" id="id_element" type="number" placeholder="Регистрационный номер">
  <input class="work-width-the-file-popup-create-element__indormaion-input-popup" id="date" type="date">
  <input class="work-width-the-file-popup-create-element__indormaion-input-popup" id="number-register" type="text" placeholder="Номер абонентского дела">
  <input class="work-width-the-file-popup-create-element__indormaion-input-popup" id="type-document" type="text" placeholder="Тип документа">
</div>
<div class="work-width-the-file-popup-create-element__wrapper-content-popup">
  <input class="work-width-the-file-popup-create-element__input-contentpopup" id="naming" type="text" placeholder="ФИО">
  <input class="work-width-the-file-popup-create-element__input-contentpopup" id="sity" type="text" placeholder="Город">
  <input class="work-width-the-file-popup-create-element__input-contentpopup" id="street" type="text" placeholder="Удица">
  <input class="work-width-the-file-popup-create-element__input-contentpopup" id="number-agreement" type="text" placeholder="Номер договара">
  <input class="work-width-the-file-popup-create-element__input-contentpopup" id="number-home" type="text" placeholder="Дом">
  <input class="work-width-the-file-popup-create-element__input-contentpopup" id="doby" type="text" placeholder="Корпус">
  <input class="work-width-the-file-popup-create-element__input-contentpopup" id="flat" type="text" placeholder="Квартира">
  <textarea class="work-width-the-file-popup-create-element__text-area-content-popup" name="" id="application" cols="30" rows="10" placeholder="Заявление на опломбировку водомера"></textarea>
</div>
<div class="work-width-the-file-popup-create-element__documents-and-controlls-container-popup">
  <table class="work-width-the-file-popup-create-element__table-popup">
    <tbody class="work-width-the-file-popup-create-element__body-table-popup">
      <tr class="work-width-the-file-popup-create-element__head-table-popup">
        <th class="work-width-the-file-popup-create-element__element-head-popup">Имя файла</th>
        <th class="work-width-the-file-popup-create-element__element-head-popup">Тип</th>
        <th class="work-width-the-file-popup-create-element__element-head-popup">Размер</th>
        <th class="work-width-the-file-popup-create-element__element-head-popup">Автор</th>
        <th class="work-width-the-file-popup-create-element__element-head-popup">Дата публикации</th>
      </tr>

    </tbody>
  </table>
  <div class="work-width-the-file-popup-create-element__button-container-documents-and-controlls-container-popup">
    <input type="file" class="work-width-the-file-popup-create-element__button-documents-and-controlls-container-popup"></input>
    <button class="work-width-the-file-popup-create-element__button-documents-and-controlls-container-popup">Присоединить</button>
    <button class="work-width-the-file-popup-create-element__button-documents-and-controlls-container-popup">Удалить</button>
  </div>
</div>
<div class="work-width-the-file-popup-create-element__low-indormations-container-popup">
  <div class="work-width-the-file-popup-create-element__registrator-container-popup">
    <span class="work-width-the-file-popup-create-element__registrator-popup">Регистратор:</span>
    <span class="work-width-the-file-popup-create-element__content-registrator-popup"></span>
  </div>
  <div class="work-width-the-file-popup-create-element__date-last-reg-of-container-popup">
    <span class="work-width-the-file-popup-create-element__preview-date-last-reg-popup">Дата последнего заполнения:</span>
    <span class="work-width-the-file-popup-create-element__date-lst-reg-popup"></span>
  </div>
  <div class="work-width-the-file-popup-create-element__position-container-of-popup">
    <span class="work-width-the-file-popup-create-element__preview-position-popup">Папка:</span>
    <span class="work-width-the-file-popup-create-element__position-popup"></span>
  </div>
</div>`;
