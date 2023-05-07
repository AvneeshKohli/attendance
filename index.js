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
    <div class="info-wrapper">
        <h3>Name:</h3>
        <h3>${records.currentUserData.name}</h3>
        <h3>Basic Info</h3>
        <h3>${records.currentUserData.basicInfo}</h3>
        <h3>Date of Birth:</h3>
        <h3>${records.currentUserData.dob}</h3>
        <h3>Standard:</h3>
        <h3>${records.currentUserData.class}</h3>
        <h3>Height:</h3>
        <h3>${records.currentUserData.height}</h3>
        <h3>Weight:</h3>
        <h3>${records.currentUserData.weight}</h3>
        <h3>Temperature:</h3>
        <h3>${records.currentUserData.temperature}</h3>
    </div>
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