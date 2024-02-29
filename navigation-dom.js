"use strict";

createHeader();

const fileNameOfHTML = ["Home", "Profile", "MainPage", "Gratitude"];

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

async function createHeaderElements() {
  return new Promise((resolve, reject) => {
    try {
      const div_topBar = document.createElement("div");
      const div_container = document.createElement("div");
      const div_barTitle = document.createElement("div");
      const nav_navigation = document.createElement("nav");
      const ulElem = document.createElement("ul");
      console.log("1.");
      resolve({
        div_topBar,
        div_container,
        div_barTitle,
        nav_navigation,
        ulElem,
      });
    } catch (error) {
      reject(error);
    }
  });
}

async function createListElements(objOfElems) {
  return new Promise((resolve, reject) => {
    try {
      for (const fileName of fileNameOfHTML) {
        const liElem = document.createElement("li");
        const aElem = document.createElement("a");
        aElem.href = `${fileName}.html`;
        aElem.innerText = fileName;
        liElem.appendChild(aElem);
        objOfElems.ulElem.appendChild(liElem);
        console.log(aElem.href);
        console.log("2.");
      }
      resolve(objOfElems);
    } catch (error) {
      reject(error);
    }
  });
}

async function appendListElements(objOfElems) {
  return new Promise((resolve, reject) => {
    try {
      objOfElems.div_container.appendChild(objOfElems.div_barTitle);
      objOfElems.nav_navigation.appendChild(objOfElems.ulElem);
      objOfElems.div_container.appendChild(objOfElems.nav_navigation);
      objOfElems.div_topBar.appendChild(objOfElems.div_container);
      document.body.appendChild(objOfElems.div_topBar);
      console.log("3.");
      resolve(objOfElems);
    } catch (error) {
      reject(error);
    }
  });
}

async function addClassName(objOfElems) {
  return new Promise((resolve, reject) => {
    try {
      objOfElems.div_topBar.className = "top-bar";
      objOfElems.div_container.className = "container";
      objOfElems.div_barTitle.className = "bar-title";
      objOfElems.nav_navigation.className = "navigation";
      console.log("4.");
      resolve(objOfElems);
    } catch (error) {
      reject(error);
    }
  });
}

async function addInnerText(objOfElems) {
  return new Promise((resolve, reject) => {
    try {
      objOfElems.div_barTitle.innerText = "CC × DIG × TORA";
      console.log("5.");
      resolve(objOfElems);
    } catch (error) {
      reject(error);
    }
  });
}
