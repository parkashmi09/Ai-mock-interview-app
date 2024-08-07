const data = [
    {
        currency: "UK100Cash",
        up: 42424,
        down: 2525
    },
    {
        currency: "COPPER",
        up: 32876,
        down: 4321
    },
    {
        currency: "ADAUSD",
        up: 24663,
        down: 1276
    },
    {
        currency: "US500",
        up: 42424,
        down: 2525
    },
    {
        currency: "GBP",
        up: 32876,
        down: 4321
    },
    {
        currency: "EUROGBP",
        up: 24663,
        down: 1276
    },
    {
        currency: "GBPJPY",
        up: 42424,
        down: 2525
    },
    {
        currency: "US100",
        up: 32876,
        down: 4321
    },
   {
        currency: "UK100Cash",
        up: 42424,
        down: 2525
    },
    {
        currency: "COPPER",
        up: 32876,
        down: 4321
    },
    {
        currency: "ADAUSD",
        up: 24663,
        down: 1276
    },
    {
        currency: "US500",
        up: 42424,
        down: 2525
    },
    {
        currency: "GBP",
        up: 32876,
        down: 4321
    },
    {
        currency: "EUROGBP",
        up: 24663,
        down: 1276
    },
    {
        currency: "GBPJPY",
        up: 42424,
        down: 2525
    },
    {
        currency: "US100",
        up: 32876,
        down: 4321
    },
];


const forexData=[
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
]
const stocks=[
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
]
const cypto=[
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
]
const indicies=[
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
]
const crypto=[
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
    {
        name:'AUDCAD'
    },
]

//data table using jquery take refrence from here
$(document).ready(function () {
    var positionTableData = [
        {
            id: 11,
            time: '2024-06-15 10:30',
            symbol: 'BRENT',
            order: 'Buy',
            lot: 0.001,
            price: 222.91,
            partial: '',
            sl: '',
            tp: '',
            swap: 0,
            ltp: '1.3850',
            profit: ''
        },
        {
            id: 12,
            time: '2024-06-15 11:15',
            symbol: 'XAUUSD',
            order: 'Sell',
            lot: 0.001,
            price: 222.91,
            partial: '',
            sl: '',
            tp: '',
            swap: 0,
            ltp: '1.3850',
            profit: '-$123.45'
        },
        {
            id: 13,
            time: '2024-06-15 12:00',
            symbol: 'EURUSD',
            order: 'Buy',
            lot: 0.001,
            price: 222.91,
            partial: '',
            sl: '',
            tp: '',
            swap: 0,
            ltp: '1.0778',
            profit: ''
        },
        {
            id: 14,
            time: '2024-06-15 13:45',
            symbol: 'AAPL',
            order: 'Buy',
            lot: 0.001,
            price: 222.91,
            partial: '',
            sl: '',
            tp: '',
            swap: 0,
            ltp: '1.3850',
            profit: '+$456.78'
        },
        {
            id: 15,
            time: '2024-06-15 14:30',
            symbol: 'BTCUSD',
            order: 'Sell',
            lot: 0.001,
            price: 222.91,
            partial: '',
            sl: '',
            tp: '',
            swap: 0,
            ltp: '1.3850',
            profit: ''
        },
        {
            id: 16,
            time: '2024-06-15 15:00',
            symbol: 'GOOGL',
            order: 'Buy',
            lot: 0.001,
            price: 222.91,
            partial: '',
            sl: '',
            tp: '',
            swap: 0,
            ltp: '1.3850',
            profit: '+$789.01'
        },
        {
            id: 17,
            time: '2024-06-15 15:45',
            symbol: 'ETHUSD',
            order: 'Sell',
            lot: 0.001,
            price: 222.91,
            partial: '',
            sl: '',
            tp: '',
            swap: 0,
            ltp: '1750.00',
            profit: '-$234.56'
        },
        {
            id: 18,
            time: '2024-06-15 16:30',
            symbol: 'NFLX',
            order: 'Buy',
            lot: 0.001,
            price: 222.91,
            partial: '',
            sl: '',
            tp: '',
            swap: 0,
            ltp: '1.3850',
            profit: '+$567.89'
        },
        {
            id: 19,
            time: '2024-06-15 17:15',
            symbol: 'GBPUSD',
            order: 'Sell',
            lot: 0.001,
            price: 222.91,
            partial: '',
            sl: '',
            tp: '',
            swap: 0,
            ltp: '1.3850',
            profit: ''
        },
        {
            id: 20,
            time: '2024-06-15 18:00',
            symbol: 'MSFT',
            order: 'Buy',
            lot: 0.001,
            price: 222.91,
            partial: '',
            sl: '',
            tp: '',
            swap: 0,
            ltp: '1.3850',
            profit: '+$345.67'
        }
    ];

    // Initialize DataTable
    var table = $('#positionTable').DataTable({
        data: positionTableData,
        columns: [
            { data: 'id' },
            { data: 'time' },
            { data: 'symbol' },
            { 
                data: 'order',
                render: function (data, type, row) {
                    const orderBtnClass = data === 'Buy' ? 'buy-btn' : 'sell-btn';
                    return `<span class="${orderBtnClass}">${data}</span>`;
                }
            },
            { data: 'lot' },
            { data: 'price' },
            { data: 'partial' },
            { data: 'sl' },
            { data: 'tp' },
            { data: 'swap' },
            { data: 'ltp' },
            {
                data: 'profit',
                render: function (data, type, row) {
                    if (data.startsWith('+')) {
                        return '<span class="profit-positive">' + data + '</span>';
                    } else if (data.startsWith('-')) {
                        return '<span class="profit-negative">' + data + '</span>';
                    } else {
                        return data;
                    }
                }
            }
        ],
        "order": [[0, "desc"]], // Order by ID descending
        "paging": false,
        "lengthChange": false,
        "searching": false,
        "info": false,
        "autoWidth": false,
        "ordering": false // Disable ordering (remove the default sorting arrows)
    });
});
  
document.addEventListener("DOMContentLoaded", function () {
    renderFavorites(data);
});


 // Function to render favorites
 function renderFavorites(data) {
    const favoritesContent = document.getElementById("favorites-content");

    // Clear previous content
    favoritesContent.innerHTML = "";

    // Render each item in data
    data.forEach((item, index) => {
        const currencyName = item.currency;
        const upValue = item.up;
        const downValue = item.down;

        // Create table structure
        const currencyTable = document.createElement("table");
        currencyTable.classList.add("currency-table");

        // Create table row
        const dataRow = currencyTable.insertRow();

        // Currency name cell
        const nameDataCell = dataRow.insertCell();
        nameDataCell.innerHTML = `<div class="text-primary">${currencyName}</div><div>81%</div>`;
        nameDataCell.classList.add("name-cell");

        // Up and Down values cell
        const valuesDataCell = dataRow.insertCell();
        const upDownWrapper = document.createElement("div");
        upDownWrapper.innerHTML = `<div class="ml-5 text-primary">${upValue}</div><div>L:${downValue}</div>`;
        valuesDataCell.appendChild(upDownWrapper);
        valuesDataCell.classList.add("values-cell");

        // Additional cell with the same content
        const additionalDataCell = dataRow.insertCell();
        additionalDataCell.innerHTML = `<div class="ml-5 text-danger">${upValue}</div><div>L:${downValue}</div>`;
        additionalDataCell.classList.add("values-cell");

        // Add bottom border to data row
        dataRow.classList.add("currency-table-row");

        // Create button container
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");

        // Create buttons with different colors and icons
        const buttons = [
            { color: "white", icon: "🗑️", action: () => deleteRow(index) },
            { color: "blue", icon: "B" },
            { color: "red", icon: "S" },
            { color: "purple", icon: "📊" },
            { color: "green", icon: "..." }
        ];

        buttons.forEach(({ color, icon, action }) => {
            const button = document.createElement("button");
            button.classList.add(`button-${color}`);
            button.innerHTML = icon;
            if (action) button.onclick = action;
            buttonContainer.appendChild(button);
        });

        // Append button container to the data row
        dataRow.appendChild(buttonContainer);

        // Overlay for hiding text behind buttons
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        overlay.innerHTML = `<p>${currencyName}</p>`;
        dataRow.appendChild(overlay);

        // Append table to favorites content
        favoritesContent.appendChild(currencyTable);
    });
}

// Sample function to delete row (mock implementation)
function deleteRow(index) {
    console.log(`Deleting row at index ${index}`);
}


// Sample function to delete row (mock implementation)
function deleteRow(index) {
    console.log(`Deleting row at index ${index}`);
}
function renderFavoritesSmall(data) {
    const favoritesContent = document.getElementById("favorites-content-small");

   // Clear previous content
   favoritesContent.innerHTML = "";

   // Render each item in data
   data.forEach((item, index) => {
       const currencyName = item.currency;
       const upValue = item.up;
       const downValue = item.down;

       // Create table structure
       const currencyTable = document.createElement("table");
       currencyTable.classList.add("currency-table");

       // Create table row
       const dataRow = currencyTable.insertRow();

       // Currency name cell
       const nameDataCell = dataRow.insertCell();
       nameDataCell.innerHTML = `<div class="text-primary">${currencyName}</div><div>81%</div>`;
       nameDataCell.classList.add("name-cell");

       // Up and Down values cell
       const valuesDataCell = dataRow.insertCell();
       const upDownWrapper = document.createElement("div");
       upDownWrapper.innerHTML = `<div class="ml-5 text-primary">${upValue}</div><div>L:${downValue}</div>`;
       valuesDataCell.appendChild(upDownWrapper);
       valuesDataCell.classList.add("values-cell");

       // Additional cell with the same content
       const additionalDataCell = dataRow.insertCell();
       additionalDataCell.innerHTML = `<div class="ml-5 text-danger">${upValue}</div><div>L:${downValue}</div>`;
       additionalDataCell.classList.add("values-cell");

       // Add bottom border to data row
       dataRow.classList.add("currency-table-row");

       // Create button container
       const buttonContainer = document.createElement("div");
       buttonContainer.classList.add("button-container");

       // Create buttons with different colors and icons
       const buttons = [
           { color: "white", icon: "🗑️", action: () => deleteRow(index) },
           { color: "blue", icon: "B" },
           { color: "red", icon: "S" },
           { color: "purple", icon: "📊" },
           { color: "green", icon: "..." }
       ];

       buttons.forEach(({ color, icon, action }) => {
           const button = document.createElement("button");
           button.classList.add(`button-${color}`);
           button.innerHTML = icon;
           if (action) button.onclick = action;
           buttonContainer.appendChild(button);
       });

       // Append button container to the data row
       dataRow.appendChild(buttonContainer);

       // Overlay for hiding text behind buttons
       const overlay = document.createElement("div");
       overlay.classList.add("overlay");
       overlay.innerHTML = `<p>${currencyName}</p>`;
       dataRow.appendChild(overlay);

       // Append table to favorites content
       favoritesContent.appendChild(currencyTable);
   });
}

function deleteRow(index) {
    if (confirm("Are you sure you want to delete this row?")) {
        data.splice(index, 1); // Remove the item from data array
        renderFavorites(data); // Re-render the table
    }
}

document.addEventListener("DOMContentLoaded", function () {
    renderFavorites(data);
});


function showTab(tabId) {

    console.log("tab id ", tabId)
    // Hide all tab contents
    var tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function(tabContent) {
        tabContent.classList.remove('active');
    });

    // Remove active class from all tab buttons
    var tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(function(tabButton) {
        tabButton.classList.remove('active');
    });

    // Show the selected tab and add active class to the button
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
}
function showTabSmall(tabId) {
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content-small');
    tabContents.forEach(tabContent => {
        tabContent.classList.remove('active');
    });

    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button-small');
    tabButtons.forEach(tabButton => {
        tabButton.classList.remove('active');
    });

    // Show the selected tab content
    const selectedTabContent = document.getElementById(tabId);
    selectedTabContent.classList.add('active');

    // Add active class to the clicked tab button
    const clickedTabButton = document.querySelector(`button[onclick="showTabSmall('${tabId}')"]`);
    clickedTabButton.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const toggleSidebarItem = document.getElementById('toggle-sidebar-content');
    const sidebarContentContainer = document.querySelector('.sidebar-content-container');

    toggleSidebarItem.addEventListener('click', function(e) {
        e.preventDefault();
        sidebarContentContainer.classList.toggle('show');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    renderFavorites(data);
    renderForexCards(forexData);
    renderFavoritesSmall(data)
});
document.addEventListener("DOMContentLoaded", function () {
    renderFavorites(data);
    renderForexCards(forexData);
});

function renderForexCards(forexData) {
    const forexContainer = document.getElementById("forex-container-small");

    // Clear previous content
    forexContainer.innerHTML = "";

    forexData.forEach(item => {
        const forexCard = document.createElement("div");
        forexCard.classList.add("forex-card", "px-3", "d-flex", "justify-content-between", "align-items-center");

        const forexInfo = document.createElement("div");
        forexInfo.classList.add("d-flex", "mt-2", "gap-2");

        const currencyName = document.createElement("p");
        currencyName.textContent = item.name;
        forexInfo.appendChild(currencyName);

        const smallText = document.createElement("small");
        smallText.textContent = "Forex";
        smallText.classList.add("text-secondary", "small");
        forexInfo.appendChild(smallText);

        forexCard.appendChild(forexInfo);

        const addButton = document.createElement("button");
        addButton.setAttribute("type", "button");
        addButton.classList.add("btn", "btn-success");

        const plusIcon = document.createElement("i");
        plusIcon.classList.add("bi", "bi-plus");
        addButton.appendChild(plusIcon);

        forexCard.appendChild(addButton);

        forexContainer.appendChild(forexCard);
    });
}




document.addEventListener('DOMContentLoaded', function () {
    const sidebarItems = document.querySelectorAll('.sidebar-item a');

    sidebarItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);

            if (targetContent) {
                const allContent = document.querySelectorAll('.main-content > div');
                allContent.forEach(content => {
                    content.style.display = 'none';
                });

                targetContent.style.display = 'block';
            }
        });
    });
});




  document.querySelectorAll('.unique-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.unique-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.unique-tab-content').forEach(content => content.classList.remove('active'));

        this.classList.add('active');
        document.getElementById(this.getAttribute('data-tab')).classList.add('active');
    });
});

document.querySelectorAll('.unique-accordion-header').forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const arrow = this.querySelector('.unique-arrow');

        if (content.classList.contains('active')) {
            content.classList.remove('active');
            this.classList.remove('active');
        } else {
            document.querySelectorAll('.unique-accordion-content').forEach(item => item.classList.remove('active'));
            document.querySelectorAll('.unique-accordion-header').forEach(item => item.classList.remove('active'));
            
            content.classList.add('active');
            this.classList.add('active');
        }
    });
});

document.getElementById('copyButton').addEventListener('click', function() {
    const copyInput = document.getElementById('copyInput');
    copyInput.select();
    copyInput.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    alert('Copied the text: ' + copyInput.value);
});

document.getElementById('fileInput').addEventListener('change', function() {
    const fileInput = document.getElementById('fileInput');
    const fileName = document.querySelector('.file-name');
    if (fileInput.files.length > 0) {
        fileName.textContent = 'Selected file: ' + fileInput.files[0].name;
    } else {
        fileName.textContent = '';
    }
}); 

const uploaderBox = document.getElementById('uploaderBox');
const fileInput = document.getElementById('fileInput');

uploaderBox.addEventListener('click', () => {
    fileInput.click();
});

uploaderBox.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploaderBox.classList.add('border-primary');
});

uploaderBox.addEventListener('dragleave', () => {
    uploaderBox.classList.remove('border-primary');
});

uploaderBox.addEventListener('drop', (e) => {
    e.preventDefault();
    uploaderBox.classList.remove('border-primary');

    const files = e.dataTransfer.files;
    if (files.length > 0) {
        handleFiles(files);
    }
});

fileInput.addEventListener('change', (e) => {
    const files = e.target.files;
    handleFiles(files);
});

function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
        console.log(files[i].name);
        // Handle file upload logic here
    }
}


function switchTab(tabName) {
    // Hide all tab contents
    const tabContents = document.getElementsByClassName('custom-tab-content');
    for (let content of tabContents) {
      content.style.display = 'none';
    }
  
    // Deactivate all tabs
    const tabs = document.getElementsByClassName('custom-tab-button');
    for (let tab of tabs) {
      tab.classList.remove('active');
    }
  
    // Show the selected tab content
    document.getElementById(`custom-${tabName}-content`).style.display = 'block';
  
    // Activate the selected tab
    document.getElementById(`custom-tab-${tabName}`).classList.add('active');
  }
  
  function switchMamTab(tabName) {
    // Hide all tab contents
    const tabContents = document.getElementsByClassName('mam-tab-content');
    for (let content of tabContents) {
        content.style.display = 'none';
    }

    // Deactivate all tabs
    const tabs = document.getElementsByClassName('mam-tab-button');
    for (let tab of tabs) {
        tab.classList.remove('active');
    }

    // Show the selected tab content
    document.getElementById(`mam-${tabName}-content`).style.display = 'block';

    // Activate the selected tab
    document.getElementById(`mam-tab-${tabName}`).classList.add('active');
}

// Initialize the first tab as active
document.addEventListener('DOMContentLoaded', function () {
    switchMamTab('user');
});


function switchPammTab(tabName) {
    // Hide all PAMM tab contents
    const pammTabContents = document.getElementsByClassName('pamm-tab-content');
    for (let content of pammTabContents) {
        content.style.display = 'none';
    }

    // Deactivate all PAMM tabs
    const pammTabs = document.getElementsByClassName('pamm-tab-button');
    for (let tab of pammTabs) {
        tab.classList.remove('active');
    }

    // Show the selected PAMM tab content
    document.getElementById(`pamm-${tabName}-content`).style.display = 'block';

    // Activate the selected PAMM tab
    document.getElementById(`pamm-tab-${tabName}`).classList.add('active');
}

// Initialize the first PAMM tab as active
document.addEventListener('DOMContentLoaded', function () {
    switchPammTab('user');
});

function switchTradingTab(tabName) {
    // Hide all tab contents
    const tabContents = document.getElementsByClassName('trading-tab-content');
    for (let content of tabContents) {
        content.style.display = 'none';
    }

    // Deactivate all tabs
    const tabs = document.getElementsByClassName('trading-tab-button');
    for (let tab of tabs) {
        tab.classList.remove('active');
    }

    // Show the selected tab content
    document.getElementById(`trading-${tabName}-content`).style.display = 'block';

    // Activate the selected tab
    document.getElementById(`trading-tab-${tabName}`).classList.add('active');
}

// Initialize the first tab as active
document.addEventListener('DOMContentLoaded', function () {
    switchTradingTab('copy'); // Set the default tab to 'Copy Trading' on page load
});



  