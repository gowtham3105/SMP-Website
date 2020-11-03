index = () => {
  fetch("https://test-smp-server.herokuapp.com/team")
    .then((response) => {
      return response.json();
    })
    .then((item) => {
      item.map((item, i) => {
        document.getElementById("teamDetails").innerHTML +=
          `
                <div class="card img-fluid index-card"style='background-image: url("https://drive.google.com/uc?export=view&id=` +
          item.photoUrl +
          `");' >
							
							<div class="card-img-overlay info">

								<h4 class="card-title">` +
          item.name +
          `</h4>
								<h4 class="card-title">` +
          item.position +
          `</h4>
								<h4 class="card-title">Phone: ` +
          item.phone +
          ` </h4>
								<h4 class="card-title">Email: ` +
          item.email +
          `</h4>

							</div>
						</div>`;
      });
    });
};
index();
