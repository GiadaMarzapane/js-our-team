const myTeam = [
    {
        myName: 'Wayn Barnett',
        myRole:'Founder & CEO',
        myImage: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        myName: 'Angela Carol',
        myRole: 'Chief Editor',
        myImage: 'angela-caroll-chief-editor.jpg'
    },
    {
        myName: 'Walter Gordon',
        myRole: 'Office Manager',
        myImage: 'walter-gordon-office-manager.jpg'
    }, {
        myName: 'Angela Lopez',
        myRole: 'Social Media Manager',
        myImage: 'angela-lopez-social-media-manager.jpg'
    }, {
        myName: 'Scott Estrada',
        myRole: 'Developer',
        myImage: 'scott-estrada-developer.jpg'
    }, {
        myName: 'Barbara Ramos',
        myRole: 'Graphic Desginer',
        myImage: 'barbara-ramos-graphic-designer.jpg'
    }    
];

for (let index = 0; index < myTeam.length; index++) {
    // const element = myTeam[index];
    for (let key in myTeam[index]) {
        console.log(key + ': ' + myTeam[index][key]);
        const myDiv = document.createElement('div');
        const createInfoCard = createMyTeamMateInfo(key, myTeam, index, myDiv);
    }
    console.log('--------------');
}

function createMyTeamMateInfo(chiave, myArray, myIndex, div) {
    const teamMateCell = document.querySelector('main div');
    const container = document.createElement('div');

    const firstHtmlElement = document.createElement('span');
    firstHtmlElement.classList.add('font-weight-600');
    firstHtmlElement.innerHTML = chiave + ': ';
    const seconHtmlElement = document.createElement('span');
    seconHtmlElement.innerHTML = myArray[myIndex][chiave];

    container.append(firstHtmlElement, seconHtmlElement);
    /*--------------------------------------------------*/
    div.append(container);
    teamMateCell.append(container);
    
    return teamMateCell;
}