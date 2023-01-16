const myTeam = [
    {
        myName: 'Wayn Barnett',
        myRole: 'Founder & CEO',
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
    const container = document.querySelector('main div');
    container.innerHTML += `<div class="my-little-container">
                                <div>                                    
                                    <h2>
                                    ${myTeam[index].myName}
                                    </h2>
                                </div>
                                <img src="img/${myTeam[index].myImage}">                                
                                    <div class="different-font">
                                        <span class="font-weight-600">
                                        Ruolo:
                                        </span>
                                        <span>
                                        ${myTeam[index].myRole}
                                        </span>
                                    </div>
                            </div>`; 
}