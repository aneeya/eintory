const create = (el) => document.createElement(el)

export function createImgElement({imgsrc, imgName, className, itemName}) {
  const newImg = create('img')
  newImg.setAttribute('src', imgsrc)
  newImg.setAttribute('alt', imgName)
  newImg.setAttribute('class', className)
  newImg.setAttribute('id', itemName)

  return newImg
}