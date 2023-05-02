const records = {
    users: null,
    currentUserData: null
};


function hideLoginPage(){
    document.getElementById('loginPage').style.display = 'none'
}
function showUserInfo() {
    const displayWrapper = document.getElementById('userInfo');
    displayWrapper.style.display = 'block';
    displayWrapper.innerHTML += `
    <h2>Name:</h2>
        <h4>${records.currentUserData.name}</h4>
        <h2>Date of Birth:</h2>
        <h4>${records.currentUserData.dob}</h4>
        <h2>Designation</h2>
        <h4>${records.currentUserData.designation}</h4>
    `;
}
function continueHandler() {
    const username = document.getElementById('username').value;
    if(records.users.hasOwnProperty(username)){
        records.currentUserData = records.users[username];
        hideLoginPage();
        showUserInfo();
    }
    

}
window.onload = () => {
    console.log('aa')
    document.getElementById('')
    import('./src/data/user-data.json',{
    assert: {
        type: 'json'
    }}
    ).then((res) => {
            
            records.users = res.default;
            console.log(records)
        }
        )
};