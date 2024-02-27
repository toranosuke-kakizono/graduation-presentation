"use strict";

createHeader();

// createElement
async function createHeader() {
  try {
    let objOfElems = await createHeaderElements();
    objOfElems = await createListElements(objOfElems);
    objOfElems = await appendListElements(objOfElems);
    objOfElems = await addClassName(objOfElems);
    objOfElems = await addInnerText(objOfElems);
  } catch (error) {
    console.error("Error", error);
  }
}

function createHeaderElements() {
  const div_topBar = document.createElement("div");
  const div_container = document.createElement("div");
  const div_barTitle = document.createElement("div");
  const nav_navigation = document.createElement("nav");
  const ulElem = document.createElement("ul");
  return { div_topBar, div_container, div_barTitle, nav_navigation, ulElem };
}

function createListElements(objOfElems) {
  const innerTextOfAElem = ["Home", "profile", "Services", "Contact"];
  for (const innerText of innerTextOfAElem) {
    const liElem = document.createElement("li");
    const aElem = document.createElement("a");
    liElem.appendChild(aElem);
    aElem.href = "#";
    aElem.innerText = innerText;
    objOfElems.ulElem.appendChild(liElem);
  }
  return objOfElems;
}

function appendListElements(objOfElems) {
  objOfElems.div_container.appendChild(objOfElems.div_barTitle);
  objOfElems.nav_navigation.appendChild(objOfElems.ulElem);
  objOfElems.div_container.appendChild(objOfElems.nav_navigation);
  objOfElems.div_topBar.appendChild(objOfElems.div_container);
  document.body.appendChild(objOfElems.div_topBar);
  return objOfElems;
}

// className
function addClassName(objOfElems) {
  objOfElems.div_topBar.className = "top-bar";
  objOfElems.div_container.className = "container";
  objOfElems.div_barTitle.className = "bar-title";
  objOfElems.nav_navigation.className = "navigation";
  return objOfElems;
}

// innerText
function addInnerText(objOfElems) {
  objOfElems.div_barTitle.innerText = "CC × DIG × TORA";
  return objOfElems;
}

// test
// const testElem = createElement("h1");

// document.getElementsByClassName("bar-title")[1].appent(testElem);
