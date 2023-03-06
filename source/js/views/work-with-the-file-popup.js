export const getHtmlPopupOfArchiveChangeDocument = (nameDocument, application) => `
<div class="work-width-the-file__up-info-container-popup">
  <div class="work-width-the-file__container-preview-up-info-popup">
    <span class="work-width-the-file__preview-up-info-popup">Документ:</span>
    <span class="work-width-the-file__up-info-popup">${nameDocument}</span>
  </div>
  <button class="work-width-the-file__button-close-up-info-popup">X</button>
</div>
<div class="work-width-the-file__wrapper-button-popup">
  <button class="work-width-the-file__button-popup" id="buttonChangeRigths">Взять на редактирование</button>
  <button class="work-width-the-file__button-popup" id="buttonSaveChange">Сохранить</button>
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
