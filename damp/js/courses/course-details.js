geturlparm = () => {
  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);

  const code = urlParams.get("code");
  return code;
};

getcoursedetails = () => {
  var courseCode = geturlparm();

  fetch(
    "https://test-smp-server.herokuapp.com/CourseDetails?code=" + courseCode
  )
    .then((response) => {
      return response.json();
    })
    .then((item) => {
      console.log(item);
      item = item[0];
      document.getElementById("courseName").innerHTML =
        item.courseCode + " " + item.courseName;
      document.getElementById("instructor").innerHTML = item.instructor;
      document.getElementById("semester").innerHTML = item.semester;
      item.summary.map((element, i) => {
        document.getElementById("summary").innerHTML +=
          `
        <li>` +
          element +
          ` </li>
          `;
      });
      document.getElementById("preRequisites").innerHTML = item.preRequisites;
      document.getElementById("need").innerHTML = item.need;
      item.references.map((element, i) => {
        document.getElementById("references").innerHTML +=
          `
        <li>` +
          element +
          ` </li>
          `;
      });
    });
};

getcoursedetails();
