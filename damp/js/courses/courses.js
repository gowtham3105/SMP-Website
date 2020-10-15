geturlparm = () => {
  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);

  const code = urlParams.get("branch");
  return code;
};

getcourses = () => {
  document.getElementById("cseSecond").innerHTML = "";
  document.getElementById("cseThird").innerHTML = "";
  document.getElementById("cseFourth").innerHTML = "";

  var branch = geturlparm();

    if (branch == "CSE") {
      document.getElementById("branchName").innerHTML = "Computer Science";
      document.getElementById("branchName1").innerHTML = " Computer Science";
    } else if (branch == "EE") {
      document.getElementById("branchName").innerHTML = "Electrical";
      document.getElementById("branchName1").innerHTML = " Electrical";
    } else if (branch == "MECH") {
      document.getElementById("branchName").innerHTML = "Mechanical";
      document.getElementById("branchName1").innerHTML = " Mechanical";
    }

  fetch("http://localhost:8000/Courses?sem=" + "34"+"&branch="+branch)
    .then((response) => {
      return response.json();
    })
    .then((item) => {
      console.log(item);

      item.map((item, i) => {
        document.getElementById("cseSecond").innerHTML +=
          `
                    <div class="single_course">

                <a href="course-details.html?code=` +
          item.courseCode +
          `">
                  <div class="course_content">
                    <span class="tag mb-4 d-inline-block">Semester ` +
          item.semester +
          `</span>
                    <h4 class="mb-3" style="height: 48px;">
                    ` +
          item.courseCode +
          " " +
          item.courseName +
          `
                      
                    </h4>
                    <p>
                      Credits: ` +
          item.credits +
          `
                    </p>
                    <p>
                      Name Of Instructor: ` +
          item.instructor +
          `
                    </p>
                  </div>

                </a>
              </div>`;
      });
    });

  fetch("http://localhost:8000/Courses?sem=" + "56" + "&branch=" + branch)
    .then((response) => {
      return response.json();
    })
    .then((item) => {
      console.log(item);

      item.map((item, i) => {
        document.getElementById("cseThird").innerHTML +=
          `
                    <div class="single_course">

                <a href="course-details.html?code=` +
          item.courseCode +
          `">
                  <div class="course_content">
                    <span class="tag mb-4 d-inline-block">Semester ` +
          item.semester +
          `</span>
                    <h4 class="mb-3" style="height: 48px;">
                    ` +
          item.courseCode +
          " " +
          item.courseName +
          `
                      
                    </h4>
                    <p>
                      Credits: ` +
          item.credits +
          `
                    </p>
                    <p>
                      Name Of Instructor: ` +
          item.instructor +
          `
                    </p>
                  </div>

                </a>
              </div>`;
      });
    });

  fetch("http://localhost:8000/Courses?sem=" + "78" + "&branch=" + branch)
    .then((response) => {
      return response.json();
    })
    .then((item) => {
      console.log(item);

      item.map((item, i) => {
        document.getElementById("cseFourth").innerHTML +=
          `
                    <div class="single_course">

                <a href="course-details.html?code=` +
          item.courseCode +
          `">
                  <div class="course_content">
                    <span class="tag mb-4 d-inline-block">Semester ` +
          item.semester +
          `</span>
                    <h4 class="mb-3" style="height: 48px;" >
                    ` +
          item.courseCode +
          " " +
          item.courseName +
          `
                      
                    </h4>
                    <p>
                      Credits: ` +
          item.credits +
          `
                    </p>
                    <p>
                      Name Of Instructor: ` +
          item.instructor +
          `
                    </p>
                  </div>

                </a>
              </div>`;
      });
    });
};

getcourses();
