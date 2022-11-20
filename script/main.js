(function () {
  const width = window.screen.width;

  const menu = document.querySelector("#container-menu");

  const criaItens = (textoLink, classeIcone) => {
    let li = document.createElement("li");
    let span = document.createElement("span");
    let i = document.createElement("i");
    let p = document.createElement("p");
    let a = document.createElement("a");

    a.href = "#";
    a.textContent = `${textoLink}`;
    p.appendChild(a);
    i.classList.add("uil");
    i.classList.add(`${classeIcone}`);
    span.appendChild(i);
    span.appendChild(p);
    li.appendChild(span);

    li.classList.add("itemLn_menu");
    span.classList.add("containerLn_menu");
    i.classList.add("iconLn_menu");
    p.classList.add("textoLn_menu");
    a.classList.add("linkLn_menu");

    return li;
  };

  const itensMenuAdd = (textoLink, classeIcone) => {
    let span = document.createElement("span");
    let i = document.createElement("i");
    let p = document.createElement("p");
    let a = document.createElement("a");

    a.href = "#";
    a.textContent = `${textoLink}`;
    p.appendChild(a);
    i.classList.add("uil");
    i.classList.add(`${classeIcone}`);
    span.appendChild(i);
    span.appendChild(p);

    span.classList.add("container_menu");
    i.classList.add("icon_menu");
    p.classList.add("texto_menu");
    a.classList.add("link_menu");

    return span;
  };

  const ul = document.createElement("ul");
  ul.classList.add("content_menu");

  if (width < 426) {
    // mobile

    // ---------- criação itens ----------

    let li_1 = criaItens("início", "uil-estate");
    let li_2 = criaItens("continuar", "uil-play");
    let li_3 = criaItens("filmes", "uil-clapper-board");
    let li_4 = criaItens("séries", "uil-video");
    let li_5 = criaItens("configurações", "uil-setting");

    // ---------- integração ----------

    ul.appendChild(li_1);
    ul.appendChild(li_2);
    ul.appendChild(li_3);
    ul.appendChild(li_4);
    ul.appendChild(li_5);

    menu.appendChild(ul);

    // ---------- ABERTURA MENU <= 425 ----------

    if (width <= 425) {
      $("#menu-btn").click(function () {
        $("#container-menu").slideToggle();
        $("#menuIcon-btn").toggleClass("open_menuBtn");
      });
    }
  } else if (width > 425 && width < 1024) {
    // tablet

    document.querySelector("#closePopup-btn").classList.remove("none");

    $("#menu-btn").click(function () {
      $("#container-menu").fadeIn("fast", function () {});
      $("#img-logo").css("transform", "translateX(-274.8375px)");
      $("#menu-btn").css("opacity", "0");
    });
    $("#closePopup-btn").click(function () {
      $("#container-menu").fadeOut("fast", function () {});
      $("#img-logo").css("transform", "translateX(0)");
      $("#menu-btn").css("opacity", "100");
    });

    // ---------- criação itens ----------

    let li_1 = criaItens("início", "uil-estate");
    let li_2 = criaItens("continuar", "uil-play");
    let li_3 = criaItens("filmes", "uil-clapper-board");
    let li_4 = criaItens("séries", "uil-video");
    let li_5 = criaItens("configurações", "uil-setting");

    // ---------- integração ----------

    ul.appendChild(li_1);
    ul.appendChild(li_2);
    ul.appendChild(li_3);
    ul.appendChild(li_4);
    ul.appendChild(li_5);

    menu.appendChild(ul);
  } else if (width >= 1024) {
    // pc

    const ul = document.createElement("ul");
    const itensMenu = document.querySelector("#itensMenu-pc");

    itensMenu.classList.remove("none");
    $("#menu-btn").addClass("none");

    // ---------- criação itens ----------

    let li_1 = criaItens("perfil", "uil-user-circle");
    let li_2 = criaItens("segurança", "uil-padlock");
    let li_3 = criaItens("privacidade", "uil-keyhole-circle");
    let li_4 = criaItens("sair", "uil-sign-in-alt");

    // ---------- integração ----------

    ul.appendChild(li_1);
    ul.appendChild(li_2);
    ul.appendChild(li_3);
    ul.appendChild(li_4);

    menu.appendChild(ul);

    // ---------- add menu ----------

    let menu1 = itensMenuAdd("continuar", "uil-play");
    let menu2 = itensMenuAdd("filmes", "uil-clapper-board");
    let menu3 = itensMenuAdd("séries", "uil-video");

    itensMenu.appendChild(menu1);
    itensMenu.appendChild(menu2);
    itensMenu.appendChild(menu3);
  }
})();
