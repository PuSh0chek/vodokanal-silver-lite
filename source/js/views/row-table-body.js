export const getHtmlTableBody = (registrationNumber, numberSubscriptionCasing, typeDocument, comment, numberAgreement, naming) => `<tr class="work-with-the-file__table-row">
<td class="work-with-the-file__table-element">${registrationNumber}</td>
<td class="work-with-the-file__table-element">${numberSubscriptionCasing}</td>
<td class="work-with-the-file__table-element">${typeDocument}</td>
<td class="work-with-the-file__table-element">${comment}</td>
<td class="work-with-the-file__table-element">${numberAgreement}</td>
<td class="work-with-the-file__table-element">${naming}</td>
</tr>`;
