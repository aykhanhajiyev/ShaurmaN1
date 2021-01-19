let map;
function getBranchesList(){
    const branches = [
        {
            position: new google.maps.LatLng(40.36662733,49.81770765),
            type: "shaurma",
            title: "İçərişəhər",
            address: "Yasamal rayonu H.Cavid prospekti Ev 8, Baku, Azerbaycan"
        },
        {
            position: new google.maps.LatLng(40.3752739032787, 49.8398113622537),
            type: "shaurma",
            title: "Sahil",
            address: "Nəsimi rayonu Nizami 81, Baku, Azerbaycan"
        },
        {
            position: new google.maps.LatLng(40.3747814016861, 49.8320364832672),
            type: "shaurma",
            title: "MUM",
            address: "Yasamal ray, ev 35 Azərbaycan Prospekti, Bakı 1009, Azerbaycan"
        },
        {
            position: new google.maps.LatLng(40.3796573391879, 49.8790930320365),
            type: "shaurma",
            title: "Xətai",
            address: "Xətai rayonu, Nobel prospekti, Amay ticarət Mərkəzi, Bakı, Azerbaycan"
        },
        {
            position: new google.maps.LatLng(40.3904641943087, 49.8377689854004),
            type: "shaurma",
            title: "Türkiyə səfirliyi",
            address: "Rəşid Behbudov və Abbasqulubəy Bakıxanov küçəsinin kəsişməsi, Bakı, Azerbaycan"
        },
        {
            position: new google.maps.LatLng(40.39578248, 49.8187936226839),
            type: "shaurma",
            title: "Moskva prospekti",
            address: "Moskva prospekti ev. 1058 meh., Nasimi, Baku 1000, Azerbaycan"
        },
        {
            position: new google.maps.LatLng(40.407344930687, 49.8357718661738),
            type: "shaurma",
            title: "Cıdır Düzü",
            address: "ev 146 Azadliq Ave, Baku, Azerbaycan"
        },
        {
            position: new google.maps.LatLng(40.4100263213656, 49.8138182964601),
            type: "shaurma",
            title: "Əcəmi",
            address: "Cavadxan küç. 3005-ci məhəllə, Memar Əcəmi, Bakı 1003, Azerbaycan"
        },
        {
            position: new google.maps.LatLng(40.3572921492299, 49.956804944452),
            type: "shaurma",
            title: "Zığ",
            address: "Zigh Highway, Baku, Azerbaycan"
        },
        {
            position: new google.maps.LatLng(40.4938701598963, 50.1319897923638),
            type: "shaurma",
            title: "Airport",
            address: "Zigh-Airport Hwy, Baku, Azerbaycan"
        },
    ]
    return branches
}
function initMap() {
    const successcallback = (position) => {
        //get current location
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        map = new google.maps.Map(document.getElementById("map"), {
            center: pos,
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        });
        const markerCurrentUser = new google.maps.Marker({
            position: pos,
            map: map,
            title: "Sizin hal-hazırda olduğunuz yer"
        });
        const branches = getBranchesList()
        const iconBase = "images/";
        const icons = {
            shaurma: {
                icon: iconBase + "shaurma_logo_map_icon.png",
            }
        }
        // Create markers.
        for (let i = 0; i < branches.length; i++) {
            const marker = new google.maps.Marker({
                position: branches[i].position,
                icon: icons[branches[i].type].icon,
                map: map,
                title: icons[branches[i].title]
            });
        }
    }
    const errorcallback = (error) => {
        console.log(error)
    }
    navigator.geolocation.getCurrentPosition(successcallback, errorcallback)
    setAddressList()
}

function setAddressList() {
    const branches = getBranchesList()
    for(let i=0;i<branches.length;i++) {
        createDivContent(branches[i].address)
    }

}
function createDivContent(addressName){
    let mainContent = document.getElementById("address-list")
    let colDiv = document.createElement('div');
    colDiv.classList.add('col-xl-6')
    colDiv.classList.add('col-lg-6')
    colDiv.classList.add('col-md-6')

    let menuListBox = document.createElement('div');
    menuListBox.classList.add('menu-list-box-2')

    let menuDetail = document.createElement('div')
    menuDetail.classList.add('menu-detail-2')

    let itemNameList = document.createElement('div')
    itemNameList.classList.add('iteam-name-list')

    let addressLink = document.createElement('a')
    addressLink.setAttribute('href', "#")
    addressLink.classList.add('iteam-name')

    addressLink.innerHTML = addressName

    itemNameList.appendChild(addressLink)
    menuDetail.appendChild(itemNameList)
    menuListBox.appendChild(menuDetail)
    colDiv.appendChild(menuListBox)
    mainContent.appendChild(colDiv, menuListBox)
}