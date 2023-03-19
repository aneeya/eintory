import { createImgElement } from "../common/createElement.js";
import { get } from "../common/getElement.js";


export function previewCheekItem(imgsrc) {
  const $previewImg = get('#preview-cheek')
  $previewImg.setAttribute('src', imgsrc)
}

export function previewItems(target) {
  const $previewImg = get('#create-eintory-preview')
  const $img = target.previousElementSibling

  const imgattribute = {
    imgsrc: $img.src,
    imgName: $img.alt,
    className: 'preview-items',
    itemName: `preview-${target.value}`
  }
  
  const $itemImg = createImgElement(imgattribute)
  $previewImg.appendChild($itemImg)
}