const forumLatest =
  "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://cdn.freecodecamp.org/curriculum/forum-latest";

const allCategories = {
  299: { category: "Career Advice", className: "career" },
  409: { category: "Project Feedback", className: "feedback" },
  417: { category: "freeCodeCamp Support", className: "support" },
  421: { category: "JavaScript", className: "javascript" },
  423: { category: "HTML - CSS", className: "html-css" },
  424: { category: "Python", className: "python" },
  432: { category: "You Can Do This!", className: "motivation" },
  560: { category: "Back-End Development", className: "backend" },
};

function timeAgo(timeStamp) {
  const horaAct = new Date();
  const horaAgo = new Date(timeStamp);
  const diferenciaEnDias = (horaAct - horaAgo) / 1000 / 60 / 60 / 24;
  const diferenciaEnHoras = (horaAct - horaAgo) / 1000 / 60 / 60;
  const diferenciaEnMinutos = (horaAct - horaAgo) / 1000 / 60;
  if (diferenciaEnMinutos < 60) {
    return `${Math.floor(diferenciaEnMinutos)}m ago`;
  } else if (diferenciaEnHoras < 24) {
    return `${Math.floor(diferenciaEnHoras)}h ago`;
  }
  return `${Math.floor(diferenciaEnDias)}d ago`;
}

function viewCount(numVistas) {
  if (numVistas >= 1000) {
    const enMiles = Math.floor(numVistas / 1000); // ← esta línea faltaba
    return `${enMiles}k`;
  }
  return numVistas;
}

function forumCategory(id) {
  let category;
  let className;

  if (allCategories[id]) {
    category = allCategories[id].category;
    className = allCategories[id].className;
  } else {
    category = "General";
    className = "general";
  }

  const url = `${forumCategoryUrl}${className}/${id}`;
  return `<a href="${url}" class="category ${className}">${category}</a>`;
}

function avatars(posters, users) {
  return posters
    .map((poster) => {
      // 1. buscar el usuario cuyo id coincide con el user_id del poster
      const user = users.find((u) => u.id === poster.user_id);

      // 2. reemplazar {size} por 30 en el avatar_template
      let src = user.avatar_template.replace("{size}", "30");

      // 3. si src empieza con "/", anteponer avatarUrl
      if (src.startsWith("/")) {
        src = avatarUrl + src;
      }

      // 4. devolver el string del <img>
      return `<img src="${src}" alt="${user.name}">`;
    })
    .join("");
}

function showLatestPosts(data) {
  // 1. extraer las propiedades users y topic_list del objeto recibido
    const { users, topic_list } = data;
    // 2. dentro de topic_list está el array de topics
    const { topics } = topic_list;

    const postsContainer = document.getElementById("posts-container");

  // 3. por cada topic armamos una fila <tr>, y luego las unimos en un solo string
    postsContainer.innerHTML = topics
        .map((topic) => {
        // extraemos las propiedades que necesitamos de cada topic
        const {
            id,
            title,
            views,
            posts_count,
            slug,
            posters,
            category_id,
            bumped_at,
        } = topic;

        return `
        <tr>
            <td>
                <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>
                ${forumCategory(category_id)}
            </td>
            <td>
                <div class="avatar-container">${avatars(posters, users)}</div>
            </td>
            <td>${posts_count - 1}</td>
            <td>${viewCount(views)}</td>
            <td>${timeAgo(bumped_at)}</td>
            </tr>
        `;
    })
    .join("");
}

async function fetchData() {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
    showLatestPosts(data);
  } catch (err) {
    console.log(err);
  }
}

fetchData();
