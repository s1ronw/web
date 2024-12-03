function removeTag(button) {
  const tag = button.parentElement;
  tag.remove();
  checkTags();
}

function clearTags() {
  const tagContainer = document.getElementById('tagContainer');
  const tags = tagContainer.querySelectorAll('.tag');
  tags.forEach(tag => tag.remove());
  checkTags();
}

function checkTags() {
  const tagContainer = document.getElementById('tagContainer');
  const jobListings = document.querySelector('.job-listings');

  if (tagContainer.querySelectorAll('.tag').length === 0) {
      jobListings.style.display = 'none';
  } else {
      jobListings.style.display = 'block';
  }
}