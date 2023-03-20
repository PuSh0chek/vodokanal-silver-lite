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
  <select class="work-width-the-file__select-sorting-element-of-search-popup" name="" id="" aria-placeholder="Поиск по типу файла">
    <option class="work-width-the-file__item-select-for-sorting-element-of-search-popup" value="-">Выбор типа</option>
    <option class="work-width-the-file__item-select-for-sorting-element-of-search-popup" value="Правовые документы">Правовые документы</option>
    <option class="work-width-the-file__item-select-for-sorting-element-of-search-popup" value="Учредительные и регистрационные документы">Учредительные и регистрационные документы</option>
    <option class="work-width-the-file__item-select-for-sorting-element-of-search-popup" value="Заявления">Заявления</option>
    <option class="work-width-the-file__item-select-for-sorting-element-of-search-popup" value="Акты">Акты</option>
    <option class="work-width-the-file__item-select-for-sorting-element-of-search-popup" value="Баланс водопотребления и водоотведения">Баланс водопотребления и водоотведения</option>
    <option class="work-width-the-file__item-select-for-sorting-element-of-search-popup" value="Технический паспорт объекта">Технический паспорт объекта</option>
    <option class="work-width-the-file__item-select-for-sorting-element-of-search-popup" value="Письма, заявления, жалобы абонентов и ответы на них">Письма, заявления, жалобы абонентов и ответы на них</option>
    <option class="work-width-the-file__item-select-for-sorting-element-of-search-popup" value="Договор">Договор</option>
    <option class="work-width-the-file__item-select-for-sorting-element-of-search-popup" value="Служебные записи, рапорты">Служебные записи, рапорты</option>
    <option class="work-width-the-file__item-select-for-sorting-element-of-search-popup" value="Прочие документы">Прочие документы</option>
    <option class="work-width-the-file__item-select-for-sorting-element-of-search-popup" value="Проектно-техническая документация">Проектно-техническая документация</option>
    <option class="work-width-the-file__item-select-for-sorting-element-of-search-popup" value="Акты контрольного обслудования">Акты контрольного обслудования</option>
  </select>
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
