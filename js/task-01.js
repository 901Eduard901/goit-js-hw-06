const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesEl.length);

categoriesEl.forEach((list) => {
    console.log('Category:', list.firstElementChild.textContent);
    console.log('Elements:', list.lastElementChild.children.length);
});