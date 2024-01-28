const postList = document.querySelector(".posts");

export const setupPosts = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => {
      const post = doc.data();
      const li = `
      <div class="${post.clases}">
      <span class="descuento">30%</span>
        <div class="baner-tex" style="--clr:${post.colora}">
          <div class="infos" >
            <span class="alertas" style="--clr:${post.colora}"><i class="fa ${post.iconosa}"></i> ${post.motivo} <i class="fa ${post.iconosa}"></i></span>
          </div>
          <h1>${post.title}</h1>
          <p class="sinopsis">${post.content}</p>
      </div>
      </div>
    `;
    html += li;
    });
    postList.innerHTML = html;
  } else {
    postList.innerHTML = '<h4 class="text-white">Login to See Posts</h4>';
  }
};