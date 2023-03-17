export const getHtmlSearchPopup = () => `<div class="work-width-the-file__search-popup">
<h3 class="work-width-the-file__title-search-popup">Поиск по архиву</h3>
<div class="work-width-the-file__wrapper-checkbox-search-popup">
  <span class="work-width-the-file__naming-checkbox-search-popup">Всебщий поиск</span><input class="work-width-the-file__checkbox-search-popup" type="checkbox" name="" id="allSearch">
  <span class="work-width-the-file__naming-checkbox-search-popup">Поиск по уровлю вложенности</span><input class="work-width-the-file__checkbox-search-popup" type="checkbox" name="" id="levelSearch">
  <span class="work-width-the-file__naming-checkbox-search-popup">Поиск по папке</span><input class="work-width-the-file__checkbox-search-popup" type="checkbox" name="" id="folderSearch">
</div>
<div class="work-width-the-file__wrapper-interval-input-sorting-element-of-search-popup">
  <input class="work-width-the-file__input-sorting-element-of-search-popup" type="text" placeholder=""> <input class="work-width-the-file__checkbox-search-popup" type="checkbox" name="" id="intervalSearch"> <span class="work-width-the-file__naming-checkbox-search-popup">Поиск по интервалу</span>
</div>
<div class="work-width-the-file__input-sorting-element-of-search-popup">
  <select class="work-width-the-file__select-sorting-element-of-search-popup" name="" id="" aria-placeholder="Поиск по типу файла">
    <option class="work-width-the-file__item-select-for-sorting-element-of-search-popup" value="правовые документы">правовые документы</option>
    <option class="work-width-the-file__item-select-for-sorting-element-of-search-popup" value="учредительные и регистрационные документы">учредительные и регистрационные документы</option>
    <option class="work-width-the-file__item-select-for-sorting-element-of-search-popup" value="заявления">заявления</option>
    <option class="work-width-the-file__item-select-for-sorting-element-of-search-popup" value="акты">акты</option>
    <option class="work-width-the-file__item-select-for-sorting-element-of-search-popup" value="баланс водопотребления и водоотведения">баланс водопотребления и водоотведения</option>
    <option class="work-width-the-file__item-select-for-sorting-element-of-search-popup" value="технический паспорт объекта">технический паспорт объекта</option>
    <option class="work-width-the-file__item-select-for-sorting-element-of-search-popup" value="письма, заявления, жалобы абонентов и ответы на них">письма, заявления, жалобы абонентов и ответы на них</option>
    <option class="work-width-the-file__item-select-for-sorting-element-of-search-popup" value="договор">договор</option>
    <option class="work-width-the-file__item-select-for-sorting-element-of-search-popup" value="служебные записи, рапорты">служебные записи, рапорты</option>
    <option class="work-width-the-file__item-select-for-sorting-element-of-search-popup" value="прочие документы">прочие документы</option>
    <option class="work-width-the-file__item-select-for-sorting-element-of-search-popup" value="проектно-техническая документация">проектно-техническая документация</option>
    <option class="work-width-the-file__item-select-for-sorting-element-of-search-popup" value="акты контрольного обслудования">акты контрольного обслудования</option>
  </select>
  <div class="work-width-the-file__wrapper-input-sorting-element-of-search-popup">
    <input class="work-width-the-file__input-sorting-element-of-search-popup" type="checkbox" name="" id=""> <span class="work-width-the-file__naming-checkbox-search-popup">Поиск по типу</span>
  </div>
</div>
<div class="work-width-the-file__wrapper-date-registration-search-popup">
  <span class="work-width-the-file__text-from-date-registration-search-popup">Дата регистрации: c</span> <input class="work-width-the-file__input-sorting-element-of-search-popup" type="date" name="" id="" placeholder="Дата регистрации"> <span class="work-width-the-file__text-to-date-registration-search-popup">по</span> <input class="work-width-the-file__input-sorting-element-of-search-popup" type="date" name="" id="" placeholder="Дата регистрации">
</div>
<div class="work-width-the-file__wrapper-to-date-filling-of-search-popup">
  <span class="work-width-the-file__text-to-date-filling-of-search-popup">Дата последнего заполнения: c</span> <input class="work-width-the-file__input-sorting-element-of-search-popup" type="date" name="" id="" placeholder="Дата последнего заполнения"><span class="work-width-the-file__text-to-date-filling-of-search-popup">по</span><input class="work-width-the-file__input-sorting-element-of-search-popup" type="date" name="" id="" placeholder="Дата последнего заполнения">
</div>
<input class="work-width-the-file__input-sorting-element-of-search-popup" type="text" placeholder="№ Абонентcкого дела">
<input class="work-width-the-file__input-sorting-element-of-search-popup" type="text" placeholder="Тип документа">
<input class="work-width-the-file__input-sorting-element-of-search-popup" type="text" placeholder="Номер договора">
<input class="work-width-the-file__input-sorting-element-of-search-popup" type="text" placeholder="ФИО(Наименование объекта)">
<div>
  <input class="work-width-the-file__input-sorting-element-of-search-popup" type="text" placeholder="Город"> <input class="" type="checkbox" name="" id="">
  <input class="work-width-the-file__input-sorting-element-of-search-popup" type="text" placeholder="Улица"> <input class="work-width-the-file__input-sorting-element-of-search-popup" type="text" placeholder="Дом"> <span class="work-width-the-file__naming-checkbox-search-popup">/</span> <input class="work-width-the-file__input-sorting-element-of-search-popup" type="text" placeholder=""> <input class="work-width-the-file__input-sorting-element-of-search-popup" type="text" placeholder="Квартира">
</div>
<input class="work-width-the-file__input-sorting-element-of-search-popup" type="text" placeholder="Имя файла">
<input class="work-width-the-file__input-sorting-element-of-search-popup" type="text" placeholder="Комментарий">
<input class="work-width-the-file__input-sorting-element-of-search-popup" type="text" placeholder="Строка контекстного поиска">
</div>
<div class="work-width-the-file__wrapper-button-of-search-popup">
<button class="work-width-the-file__button-of-search-popup">Поиск</button>
<button class="work-width-the-file__button-of-search-popup">Назад</button>
</div>`;
