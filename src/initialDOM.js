export const DOM_CONTENT = () => {
    const content = document.getElementById("content");

    const createHeader = (() => {
        const header = document.createElement('div');
        header.id = "header";
        header.innerHTML = `
        <img
        src="/dist/images/checklist-icon-checklist-icon-png-list-icon-7.png"
        alt="checklist image"
        />
        To Do List 
      `;
        content.appendChild(header);
    })();


    const createContent = (() => {
        const mainContent = document.createElement('div');
        mainContent.setAttribute = ('id', 'main_content');
        mainContent.innerHTML =   `      
        <div id="sidebar">
        <button class="btn" id="inbox">Inbox</button></br>
        <button class="btn" id="today">Today</button></br>
        <button class="btn" id="week">This Week</button></br>
        <div id="project">
          Projects</br>
          <button class="btn" id="add">Add Project</button>
        </div>
      </div>
      `;
      content.appendChild(mainContent);
    })();

    const createFooter = (() => {
      const footer = document.createElement('div');
      footer.setAttribute('id', 'footer');
      footer.innerHTML = ` Copyright © 2021 tpagela
      <img src="/dist/images/GitHub-Mark-64px.png" alt="github logo" id = "logo"/>
      `;
      content.appendChild(footer);
    })();

}