export const getHtmlRowTalbeOfDocumentArchive = (nameDocument, typeDocument, weight, author, dateCreated) => `<tr class="work-width-the-file-popup-create-element__row-doc-element-popup">
  <td>${nameDocument}</td>
  <td>${typeDocument}</td>
  <td>${weight}</td>
  <td>${author}</td>
  <td>${dateCreated}</td>
</tr>`;
