const folderStructure = [
    {
        name: "Films", type: "folder", content: [
            { name: "Iron Man.avi", type: "file" },
            {
                name: "Fantasy", type: "folder", content: [
                    { name: "The Lord of the Rings.avi", type: "file" },
                    { name: "New folder 1", type: "folder", content: [] }
                ]
            }
        ]
    },
    { name: "Documents", type: "folder", content: [] }
];
    
function clearSelection() {
    document.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
}

function createFileElement(fileName) {
    const li = document.createElement('li');
    li.classList.add('file');
    li.textContent = fileName;
    li.onclick = (event) => {
        clearSelection();
        li.classList.add('selected');
        event.stopPropagation();
    };
    return li;
}

function createFolderElement(folder) {
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = folder.name;
    details.appendChild(summary);

    const ul = document.createElement('ul');
    ul.classList.add('details-list');

    if (folder.content.length) {
        folder.content.forEach(item => {
            if (item.type === "file") {
                ul.appendChild(createFileElement(item.name));
            } else {
                ul.appendChild(createFolderElement(item));
            }
        });
    } else {
        ul.innerHTML = "<li style='color:red;'>Folder is empty</li>";
    }

    details.appendChild(ul);
    return details;
}

function createFolderTree(structure, parent) {
    structure.forEach(item => {
        if (item.type === "folder") {
            parent.appendChild(createFolderElement(item));
        } else {
            parent.appendChild(createFileElement(item.name));
        }
    });
}

function addNewFolder() {
    const folderName = prompt("Напиши назву папки:");
    if (folderName) {
        folderStructure.push({ name: folderName, type: "folder", content: [] });
        refreshFileExplorer();
    }
}

function refreshFileExplorer() {
    const fileExplorer = document.getElementById('file-explorer');
    fileExplorer.innerHTML = '';
    createFolderTree(folderStructure, fileExplorer);
}

document.addEventListener('DOMContentLoaded', () => {
    refreshFileExplorer();
    document.getElementById('create-folder-btn').addEventListener('click', addNewFolder);
});