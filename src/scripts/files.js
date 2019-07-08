
let footMenu = [
    {title: 'Call Us',      url: '#'},
    {title: 'Tell Us',      url: '#'},
    {title: 'Monitor ',     url: '#'},
    {title: 'Delivery',     url: '#'},
    {title: 'Complain',     url: '#'},
    {title: 'Celeberate',   url: '#'},
    {title: 'Announcement', url: '#'},
    {title: 'Affiliates',   url: '#'}
];

// let footMenuArray = document.getElementById('foot');
// footMenuArray.innerHTML = footMenuArrayObjects();
function footMenuArrayObjects() {
    for (let i = 0; i < footMenu.length; i++) {
        const result = footMenu[i];
        // console.log(result.title);
         return result.title;
    }
    console .log('I made it');
    return result.title;
    // return result;
}



export default 'file.js';