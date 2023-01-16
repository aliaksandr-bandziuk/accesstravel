const shareBtn = document.querySelector('.share-btn');
const shareBlock = document.querySelector('.buttons');

const popupShare = () => {

  const toggle = () => {
    shareBlock.classList.toggle('hidden');
  }

  const remove = () => {
    shareBlock.classList.add('hidden');
  }

  document.addEventListener('click', e => {
    const target = e.target;
    
    target === shareBtn ? toggle() : target !== shareBlock ? remove() : false;
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      remove();
    }
  })
}

popupShare();