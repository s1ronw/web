function removeTag(button) {
    const tag = button.parentElement;
    tag.remove();
  }

  function clearTags() {
    const tagContainer = document.getElementById('tagContainer');
    const tags = tagContainer.querySelectorAll('.tag');
    tags.forEach(tag => tag.remove());
  }