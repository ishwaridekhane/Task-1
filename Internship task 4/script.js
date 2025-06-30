// Load course info dynamically 
const params = new URLSearchParams(window.location.search);
const course = params.get('course');

const courses = {
  js: {
    title: "JavaScript Basics",
    desc: "Learn the fundamentals of JavaScript: variables, loops, functions and DOM.",
    link: "https://www.youtube.com/embed/PkZNo7MFNFg"
  },
  responsive: {
    title: "Responsive Web Design",
    desc: "Master layouts, grids and media queries to make websites mobile-friendly.",
    link: "https://www.youtube.com/embed/2IV08sP9m3U"
  },
  git: {
    title: "Git & GitHub",
    desc: "Understand commits, branches and collaboration using Git and GitHub.",
    link: "https://www.youtube.com/embed/Ez8F0nW6S-w"
  }
};

if (course && courses[course]) {
  document.getElementById("course-title").innerText = courses[course].title;
  document.getElementById("course-desc").innerText = courses[course].desc;
  document.getElementById("course-video").src = courses[course].link;
} else {
  document.getElementById("course-title").innerText = "Course Not Found";
  document.getElementById("course-desc").innerText = "Oops! Looks like this course doesn't exist.";
}
