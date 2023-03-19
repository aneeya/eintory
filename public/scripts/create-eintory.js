import { get } from "./common/getElement.js"
import { previewCheekItem, previewItems } from "./controll/eintory.combine.js"

(function() {
  const $cheekcategory = get('#category-cheek');
  const $othercategories = get('#create-eintory-category2');

  function selectCheek(e) {
    if(e.target.tagName !== 'INPUT') return

    const imgsrc = `/assets/source/${e.target.value}.svg`
    previewCheekItem(imgsrc)
  }

  function selectItems(e) {
    if(e.target.tagName !== 'INPUT') return

    previewItems(e.target)
  }

  $cheekcategory.addEventListener('click', selectCheek);
  $othercategories.addEventListener('click', selectItems)
})()