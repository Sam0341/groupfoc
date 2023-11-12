<script>
  function toggleResume() {
    var resumeSection = document.getElementById("resume");
    var articleContent = document.getElementById("article-content");
    if (resumeSection.style.display === "none") {
      resumeSection.style.display = "block";
      articleContent.innerHTML = '<p>This is Samuel Gonzalez Resume</p>';
    } else {
      resumeSection.style display = "none";
      articleContent.innerHTML = '<p>This is Samuel Gonzalez\'s first web page.</p>';
    }
  }
</script>